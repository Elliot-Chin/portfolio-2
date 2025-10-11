// pages/projects/Expenses_Recorder.js
import Navbar from "@/components/nav/Navbar"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import { ProjectImage } from "@/components/projects/ProjectImage"
import Image from "next/image"
import { useMemo, useState, useEffect, useRef } from "react"
import { ECAvatarLink, exp } from "../../../public/data/Projects"
import { linkedInLink } from "../../../public/data/Links"
import { eChin } from "../../../public/data/People"
import { AvatarGroup, Avatar } from "@nextui-org/react"
import { motion, AnimatePresence } from "framer-motion"
import { useDesktop } from "@/components/hooks/useDesktop"

export default function ExpensesRecorder() {
    const isDesktop = useDesktop()
    const [name, setName] = useState("Contributor")
    const [scrolledOnce, setScrolledOnce] = useState(false)
    const [progress, setProgress] = useState(0)
    const [active, setActive] = useState(0)
    const [isSwitching, setIsSwitching] = useState(false)
    const DURATION_MS = 600

    const fadeIn = {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
    }
    const slideLeft = {
        hidden: { opacity: 0, x: -32, scale: 0.98 },
        show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    }
    const slideRight = {
        hidden: { opacity: 0, x: 32, scale: 0.98 },
        show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    }
    const slideUp = {
        hidden: { opacity: 0, y: 64, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
        exit: { opacity: 0, y: -32, scale: 0.995, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }
    }

    const backBtnFade = {
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.45, ease: "easeOut" } },
    }

    const subtleHover = { whileHover: { y: -6, scale: 1.01 }, whileTap: { scale: 0.995 } }

    const sections = useMemo(() => ([
        {
            key: "hero",
            title: "Expenses Recorder",
            desc: exp.TLDR,
            media: (
                <motion.div {...subtleHover} className="max-w-[512px]">
                    <Image
                        alt={exp.ExpLogoImg.alt}
                        height={512}
                        width={512}
                        src={exp.ExpLogoImg.src}
                        className="object-contain mx-auto"
                        priority
                    />
                </motion.div>
            ),
            meta: (
                <div className="flex flex-col gap-3 items-start">
                    <div className="flex gap-4 items-center">
                        <AvatarGroup color="warning" isBordered className="hover:cursor-pointer">
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Avatar
                                    name={eChin.name}
                                    onMouseEnter={() => setName(eChin.name)}
                                    onMouseLeave={() => setName("Contributor")}
                                    onClick={() => window.open(linkedInLink, "_blank")}
                                    src={ECAvatarLink}
                                />
                            </motion.div>
                        </AvatarGroup>
                        <div className="flex flex-col">
                            <span className="font-montserrat dark:text-white text-slate-950 text-xl lg:text-2xl">{name}</span>
                            <span className="font-oswald dark:text-white text-slate-950 text-sm opacity-80">{exp.duration}</span>
                        </div>
                    </div>
                </div>
            ),
            images: true,
        },
        {
            key: "legacy",
            title: "Legacy Version",
            desc: (
                <p
                    dangerouslySetInnerHTML={{ __html: exp.legacyVersion }}
                    className="font-raleway dark:text-slate-100/90 text-slate-900 text-left"
                />
            ),
            media: (
                <motion.div {...subtleHover} className="w-full">
                    <ProjectImage
                        alt="Expenses Recorder - Initial Prototype"
                        src="/projects/exprec/old_exprec.png"
                        description="Expenses Recorder - Initial Prototype written with Java Swing UI Library. Some values are masked for privacy reasons."
                        size={1024}
                        lg_size="h-fit"
                    />
                </motion.div>
            ),
            images: true,
        },
        {
            key: "current",
            title: "Current Version",
            desc: (
                <p
                    dangerouslySetInnerHTML={{ __html: exp.currentVersion }}
                    className="font-raleway dark:text-slate-100/90 text-slate-900 text-left"
                />
            ),
            media: null,
            images: false,
        },
        {
            key: "new-components",
            title: "New Components",
            desc: <p className="font-raleway dark:text-slate-100/90 text-slate-900 text-left">{exp.dashboardDesc}</p>,
            media: (
                <div className="flex flex-col gap-5 lg:flex-row">
                    <div className="w-full lg:w-[100%] flex flex-col items-center gap-5">
                        <motion.div {...subtleHover} className="w-[90%] sm:w-[80%] lg:w/full">
                            <ProjectImage
                                alt={exp.CMSChartImg.alt}
                                src={exp.CMSChartImg.src}
                                description={exp.CMSChartImg.desc}
                                lg_size="w-full"
                                maxH="max-h-[34vh] md:max-h-[36vh] lg:max-h-[36vh]"
                            />
                        </motion.div>

                        <motion.div {...subtleHover} className="w/[90%] sm:w/[80%] lg:w/full">
                            <ProjectImage
                                alt={exp.PMSChartImg.alt}
                                src={exp.PMSChartImg.src}
                                description={exp.PMSChartImg.desc}
                                lg_size="w-full"
                                maxH="max-h-[34vh] md:max-h-[36vh] lg:max-h-[36vh]"
                            />
                        </motion.div>
                    </div>
                </div>
            ),
            images: true,
        },
        {
            key: "expenses-view",
            title: "Expenses View",
            desc: <p className="font-raleway dark:text-slate-100/90 text-slate-900 text-left">{exp.expViewDesc}</p>,
            media: (
                <div className="flex flex-col gap-4 items-center justify-center">
                    <motion.div {...subtleHover} className="w-full">
                        <ProjectImage
                            alt={exp.ExpViewImg.alt}
                            src={exp.ExpViewImg.src}
                            description={exp.ExpViewImg.desc}
                            lg_size="w-full"
                            maxH="max-h-[100vh] lg:max-h-[35vh]"
                        />
                    </motion.div>
                    <motion.div {...subtleHover} className="w-full">
                        <ProjectImage
                            alt="Expenses Recorder - Past Month Spending Chart Example"
                            src="/projects/exprec/exprec_expview_details.png"
                            description="A snippet of an example list of expenses for the selected month."
                            lg_size="w-full"
                            maxH="max-h-[100vh] lg:max-h-[35vh]"
                        />
                    </motion.div>
                </div>
            ),
            images: true,
        },
        {
            key: "budgets",
            title: "Budgets Page",
            desc: <p className="font-raleway dark:text-slate-100/90 text-slate-900 text-left">{exp.budgetPageDesc}</p>,
            media: (
                <motion.div {...subtleHover} className="w-full">
                    <ProjectImage
                        alt="Expenses Recorder - Expenses Month Summary Example"
                        src="/projects/exprec/exprec_budget.png"
                        description="A snippet of the budget page, where I am able to modify the amounts to fit my financial needs."
                        size={512}
                        lg_size="w-3/4"
                    />
                </motion.div>
            ),
            images: true,
        },
        {
            key: "trip-final",
            title: "Final Thoughts",
            desc: (
                <div className="space-y-4 font-raleway dark:text-slate-100/90 text-slate-900 text-left">
                    <p>{exp.finalThoughts}</p>
                </div>
            ),
            media: (
                <div className="w-full max-w-2xl">
                    <h2 className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-extrabold text-amber-700 dark:text-amber-400 font-rubikmono mb-4">
                        Trip Expenditures
                    </h2>
                    <div className="space-y-4 font-raleway dark:text-slate-100/90 text-slate-900 text-left">
                        <p>{exp.tripExpenditureDesc}</p>
                    </div>
                </div>
            ),
            images: true,
            mediaLeft: true,
        },
    ]), [name])

    const railRef = useRef(null)

    // Desktop slide controls (unchanged)
    useEffect(() => {
        if (!isDesktop) return
        const el = railRef.current
        if (!el) return

        const go = (dir) => {
            if (!isDesktop) return
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
            if (!isDesktop) return
            e.preventDefault()
            if (Math.abs(e.deltaY) < 2) return
            go(e.deltaY > 0 ? 1 : -1)
        }

        const onKey = (e) => {
            if (!isDesktop) return
            if (e.key === "ArrowRight" || e.key === "PageDown") {
                e.preventDefault(); go(1)
            } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
                e.preventDefault(); go(-1)
            }
        }

        el.addEventListener("wheel", onWheel, { passive: false })
        window.addEventListener("keydown", onKey)

        return () => {
            el.removeEventListener("wheel", onWheel)
            window.removeEventListener("keydown", onKey)
        }
    }, [isDesktop, isSwitching, sections.length])

    // MOBILE/TABLET content blocks — image/text order:
    // - hero (key === "hero"): IMAGE first, then TEXT
    // - all others: TEXT first, then IMAGE
    const MediaContent = ({ s, mediaOnLeft, keepImageFirst = false }) => {
        if (keepImageFirst) {
            // IMAGE → TEXT (for first page only)
            return (
                <>
                    {/* MEDIA first */}
                    <motion.div
                        className="flex items-center justify-center mb-10"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                        variants={mediaOnLeft ? slideLeft : slideRight}
                    >
                        <div className="w-[90vw] flex items-center justify-center">{s.media}</div>
                    </motion.div>

                    {/* TEXT second */}
                    <motion.div
                        className="flex items-center justify-center"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                        variants={mediaOnLeft ? slideRight : slideLeft}
                    >
                        <div className="w-[90vw] max-w-3xl lg:max-w-2xl text-left">
                            {s.title && (
                                <motion.h2
                                    className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-extrabold text-amber-700 dark:text-amber-400 font-rubikmono mb-4"
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45 }}
                                >
                                    {s.title}
                                </motion.h2>
                            )}
                            {s.desc && (
                                <motion.div className="mb-6 text-raleway" variants={fadeIn}>
                                    {s.desc}
                                </motion.div>
                            )}
                            {s.meta}
                        </div>
                    </motion.div>
                </>
            )
        }

        // Default: TEXT → MEDIA (for all other pages)
        return (
            <>
                {/* TEXT first */}
                <motion.div
                    className="flex items-center justify-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    variants={mediaOnLeft ? slideRight : slideLeft}
                >
                    <div className="w-[90vw] max-w-3xl lg:max-w-2xl text-left">
                        {s.title && (
                            <motion.h2
                                className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-extrabold text-amber-700 dark:text-amber-400 font-rubikmono mb-4"
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45 }}
                            >
                                {s.title}
                            </motion.h2>
                        )}
                        {s.desc && (
                            <motion.div className="mb-6 text-raleway" variants={fadeIn}>
                                {s.desc}
                            </motion.div>
                        )}
                        {s.meta}
                    </div>
                </motion.div>

                {/* MEDIA second */}
                <motion.div
                    className="flex items-center justify-center mt-10"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    variants={mediaOnLeft ? slideLeft : slideRight}
                >
                    <div className="w-[90vw] flex items-center justify-center">{s.media}</div>
                </motion.div>
            </>
        )
    }

    const NoMediaContent = ({ s }) => (
        <motion.div
            className="w-[90vw] max-w-3xl text-left lg:text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={fadeIn}
        >
            {s.title && (
                <h2 className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-extrabold text-amber-700 dark:text-amber-400 font-rubikmono mb-4">
                    {s.title}
                </h2>
            )}
            {s.desc && <div className="mb-6 lg:mb-8">{s.desc}</div>}
            {s.media && <div className="flex items-center justify-center">{s.media}</div>}
            {s.meta && <div className="mt-6">{s.meta}</div>}
        </motion.div>
    )

    return (
        <main
            className="fixed inset-0 bg-gradient-to-b from-amber-50 via-amber-100 to-amber-200
            dark:from-amber-900/70 dark:via-amber-950/80 dark:to-black"
        >
            <Navbar pageName="Project - Expenses Recorder" />

            {/* Desktop progress bar */}
            {isDesktop && (
                <div className="fixed top-[56px] left-0 right-0 h-[3px] z-40">
                    <div className="w-[90vw] h-[3px] bg-transparent/20 dark:bg-white/10 backdrop-blur-sm" />
                    <motion.div
                        className="absolute top-0 left-0 h-[3px] bg-amber-600 dark:bg-amber-400"
                        style={{ width: `${Math.round(progress * 100)}%` }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            )}

            {/* ---------- MOBILE/TABLET (native vertical scroll) ---------- */}
            {!isDesktop && (
                <div className="pt-14 h-full w-full overflow-y-auto overflow-x-hidden scroll-smooth">
                    {(() => {
                        let mediaIndex = -1
                        return sections.map((s) => {
                            const hasMedia = !!s.media && s.images
                            if (hasMedia) mediaIndex += 1
                            const mediaOnLeft = s.mediaLeft ?? (hasMedia ? mediaIndex % 2 === 0 : null)
                            const keepImageFirst = s.key === "hero" // ← only first page keeps image first
                            return (
                                <section key={s.key} className="py-4 sm:py-6 flex items-center justify-center px-4">
                                    <div className={["w-full max-w-6xl grid", hasMedia ? "gap-4" : "place-items-center"].join(" ")}>
                                        {hasMedia ? (
                                            <MediaContent s={s} mediaOnLeft={mediaOnLeft} keepImageFirst={keepImageFirst} />
                                        ) : (
                                            <NoMediaContent s={s} />
                                        )}
                                    </div>
                                </section>
                            )
                        })
                    })()}
                </div>
            )}

            {/* ---------- DESKTOP (slide-in sections, scroll locked) ---------- */}
            {isDesktop && (
                <div
                    ref={railRef}
                    className="pt-14 w-full overflow-x-hidden overflow-y-hidden h-[calc(100vh-56px)] relative"
                >
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
                                    sections[active]?.media && sections[active]?.images
                                        ? "gap-10 grid-cols-1 lg:grid-cols-2"
                                        : "place-items-center",
                                ].join(" ")}
                                style={{
                                    direction:
                                        sections[active]?.media && sections[active]?.images
                                            ? (sections[active].mediaLeft ? "ltr" : "rtl")
                                            : "ltr",
                                }}
                            >
                                <div style={{ direction: "ltr" }}>
                                    {sections[active]?.media && sections[active]?.images ? (
                                        <motion.div className="flex items-center justify-center" variants={fadeIn} initial="hidden" animate="show">
                                            <div className="w-full flex items-center justify-center">{sections[active].media}</div>
                                        </motion.div>
                                    ) : (
                                        <NoMediaContent s={sections[active]} />
                                    )}
                                </div>

                                {sections[active]?.media && sections[active]?.images && (
                                    <div style={{ direction: "ltr" }}>
                                        <motion.div
                                            className="flex h-full items-center justify-center"
                                            variants={fadeIn}
                                            initial="hidden"
                                            animate="show"
                                        >
                                            <div className="w-full max-w-2xl text-left">
                                                {sections[active].title && (
                                                    <motion.h2
                                                        className="text-center lg:text-left text-5xl font-extrabold text-amber-700 dark:text-amber-400 font-rubikmono mb-4"
                                                        initial={{ opacity: 0, y: 8 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.45 }}
                                                    >
                                                        {sections[active].title}
                                                    </motion.h2>
                                                )}
                                                {sections[active].desc && (
                                                    <motion.div className="mb-6" variants={fadeIn} initial="hidden" animate="show">
                                                        {sections[active].desc}
                                                    </motion.div>
                                                )}
                                                {sections[active].meta}
                                            </div>
                                        </motion.div>
                                    </div>
                                )}
                            </div>
                        </motion.section>
                    </AnimatePresence>
                </div>
            )}

            <BackToTopButton />
        </main>
    )
}
