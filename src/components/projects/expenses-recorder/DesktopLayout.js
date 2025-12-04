import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import NoMediaContent from "./NoMediaContent"

export default function DesktopLayout({
    sections,
    active,
    setActive,
    setProgress,
    scrolledOnce,
    setScrolledOnce,
    isSwitching,
    setIsSwitching,
    DURATION_MS,
    fadeIn,
    slideUp,
    backBtnFade,
}) {
    const railRef = useRef(null)

    // Scroll/keyboard navigation (unchanged logic)
    useEffect(() => {
        const el = railRef.current
        if (!el) return

        const go = (dir) => {
            if (isSwitching) return
            setIsSwitching(true)
            setScrolledOnce(true)
            setActive((i) => {
                const next = Math.max(0, Math.min(sections.length - 1, i + dir))
                const p = sections.length > 1 ? next / (sections.length - 1) : 0
                setProgress(p)
                return next
            })
            setTimeout(() => setIsSwitching(false), DURATION_MS)
        }

        const onWheel = (e) => {
            e.preventDefault()
            if (Math.abs(e.deltaY) < 2) return
            go(e.deltaY > 0 ? 1 : -1)
        }

        const onKey = (e) => {
            if (e.key === "ArrowRight" || e.key === "PageDown") {
                e.preventDefault()
                go(1)
            } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
                e.preventDefault()
                go(-1)
            }
        }

        el.addEventListener("wheel", onWheel, { passive: false })
        window.addEventListener("keydown", onKey)
        return () => {
            el.removeEventListener("wheel", onWheel)
            window.removeEventListener("keydown", onKey)
        }
    }, [isSwitching, sections.length, DURATION_MS, setIsSwitching, setScrolledOnce, setActive, setProgress])

    return (
        <div ref={railRef} className="pt-14 w-full overflow-x-hidden overflow-y-hidden h-[calc(100vh-56px)] relative">
            <AnimatePresence>
                {!scrolledOnce && (
                    <motion.div
                        className="pointer-events-none absolute right-6 top-[72px] z-30 rounded-full px-3 py-1 text-xs font-medium bg-amber-600/90 text-white shadow"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.4 }}
                    >
                        Scroll →
                    </motion.div>
                )}
            </AnimatePresence>

            {active === sections.length - 1 && (
                <motion.button
                    variants={backBtnFade}
                    initial="hidden"
                    animate="show"
                    type="button"
                    aria-label="Back to start"
                    onClick={() => {
                        if (isSwitching || active === 0) return
                        setIsSwitching(true)
                        setScrolledOnce(true)
                        setActive(0)
                        setProgress(0)
                        setTimeout(() => setIsSwitching(false), DURATION_MS)
                    }}
                    className="flex items-center gap-2 absolute bottom-6 right-6 z-30 rounded-full px-4 py-2
                     bg-amber-600 text-white shadow hover:bg-amber-700 active:scale-[0.98] mr-[20vw]"
                >
                    <span className="text-sm font-semibold">Back to Start</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M19 12H5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.button>
            )}

            <AnimatePresence mode="wait">
                <motion.section
                    key={sections[active]?.key}
                    className="absolute inset-0 px-8 grid place-items-center w/full h/full"
                    variants={slideUp}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                >
                    <div
                        className={[
                            "w-full max-w-6xl grid font-raleway",
                            sections[active]?.media && sections[active]?.images ? "gap-10 grid-cols-1 lg:grid-cols-2" : "place-items-center",
                        ].join(" ")}
                        style={{
                            direction:
                                sections[active]?.media && sections[active]?.images
                                    ? (sections[active].mediaLeft ?? (active % 2 === 0)) ? "ltr" : "rtl"
                                    : "ltr",
                        }}
                    >
                        <div style={{ direction: "ltr" }}>
                            {sections[active]?.media && sections[active]?.images ? (
                                <div className="flex items-center justify-center">
                                    <div className="w-full flex items-center justify-center">{sections[active].media}</div>
                                </div>
                            ) : (
                                <NoMediaContent s={sections[active]} fadeIn={fadeIn} />
                            )}
                        </div>

                        {sections[active]?.media && sections[active]?.images && (
                            <div style={{ direction: "ltr" }}>
                                <div className="flex h-full items-center justify-center">
                                    <div className="w-full max-w-2xl text-left">
                                        {sections[active].title && (
                                            <div className="text-center lg:text-left text-5xl font-extrabold text-amber-700 dark:text-amber-400 font-rubikmono mb-4">
                                                {sections[active].title}
                                            </div>
                                        )}
                                        {sections[active].desc && <div className="mb-6">{sections[active].desc}</div>}
                                        {sections[active].meta}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.section>
            </AnimatePresence>
        </div>
    )
}
