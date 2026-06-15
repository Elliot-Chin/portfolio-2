"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowForwardRounded } from "@mui/icons-material"

export function HorizontalScrollRail({
    className = "",
    railClassName = "",
    children,
    scrollStep = 320,
}) {
    const railRef = useRef(null)
    const [showHint, setShowHint] = useState(false)

    useEffect(() => {
        const rail = railRef.current
        if (!rail) return

        const syncHint = () => {
            const hasOverflow = rail.scrollWidth - rail.clientWidth > 24
            const isAtStart = rail.scrollLeft <= 12
            setShowHint(hasOverflow && isAtStart)
        }

        const onScroll = () => syncHint()
        const onResize = () => syncHint()

        const resizeObserver = new ResizeObserver(syncHint)
        resizeObserver.observe(rail)

        rail.addEventListener("scroll", onScroll, { passive: true })
        window.addEventListener("resize", onResize)
        syncHint()

        return () => {
            resizeObserver.disconnect()
            rail.removeEventListener("scroll", onScroll)
            window.removeEventListener("resize", onResize)
        }
    }, [])

    return (
        <div className={`relative ${className}`}>
            <div ref={railRef} className={railClassName}>
                {children}
            </div>

            {showHint && (
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex items-center pr-3 lg:hidden">
                    <button
                        type="button"
                        aria-label="Scroll right"
                        onClick={() => railRef.current?.scrollBy({ left: scrollStep, behavior: "smooth" })}
                        className="horizontal-scroll-hint pointer-events-auto relative flex h-11 w-11 items-center justify-center rounded-full border border-amber-200/20 bg-slate-950/88 text-amber-100 shadow-[0_14px_30px_rgba(2,8,23,0.34)] backdrop-blur-md"
                    >
                        <ArrowForwardRounded sx={{ fontSize: 22 }} />
                    </button>
                </div>
            )}
        </div>
    )
}
