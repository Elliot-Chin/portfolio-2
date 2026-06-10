import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Head from "next/head"
import emailjs from "@emailjs/browser"
import { ReactTyped } from "react-typed"
import { ArrowOutwardOutlined, ContentCopyOutlined, EmailOutlined } from "@mui/icons-material"

import { BackToTopButton } from "@/components/nav/BackTopTop"
import { fetchEnvVars } from "@/utils/ServerFetchFunction"
import { useCooldown } from "@/components/hooks/useCooldown"
import { useDraft } from "@/components/hooks/useDraft"
import { useCopyToClipboard } from "@/components/hooks/useCopyToClipboard"
import { MAX_MESSAGE, MIN_NAME } from "@/utils/contactConstants"
import { githubLink, linkedInLink } from "../../public/data/Links"

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test((value || "").trim())

function ContactField({
    label,
    name,
    placeholder,
    value,
    onChange,
    error,
    multiline = false,
    rows = 5,
}) {
    const sharedClassName =
        "w-full border-0 border-b border-slate-200/16 bg-transparent px-0 py-3 font-spacemono text-[1.1rem] uppercase tracking-[0.02em] text-blue-100 outline-none placeholder:text-slate-500/78 focus:border-amber-300/55"

    return (
        <label className="block">
            <div className="font-spacemono text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                {label}
            </div>
            {multiline ? (
                <textarea
                    name={name}
                    rows={rows}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`${sharedClassName} resize-none`}
                />
            ) : (
                <input
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={sharedClassName}
                    autoComplete="off"
                />
            )}
            <div className={`pt-2 font-montserrat text-sm ${error ? "text-rose-300" : "text-transparent"}`}>
                {error || "placeholder"}
            </div>
        </label>
    )
}

function ContactMetaCard({ onCopyEmail }) {
    return (
        <aside className="border border-slate-200/10 bg-slate-950/38 p-5 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
            <div className="font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                Transmission Routes
            </div>

            <div className="mt-5 space-y-4 font-spacemono text-sm text-slate-300/86">
                <div className="flex items-center justify-between gap-6">
                    <span>Primary:</span>
                    <span className="text-right text-amber-300">EmailJS</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                    <span>Direct:</span>
                    <span className="text-right text-slate-100">contact@elliotc.dev</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                    <span>Status:</span>
                    <span className="text-right text-amber-300">Secure</span>
                </div>
            </div>

            <div className="mt-6 grid gap-3">
                <button
                    type="button"
                    onClick={onCopyEmail}
                    className="home-btn home-btn-secondary w-full justify-between"
                >
                    <span className="inline-flex items-center gap-2">
                        <ContentCopyOutlined sx={{ fontSize: 16 }} />
                        Copy_Email
                    </span>
                    <ArrowOutwardOutlined sx={{ fontSize: 16 }} />
                </button>
                <a
                    href="mailto:contact@elliotc.dev"
                    className="home-btn home-btn-secondary w-full justify-between"
                >
                    <span className="inline-flex items-center gap-2">
                        <EmailOutlined sx={{ fontSize: 16 }} />
                        Open_Mail
                    </span>
                    <ArrowOutwardOutlined sx={{ fontSize: 16 }} />
                </a>
                <a href={linkedInLink} target="_blank" rel="noreferrer" className="home-btn home-btn-secondary w-full justify-between">
                    <span>LinkedIn</span>
                    <ArrowOutwardOutlined sx={{ fontSize: 16 }} />
                </a>
                <a href={githubLink} target="_blank" rel="noreferrer" className="home-btn home-btn-secondary w-full justify-between">
                    <span>GitHub</span>
                    <ArrowOutwardOutlined sx={{ fontSize: 16 }} />
                </a>
            </div>
        </aside>
    )
}

