import { useRef, useEffect, useState, useCallback, useMemo } from "react"
import Head from "next/head"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import NavBar from "@/components/nav/Navbar"
import { useDesktop } from "@/components/hooks/useDesktop"
import { ProjectFishbone } from "@/components/projects/ProjectFishbone"
import { MobileProjectFishbone } from "@/components/projects/MobileProjectFishbone"
import { ReactTyped } from "react-typed"

// SOURCE OF TRUTH: filter your existing timelineData for type === "project"
// If you prefer, replace this with an import from your data module.
import { timeline } from "@/components/data/timelineData"
import { Loader } from "@/components/nav/Loader"

const projectsFromTimeline = (timeline ?? []).filter((t) => t.type === "project")

export default function ProjectsPage() {
    const containerRef = useRef(null)
    const isDesktop = useDesktop()

    // Fallback if data not found: two placeholder projects
    const projects = useMemo(() => {
        if (projectsFromTimeline.length >= 1) return projectsFromTimeline
    }, [])

    const titles = projects.map((p) => p.title)
    const lastIdx = Math.max(0, titles.length - 1)
    const [idx, setIdx] = useState(0)
    const [dir, setDir] = useState(0)
    const [lock, setLock] = useState(false)

    const [loading, setLoading] = useState({ state: false, name: "" })

    const goTo = useCallback((next) => {
        if (lock) return
        const clamped = Math.max(0, Math.min(lastIdx, next))
        if (clamped === idx) return
        setDir(clamped > idx ? 1 : -1)
        setLock(true)
        setIdx(clamped)
        setTimeout(() => setLock(false), 420)
    }, [idx, lastIdx, lock])

    const goNext = useCallback(() => goTo(idx + 1), [goTo, idx])
    const goPrev = useCallback(() => goTo(idx - 1), [goTo, idx])

    // Wheel/keys/swipe — same feel as Experiences
    useEffect(() => {
        if (!isDesktop) return
        const root = containerRef.current
        if (!root) return

        const onWheel = (e) => {
            e.preventDefault()
            if (Math.abs(e.deltaY) < 8) return
            e.deltaY > 0 ? goNext() : goPrev()
        }

        root.addEventListener("wheel", onWheel, { passive: false })
        return () => root.removeEventListener("wheel", onWheel)
    }, [isDesktop, goNext, goPrev])

    useEffect(() => {
        const onKey = (e) => {
            if (["ArrowDown", "PageDown", " "].includes(e.key)) { e.preventDefault(); goNext() }
            if (["ArrowUp", "PageUp"].includes(e.key)) { e.preventDefault(); goPrev() }
            if (!isDesktop) {
                if (e.key === "ArrowRight") { e.preventDefault(); goNext() }
                if (e.key === "ArrowLeft") { e.preventDefault(); goPrev() }
            }
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [isDesktop, goNext, goPrev])

    useEffect(() => {
        const el = containerRef.current
        if (!el) return
        let startX = 0, startY = 0
        const onStart = (e) => { startX = e.touches[0].clientX; startY = e.touches[0].clientY }
        const onEnd = (e) => {
            const endX = (e.changedTouches?.[0]?.clientX) ?? startX
            const endY = (e.changedTouches?.[0]?.clientY) ?? startY
            const dx = endX - startX
            const dy = endY - startY
            if (!isDesktop) {
                if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) { dx < 0 ? goNext() : goPrev() }
            } else {
                if (Math.abs(dy) > 60 && Math.abs(dy) > Math.abs(dx)) { dy > 0 ? goNext() : goPrev() }
            }
        }
        el.addEventListener("touchstart", onStart, { passive: true })
        el.addEventListener("touchend", onEnd, { passive: true })
        return () => {
            el.removeEventListener("touchstart", onStart)
            el.removeEventListener("touchend", onEnd)
        }
    }, [isDesktop, goNext, goPrev])

    const active = projects[idx]

    return (
        <>
            <Head>
                <title>Elliot Chin — Projects</title>
                <meta name="description" content="Selected projects by Elliot Chin." />
            </Head>

            {loading.state && <Loader pageName={loading.name} />}

            <main ref={containerRef} className="relative h-screen w-screen overflow-hidden bg-transparent text-amber-50 pt-16">
                <NavBar />

                {isDesktop ? (
                    <ProjectFishbone titles={titles} activeIndex={idx} onJump={goTo} />
                ) : (
                    <MobileProjectFishbone titles={titles} activeIndex={idx} onJump={goTo} />
                )}

                <section className={(isDesktop ? "pl-[280px]" : "pl-0") + " h-full"}>
                    <div className="relative h-full">
                        <div className="absolute right-4 top-4 z-10">
                            <div className="rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs text-white/80">
                                {isDesktop ? "Scroll / ↑↓ / Swipe to navigate" : "Swipe ← / →"}
                            </div>
                        </div>

                        <AnimatePresence initial={false} custom={dir} mode="popLayout">
                            <motion.div
                                key={active?.id}
                                custom={dir}
                                initial={{ opacity: 0, x: dir >= 0 ? 60 : -60, scale: 0.98 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: dir >= 0 ? -60 : 60, scale: 0.98 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute inset-0 flex flex-col"
                            >
                                <div className={"pt-4 " + (isDesktop ? "px-6" : "px-4")}>
                                    <div className="flex items-center gap-3 rounded-full bg-white/10 backdrop-blur px-5 py-2 w-fit">
                                        <span className="text-2xl font-bold text-red-300" dangerouslySetInnerHTML={{ __html: active?.title.split("—")[1] || "" }} />
                                    </div>
                                </div>

                                <div className={"px-4 md:px-6 mt-4 pb-2" + (isDesktop ? "" : " overscroll-contain")}>
                                    <div className="w-full max-w-5xl mx-auto">
                                        {active && (
                                            <motion.article
                                                key={active.id}
                                                initial={{ opacity: 0, y: 16 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.35 }}
                                                className="rounded-3xl border overflow-hidden backdrop-blur border-white/15 bg-white/5"
                                            >
                                                <div className="p-6 md:p-10">
                                                    <header className="flex items-start justify-between gap-4">
                                                        <ReactTyped
                                                            startWhenVisible
                                                            strings={[active.title.split("—")[1]]}
                                                            typeSpeed={40}
                                                            className="text-xl md:text-4xl lg:5xl font-extrabold text-amber-50 w-[55vw] tracking-tight"
                                                            showCursor={false}
                                                            contentType="html"
                                                        />
                                                        <div className="text-4xl md:text-5xl">
                                                            {active.logo ? (
                                                                <img src={active.logo} height={64} width={64} className="rounded-lg" />
                                                            ) : (
                                                                "💡"
                                                            )}
                                                        </div>
                                                    </header>

                                                    {/* TL;DR */}
                                                    <p
                                                        className="mt-4 text-xl font-semibold leading-relaxed text-white"
                                                        dangerouslySetInnerHTML={{ __html: active.desc }}
                                                    />

                                                    {active.tech?.length > 0 && (
                                                        <div className="mt-6 flex flex-wrap gap-2">
                                                            {active.tech.map((t) => (
                                                                <span key={t} className="text-amber-950 font-semibold bg-amber-200/90 rounded-full px-3 py-1 text-sm">
                                                                    {t}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {active.link && (
                                                        <div className="mt-8 flex justify-end">
                                                            <Link href={active.link}
                                                                onClick={() => {
                                                                    setLoading({ state: true, name: active.title.split("—")[1].replace(/<[^>]*>/g, "") })
                                                                }}
                                                                className="inline-flex items-center gap-2 rounded-full glass px-5 py-2 transition">
                                                                See More
                                                            </Link>
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.article>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>
            </main>
        </>
    )
}
