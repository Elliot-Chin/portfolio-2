import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import s from "@/styles/Projects.module.css"

export function SystemFlow({ nodes, caption, compact = false }) {
    return <figure className={`${s.flowFigure} ${compact ? s.compactFlow : ""}`}>
        <ol className={s.flow} aria-label={caption || "System flow"}>{nodes.map((node, index) => <li key={`${index}-${node}`}><span className={s.nodeNumber}>{String(index + 1).padStart(2, "0")}</span><span>{node}</span>{index < nodes.length - 1 && <span className={s.connector} aria-hidden="true">→</span>}</li>)}</ol>
        {caption && <figcaption>{caption}</figcaption>}
    </figure>
}

export function ProjectFigure({ src, title, caption, hero = false }) {
    const [open, setOpen] = useState(false)
    const triggerRef = useRef(null)
    const closeRef = useRef(null)
    useEffect(() => {
        if (!open) return
        const oldOverflow = document.body.style.overflow
        const scrollRoot = document.querySelector("main")
        const oldMainOverflow = scrollRoot?.style.overflow
        document.body.style.overflow = "hidden"
        if (scrollRoot) scrollRoot.style.overflow = "hidden"
        closeRef.current?.focus()
        const keyHandler = event => {
            if (event.key === "Escape") setOpen(false)
            if (event.key === "Tab") { event.preventDefault(); closeRef.current?.focus() }
        }
        window.addEventListener("keydown", keyHandler)
        return () => {
            document.body.style.overflow = oldOverflow
            if (scrollRoot) scrollRoot.style.overflow = oldMainOverflow
            window.removeEventListener("keydown", keyHandler)
            triggerRef.current?.focus()
        }
    }, [open])
    return <figure className={`${s.figure} ${hero ? s.heroFigure : ""}`}>
        <button type="button" className={s.imageButton} ref={triggerRef} onClick={() => setOpen(true)} aria-label={`Enlarge ${title}`}>
            <div className={s.imageFrame}><Image src={src} alt={title} fill sizes={hero ? "(max-width: 700px) 94vw, 850px" : "(max-width: 700px) 94vw, 380px"} className={s.screenshot} priority={hero} /></div><span className={s.zoomHint} aria-hidden="true">↗</span>
        </button>
        {caption && <figcaption>{caption}</figcaption>}
        {open && createPortal(<div className={s.overlay} onClick={() => setOpen(false)}><div className={s.dialog} role="dialog" aria-modal="true" aria-label={title} onClick={event => event.stopPropagation()}><div className={s.dialogHeader}><h2>{title}</h2><button ref={closeRef} onClick={() => setOpen(false)} type="button">Close ×</button></div><img src={src} alt={title} className={s.fullImage} />{caption && <p>{caption}</p>}</div></div>, document.body)}
    </figure>
}
export function ScreenshotGallery({ items }) {
    return <div className={`${s.gallery} ${items.length === 2 || items.length === 4 ? s.twoImages : ""}`}>{items.map(image => <div key={image.src}><h3 className={s.shotTitle}>{image.title}</h3><ProjectFigure {...image} /></div>)}</div>
}
