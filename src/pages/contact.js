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
    Chip,
    Tooltip,
    Link as HLink,
    Spinner,
} from "@nextui-org/react"
import emailjs from "@emailjs/browser"

import { BackToTopButton } from "@/components/nav/BackTopTop"
import { useScrollProgress } from "@/components/hooks/useScrollProgress"
import { ModelTextingAnimation } from "@/components/avatar/Model_TextingAnimation"
import { fetchEnvVars } from "@/utils/ServerFetchFunction"

// ---------- Links ----------
import * as Links from "../../public/data/Links"
import NavBar from "@/components/nav/Navbar"
const linkedinUrl = Links.linkedin || Links.linkedinLink || Links.eChin?.linkedin || "#"
const githubUrl = Links.github || Links.githubLink || "#"
const emailDisplay = "e.chincys@gmail.com"
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

// ---------- Toast ----------
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

// ---------- Quick Action (fixed width/height) ----------
function QuickAction({ title, subtitle, icon, onPress, href, asEmail }) {
    const content = (
        <Card
            isPressable
            onPress={onPress}
            className="w-full h-fuil bg-transparent border border-amber-500/10 hover:border-amber-500/25 transition-colors"
        >
            <CardBody className="h-full flex flex-row gap-3">
                <div className="text-4xl w-fit">{icon}</div>
                <div className="">
                    <p className="font-semibold text-amber-900 dark:text-amber-200 truncate">{title}</p>
                    <p className="text-sm text-amber-800/80 dark:text-amber-200/70 truncate">{subtitle}</p>
                </div>
            </CardBody>
        </Card>
    )
    if (href) {
        return (
            <HLink href={href} target={asEmail ? "_self" : "_blank"} rel="noopener noreferrer" className="block">
                {content}
            </HLink>
        )
    }
    return content
}

