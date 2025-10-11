// pages/contact.js
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Head from "next/head"
import { ReactTyped } from "react-typed"
import { motion } from "framer-motion"
import {
    Button,
    Input,
    Textarea,
    Card,
    CardBody,
    CardHeader,
    Tooltip,
    Link as HLink,
    Spinner,
} from "@nextui-org/react"
import emailjs from "@emailjs/browser"

import NavBar from "@/components/nav/Navbar"
import { useScrollProgress } from "@/components/hooks/useScrollProgress"
import { useDesktop } from "@/components/hooks/useDesktop"
import { fetchEnvVars } from "@/utils/ServerFetchFunction"

// ---------- Links ----------
import * as Links from "../../public/data/Links"
import { KeyboardDoubleArrowDownOutlined } from "@mui/icons-material"
import { ModelTextingAnimation } from "@/components/avatar/Model_TextingAnimation"
const linkedinUrl = Links.linkedin || Links.linkedinLink || Links.eChin?.linkedin || "#"
const githubUrl = Links.github || Links.githubLink || "#"
const emailDisplay = "ychin@unb.ca"
const emailHref = Links.email || Links.emailLink || `mailto:${emailDisplay}`
const resumeUrl = Links.resume || Links.resumeLink || "#"

// ---------- Constants ----------
const MAX_MESSAGE = 1200
const MIN_NAME = 2
const COOLDOWN_SEC = 15
const DRAFT_KEY = "contact_draft_v1"
const COOLDOWN_KEY = "contact_cooldown_until"

// ---------- Utils ----------
const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test((v || "").trim())

const useCooldown = () => {
    const [until, setUntil] = useState(0)
    const [now, setNow] = useState(() => Date.now())

    useEffect(() => {
        const saved = Number(localStorage.getItem(COOLDOWN_KEY) || 0)
        if (saved > Date.now()) setUntil(saved)
    }, [])

    useEffect(() => {
        const t = setInterval(() => setNow(Date.now()), 500)
        return () => clearInterval(t)
    }, [])

    const remaining = Math.max(0, Math.ceil((until - now) / 1000))
    const start = (seconds = COOLDOWN_SEC) => {
        const next = Date.now() + seconds * 1000
        localStorage.setItem(COOLDOWN_KEY, String(next))
        setUntil(next)
    }

    return { remaining, start }
}

// robust copy that works on iOS/Android + desktop
async function copyToClipboard(text) {
    try {
        if (navigator?.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text)
            return true
        }
    } catch (_) { }

    try {
        const ta = document.createElement("textarea")
        ta.value = text
        ta.setAttribute("readonly", "")
        ta.style.position = "absolute"
        ta.style.left = "-9999px"
        ta.style.fontSize = "12pt"
        document.body.appendChild(ta)

        const selection = document.getSelection()
        const savedRange = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null

        ta.select()
        ta.selectionStart = 0
        ta.selectionEnd = ta.value.length

        const ok = document.execCommand("copy")

        document.body.removeChild(ta)
        if (savedRange) {
            selection.removeAllRanges()
            selection.addRange(savedRange)
        }
        return ok
    } catch (_) {
        return false
    }
}

const useDraft = () => {
    const [draft, setDraft] = useState({ name: "", email: "", message: "" })
    useEffect(() => {
        try {
            const raw = localStorage.getItem(DRAFT_KEY)
            if (raw) setDraft(JSON.parse(raw))
        } catch { }
    }, [])
    useEffect(() => {
        localStorage.setItem(DRAFT_KEY, JSON.stringify(draft))
    }, [draft])
    return [draft, setDraft]
}

// ---------- Reusable Bits ----------
function Toast({ kind = "success", text = "", onClose }) {
    const color =
        kind === "success" ? "bg-emerald-500" : kind === "error" ? "bg-rose-500" : "bg-slate-600"
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60]">
            <div className={`text-white px-4 py-2 rounded-xl shadow-lg ${color}`}>
                <div className="flex items-center gap-3">
                    {kind === "success" ? "✅" : kind === "error" ? "⚠️" : "ℹ️"}
                    <span className="font-medium">{text}</span>
                    <Button
                        size="sm"
                        className="ml-2 bg-white/15 text-white"
                        onPress={onClose}
                        radius="md"
                        variant="flat"
                    >
                        Close
                    </Button>
                </div>
            </div>
        </div>
    )
}

