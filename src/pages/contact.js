// pages/contact.js
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Head from "next/head"
import emailjs from "@emailjs/browser"

import NavBar from "@/components/nav/Navbar"
import { useScrollProgress } from "@/components/hooks/useScrollProgress"
import { useDesktop } from "@/components/hooks/useDesktop"
import { fetchEnvVars } from "@/utils/ServerFetchFunction"

import { useCooldown } from "@/components/hooks/useCooldown"
import { useDraft } from "@/components/hooks/useDraft"
import { useCopyToClipboard } from "@/components/hooks/useCopyToClipboard"

import { ContactHeaderDesktop } from "@/components/contact/ContactHeaderDesktop"
import { ContactHeaderMobile } from "@/components/contact/ContactHeaderMobile"
import { ContactForm } from "@/components/contact/ContactForm"
import { QuickLinksCard } from "@/components/contact/QuickLinksCard"
import { SayHiCard } from "@/components/contact/SayHiCard"
import { Toast } from "@/components/contact/Toast"
import { ScrollHint } from "@/components/contact/ScrollHint"

import { MAX_MESSAGE, MIN_NAME } from "@/utils/contactConstants"

// ---------- Validation ----------
const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test((v || "").trim())

// ---------- Main ----------
export default function Contact({ EMAIL_SVCID, EMAIL_TEMPID, EMAIL_PUBKEY }) {
    const containerRef = useRef(null)
    useScrollProgress(containerRef)
    const isDesktop = useDesktop()

    const formRef = useRef(null)
    const [toast, setToast] = useState(null)
    const [sending, setSending] = useState(false)
    const [hp, setHp] = useState("")
    const [draft, setDraft] = useDraft()
    const { remaining, start: startCooldown } = useCooldown()
    const [showErrors, setShowErrors] = useState(false)
    const [showScrollHint, setShowScrollHint] = useState(true)

    // --- raw checks
    const rawNameInvalid = ((draft.name || "").trim().length < MIN_NAME)
    const rawEmailInvalid = !isValidEmail(draft.email || "")
    const rawMessageBlank = !((draft.message || "").trim().length > 0)
    const rawMsgTooLong = (draft.message || "").length > MAX_MESSAGE

    // --- UI errors
    const nameInvalid = showErrors && rawNameInvalid
    const emailInvalid = showErrors && rawEmailInvalid
    const msgTooLong = showErrors && rawMsgTooLong
    const messageBlank = showErrors && rawMessageBlank
    const charsLeft = MAX_MESSAGE - (draft.message?.length || 0)

    const formValid = useMemo(() => hp === "" && !sending && !remaining, [hp, sending, remaining])

    const copyToClipboard = useCopyToClipboard()
    const copyEmail = useCallback(async () => {
        const ok = await copyToClipboard("ychin@unb.ca")
        setToast(
            ok
                ? { kind: "success", text: "Email copied to clipboard." }
                : { kind: "error", text: "Could not copy. Long-press to copy manually." }
        )
    }, [copyToClipboard])

    // Cmd/Ctrl + Enter to send
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

        const invalid =
            rawNameInvalid ||
            rawEmailInvalid ||
            rawMessageBlank ||
            rawMsgTooLong ||
            sending ||
            remaining ||
            hp !== ""

        if (invalid) {
            setShowErrors(true)
            return
        }

        setShowErrors(false)

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

    // Scroll hint disappear logic
    useEffect(() => {
        const el = containerRef.current
        if (!el || !showScrollHint) return
        let userInteracted = false
        const markInteracted = () => (userInteracted = true)
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

    // ---------- UI ----------
    return (
        <>
            <Head>
                <title>Elliot Chin — Contact</title>
                <meta name="description" content="Hey — I’m Elliot. Get in touch with me!" />
            </Head>

            <NavBar />

            {isDesktop ? (
                <main
                    ref={containerRef}
                    className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth overscroll-contain"
                >
                    <ContactHeaderDesktop />

                    <section className="w-11/12 max-w-7xl mx-auto pb-10">
                        <div className="grid lg:grid-cols-[1.05fr_1.2fr] gap-6">
                            <SayHiCard />
                            <div className="flex flex-col gap-4">
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/10 rounded-xl">
                                    <div className="flex-col items-start gap-1 py-3 px-4">
                                        <p className="text-lg font-semibold text-amber-50">Send a message</p>
                                        <p className="text-xs text-amber-50/80">
                                            Tip: <kbd className="px-2 py-0.5 rounded bg-white/10">Cmd/Ctrl + Enter</kbd>{" "}
                                            to submit
                                        </p>
                                    </div>
                                    <div className="py-2 px-4">
                                        <ContactForm {...sharedFormProps} />
                                    </div>
                                </div>
                                <QuickLinksCard onCopy={copyEmail} />
                            </div>
                        </div>
                    </section>

                    {toast && <Toast kind={toast.kind} text={toast.text} onClose={() => setToast(null)} />}
                </main>
            ) : (
                <main
                    ref={containerRef}
                    className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth overscroll-contain"
                >
                    <section className="snap-start min-h=[100svh] supports-[height:100dvh]:min-h-[100dvh] flex flex-col pt-10">
                        <ContactHeaderMobile />
                        <div className="w-11/12 max-w-xl mx-auto flex-1 flex items-start">
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/10 rounded-xl w-full">
                                <div className="flex-col items-start gap-1 py-2 px-4">
                                    <p className="text-lg font-semibold text-amber-50">Send a message</p>
                                    <p className="text-xs text-amber-50/80">
                                        Tip: <kbd className="px-2 py-0.5 rounded bg-white/10">Cmd/Ctrl + Enter</kbd>{" "}
                                        to submit
                                    </p>
                                </div>
                                <div className="py-2 px-4">
                                    <ContactForm {...sharedFormProps} />
                                </div>
                            </div>
                        </div>
                        {showScrollHint && <ScrollHint />}
                    </section>

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