function Toast({ kind, text, onClose }) {
    useEffect(() => {
        const timer = window.setTimeout(onClose, 3600)
        return () => window.clearTimeout(timer)
    }, [onClose])

    return (
        <div className="fixed bottom-5 right-5 z-[90] border border-slate-200/10 bg-[#091528]/95 px-4 py-3 shadow-[0_18px_42px_rgba(2,8,23,0.36)] backdrop-blur-md">
            <div className={`font-montserrat text-sm ${kind === "success" ? "text-amber-100" : "text-rose-200"}`}>
                {text}
            </div>
        </div>
    )
}

export default function Contact({ EMAIL_SVCID, EMAIL_TEMPID, EMAIL_PUBKEY }) {
    const containerRef = useRef(null)
    const formRef = useRef(null)

    const [toast, setToast] = useState(null)
    const [sending, setSending] = useState(false)
    const [hp, setHp] = useState("")
    const [draft, setDraft] = useDraft()
    const { remaining, start: startCooldown } = useCooldown()
    const [showErrors, setShowErrors] = useState(false)

    useEffect(() => {
        document.body.classList.add("home-grid-bg")
        return () => document.body.classList.remove("home-grid-bg")
    }, [])

    const rawNameInvalid = (draft.name || "").trim().length < MIN_NAME
    const rawEmailInvalid = !isValidEmail(draft.email || "")
    const rawMessageBlank = !((draft.message || "").trim().length > 0)
    const rawMsgTooLong = (draft.message || "").length > MAX_MESSAGE

    const charsLeft = MAX_MESSAGE - (draft.message?.length || 0)

    const nameError = showErrors && rawNameInvalid ? `Minimum ${MIN_NAME} characters required.` : ""
    const emailError = showErrors && rawEmailInvalid ? "Valid email required." : ""
    const messageError = showErrors && rawMsgTooLong
        ? `Limit is ${MAX_MESSAGE} characters.`
        : showErrors && rawMessageBlank
            ? "Message cannot be empty."
            : ""

    const canSubmit = useMemo(
        () => hp === "" && !sending && !remaining && !rawNameInvalid && !rawEmailInvalid && !rawMessageBlank && !rawMsgTooLong,
        [hp, sending, remaining, rawNameInvalid, rawEmailInvalid, rawMessageBlank, rawMsgTooLong]
    )

    const copyToClipboard = useCopyToClipboard()
    const handleCopyEmail = useCallback(async () => {
        const ok = await copyToClipboard("contact@elliotc.dev")
        setToast(
            ok
                ? { kind: "success", text: "Email copied to clipboard." }
                : { kind: "error", text: "Could not copy email." }
        )
    }, [copyToClipboard])

    const resetForm = useCallback(() => {
        setDraft({ name: "", email: "", message: "" })
        setShowErrors(false)
        if (formRef.current) formRef.current.reset()
    }, [setDraft])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!canSubmit) {
            setShowErrors(true)
            return
        }

        if (!EMAIL_SVCID || !EMAIL_TEMPID || !EMAIL_PUBKEY) {
            setToast({ kind: "error", text: "Email service not configured." })
            return
        }

        setShowErrors(false)
        setSending(true)
        setToast(null)

        try {
            await emailjs.sendForm(EMAIL_SVCID, EMAIL_TEMPID, formRef.current, EMAIL_PUBKEY)
            setToast({ kind: "success", text: "Transmission complete. Reply will follow shortly." })
            resetForm()
            startCooldown()
        } catch {
            setToast({ kind: "error", text: "Transmission failed. Use direct email instead." })
        } finally {
            setSending(false)
        }
    }

    const syslogText = sending
        ? "Transmitting payload"
        : remaining
            ? "Rate limit active"
            : "Awaiting submission"

    return (
        <>
            <Head>
                <title>Elliot Chin - Contact</title>
                <meta name="description" content="Secure contact channel for Elliot Chin." />
            </Head>

            <main
                ref={containerRef}
                className="relative h-screen overflow-y-scroll scroll-smooth overscroll-contain bg-transparent text-slate-50"
            >
                <BackToTopButton targetRef={containerRef} />

                <div className="pt-14">
                    <section className="px-6 pb-14 pt-6 sm:px-10 lg:px-14">
                        <div className="mx-auto grid w-full max-w-[96rem] gap-6 lg:grid-cols-[minmax(0,1.18fr)_20rem]">
                            <div className="overflow-hidden border border-slate-200/10 bg-slate-950/30 px-6 py-6 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px] lg:px-8 lg:py-8">
                                <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/18 bg-amber-300/10 px-4 py-2 font-spacemono text-[11px] font-bold uppercase tracking-[0.18em] text-amber-100">
                                    <span className="h-2 w-2 rounded-full bg-amber-300" />
                                    <span>Encryption_Active</span>
                                </div>

                                <h1 className="mt-5 font-montserrat text-[2.8rem] font-semibold tracking-tight text-blue-100 md:text-[3.5rem]">
                                    CONTACT_NODE
                                </h1>

                                <p className="mt-3 max-w-3xl font-spacemono text-sm leading-6 text-slate-400/88">
                                    Secure end-to-end messaging protocol initialized.
                                    <br />
                                    Please input your transmission parameters below.
                                </p>

                                <form
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                    noValidate
                                    className="mt-8 space-y-6"
                                >
                                    <input
                                        tabIndex={-1}
                                        autoComplete="off"
                                        className="hidden"
                                        name="company"
                                        onChange={(event) => setHp(event.target.value)}
                                    />

                                    <ContactField
                                        label="01.Identity_Label"
                                        name="name"
                                        placeholder="NAME_OR_ALIAS"
                                        value={draft.name || ""}
                                        onChange={(event) => setDraft((current) => ({ ...current, name: event.target.value }))}
                                        error={nameError}
                                    />

                                    <ContactField
                                        label="02.Return_Path"
                                        name="email"
                                        placeholder="ENCRYPTED_EMAIL"
                                        value={draft.email || ""}
                                        onChange={(event) => setDraft((current) => ({ ...current, email: event.target.value }))}
                                        error={emailError}
                                    />

                                    <ContactField
                                        label="03.Payload_Content"
                                        name="message"
                                        placeholder="ENTER_MESSAGE_STRING..."
                                        value={draft.message || ""}
                                        onChange={(event) => setDraft((current) => ({ ...current, message: event.target.value }))}
                                        error={messageError}
                                        multiline
                                        rows={5}
                                    />

                                    <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                                        <div className="flex flex-wrap items-center gap-4">
                                            <button
                                                id="contact-send-btn"
                                                type="submit"
                                                disabled={!canSubmit}
                                                className="home-btn border-0 bg-amber-300 px-5 text-slate-950 disabled:cursor-not-allowed disabled:opacity-45"
                                            >
                                                <span>&gt;</span>
                                                <span>
                                                    {sending
                                                        ? "Transmitting..."
                                                        : remaining
                                                            ? `Cooldown_${remaining}s`
                                                            : "Execute_Transmission"}
                                                </span>
                                            </button>

                                            <button
                                                type="button"
                                                onClick={resetForm}
                                                className="home-btn home-btn-secondary"
                                            >
                                                Reset_Buffer
                                            </button>
                                        </div>

                                        <div className="font-spacemono text-xs uppercase tracking-[0.16em] text-slate-400">
                                            <span>SYSLOG: </span>
                                            <ReactTyped
                                                key={syslogText}
                                                strings={[syslogText]}
                                                typeSpeed={24}
                                                showCursor={false}
                                                startWhenVisible
                                                className="inline"
                                            />
                                            <span className="typewriter-cursor">_</span>
                                        </div>
                                    </div>

                                    <div className="font-spacemono text-xs uppercase tracking-[0.16em] text-slate-500">
                                        Payload budget remaining: {charsLeft}
                                    </div>
                                </form>
                            </div>

                            <ContactMetaCard onCopyEmail={handleCopyEmail} />
                        </div>
                    </section>
                </div>

                {toast && <Toast kind={toast.kind} text={toast.text} onClose={() => setToast(null)} />}
            </main>
        </>
    )
}

export async function getServerSideProps() {
    return fetchEnvVars(["EMAIL_SVCID", "EMAIL_TEMPID", "EMAIL_PUBKEY"])
}