function QuickAction({ title, subtitle, icon, onPress, href, asEmail }) {
    const content = (
        <Card
            isPressable
            onPress={onPress}
            className="w-full h-full bg-transparent border border-amber-500/10 hover:border-amber-500/25 transition-colors"
        >
            <CardBody className="h-full flex flex-row gap-3 items-center">
                <div className="text-4xl shrink-0">{icon}</div>
                <div className="min-w-0 flex-1 w-0">
                    <p className="font-semibold text-amber-900 dark:text-amber-200 truncate">{title}</p>
                    <p className="text-sm text-amber-800/80 dark:text-amber-200/70 truncate">{subtitle}</p>
                </div>
            </CardBody>
        </Card>
    )
    if (href) {
        return (
            <HLink
                href={href}
                target={asEmail ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="block"
            >
                {content}
            </HLink>
        )
    }
    return content
}

function ContactHeaderDesktop() {
    return (
        <section className="pt-16 pb-4 text-center">
            <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.35 }}>
                <ReactTyped
                    strings={["Let’s build something together."]}
                    typeSpeed={35}
                    showCursor={false}
                    className="text-3xl md:text-4xl font-extrabold tracking-tight text-amber-100"
                />
                <p className="mt-2 text-sm md:text-base text-amber-50/90">
                    Email, GitHub, LinkedIn — or send a quick note.
                </p>
            </motion.div>
        </section>
    )
}

function ContactHeaderMobile() {
    return (
        <section className="pt-12 pb-10 text-center">
            <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.35 }}>
                <ReactTyped
                    strings={["Let’s build something together."]}
                    typeSpeed={35}
                    showCursor={false}
                    className="text-2xl font-extrabold tracking-tight text-amber-100"
                />
                <p className="mt-1 text-xs text-amber-50/90">
                    Email, GitHub, LinkedIn — or send a quick note.
                </p>
            </motion.div>
        </section>
    )
}

