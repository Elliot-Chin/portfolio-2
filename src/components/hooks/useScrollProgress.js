import { useEffect } from "react"

export function useScrollProgress(containerRef) {
    useEffect(() => {
        const el = containerRef.current
        if (!el) return
        const sections = Array.from(el.querySelectorAll("section[data-fade]"))
        let raf = 0

        const update = () => {
            const vh = el.clientHeight
            const center = vh / 2

            for (const sec of sections) {
                const r = sec.getBoundingClientRect()
                const secCenter = r.top + r.height / 2
                const dist = Math.abs(secCenter - center)
                const falloff = vh * 0.85
                let vis = 1 - dist / falloff
                vis = Math.max(0, Math.min(vis, 1))
                sec.style.setProperty("--vis", vis.toFixed(3))
            }
            raf = 0
        }

        const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
        update()
        el.addEventListener("scroll", onScroll, { passive: true })
        window.addEventListener("resize", update)
        return () => {
            el.removeEventListener("scroll", onScroll)
            window.removeEventListener("resize", update)
            if (raf) cancelAnimationFrame(raf)
        }
    }, [containerRef])
}
