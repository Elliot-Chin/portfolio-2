import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import { fetchEnvVars } from "@/utils/ServerFetchFunction"
import { useCooldown } from "@/components/hooks/useCooldown"
import { useDraft } from "@/components/hooks/useDraft"
import { useCopyToClipboard } from "@/components/hooks/useCopyToClipboard"
import { MAX_MESSAGE } from "@/utils/contactConstants"
import { emailAddress, githubLink, linkedInLink, resumeLink } from "@/data/socialLinks"
import { SeoHead } from "@/components/seo/SeoHead"
import { useHomeGridPage } from "@/components/hooks/useHomeGridPage"
import s from "@/styles/Contact.module.css"

export default function Contact({ EMAIL_SVCID, EMAIL_TEMPID, EMAIL_PUBKEY }) {
    const containerRef = useRef(null)
    const formRef = useRef(null)
    const statusRef = useRef(null)
    const copyTimer = useRef(null)
    const [draft, setDraft] = useDraft()
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState("idle")
    const [copied, setCopied] = useState("")
    const [hp, setHp] = useState("")
    const { remaining, start: startCooldown } = useCooldown()
    const copyToClipboard = useCopyToClipboard()
    const emailServiceReady = Boolean(EMAIL_SVCID && EMAIL_TEMPID && EMAIL_PUBKEY)
    useHomeGridPage(containerRef, { observeFades: false })
    useEffect(() => () => window.clearTimeout(copyTimer.current), [])
    useEffect(() => {
        if (status === "success") statusRef.current?.focus()
    }, [status])

    const updateField = (event) => {
        const { name, value } = event.target
        setDraft(current => ({ ...current, [name]: value }))
        setErrors(current => ({ ...current, [name]: "" }))
        if (status === "error" || status === "draft") setStatus("idle")
    }
    const handleCopy = async () => {
        const ok = await copyToClipboard(emailAddress)
        setCopied(ok ? "Copied ✓" : "Couldn't copy. Select the address instead.")
        window.clearTimeout(copyTimer.current)
        copyTimer.current = window.setTimeout(() => setCopied(""), 2200)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (hp || status === "sending" || remaining) return
        const invalid = {}
        if (!draft.name?.trim()) invalid.name = "Please enter your name."
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email?.trim() || "")) invalid.email = "Please enter a valid email address."
        if (!draft.message?.trim()) invalid.message = "Please add a message."
        else if (draft.message.length > MAX_MESSAGE) invalid.message = `Please keep your message within ${MAX_MESSAGE} characters.`
        setErrors(invalid)
        if (Object.keys(invalid).length) {
            formRef.current.elements[Object.keys(invalid)[0]]?.focus()
            return
        }
        if (!emailServiceReady) {
            window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(`Message from ${draft.name.trim()}`)}&body=${encodeURIComponent(`${draft.message}\n\nFrom: ${draft.name}\nReply to: ${draft.email}`)}`
            setStatus("draft")
            return
        }
        setStatus("sending")
        try {
            await emailjs.sendForm(EMAIL_SVCID, EMAIL_TEMPID, formRef.current, EMAIL_PUBKEY)
            setDraft({ name: "", email: "", message: "" })
            startCooldown()
            setStatus("success")
        } catch {
            setStatus("error")
        }
    }

    const field = (name, label, placeholder, multiline = false) => {
        const props = {
            id: `contact-${name}`, name, value: draft[name] || "", onChange: updateField,
            placeholder, autoComplete: "off", required: true, "aria-invalid": Boolean(errors[name]),
            "aria-describedby": errors[name] ? `contact-${name}-error` : name === "message" ? "message-limit" : undefined,
        }
        return <div className={s.field}>
            <label htmlFor={props.id}>{label}</label>
            {multiline ? <textarea {...props} rows={6} maxLength={MAX_MESSAGE} /> : <input {...props} type={name === "email" ? "email" : "text"} autoComplete="off" />}
            {errors[name] && <p id={`contact-${name}-error`} className={s.error}>{errors[name]}</p>}
        </div>
    }

    return <>
        <SeoHead title="Contact | Elliot Chin" description="Have something interesting to build, secure, or figure out? Contact Elliot Chin about software, cybersecurity, industrial systems, and infrastructure." path="/contact" />
        <main ref={containerRef} className={s.page}>
            <div className={s.container}>
                <header className={s.hero}>
                    <p className={s.path}>~/contact</p>
                    <h1>Let's talk<span>.</span></h1>
                    <p className={s.intro}>Have something interesting to build, secure, debug, or figure out?<br className={s.desktopBreak} /> Send me a message.</p>
                    <a className={s.heroEmail} href={`mailto:${emailAddress}`}>{emailAddress} <span aria-hidden="true">↗</span></a>
                    <svg className={s.wave} viewBox="0 0 420 280" fill="none" aria-hidden="true"><path d="M430 10C170 40 430 120 210 170S30 200-20 280M450 35C190 65 450 145 230 195S50 225 0 305" /></svg>
                </header>
                <section className={s.contactArea} aria-label="Contact options">
                    <div>
                        <h2 className={s.sectionLabel}>Send a message</h2>
                        {status === "success" ? <div className={s.success} ref={statusRef} tabIndex={-1}>
                            <span className={s.path}>STATUS::DELIVERED</span>
                            <h3>Message sent.</h3><p>Thanks — I'll get back to you by email.</p>
                            <button className={s.textButton} onClick={() => setStatus("idle")}>Write another message →</button>
                        </div> : <form ref={formRef} onSubmit={handleSubmit} autoComplete="off" noValidate aria-busy={status === "sending"}>
                            <div className={s.honeypot} aria-hidden="true"><input name="company" tabIndex={-1} autoComplete="off" value={hp} onChange={event => setHp(event.target.value)} /></div>
                            {field("name", "Name", "Your name")}
                            {field("email", "Email", "you@example.com")}
                            {field("message", "Message", "What's the problem you're trying to solve?", true)}
                            <p id="message-limit" className={s.characterCount}>{draft.message?.length || 0} / {MAX_MESSAGE}</p>
                            <button className={s.button} type="submit" disabled={status === "sending" || remaining > 0}>{status === "sending" ? "Sending…" : remaining ? `Send again in ${remaining}s` : emailServiceReady ? "Send message" : "Open email draft"}<span aria-hidden="true">→</span></button>
                            <p className={s.formNote}>{emailServiceReady ? "I'll reply to the email address you provide." : "Opens your email app with your message ready to send."}</p>
                        </form>}
                        <div className={s.feedback} role={status === "error" ? "alert" : "status"} aria-live="polite" aria-atomic="true">
                            {status === "sending" && "Sending your message…"}
                            {status === "success" && "Message sent. Thanks — I'll get back to you by email."}
                            {status === "error" && <p>Something went wrong while sending. You can <a href={`mailto:${emailAddress}`}>email me directly at {emailAddress}</a>. Your message is still here.</p>}
                            {status === "draft" && <p>Your draft is ready in your email app. If it didn't open, <a href={`mailto:${emailAddress}`}>email me directly</a> — your message is saved here.</p>}
                            {Object.values(errors).filter(Boolean).length > 0 && "Please check the highlighted fields."}
                        </div>
                    </div>
                    <aside className={s.direct} aria-labelledby="direct-heading">
                        <h2 id="direct-heading" className={s.sectionLabel}>Direct contact</h2>
                        <div className={s.contactItem}><span className={s.label}>Email</span><div className={s.emailRow}><a className={s.emailAddress} href={`mailto:${emailAddress}`}>{emailAddress}</a><button type="button" className={s.copyButton} onClick={handleCopy} aria-label="Copy email address" title="Copy email address"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></svg></button><a className={s.emailArrow} href={`mailto:${emailAddress}`} aria-label="Email Elliot"><span aria-hidden="true">↗</span></a></div><span className={s.copyStatus} role="status">{copied}</span></div>
                        <div className={s.contactItem}><span className={s.label}>LinkedIn</span><a href={linkedInLink} target="_blank" rel="noreferrer">View profile <span aria-hidden="true">↗</span></a></div>
                        <div className={s.contactItem}><span className={s.label}>GitHub</span><a href={githubLink} target="_blank" rel="noreferrer">View repositories <span aria-hidden="true">↗</span></a></div>

                        <p className={s.formNote}>Email is the best way to reach me.</p>
                    </aside>
                </section>
                <footer className={s.footer}><div><strong>Elliot Chin</strong><p>Software · Cybersecurity · Industrial Systems</p></div><nav aria-label="Footer links"><a href={githubLink} target="_blank" rel="noreferrer">GitHub ↗</a><a href={linkedInLink} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={resumeLink}>Resume ↓</a></nav><span>© Elliot Chin</span></footer>
            </div>
            <BackToTopButton targetRef={containerRef} />
        </main>
    </>
}
export async function getServerSideProps() {
    return fetchEnvVars(["EMAIL_SVCID", "EMAIL_TEMPID", "EMAIL_PUBKEY"])
}