function SayHiCard() {
    return (
        <div className="min-h-0 flex flex-col gap-4">
            <Card className="bg-transparent shadow-none border-none">
                <CardHeader className="justify-between py-3">
                    <div className="flex items-center gap-3">
                        <span className="text-4xl">📱</span>
                        <p className="font-semibold text-amber-50 leading-none text-3xl">Say Hi</p>
                    </div>
                </CardHeader>
                <CardBody className="grid place-items-center py-2">
                    <div className="w-full max-w-[520px] h-[260px] md:h-[60vh]">
                        <ModelTextingAnimation />
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

function QuickLinksCard({ onCopy }) {
    return (
        <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/10">
            <CardBody className="min-h-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <QuickAction title="Email" subtitle={emailDisplay} icon="✉️" href={emailHref} asEmail />
                    <QuickAction title="LinkedIn" subtitle="Let’s connect" icon="💼" href={linkedinUrl} />
                    <QuickAction title="GitHub" subtitle="See my code" icon="💻" href={githubUrl} />
                    <QuickAction title="Resume" subtitle="View PDF" icon="📄" href={resumeUrl} />
                </div>

                <div className="mt-4 rounded-xl border border-white/10 p-3 flex items-center gap-3">
                    <div className="text-2xl">⏱️</div>
                    <div className="flex-1">
                        <p className="font-semibold text-amber-50 leading-none">
                            Email Address - Typically respond within same day!
                        </p>
                    </div>
                    <Tooltip content="Copy email">
                        <Button variant="flat" onPress={onCopy} className="bg-white/10 text-amber-50">
                            Copy
                        </Button>
                    </Tooltip>
                </div>
            </CardBody>
        </Card>
    )
}

/**
 * ContactForm
 * Re-uses the exact same markup/styles; only parameterizes size/minRows/placeholders/char counter/labels
 */
function ContactForm({
    formRef,
    onSubmit,
    onHpChange,
    draft,
    setDraft,
    nameInvalid,
    emailInvalid,
    msgTooLong,
    messageBlank,
    charsLeftNode,      // React node for the char counter row
    buttonProps,        // { size?, resetLabel }
    fieldProps,         // { namePlaceholder, msgMinRows, inputSize? }
    formGapClass        // "gap-4" or "gap-3"
}) {
    return (
        <form ref={formRef} onSubmit={onSubmit} noValidate className={`flex flex-col ${formGapClass}`}>
            {/* honeypot */}
            <input
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                name="company"
                onChange={onHpChange}
            />

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <Input
                    variant="faded"
                    isRequired
                    name="name"
                    label="Your name"
                    placeholder={fieldProps.namePlaceholder}
                    autoComplete="off"
                    value={draft.name}
                    onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
                    isInvalid={!!nameInvalid}
                    errorMessage={nameInvalid ? `At least ${MIN_NAME} characters` : ""}
                    classNames={{
                        label: "!text-amber-950 font-semibold font-montserrat",
                        input: "!text-amber-800 placeholder:text-amber-800 placeholder:italic",
                        inputWrapper: "bg-white/10 !outline-none !border-none",
                    }}
                    size={fieldProps.inputSize}
                />
                <Input
                    variant="faded"
                    isRequired
                    type="email"
                    name="email"
                    autoComplete="off"
                    label="Email"
                    placeholder="john@dev-email.com"
                    value={draft.email}
                    onChange={(e) => setDraft((d) => ({ ...d, email: e.target.value }))}
                    isInvalid={!!emailInvalid}
                    errorMessage={emailInvalid ? "Enter a valid email" : ""}
                    classNames={{
                        label: "!text-amber-950 font-semibold font-montserrat",
                        input: "!text-amber-800 placeholder:text-amber-800 placeholder:italic",
                        inputWrapper: "bg-white/10 !outline-none !border-none",
                    }}
                    size={fieldProps.inputSize}
                />
            </div>

            <Textarea
                variant="faded"
                isRequired
                name="message"
                label="Message"
                minRows={fieldProps.msgMinRows}
                placeholder="Tell me about your project, idea, or role… anything!"
                value={draft.message}
                onChange={(e) => setDraft((d) => ({ ...d, message: e.target.value }))}
                isInvalid={!!(msgTooLong || messageBlank)}
                errorMessage={
                    msgTooLong
                        ? `Limit is ${MAX_MESSAGE} characters`
                        : messageBlank
                            ? "Please enter a message"
                            : ""
                }
                classNames={{
                    label: "!text-amber-950 font-semibold font-montserrat",
                    input: "!text-amber-800 placeholder:text-amber-800 placeholder:italic",
                    inputWrapper: "bg-white/10 !outline-none !border-none",
                }}
                size={fieldProps.inputSize}
            />

            <div className="flex items-center justify-between">{charsLeftNode}</div>

            <div className="flex items-center gap-3">
                <Button
                    id="contact-send-btn"
                    type="submit"
                    color="warning"
                    radius="lg"
                    className="font-medium"
                    size={buttonProps.size}
                    isDisabled={buttonProps.isDisabled}
                >
                    {buttonProps.sending ? (
                        <span className="flex items-center gap-2">
                            <Spinner size="sm" /> Sending…
                        </span>
                    ) : buttonProps.remaining ? (
                        `Please wait ${buttonProps.remaining}s`
                    ) : (
                        "Send message"
                    )}
                </Button>
                <Button variant="bordered" color="danger" onPress={buttonProps.onReset} size={buttonProps.size}>
                    {buttonProps.resetLabel}
                </Button>
            </div>
        </form>
    )
}

function ScrollHint() {
    return (
        <div className="flex flex-col gap-2 font-montserrat text-sm sm:text-xl items-center justify-center animate-bounce mt-[5vh]">
            <span>Scroll</span>
            <KeyboardDoubleArrowDownOutlined fontSize="medium" />
        </div>
    )
}

// ---------- Main ----------
export default function Contact({ EMAIL_SVCID, EMAIL_TEMPID, EMAIL_PUBKEY }) {
    const containerRef = useRef(null)
    useScrollProgress(containerRef)

    const isDesktop = useDesktop()

    const formRef = useRef(null)
    const [toast, setToast] = useState(null) // {kind, text}
    const [sending, setSending] = useState(false)
    const [hp, setHp] = useState("") // honeypot
    const [draft, setDraft] = useDraft()
    const { remaining, start: startCooldown } = useCooldown()
    const [showErrors, setShowErrors] = useState(false)

    // scroll hint visibility
    const [showScrollHint, setShowScrollHint] = useState(true)

    // --- raw checks (logic only; no UI yet)
    const rawNameInvalid = ((draft.name || "").trim().length < MIN_NAME)
    const rawEmailInvalid = !isValidEmail(draft.email || "")
    const rawMessageBlank = !((draft.message || "").trim().length > 0)
    const rawMsgTooLong = (draft.message || "").length > MAX_MESSAGE

    // --- UI errors (only after submit press)
    const nameInvalid = showErrors && rawNameInvalid
    const emailInvalid = showErrors && rawEmailInvalid
    const msgTooLong = showErrors && rawMsgTooLong
    const messageBlank = showErrors && rawMessageBlank

    const charsLeft = MAX_MESSAGE - (draft.message?.length || 0)

    // Keep the same semantics: this only gates the button (cooldown/sending/honeypot),
    // not validation (which happens on submit).
    const formValid = useMemo(() => {
        return hp === "" && !sending && !remaining
    }, [hp, sending, remaining])

    const copyEmail = useCallback(async () => {
        const ok = await copyToClipboard(emailDisplay)
        setToast(
            ok
                ? { kind: "success", text: "Email copied to clipboard." }
                : { kind: "error", text: "Could not copy. Long-press to copy manually." }
        )
    }, [])

    // Cmd/Ctrl+Enter to send
    useEffect(() => {
        const onKey = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
                const btn = document.getElementById("contact-send-btn")
                if (btn && !btn.disabled) btn.click()
            }
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [])

    const resetForm = () => {
        setDraft({ name: "", email: "", message: "" })
        if (formRef.current) formRef.current.reset()
        setShowErrors(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Validate only on submit
        const invalid =
            rawNameInvalid ||
            rawEmailInvalid ||
            rawMessageBlank ||
            rawMsgTooLong ||
            sending ||
            remaining ||
            hp !== ""

        if (invalid) {
            setShowErrors(true) // show inline errors now
            return
        }

        // valid -> hide errors
        setShowErrors(false)

        // Safety checks
        if (!formRef.current) {
            setToast({ kind: "error", text: "Form not ready. Please try again." })
            return
        }
        if (!EMAIL_SVCID || !EMAIL_TEMPID || !EMAIL_PUBKEY) {
            setToast({
                kind: "error",
                text: "Email service not configured. Use the email button below.",
            })
            return
        }

        // Send
        setSending(true)
        setToast(null)
        try {
            await emailjs.sendForm(EMAIL_SVCID, EMAIL_TEMPID, formRef.current, EMAIL_PUBKEY)
            setToast({ kind: "success", text: "Message sent — thanks! I’ll reply shortly." })
            resetForm()
            startCooldown()
        } catch {
            setToast({
                kind: "error",
                text: "Something went wrong. Try again or email me directly.",
            })
        } finally {
            setSending(false)
        }
    }

    // inside your component, before the return
    const sharedFormProps = {
        formRef,
        onSubmit: handleSubmit,
        onHpChange: (e) => setHp(e.target.value),
        draft,
        setDraft,
        nameInvalid,
        emailInvalid,
        msgTooLong,
        messageBlank,
        formGapClass: "gap-4",
        fieldProps: {
            namePlaceholder: "John Doe - John the Doe",
            msgMinRows: 5,
            inputSize: undefined,
        },
        charsLeftNode: <div className="text-xs text-amber-50/80">{charsLeft} characters left</div>,
        buttonProps: {
            size: undefined,
            resetLabel: "Reset Form",
            isDisabled: !formValid,
            sending,
            remaining,
            onReset: resetForm,
        },
    }


    useEffect(() => {
        const el = containerRef.current
        if (!el || !showScrollHint) return
        let userInteracted = false
        const markInteracted = () => {
            userInteracted = true
        }
        const onScroll = () => {
            if (!userInteracted) return
            if (el.scrollTop > 0) setShowScrollHint(false)
        }
        el.addEventListener("scroll", onScroll, { passive: true })
        el.addEventListener("wheel", markInteracted, { passive: true })
        el.addEventListener("touchstart", markInteracted, { passive: true })
        el.addEventListener("mousedown", markInteracted, { passive: true })
        el.addEventListener("keydown", markInteracted)
        return () => {
            el.removeEventListener("scroll", onScroll)
            el.removeEventListener("wheel", markInteracted)
            el.removeEventListener("touchstart", markInteracted)
            el.removeEventListener("mousedown", markInteracted)
            el.removeEventListener("keydown", markInteracted)
        }
    }, [containerRef, showScrollHint])

    // ---------- UI (unchanged visuals) ----------
    return (
        <>
            <Head>
                <title>Elliot Chin — Contact</title>
                <meta name="description" content="Hey — I’m Elliot. Get in touch with me!." />
            </Head>

            <NavBar />

            {isDesktop ? (
                <main
                    ref={containerRef}
                    className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth overscroll-contain"
                >
                    {/* Header */}
                    <ContactHeaderDesktop />

                    {/* Content */}
                    <section className="w-11/12 max-w-7xl mx-auto pb-10">
                        <div className="grid lg:grid-cols-[1.05fr_1.2fr] gap-6">
                            {isDesktop ? <SayHiCard /> : null}

                            <div className="flex flex-col gap-4">
                                {/* Form card */}
                                <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/10">
                                    <CardHeader className="flex-col items-start gap-1 py-3">
                                        <p className="text-lg font-semibold text-amber-50">Send a message</p>
                                        <p className="text-xs text-amber-50/80">
                                            Tip: <kbd className="px-2 py-0.5 rounded bg-white/10">Cmd/Ctrl + Enter</kbd>{" "}
                                            to submit
                                        </p>
                                    </CardHeader>
                                    <CardBody className="py-2">
                                        <ContactForm {...sharedFormProps} />
                                    </CardBody>

                                </Card>

                                {/* Quick links card */}
                                <QuickLinksCard onCopy={copyEmail} />
                            </div>
                        </div>
                    </section>

                    {toast && <Toast kind={toast.kind} text={toast.text} onClose={() => setToast(null)} />}
                </main>
            ) : (
                // Mobile / compact — TWO snap sections
                <main
                    ref={containerRef}
                    className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth overscroll-contain"
                >

                    {/* SECTION 1 — Header + FORM */}
                    <section className="snap-start min-h=[100svh] supports-[height:100dvh]:min-h-[100dvh] flex flex-col pt-10">
                        <ContactHeaderMobile />

                        <div className="w-11/12 max-w-xl mx-auto flex-1 flex items-start">
                            <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/10 w-full">
                                <CardHeader className="flex-col items-start gap-1 py-2">
                                    <p className="text-lg font-semibold text-amber-50">Send a message</p>
                                    <p className="text-xs text-amber-50/80">
                                        Tip: <kbd className="px-2 py-0.5 rounded bg-white/10">Cmd/Ctrl + Enter</kbd> to submit
                                    </p>
                                </CardHeader>
                                <CardBody className="py-2">
                                    <ContactForm {...sharedFormProps} />
                                </CardBody>
                            </Card>
                        </div>

                        {/* scroll hint */}
                        {showScrollHint && <ScrollHint />}
                    </section>

                    {/* SECTION 2 — QUICK LINKS */}
                    <section className="snap-start min-h-[100svh] supports-[height:100dvh]:min-h-[100dvh] flex">
                        <div className="w-11/12 max-w-xl mx-auto my-auto">
                            <QuickLinksCard onCopy={copyEmail} />
                        </div>
                    </section>

                    {toast && <Toast kind={toast.kind} text={toast.text} onClose={() => setToast(null)} />}
                </main>
            )}
        </>
    )
}

export async function getServerSideProps() {
    return fetchEnvVars(["EMAIL_SVCID", "EMAIL_TEMPID", "EMAIL_PUBKEY"])
}
