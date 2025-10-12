// pages/experiences.js
import { useMemo, useRef, useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Head from "next/head"
import Link from "next/link"
import NavBar from "@/components/nav/Navbar"

import { timeline } from "@/components/data/timelineData"
import { useDesktop } from "@/components/hooks/useDesktop"
import { FishboneTimeline } from "@/components/experiences/FishboneTimeline"
import { MobileFishboneTimeline } from "@/components/experiences/MobileFishboneTimeline"
import {
    KeyboardDoubleArrowLeftOutlined,
    KeyboardDoubleArrowRightOutlined,
} from "@mui/icons-material"
import { ReactTyped } from "react-typed"

// helpers
const uniqYearsAsc = (items) =>
    Array.from(new Set(items.map((i) => i.year))).sort((a, b) => a - b)
const itemsByYear = (items) =>
    items.reduce((acc, it) => ((acc[it.year] ||= []).push(it), acc), {})
const clamp = (v, min, max) => Math.max(min, Math.min(max, v))

export default function ExperiencePage() {
    const containerRef = useRef(null)
    const scrollAreaRef = useRef(null)
    const isDesktop = useDesktop()

    const years = useMemo(() => {
        const base = uniqYearsAsc(timeline)
        const CURR = new Date().getFullYear()
        // remove any existing current-year+ entry to avoid duplicates
        const filtered = base.filter(y => y !== `${CURR}+`)
        // ensure the final one is always <current-year>+
        return [...filtered, `${CURR}+`]
    }, [])
    const groups = useMemo(() => itemsByYear(timeline), [])
    const lastIdx = years.length - 1

    const [idx, setIdx] = useState(0)   // active year index
    const [dir, setDir] = useState(0)   // slide direction
    const [lock, setLock] = useState(false)
    const [subIdx, setSubIdx] = useState(0) // index within year

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

    // reset within-year pager when year changes
    useEffect(() => { setSubIdx(0) }, [idx])

    // desktop wheel: only trigger year nav if the middle pane can't scroll further
    useEffect(() => {
        if (!isDesktop) return
        const root = containerRef.current
        if (!root) return

        const canScrollMid = (deltaY) => {
            const sc = scrollAreaRef.current
            if (!sc) return false
            const atTop = sc.scrollTop <= 0
            const atBottom = sc.scrollTop + sc.clientHeight >= sc.scrollHeight - 1
            if (deltaY > 0) return !atBottom
            if (deltaY < 0) return !atTop
            return false
        }

        const onWheel = (e) => {
            if (canScrollMid(e.deltaY)) return
            e.preventDefault()
            if (Math.abs(e.deltaY) < 8) return
            e.deltaY > 0 ? goNext() : goPrev()
        }

        root.addEventListener("wheel", onWheel, { passive: false })
        return () => root.removeEventListener("wheel", onWheel)
    }, [isDesktop, goNext, goPrev])

    // keyboard nav
    useEffect(() => {
        const onKey = (e) => {
            if (["ArrowDown", "PageDown", " "].includes(e.key)) { e.preventDefault(); goNext() }
            if (["ArrowUp", "PageUp"].includes(e.key)) { e.preventDefault(); goPrev() }
            if (e.key === "Home") { e.preventDefault(); goTo(0) }
            if (e.key === "End") { e.preventDefault(); goTo(lastIdx) }
            if (!isDesktop) {
                if (e.key === "ArrowRight") { e.preventDefault(); goNext() }
                if (e.key === "ArrowLeft") { e.preventDefault(); goPrev() }
            }
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [isDesktop, goNext, goPrev, goTo, lastIdx])

    // touch (swipe)
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

    // active data
    const CURR = new Date().getFullYear()
    const activeYear = years[idx]
    const rawYear = years[idx]
    const dataYear = (typeof rawYear === "string" && rawYear.endsWith("+")) ? CURR + "+" : rawYear
    const activeItems = groups[dataYear] || []
    const totalInYear = activeItems.length
    const currentItem = totalInYear ? activeItems[clamp(subIdx, 0, totalInYear - 1)] : null

    const goSubPrev = () => setSubIdx((s) => clamp(s - 1, 0, Math.max(0, totalInYear - 1)))
    const goSubNext = () => setSubIdx((s) => clamp(s + 1, 0, Math.max(0, totalInYear - 1)))

    // fixed heights for the scrollable pane
    const midHeightClass = totalInYear > 1 ? "h-[55vh]" : "h-[63vh]"

    return (
        <>
            <Head>
                <title>Elliot Chin — Experiences</title>
                <meta name="description" content="Hey — I’m Elliot. These are my experiences." />
            </Head>

            <main ref={containerRef} className="relative h-screen w-screen overflow-hidden bg-transparent text-amber-50 pt-16">
                <NavBar />

                {/* Rails */}
                {isDesktop ? (
                    <FishboneTimeline years={years} activeIndex={idx} onJump={goTo} />
                ) : (
                    <MobileFishboneTimeline years={years} activeIndex={idx} onJump={goTo} />
                )}

                {/* Content column */}
                <section className={(isDesktop ? "pl-[280px]" : "pl-0") + " h-full"}>
                    <div className="relative h-full">
                        {/* Hint chip */}
                        <div className="absolute right-4 top-4 z-10">
                            <div className="rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs text-white/80">
                                {isDesktop ? "Scroll / ↑↓ / Swipe to navigate" : "Swipe ← / →"}
                            </div>
                        </div>

                        <AnimatePresence initial={false} custom={dir} mode="popLayout">
                            <motion.div
                                key={activeYear}
                                custom={dir}
                                initial={{ opacity: 0, x: dir >= 0 ? 60 : -60, scale: 0.98 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: dir >= 0 ? -60 : 60, scale: 0.98 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute inset-0 flex flex-col"
                            >
                                {/* YEAR chip */}
                                <div className={"pt-4 " + (isDesktop ? "px-6" : "px-4")}>
                                    <div className="flex items-center gap-3 rounded-full bg-white/10 backdrop-blur px-5 py-2 w-fit">
                                        <span className="text-sm tracking-widest opacity-90">YEAR</span>
                                        <span className="text-2xl font-bold text-red-300">
                                            {(() => {
                                                const sample = (groups[activeYear] || [])[0]
                                                if (!sample) return activeYear
                                                const start = sample.start ?? sample.year
                                                const end = sample.current ? "PRESENT" : (sample.end ?? sample.year)
                                                return start === end ? `${start}` : `${start} - ${end}`
                                            })()}
                                        </span>
                                    </div>
                                </div>

                                {/* Middle region */}
                                <div className={"px-4 md:px-6 mt-4 pb-2" + (isDesktop ? "" : " overscroll-contain")}>
                                    <div className="w-full max-w-5xl mx-auto">
                                        {/* SCROLLABLE PANE (fixed height) */}
                                        <div
                                            ref={scrollAreaRef}
                                            className={`overflow-y-auto ${midHeightClass}`}
                                        >
                                            {currentItem && (
                                                <motion.article
                                                    key={currentItem.id}
                                                    initial={{ opacity: 0, y: 16 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.35 }}
                                                    className={`rounded-3xl border overflow-hidden backdrop-blur ${currentItem.type === "born"
                                                        ? "border-pink-300/50 bg-pink-300/10"
                                                        : "border-white/15 bg-white/5"
                                                        }`}
                                                >
                                                    <div className="p-6 md:p-10">
                                                        <header className="flex items-start justify-between gap-4">
                                                            <ReactTyped
                                                                startWhenVisible
                                                                strings={[currentItem.title]}
                                                                typeSpeed={40}
                                                                className="text-2xl md:text-4xl lg:5xl font-extrabold text-amber-50 w-[55vw] tracking-tight"
                                                                showCursor={false}
                                                                contentType="html"
                                                            />
                                                            <div className="text-4xl md:text-5xl">
                                                                {currentItem.type === "born" ? "🐣" : currentItem.logo ?
                                                                    <img src={currentItem.logo} height={64} width={64} className="rounded-lg" /> :
                                                                    currentItem.type === "job" ? "💼"
                                                                        : currentItem.type === "lore" ?
                                                                            "🎭" : "💡"}
                                                            </div>
                                                        </header>

                                                        <p
                                                            className={`mt-4 text-xl font-semibold leading-relaxed ${currentItem.details?.length > 0 ? "text-blue-900 italic" : "text-amber-950"
                                                                }`}
                                                            dangerouslySetInnerHTML={{ __html: currentItem.desc }}
                                                        />

                                                        {currentItem.details?.length > 0 && (
                                                            <ul className="mt-6 grid gap-2 text-amber-950 text-base md:text-lg list-disc pl-6">
                                                                {currentItem.details.map((d, i) => <li key={i}>{d}</li>)}
                                                            </ul>
                                                        )}

                                                        {currentItem.tech?.length > 0 && (
                                                            <div className="mt-6 flex flex-wrap gap-2">
                                                                {currentItem.tech.map((t) => (
                                                                    <span
                                                                        key={t}
                                                                        className="text-amber-950 font-semibold bg-amber-200/90 rounded-full px-3 py-1 text-sm"
                                                                    >
                                                                        {t}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        )}

                                                        {currentItem.type === "project" && currentItem.link && (
                                                            <div className="mt-8 flex justify-end">
                                                                <Link
                                                                    href={currentItem.link}
                                                                    className="inline-flex items-center gap-2 rounded-full glass px-5 py-2 transition"
                                                                >
                                                                    See More
                                                                </Link>
                                                            </div>
                                                        )}
                                                    </div>
                                                </motion.article>
                                            )}
                                            {/* give a little breathing room at the bottom of the scroller */}
                                            <div className="h-2" />
                                        </div>

                                        {/* PAGER OUTSIDE the scroller, directly under the card */}
                                        {totalInYear > 1 && (
                                            <div className="mt-3 md:mt-4 flex items-center justify-center gap-4">
                                                <button
                                                    onClick={goSubPrev}
                                                    disabled={subIdx <= 0}
                                                    className="rounded-full bg-white/15 px-5 py-2 text-sm text-white/80 hover:bg-white/25 transition disabled:opacity-40"
                                                >
                                                    <KeyboardDoubleArrowLeftOutlined fontSize="small" />
                                                    <span className="ml-1">Prev</span>
                                                </button>

                                                <span className="text-sm text-white/70 tabular-nums">
                                                    {subIdx + 1} / {totalInYear}
                                                </span>

                                                <button
                                                    onClick={goSubNext}
                                                    disabled={subIdx >= totalInYear - 1}
                                                    className="rounded-full bg-white/15 px-5 py-2 text-sm text-white/80 hover:bg-white/25 transition disabled:opacity-40"
                                                >
                                                    <span className="mr-1">Next</span>
                                                    <KeyboardDoubleArrowRightOutlined fontSize="small" />
                                                </button>
                                            </div>
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
