// src/pages/projects/Automated_Musicians.js
import Image from "next/image"
import { useMemo, useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Navbar from "@/components/nav/Navbar"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import { useDesktop } from "@/components/hooks/useDesktop"
import { ProjectImage } from "@/components/projects/ProjectImage"
import YouTubePlayer from "@/components/projects/YoutubePlayer"

import { GitHub, YouTube } from "@mui/icons-material"
import { AvatarGroup, Divider, Avatar, Progress, Button } from "@nextui-org/react"

import { am } from "../../../public/data/Projects"
import { eChin, edChang, olee, tcamp } from "../../../public/data/People"
import Head from "next/head"

// subtle slide animation for desktop rail
const DURATION_MS = 600
const slideUp = {
    hidden: { opacity: 0, y: 64, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -32, scale: 0.995, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
}

function useSections(contribName, setContribName) {
    const placeholder = "Contributors"

    return useMemo(
        () => [
            {
                key: "hero",
                title: am.title ?? "Automated Musicians",
                desc: (
                    <div className="space-y-3">
                        {am.subtitle ? (
                            <p className="font-raleway text-slate-100/90 text-left">{am.subtitle}</p>
                        ) : null}
                        {am.TLDR ? (
                            <p className="font-raleway text-sm leading-relaxed text-amber-200/90 ">
                                <span className="font-semibold tracking-wide">TL;DR:&nbsp;</span>
                                {am.TLDR}
                            </p>
                        ) : null}
                    </div>
                ),
                media: (
                    <div className="flex flex-col gap-16">
                        <motion.div whileHover={{ y: -6, scale: 1.01 }} whileTap={{ scale: 0.995 }} className="max-w-[512px]">
                            <Image
                                alt={am.amLogoImg?.alt || "Automated Musicians Logo"}
                                height={512}
                                width={512}
                                src={am.amLogoImg?.src}
                                className="object-contain mx-auto rounded-3xl"
                                priority
                            />
                        </motion.div>
                        <YouTubePlayer videoId={am.ytVideoID} />
                    </div>
                ),
                // >>> Contributors stack + duration + CTAs (EXACTLY like your original hero)
                meta: (
                    <>
                        <div className="px-2 w-full flex gap-5 flex-col ">
                            <div className="flex gap-5 min-w-[20vw] mt-5 mb-2 lg:mt-0 lg:mb-0">
                                <AvatarGroup color="warning" isBordered className="hover:cursor-pointer">
                                    <Avatar
                                        name={olee.name}
                                        onMouseEnter={() => setContribName(olee.name)}
                                        onMouseLeave={() => setContribName(placeholder)}
                                        onClick={() => window.open(olee.linkedin, "_blank")}
                                        src={olee.avatarLink}
                                    />
                                    <Avatar
                                        name={tcamp.name}
                                        onMouseEnter={() => setContribName(tcamp.name)}
                                        onMouseLeave={() => setContribName(placeholder)}
                                        onClick={() => window.open(tcamp.linkedin, "_blank")}
                                        src={tcamp.avatarLink}
                                    />
                                    <Avatar
                                        name={edChang.name}
                                        onMouseEnter={() => setContribName("Edward Chang")}
                                        onMouseLeave={() => setContribName(placeholder)}
                                        onClick={() => window.open(edChang.linkedin, "_blank")}
                                        src={edChang.avatarLink}
                                    />
                                    <Avatar
                                        name={eChin.name}
                                        onMouseEnter={() => setContribName(eChin.name)}
                                        onMouseLeave={() => setContribName(placeholder)}
                                        onClick={() => window.open(eChin.linkedin, "_blank")}
                                        src={eChin.avatarLink}
                                    />
                                </AvatarGroup>

                                <div className="flex flex-col">
                                    <span className="font-montserrat text-white text-xl lg:text-3xl">
                                        {contribName}
                                    </span>
                                    <span className="font-oswald text-white text-sm">{am.duration}</span>
                                </div>
                            </div>

                            {/* desktop CTAs */}
                            <div className="lg:flex gap-2 w-fit px-2 hidden">
                                {am?.ytLink && (
                                    <Button
                                        isIconOnly size="md" radius="lg" variant="ghost" color="warning"
                                        className="font-oswald text-lg text-red-600 hover:cursor-pointer"
                                        onPress={() => window.open(am.ytLink, "_blank")}
                                    >
                                        <YouTube />
                                    </Button>
                                )}
                                {am?.ghLink && (
                                    <Button
                                        isIconOnly size="md" radius="lg" variant="ghost" color="warning"
                                        className="font-oswald text-lg text-white hover:cursor-pointer"
                                        onPress={() => window.open(am.ghLink, "_blank")}
                                    >
                                        <GitHub />
                                    </Button>
                                )}
                                {am?.cbcLink && (
                                    <Button
                                        isIconOnly size="md" radius="lg" variant="ghost" color="warning"
                                        className="font-oswald text-lg text-white p-2 hover:cursor-pointer"
                                        onPress={() => window.open(am.cbcLink, "_blank")}
                                    >
                                        <Image width={256} height={256} alt="CBC logo" src={am.cbcLogoImg} />
                                    </Button>
                                )}
                            </div>
                        </div>

                        {/* mobile CTAs */}
                        <div className="w-full mt-3 lg:hidden">
                            <Divider className="bg-slate-500 mt-3 w-11/12 mx-auto mb-3" />
                            <div className="flex gap-2 w-fit px-2">
                                {am?.ytLink && (
                                    <Button
                                        isIconOnly size="md" radius="lg" variant="ghost" color="warning"
                                        className="font-oswald text-lg text-red-600 hover:cursor-pointer"
                                        onPress={() => window.open(am.ytLink, "_blank")}
                                    >
                                        <YouTube />
                                    </Button>
                                )}
                                {am?.ghLink && (
                                    <Button
                                        isIconOnly size="md" radius="lg" variant="ghost" color="warning"
                                        className="font-oswald text-lg text-white hover:cursor-pointer"
                                        onPress={() => window.open(am.ghLink, "_blank")}
                                    >
                                        <GitHub />
                                    </Button>
                                )}
                                {am?.cbcLink && (
                                    <Button
                                        isIconOnly size="md" radius="lg" variant="ghost" color="warning"
                                        className="font-oswald text-lg text-white p-2 hover:cursor-pointer"
                                        onPress={() => window.open(am.cbcLink, "_blank")}
                                    >
                                        <Image width={256} height={256} alt="CBC logo" src={am.cbcLogoImg} />
                                    </Button>
                                )}
                            </div>
                        </div>
                    </>
                ),
                images: true,
                mediaLeft: true,
            },
            {
                key: "algos",
                title: "Music Algorithms",
                desc: <p className="font-raleway text-slate-300">{am.musicAlgorithmsDesc}</p>,
                media: (
                    <div className="flex flex-col gap-3">
                        <ProjectImage {...am.hStepImg} lg_size="!w-[1vh]" />
                        <div className="flex gap-3">
                            <ProjectImage {...am.iScaleImg} lg_size="w-1/2" />
                            <ProjectImage {...am.aScaleImg} lg_size="w-1/2" />
                        </div>
                    </div>
                ),
                images: true,
            },

            {
                key: "pattern",
                title: "Pattern Recognition and Extraction",
                desc: <p className="font-raleway text-slate-300">{am.patternExtractionDesc}</p>,
                media: (
                    <div className="flex flex-col gap-3 flex-wrap lg:flex-row">
                        <ProjectImage {...am.sheetMusicImg} lg_size="w-2/3" />
                        <ProjectImage {...am.abcFormatImg} lg_size="w-2/3" />
                    </div>
                ),
                images: true,
            },

            {
                key: "composer",
                title: "Music Composition Generator",
                desc: <p className="font-raleway text-slate-100/90">{am.compositionGenDesc}</p>,
                media: (
                    <div className="flex flex-col gap-3 lg:flex-row">
                        <ProjectImage {...am.pseudocodeImg} lg_size="w-2/3" />
                    </div>
                ),
                images: true,
            },

            {
                key: "wrapup",
                title: "Conclusion",
                desc: (
                    <div className="flex flex-col gap-8 mt-4">
                        <div>
                            <p className="font-raleway text-slate-100/90 text-justify">
                                {am.conclusion}
                            </p>
                        </div>

                        <div>
                            <span className="text-3xl text-center xl:text-5xl font-extrabold text-amber-400 font-rubikmono block mb-3 xl:text-left">
                                FINAL THOUGHTS
                            </span>
                            <p className="font-raleway text-slate-100/90 text-justify">
                                {am.finalThoughts}
                            </p>
                        </div>
                    </div>
                ),
                media: null,
                images: false,
            }

        ],
        [contribName, setContribName]
    )
}

/* -------- Desktop full-screen rail -------- */
function DesktopRail({
    sections,
    active,
    setActive,
    progress,
    setProgress,
    scrolledOnce,
    setScrolledOnce,
    isSwitching,
    setIsSwitching,
}) {
    const railRef = useRef(null)

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

        const onWheel = (e) => { e.preventDefault(); if (Math.abs(e.deltaY) >= 2) go(e.deltaY > 0 ? 1 : -1) }
        const onKey = (e) => {
            if (e.key === "ArrowRight" || e.key === "PageDown") { e.preventDefault(); go(1) }
            else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); go(-1) }
        }

        el.addEventListener("wheel", onWheel, { passive: false })
        window.addEventListener("keydown", onKey)
        return () => { el.removeEventListener("wheel", onWheel); window.removeEventListener("keydown", onKey) }
    }, [isSwitching, sections.length, setIsSwitching, setScrolledOnce, setActive, setProgress])

    return (
        <div ref={railRef} className="pt-14 w-full overflow-x-hidden overflow-y-hidden h-[calc(100vh-56px)] relative">
            <AnimatePresence>
                {!scrolledOnce && (
                    <motion.div
                        className="pointer-events-none absolute right-6 top-[72px] z-30 rounded-full px-3 py-1 text-xs font-medium bg-amber-600/90 text-white shadow"
                        initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.4 }}
                    >
                        Scroll →
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                <motion.section
                    key={sections?.[active]?.key}
                    className="absolute inset-0 px-8 grid place-items-center w/full h/full"
                    variants={slideUp} initial="hidden" animate="show" exit="exit"
                >
                    <div
                        className={[
                            "w-full max-w-6xl grid",
                            sections[active]?.media && sections[active]?.images ? "gap-10 grid-cols-1 lg:grid-cols-2" : "place-items-center",
                        ].join(" ")}
                        style={{
                            direction:
                                sections[active]?.media && sections[active]?.images
                                    ? (sections[active].mediaLeft ?? (active % 2 === 0)) ? "ltr" : "rtl"
                                    : "ltr",
                        }}
                    >
                        {/* Media side */}
                        <div style={{ direction: "ltr" }}>
                            {sections[active]?.media && sections[active]?.images ? (
                                <div className="flex items-center justify-center">
                                    <div className="w-full flex items-center justify-center">{sections[active].media}</div>
                                </div>
                            ) : (
                                <div className="w-[90vw] max-w-3xl text-left lg:text-center">
                                    {sections[active]?.title && (
                                        <h2 className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-extrabold text-amber-400 font-rubikmono mb-4">
                                            {sections[active].title}
                                        </h2>
                                    )}
                                    {sections[active]?.desc}
                                    {sections[active]?.meta}
                                </div>
                            )}
                        </div>

                        {/* Text side */}
                        {sections[active]?.media && sections[active]?.images && (
                            <div style={{ direction: "ltr" }}>
                                <div className="flex h-full items-center justify-center">
                                    <div className="w-full max-w-2xl text-left">
                                        {sections[active]?.title && (
                                            <div className="text-center lg:text-left text-5xl font-extrabold text-amber-400 font-rubikmono mb-4">
                                                {sections[active].title}
                                            </div>
                                        )}
                                        {sections[active]?.desc && <div className="mb-6">{sections[active].desc}</div>}
                                        {sections[active]?.meta}
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

/* -------- Mobile vertical flow -------- */
function MobileFlow({ sections }) {
    return (
        <div className="pt-14 h-full w-full overflow-y-auto overflow-x-hidden scroll-smooth">
            {sections.map((s, idx) => {
                const hasMedia = !!s.media && s.images
                const keepImageFirst = s.key === "hero"
                return (
                    <section key={s.key} className="py-4 sm:py-6 flex items-center justify-center px-4">
                        <div className={["w-full max-w-6xl grid", hasMedia ? "gap-4" : "place-items-center"].join(" ")}>
                            {hasMedia && keepImageFirst && (
                                <div className="flex items-center justify-center mb-4">
                                    <div className="w-full flex items-center justify-center">{s.media}</div>
                                </div>
                            )}

                            <div className="w-[90vw] mx-auto max-w-3xl text-left">
                                {s.title && (
                                    <h2 className="text-center text-3xl md:text-4xl font-extrabold text-amber-400 font-rubikmono mb-2">
                                        {s.title}
                                    </h2>
                                )}
                                {s.desc}
                                {s.meta}
                            </div>

                            {hasMedia && !keepImageFirst && (
                                <div className="flex items-center justify-center mt-4">
                                    <div className="w-full flex items-center justify-center">{s.media}</div>
                                </div>
                            )}
                        </div>
                    </section>
                )
            })}
        </div>
    )
}

/* -------- Page -------- */
export default function AutomatedMusicians() {
    const isDesktop = useDesktop()
    const [scrolledOnce, setScrolledOnce] = useState(false)
    const [progress, setProgress] = useState(0)
    const [active, setActive] = useState(0)
    const [isSwitching, setIsSwitching] = useState(false)

    // contributor hover name
    const [contribName, setContribName] = useState("Contributors")
    const sections = useSections(contribName, setContribName)

    return (
        <main className="fixed inset-0 bg-gradient-to-b from-[#6b3200] via-[#502300] to-black">
            <Navbar />
            <BackToTopButton />

            <Head>
                <title>EC — Automated Musicians</title>
                <meta name="description" content="Elliot Chin - Automated Musicians project" />
            </Head>


            {/* progress bar (desktop) */}
            {isDesktop && (
                <div className="fixed top-[56px] left-0 right-0 h-[3px] z-40">
                    <div className="w-[90vw] h-[3px] bg-white/10 backdrop-blur-sm" />
                    <motion.div
                        className="absolute top-0 left-0 h-[3px] bg-amber-400"
                        style={{ width: `${Math.round(progress * 100)}%` }}
                        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.3 }}
                    />
                </div>
            )}

            {!isDesktop ? (
                <MobileFlow sections={sections} />
            ) : (
                <DesktopRail
                    sections={sections}
                    active={active}
                    setActive={setActive}
                    progress={progress}
                    setProgress={setProgress}
                    scrolledOnce={scrolledOnce}
                    setScrolledOnce={setScrolledOnce}
                    isSwitching={isSwitching}
                    setIsSwitching={setIsSwitching}
                />
            )}

            {/* END marker for mobile */}
            {!isDesktop && (
                <div className="flex justify-center items-center gap-5 px-2 pb-8">
                    <Divider className="bg-amber-600 w-1/3 h-1" />
                    <span className="text-white text-xl font-rubikmono w-1/4 text-center">END</span>
                    <Divider className="bg-amber-600 w-1/3 h-1" />
                </div>
            )}
        </main>
    )
}
