import dynamic from "next/dynamic"
import Link from "next/link"
import { useEffect, useState } from "react"
import Typewriter from "typewriter-effect"
import { ArrowOutward, KeyboardDoubleArrowDownOutlined } from "@mui/icons-material"
import { AvatarCanvasSkeleton, HeroSectionOverlaySkeleton } from "@/components/sections/SectionSkeletons"
import { VisitorCount } from "@/components/analytics/VisitorCount"
import { heroContent } from "@/data/home"

const Model2 = dynamic(
    () => import("@/components/avatar/Model_2").then((mod) => mod.Model2),
    { ssr: false, loading: () => <AvatarCanvasSkeleton /> }
)

export function HeroSection({ containerRef }) {
    const [isModelReady, setIsModelReady] = useState(false)
    const [showScrollHint, setShowScrollHint] = useState(true)

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)")
        const syncReadyState = () => {
            if (!mq.matches) setIsModelReady(true)
        }

        syncReadyState()
        mq.addEventListener?.("change", syncReadyState)

        return () => mq.removeEventListener?.("change", syncReadyState)
    }, [])

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
            className="relative min-h-[100dvh] snap-start overflow-hidden translate-y-4 opacity-0 transition duration-700 ease-out lg:h-[100dvh] lg:min-h-[100dvh]"
        >
            {!isModelReady && <HeroSectionOverlaySkeleton />}

            <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[96rem] items-center px-6 pb-8 pt-[5.25rem] sm:px-10 md:px-12 md:pb-10 md:pt-[5.5rem] lg:min-h-[calc(100dvh-3.5rem)] lg:px-12 lg:pb-6 lg:pt-10 xl:px-14 xl:pb-10 xl:pt-12">
                <div className="grid w-full items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-10 xl:gap-12">
                    <div className={`relative mx-auto flex w-full max-w-[22rem] items-end justify-center lg:hidden ${isModelReady ? "" : "invisible"}`} aria-hidden={!isModelReady}>
                        <div className="relative h-[19rem] w-full overflow-hidden rounded-[2rem] border border-amber-200/10 bg-slate-950/38 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_16px_40px_rgba(2,8,23,0.28)] backdrop-blur-[3px]">
                            <div className="absolute inset-x-0 top-0 z-20 flex h-10 items-center justify-between border-b border-amber-200/10 bg-slate-950/42 px-4">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-rose-400/90" />
                                    <span className="h-2 w-2 rounded-full bg-amber-300/90" />
                                    <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
                                </div>
                                <span className="font-spacemono text-[9px] uppercase tracking-[0.28em] text-amber-200/75">
                                    mobile_session.exe
                                </span>
                            </div>

                            <div className="absolute inset-x-0 bottom-0 top-10 overflow-hidden">
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,22,40,0.02),rgba(8,22,40,0.24))] z-10 pointer-events-none" />
                                <div className="absolute inset-x-[16%] bottom-[7%] h-16 rounded-full bg-amber-400/12 blur-3xl" />
                                <div className="absolute inset-0">
                                    <Model2 modelScale={0.9} modelY={-1.05} cameraZ={1.72} fov={34} dprMax={3} onReady={() => setIsModelReady(true)} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`lg:py-3 ${isModelReady ? "" : "invisible"}`} aria-hidden={!isModelReady}>
                        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/8 px-3 py-2 font-spacemono text-[9px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_30px_rgba(251,146,60,0.08)] sm:gap-3 sm:px-4 sm:text-[11px] sm:tracking-[0.28em]">
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_18px_rgba(251,191,36,0.8)]" />
                            <span>{heroContent.statusLabel}</span>
                        </div>

                        <h1 className="mt-6 max-w-4xl font-spacemono text-[clamp(2.4rem,13vw,5.9rem)] font-bold uppercase leading-[0.92] tracking-[-0.06em] text-white md:mt-7 lg:text-[clamp(4.25rem,7vw,5.55rem)] xl:mt-8 xl:text-[clamp(4.6rem,7vw,5.9rem)]">
                            <span className="block text-white">{heroContent.title}</span>
                            <span className="mt-2 block text-[1.05rem] leading-tight tracking-normal text-white sm:text-2xl lg:text-[1.65rem] xl:mt-3 xl:text-3xl">
                                {heroContent.role}
                            </span>
                        </h1>

                        <div className="mt-5 min-h-[1.75rem] flex font-spacemono text-base text-emerald-300 sm:mt-7 sm:min-h-[2rem] sm:text-xl xl:mt-8">
                            <span className="mr-2 text-amber-400 sm:mr-3">&gt;</span>
                            <Typewriter
                                options={{
                                    strings: heroContent.descriptorLines,
                                    autoStart: true,
                                    loop: true,
                                    delay: 42,
                                    deleteSpeed: 18,
                                    pauseFor: 1500,
                                    cursor: "_",
                                    wrapperClassName: "inline md:text-2xl text-sm",
                                    cursorClassName: "typewriter-cursor inline-block text-amber-300",
                                }}
                            />
                        </div>

                        <p className="mt-5 max-w-3xl text-balance font-montserrat text-base leading-relaxed text-white sm:mt-7 sm:text-lg lg:max-w-[42rem] lg:text-[1.03rem] lg:leading-[1.7] xl:mt-8 xl:text-xl">
                            {heroContent.summary}
                        </p>

                        <div className="mt-4 inline-flex max-w-full items-center gap-2 rounded-full border border-amber-200/12 bg-slate-950/36 px-3 py-2 font-spacemono text-[10px] uppercase tracking-[0.18em] text-slate-300 sm:mt-5 sm:px-4 sm:text-[11px] sm:tracking-[0.24em]">
                            <span className="text-amber-300">system</span>
                            <span className="text-slate-500">/</span>
                            <VisitorCount pageKey="site" label="Visitors" className="inline-flex items-center gap-1" />
                        </div>

                        <div className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4 xl:mt-10">
                            <button
                                onClick={goToAbout}
                                className="home-btn home-btn-primary group"
                            >
                                <span>Initiate_Handshake</span>
                                <ArrowOutward className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </button>

                            <Link
                                href="/wtr/Elliot_Chin_Resume.pdf"
                                target="_blank"
                                className="home-btn home-btn-secondary"
                            >
                                Download_Manifest
                            </Link>
                        </div>
                    </div>

                    <div className={`relative hidden lg:min-h-0 lg:py-3 lg:flex lg:items-end lg:justify-end ${isModelReady ? "" : "invisible"}`} aria-hidden={!isModelReady}>
                        <div className="relative h-[min(64vh,42rem)] w-[min(34vw,29rem)] min-h-[31rem] min-w-[25rem] xl:h-[72vh] xl:w-[36rem] xl:max-h-[820px] xl:min-h-[580px]">
                            <div className="absolute inset-x-[12%] bottom-[4%] h-32 rounded-full bg-amber-400/12 blur-3xl" />
                            <div className="absolute inset-x-[4%] top-[4%] bottom-[3%] overflow-hidden rounded-[2.35rem] border border-amber-200/10 bg-slate-950/42 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_50px_rgba(2,8,23,0.34)] backdrop-blur-[3px]">
                                <div className="absolute inset-x-0 top-0 z-20 flex h-12 items-center justify-between border-b border-amber-200/10 bg-slate-950/42 px-5">
                                    <div className="flex items-center gap-2">
                                        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                                    </div>
                                    <span className="font-spacemono text-[10px] uppercase tracking-[0.3em] text-amber-200/75">
                                        coding_session.exe
                                    </span>
                                </div>

                                <div className="absolute inset-x-0 top-12 bottom-0 overflow-hidden">
                                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,22,40,0.04),rgba(8,22,40,0.34))] z-10 pointer-events-none" />
                                    <div className="absolute inset-x-0 top-0 h-px bg-amber-200/14" />
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
                <div className="absolute inset-x-0 bottom-8 z-20 flex flex-col items-center gap-2 font-montserrat text-xs uppercase tracking-[0.25em] text-slate-300/70 lg:hidden">
                    <span>Scroll</span>
                    <KeyboardDoubleArrowDownOutlined fontSize="small" />
                </div>
            )}
        </section>
    )
}
