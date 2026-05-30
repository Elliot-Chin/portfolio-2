import dynamic from "next/dynamic"
import Link from "next/link"
import { useEffect, useState } from "react"
import Typewriter from "typewriter-effect"
import { ArrowOutward, KeyboardDoubleArrowDownOutlined } from "@mui/icons-material"
import { AvatarCanvasSkeleton, HeroSectionOverlaySkeleton } from "@/components/sections/SectionSkeletons"

const Model2 = dynamic(
    () => import("@/components/avatar/Model_2").then((mod) => mod.Model2),
    { ssr: false, loading: () => <AvatarCanvasSkeleton /> }
)

const descriptorLines = [
    "Cybersecurity architecture.",
    "OT network resilience.",
    "Infrastructure hardening.",
]

export function HeroSection({ containerRef }) {
    const [isModelReady, setIsModelReady] = useState(false)
    const [showScrollHint, setShowScrollHint] = useState(true)

    const goToAbout = () => {
        if (!containerRef.current) return
        const secs = Array.from(containerRef.current.querySelectorAll("section[data-fade]"))
        if (secs.length > 1) secs[1].scrollIntoView({ behavior: "smooth", block: "start" })
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

    return (
        <section
            data-fade
            className="relative min-h-[100svh] sm:min-h-screen snap-start overflow-hidden"
            style={{
                opacity: "var(--vis, 1)",
                transform: "translateY(calc((1 - var(--vis, 1)) * 4vh))",
            }}
        >
            {!isModelReady && <HeroSectionOverlaySkeleton />}

            <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[80%] items-center px-6 pb-16 pt-24 sm:px-10 lg:px-14">
                <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
                    <div className={`${isModelReady ? "" : "invisible"}`} aria-hidden={!isModelReady}>
                        <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 font-spacemono text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300 shadow-[0_0_30px_rgba(45,212,191,0.08)]">
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]" />
                            <span>System_Active // Secure_Link_Established</span>
                        </div>

                        <h1 className="mt-8 max-w-4xl font-spacemono text-[clamp(3rem,8vw,5.9rem)] font-bold uppercase leading-[0.92] tracking-[-0.06em] text-slate-100">
                            <span className="block text-blue-200">Elliot Chin</span>
                            <span className="mt-2 block text-slate-100 text-3xl tracking-normal">JR. Cybersecurity application Specialist</span>
                        </h1>

                        <div className="mt-8 min-h-[2rem] flex font-spacemono text-lg text-emerald-300 sm:text-xl">
                            <span className="mr-3 text-cyan-500">&gt;</span>
                            <Typewriter
                                options={{
                                    strings: descriptorLines,
                                    autoStart: true,
                                    loop: true,
                                    delay: 42,
                                    deleteSpeed: 18,
                                    pauseFor: 1500,
                                    cursor: "_",
                                    wrapperClassName: "inline",
                                    cursorClassName: "typewriter-cursor inline-block text-emerald-300",
                                }}
                            />
                        </div>

                        <p className="mt-8 max-w-3xl text-balance font-montserrat text-lg leading-relaxed text-slate-200/88 sm:text-xl">
                            Software developer with experience across cybersecurity, OT/industrial networking,
                            infrastructure management, full-stack application development, and applied AI research
                            support. Specialized in bridging the gap between legacy industrial stability and modern
                            digital security architectures.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <button
                                onClick={goToAbout}
                                className="home-btn home-btn-primary group"
                            >
                                <span>Initiate_Handshake</span>
                                <ArrowOutward className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </button>

                            <Link
                                href="/wtr/EC_Resume.pdf"
                                target="_blank"
                                className="home-btn home-btn-secondary"
                            >
                                Download_Manifest
                            </Link>
                        </div>
                    </div>

                    <div className={`relative hidden min-h-[540px] lg:flex lg:items-end lg:justify-end ${isModelReady ? "" : "invisible"}`} aria-hidden={!isModelReady}>
                        <div className="relative h-[72vh] w-[30rem] max-h-[820px] min-h-[580px] xl:w-[36rem]">
                            <div className="absolute inset-x-[12%] bottom-[4%] h-32 rounded-full bg-cyan-400/12 blur-3xl" />
                            <div className="absolute inset-x-[4%] top-[4%] bottom-[3%] overflow-hidden rounded-[2.35rem] border border-cyan-200/10 bg-slate-950/42 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_50px_rgba(2,8,23,0.34)] backdrop-blur-[3px]">
                                <div className="absolute inset-x-0 top-0 z-20 flex h-12 items-center justify-between border-b border-cyan-200/10 bg-slate-950/42 px-5">
                                    <div className="flex items-center gap-2">
                                        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                                    </div>
                                    <span className="font-spacemono text-[10px] uppercase tracking-[0.3em] text-cyan-200/75">
                                        coding_session.exe
                                    </span>
                                </div>

                                <div className="absolute inset-x-0 top-12 bottom-0 overflow-hidden">
                                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,22,40,0.04),rgba(8,22,40,0.34))] z-10 pointer-events-none" />
                                    <div className="absolute inset-x-0 top-0 h-px bg-cyan-200/14" />
                                    <div className="absolute inset-0">
                                        <Model2 modelScale={1.1} modelY={-1.16} cameraZ={1.55} fov={40} dprMax={10} onReady={() => setIsModelReady(true)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showScrollHint && isModelReady && (
                <div className="absolute inset-x-0 bottom-8 z-20 flex flex-col items-center gap-2 font-montserrat text-xs uppercase tracking-[0.25em] text-slate-300/70">
                    <span>Scroll</span>
                    <KeyboardDoubleArrowDownOutlined fontSize="small" />
                </div>
            )}
        </section>
    )
}
