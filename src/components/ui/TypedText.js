import { useEffect, useRef, useState } from "react"

// Reserve the full heading's space while revealing text once when it enters view.
export function TypedText({ text, speed = 45, keepCursor = false }) {
    const ref = useRef(null)
    const [length, setLength] = useState(0)
    const [typing, setTyping] = useState(false)
    useEffect(() => {
        const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
        let timer
        let observer
        let started = false
        const finish = () => { window.clearTimeout(timer); setLength(text.length); setTyping(false) }
        const start = () => {
            if (started) return
            started = true
            if (motion.matches) return finish()
            setLength(0)
            setTyping(true)
            let position = 0
            const tick = () => {
                position++
                setLength(position)
                if (position >= text.length) { setTyping(false); return }
                timer = window.setTimeout(tick, speed)
            }
            timer = window.setTimeout(tick, 180)
        }
        const onMotion = () => { if (motion.matches) finish() }
        motion.addEventListener("change", onMotion)
        observer = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) { start(); observer.disconnect() }
        }, { threshold: .2 })
        observer.observe(ref.current)
        return () => { window.clearTimeout(timer); observer.disconnect(); motion.removeEventListener("change", onMotion) }
    }, [text, speed])
    return <span ref={ref} className="typed-text" style={{color:"inherit"}}>
        <span className="typed-reserve" aria-hidden="true" style={{color:"inherit"}}>{text}</span>
        <span className="typed-visible" aria-hidden="true" style={{color:"inherit"}}>{text.slice(0,length)}{(typing || (keepCursor && length === text.length)) && <span className="typed-cursor" style={{color:"#fb923c"}}>▎</span>}</span>
        <span className="typed-accessible" style={{color:"inherit"}}>{text}</span>
    </span>
}
