import { useEffect, useMemo, useState } from "react"
import Typewriter from "typewriter-effect"
import { KeyboardDoubleArrowDownOutlined } from "@mui/icons-material"
import { Model2 } from "@/components/avatar/Model_2"
import { facts, navLinks } from "@/components/data/heroData"

export function HeroSection({ setSelectedPage, setPageLoading, router, containerRef }) {
    const shuffledFacts = useMemo(() => {
        const arr = [...facts]
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const t = arr[i]; arr[i] = arr[j]; arr[j] = t
        }
        return arr
    }, [])

    const [showScrollHint, setShowScrollHint] = useState(true)

    const handleNavClick = (href, label) => {
        if (label === "About Me" && containerRef.current) {
            const secs = Array.from(containerRef.current.querySelectorAll("section[data-fade]"))
            if (secs.length > 1) secs[1].scrollIntoView({ behavior: "smooth", block: "start" })
            return
        }
        setSelectedPage(label)
        setPageLoading(true)
        router.push(href)
    }

    // scroll hint hide on user interaction
    useEffect(() => {
        const el = containerRef.current
        if (!el || !showScrollHint) return
        let userInteracted = false
        const markInteracted = () => { userInteracted = true }
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

    return (
        <section
            data-fade
            className="relative min-h-[100svh] sm:min-h-screen snap-start overflow-hidden
             transition-[opacity,transform] duration-200 ease-linear
             will-change-[opacity,transform]"
            style={{
                opacity: "var(--vis, 0)",
                transform: "translateY(calc((1 - var(--vis, 0)) * 8vh))",
            }}
        >
            <div
                className="absolute inset-x-0 z-0 pointer-events-none
             bottom-[max(0px,env(safe-area-inset-bottom))]
             h-[55svh] sm:inset-0 sm:h-full
             supports-[height:100dvh]:h-[55dvh]"
            >
                <Model2 modelScale={0.7} cameraZ={1.5} fov={38} dprMax={2} />
            </div>

            {/* Foreground overlay */}
            <div className="relative z-10 flex flex-col items-center h-full px-4">
                <div className="rounded-3xl p-6 sm:p-8 lg:p-10 text-center flex flex-col items-center justify-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
                        Hey! I’m Elliot.
                    </h1>

                    <div className="text-sm md:text-2xl lg:text-3xl font-spacemono leading-relaxed text-slate-50 min-h-[4rem] sm:min-h-[4.5rem]">
                        <Typewriter
                            options={{
                                strings: shuffledFacts,
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                deleteSpeed: 20,
                                pauseFor: 2200,
                                cursor: "▍",
                                wrapperClassName: "inline whitespace-pre-wrap align-baseline",
                                cursorClassName: "typewriter-cursor inline-block align-baseline ml-2 opacity-90",
                            }}
                        />
                    </div>

                    <div className="mt-4 flex gap-3 justify-center items-center flex-wrap">
                        {navLinks.map(({ label, href, Icon }) => (
                            <button
                                key={href}
                                onClick={() => handleNavClick(href, label)}
                                className="text-amber-950 font-semibold px-6 py-2 bg-gradient-to-r from-amber-500 to-pink-400 shadow-md rounded-full
                                focus:border-none outline-none
                                text-sm w-40 sm:w-48
                                hover:-translate-y-1 hover:from-pink-400 hover:to-amber-500
                                transition-transform duration-100"
                                // className="glass px-4 py-3 w-32 sm:w-40 justify-center rounded-xl flex items-center gap-2 transition transform hover:-translate-y-2 !focus:translate-y-0 active:translate-y-0"
                                aria-label={label}
                            >
                                <Icon fontSize="small" />
                                <span className="ml-2 text-sm sm:text-base font-medium">{label}</span>
                            </button>
                        ))}
                    </div>

                    {showScrollHint && (
                        <div className="flex flex-col gap-2 mt-[5vh] font-montserrat text-sm sm:text-xl items-center justify-center animate-bounce">
                            <span>Scroll</span>
                            <KeyboardDoubleArrowDownOutlined fontSize="medium" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
