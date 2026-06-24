import { useEffect, useRef, useState } from "react"

export function AutoPanLabel({ text, className = "" }) {
    const viewportRef = useRef(null)
    const trackRef = useRef(null)
    const [style, setStyle] = useState({})
    const [shouldPan, setShouldPan] = useState(false)

    useEffect(() => {
        const viewport = viewportRef.current
        const track = trackRef.current
        if (!viewport || !track) return

        const update = () => {
            const mobile = window.innerWidth < 640
            if (!mobile) {
                setShouldPan(false)
                setStyle({})
                return
            }

            const overflow = Math.ceil(track.scrollWidth - viewport.clientWidth)
            if (overflow <= 8) {
                setShouldPan(false)
                setStyle({})
                return
            }

            setShouldPan(true)
            setStyle({
                "--experience-title-scroll-distance": `-${overflow}px`,
                "--experience-title-scroll-duration": `${Math.max(7, overflow / 26 + 5)}s`,
                "--experience-title-scroll-delay": "1s",
            })
        }

        const requestUpdate = () => requestAnimationFrame(update)
        const resizeObserver = new ResizeObserver(requestUpdate)
        resizeObserver.observe(viewport)
        resizeObserver.observe(track)
        window.addEventListener("resize", requestUpdate)
        update()

        return () => {
            resizeObserver.disconnect()
            window.removeEventListener("resize", requestUpdate)
        }
    }, [text])

    return (
        <div ref={viewportRef} className={`max-w-full overflow-hidden ${className}`}>
            <div
                ref={trackRef}
                style={style}
                className={`inline-flex min-w-max whitespace-nowrap ${shouldPan ? "experience-title-marquee" : ""}`}
            >
                {text}
            </div>
        </div>
    )
}