// ---------- Main ----------
export default function Contact({ EMAIL_SVCID, EMAIL_TEMPID, EMAIL_PUBKEY }) {
    const containerRef = useRef(null)
    useScrollProgress(containerRef)

    const formRef = useRef(null)
    const [toast, setToast] = useState(null) // {kind, text}
    const [sending, setSending] = useState(false)
    const [hp, setHp] = useState("") // honeypot
    const [draft, setDraft] = useDraft()
    const { remaining, start: startCooldown } = useCooldown()

    const charsLeft = MAX_MESSAGE - (draft.message?.length || 0)
    const emailInvalid = draft.email && !isValidEmail(draft.email)
    const nameInvalid = draft.name && draft.name.trim().length < MIN_NAME
    const messageBlank = !draft.message || draft.message.trim().length === 0
    const msgTooLong = draft.message && draft.message.length > MAX_MESSAGE

    const formValid = useMemo(() => {
        return (
            hp === "" &&
            !sending &&
            !remaining &&
            !emailInvalid &&
            !nameInvalid &&
            !msgTooLong &&
            (draft.name || "").trim().length >= MIN_NAME &&
            isValidEmail(draft.email) &&
            !messageBlank
        )
    }, [hp, sending, remaining, emailInvalid, nameInvalid, msgTooLong, messageBlank, draft])

    // Copy email
    const copyEmail = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(emailDisplay)
            setToast({ kind: "success", text: "Email copied to clipboard." })
        } catch {
            setToast({ kind: "error", text: "Could not copy. Long-press to copy manually." })
        }
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
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formValid) return
        if (!EMAIL_SVCID || !EMAIL_TEMPID || !EMAIL_PUBKEY) {
            setToast({ kind: "error", text: "Email service not configured. Use the email button below." })
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
            setToast({ kind: "error", text: "Something went wrong. Try again or email me directly." })
        } finally {
            setSending(false)
        }
    }

    return (
        <>
            <Head>
                <title>Contact | Elliot</title>
                <meta name="description" content="Get in touch with Elliot." />
            </Head>

            {/* Same outer layout as the rest of your site */}
            <main
                ref={containerRef}
                className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth overscroll-contain"
            >
                <NavBar />

                {/* Header */}
                <section className="pt-16 pb-4 text-center">
                    <motion.div
                        initial={{ y: 12, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.35 }}
                    >
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

                {/* Content */}
                <section className="w-11/12 max-w-7xl mx-auto pb-10">
                    <div className="grid lg:grid-cols-[1.05fr_1.2fr] gap-6">
                        {/* LEFT: model + quick actions */}
                        <div className="min-h-0 flex flex-col gap-4">
                            <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/10">
                                <CardHeader className="justify-between py-3">
                                    <div className="flex items-center gap-3">
                                        <span className="text-4xl">📱</span>
                                        <div>
                                            <p className="font-semibold text-amber-50 leading-none text-3xl">Say Hi</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardBody className="grid place-items-center py-2">
                                    <div className="w-full max-w-[520px] h-[220px] md:h-[260px]">
                                        <ModelTextingAnimation />
                                    </div>
                                </CardBody>
                            </Card>

                            <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/10">
                                <CardBody className="min-h-0">
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        <QuickAction title="Email" subtitle={emailDisplay} icon="✉️" href={emailHref} asEmail />
                                        <QuickAction title="LinkedIn" subtitle="Let’s connect" icon="💼" href={linkedinUrl} />
                                        <QuickAction title="GitHub" subtitle="See my code" icon="💻" href={githubUrl} />
                                        <QuickAction title="Resume" subtitle="View PDF" icon="📄" href={resumeUrl} />
                                    </div>

                                    <div className="mt-4 rounded-xl border border-white/10 p-3 flex items-center gap-3">
                                        <div className="text-2xl">⏱️</div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-amber-50 leading-none">Email Address - Typically respond within same day!</p>
                                        </div>
                                        <Tooltip content="Copy email">
                                            <Button
                                                size="sm"
                                                variant="flat"
                                                onPress={copyEmail}
                                                className="bg-white/10 text-amber-50"
                                            >
                                                Copy
                                            </Button>
                                        </Tooltip>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>

                        {/* RIGHT: form */}
                        <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/10">
                            <CardHeader className="flex-col items-start gap-1 py-3">
                                <p className="text-lg font-semibold text-amber-50">Send a message</p>
                                <p className="text-xs text-amber-50/80">
                                    Tip: <kbd className="px-2 py-0.5 rounded bg-white/10">Cmd/Ctrl + Enter</kbd> to submit
                                </p>
                            </CardHeader>
                            <CardBody className="py-2">
                                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    {/* Honeypot */}
                                    <input
                                        tabIndex={-1}
                                        autoComplete="off"
                                        className="hidden"
                                        name="company"
                                        onChange={(e) => setHp(e.target.value)}
                                    />

                                    {/* Glass inputs */}
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <Input
                                            isRequired
                                            autoComplete="off"
                                            name="name"
                                            label="Your name"
                                            placeholder="Jane Developer"
                                            value={draft.name}
                                            onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
                                            isInvalid={!!nameInvalid}
                                            errorMessage={nameInvalid ? `At least ${MIN_NAME} characters` : ""}
                                            classNames={{
                                                label: "text-amber-50",
                                                input: "text-amber-50 placeholder:text-amber-50/60",
                                                inputWrapper:
                                                    "bg-white/10 backdrop-blur-md border border-white/10 data-[hover=true]:border-white/20 group-data-[focus=true]:border-white/30",
                                            }}
                                        />
                                        <Input
                                            isRequired
                                            autoComplete="off"
                                            // visible field for users
                                            name="email"
                                            label="Email"
                                            placeholder="jane@devmail.com"
                                            value={draft.email}
                                            onChange={(e) => setDraft((d) => ({ ...d, email: e.target.value }))}
                                            isInvalid={!!emailInvalid}
                                            errorMessage={emailInvalid ? "Enter a valid email" : ""}
                                            type="email"
                                            classNames={{
                                                label: "text-amber-50",
                                                input: "text-amber-50 placeholder:text-amber-50/60",
                                                inputWrapper:
                                                    "bg-white/10 backdrop-blur-md border border-white/10 data-[hover=true]:border-white/20 group-data-[focus=true]:border-white/30",
                                            }}
                                        />
                                    </div>

                                    <Textarea
                                        isRequired
                                        name="message"
                                        label="Message"
                                        placeholder="Tell me about your project, idea, or role… (it can be short)"
                                        minRows={5}
                                        value={draft.message}
                                        onChange={(e) => setDraft((d) => ({ ...d, message: e.target.value }))}
                                        isInvalid={!!msgTooLong}
                                        errorMessage={
                                            msgTooLong
                                                ? `Limit is ${MAX_MESSAGE} characters`
                                                : ""
                                        }
                                        classNames={{
                                            label: "text-amber-50",
                                            input: "text-amber-50 placeholder:text-amber-50/60",
                                            inputWrapper:
                                                "bg-white/10 backdrop-blur-md border border-white/10 data-[hover=true]:border-white/20 group-data-[focus=true]:border-white/30",
                                        }}
                                    />

                                    <div className="flex items-center justify-between">
                                        <div className="text-xs text-amber-50/80">
                                            {charsLeft} characters left
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Button
                                            id="contact-send-btn"
                                            type="submit"
                                            color="warning"
                                            radius="lg"
                                            isDisabled={!formValid}
                                            className="font-medium"
                                        >
                                            {sending ? (
                                                <span className="flex items-center gap-2">
                                                    <Spinner size="sm" /> Sending…
                                                </span>
                                            ) : remaining ? `Please wait ${remaining}s` : "Send message"}
                                        </Button>

                                        <Button variant="bordered" color="danger" onPress={resetForm}>
                                            Reset Form
                                        </Button>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </div>
                </section>

                {/* Toast */}
                {toast && <Toast kind={toast.kind} text={toast.text} onClose={() => setToast(null)} />}
            </main>
        </>
    )
}

export async function getServerSideProps() {
    return fetchEnvVars(["EMAIL_SVCID", "EMAIL_TEMPID", "EMAIL_PUBKEY"])
}
