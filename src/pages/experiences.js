// pages/experience.js
import { useState, useMemo, useRef, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { KeyboardDoubleArrowDownOutlined } from "@mui/icons-material"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import NavBar from "@/components/nav/Navbar"

const timeline = [
    // special born node
    {
        id: "born-1997",
        year: "1997",
        title: "An Origin Story",
        desc: "A new process booted, and I existed.",
        type: "born",
    },
    // lore
    { id: "2006-ctrlz", year: "2006", title: "Discovered CTRL+Z", desc: "Unlocked god-mode for bad decisions. Peak achieved early.", type: "lore" },
    { id: "2010-html", year: "2010", title: "First HTML", desc: "Built a site with <marquee> and thought it was art. It was.", type: "lore" },

    // jobs (expandable)
    {
        id: "2019-siemens",
        year: "2019",
        title: "Siemens — Software Intern",
        desc: "Taught machines to talk (politely).",
        type: "job",
        details: [
            "Built internal tools that spared humans from spreadsheet purgatory.",
            "Wrote scripts that refused to run only on Fridays (still investigating).",
            "Mastered the sacred dance: logs → bug → fix → celebratory snack."
        ],
        tech: [{ src: "", name: "Python" },
        { src: "", name: "Flask" },
        { src: "", name: "Docker" },
        { src: "", name: "CI/CD" },
        ]
    },
    {
        id: "2022-unb-its",
        year: "2022",
        title: "UNB ITS — Co-op Dev",
        desc: "Campus apps, calm chaos.",
        type: "job",
        details: [
            "Shipped small features with outsized vibes.",
            "Wrangled auth so students could forget fewer passwords.",
            "Spoke fluent ‘ticketese’ and wrote docs humans actually read."
        ],
        tech: [{ src: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg", name: "JavaScript" },
        { src: "https://cdn.worldvectorlogo.com/logos/react-2.svg", name: "React" },
        { src: "", name: "API" },
        { src: "", name: "SSO" }]
    },
    {
        id: "2024-freelance",
        year: "2024",
        title: "Freelance — Game-Scorer",
        desc: "Multiplayer chaos manager disguised as a score tracker.",
        type: "job",
        details: [
            "Real-time rooms with sockets, edge cases, and polite disconnects.",
            "Score calculators for niche card games (zero rage-quits… mostly).",
            "UI that feels like a chill friend tapping the scoreboard for you."
        ],
        tech: [{ src: "", name: "NextJS" }, { src: "", name: "Flask" }]
    },

    // coda
    { id: "2025p", year: "2025+", title: "Still debugging life", desc: "No syntax errors so far. Only warnings.", type: "lore" },
]

export default function ExperiencePage() {
    const [openId, setOpenId] = useState(null)
    const containerRef = useRef(null)
    const sectionRefs = useRef({})

    const items = useMemo(
        () => timeline.map((t, i) => ({ ...t, side: i % 2 === 0 ? "left" : "right" })),
        []
    )

    const { scrollYProgress } = useScroll({ container: containerRef })
    const bgPos = useTransform(scrollYProgress, [0, 1], ["0% 0%", "0% 200%"])

    const lastId = items[items.length - 1].id

    const toggle = (id) => setOpenId((cur) => (cur === id ? null : id))

    // Smart-scroll when a job expands and is out of view
    useEffect(() => {
        if (!openId) return
        const container = containerRef.current
        const el = sectionRefs.current[openId]
        if (!container || !el) return

        const cTop = container.scrollTop
        const cHeight = container.clientHeight
        const elTop = el.offsetTop
        const elBottom = elTop + el.offsetHeight
        const inView = elTop >= cTop && elBottom <= cTop + cHeight

        if (inView) return

        // If it's the last item, scroll to the end
        if (openId === lastId) {
            const target = container.scrollHeight - cHeight
            container.scrollTo({ top: target, behavior: "smooth" })
            return
        }

        // Otherwise center the expanded section
        const target = Math.max(
            0,
            Math.min(
                elTop - (cHeight - el.offsetHeight) / 2,
                container.scrollHeight - cHeight
            )
        )
        container.scrollTo({ top: target, behavior: "smooth" })
    }, [openId, lastId])

    return (
        // Keep background identical to index (transparent container; bg handled globally)
        <main
            ref={containerRef}
            className="h-screen overflow-y-scroll scroll-smooth overscroll-contain text-amber-50"
        >
            <h1 className="relative text-center text-3xl md:text-5xl font-bold pt-16 pb-10 w-[70vw] md:w-[30vw] mx-auto">
                {/* left gear */}
                <span className="absolute animate-spin left-0 w-fit h-fit">
                    ⚙️
                </span>

                BUILD LOG

                {/* right gear */}
                <span className="absolute animate-spin right-0">
                    ⚙️
                </span>
            </h1>

            <NavBar />


            <BackToTopButton targetRef={containerRef} />

            {/* Center spine */}
            <motion.div
                style={{ backgroundPosition: bgPos }}
                className="relative max-w-5xl mx-auto px-6 pb-24
  before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-5 md:before:left-1/2
  before:w-[2px] md:before:w-[3px] before:rounded-full
  before:[background:linear-gradient(180deg,#fbbf24_0%,#ec4899_100%)]
  before:[background-size:100%_200%] before:[background-position:0%_0%]"
            >


                {items.map((item) => {
                    const isLeft = item.side === "left"
                    const isJob = item.type === "job"
                    const isBorn = item.type === "born"
                    const expanded = openId === item.id

                    return (
                        <motion.section
                            key={item.id}
                            ref={(node) => { if (node) sectionRefs.current[item.id] = node }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                            transition={{ duration: 0.5 }}
                            className={`relative mb-16 flex items-start
  justify-start                                      /* mobile: single column */
  ${isLeft ? "md:justify-end" : "md:justify-start"}` /* desktop: alternate */
                            }
                        >
                            {/* Node (dot) */}
                            <div className="absolute top-3 left-5 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 z-10">
                                {isBorn && (
                                    <span className="absolute inset-0 -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-pink-400/20" />
                                )}
                                <div className={`relative w-5 h-5 rounded-full border-[3px] -translate-x-[calc(50%+13px)] md:translate-x-0 shadow-[0_0_22px_rgba(255,200,100,0.6)]
                                    ${isBorn ? "bg-pink-300 border-pink-600" : "bg-amber-400 border-rose-900"}`}
                                />
                            </div>

                            {/* Card */}
                            <div className={` w-[90vw] relative md:w-[min(560px,calc(50%-2rem))] text-amber-950 ml-5 ${isLeft ? "md:mr-auto md:ml-0 text-right" : "md:ml-auto text-left"}`}>
                                <motion.button
                                    type="button"
                                    onClick={() => isJob && toggle(item.id)}
                                    aria-expanded={isJob ? expanded : undefined}
                                    aria-controls={isJob ? `${item.id}-panel` : undefined}
                                    whileHover={{ scale: isJob ? 1.01 : 1 }}
                                    whileTap={{ scale: isJob ? 0.995 : 1 }}
                                    className={`w-full text-left group rounded-2xl border backdrop-blur-md transition-all ${isLeft && 'sm:pl-5'}
                    ${isBorn
                                            ? "border-pink-300/40 bg-pink-300/10 hover:border-pink-300/60 hover:shadow-[0_0_28px_rgba(255,170,220,0.35)]"
                                            : "border-white/10 bg-white/5 hover:border-amber-400/40 hover:shadow-[0_0_25px_rgba(255,180,80,0.25)]"}
                    ${isJob ? "cursor-pointer" : "cursor-default"}`}
                                >
                                    <div className={`p-5 ${isBorn ? "pt-6 pb-6" : ""} ${isLeft && "sm:flex-row-reverse"} flex group items-start justify-between`}>
                                        <div className="flex flex-col">
                                            <div className={`flex items-baseline ${isLeft ? "justify-end" : "justify-start"} gap-3 sm:flex-row flex-col`}>
                                                <h2 className={`text-2xl font-semibold ${isBorn ? "text-pink-600" : "text-amber-300"}`}>
                                                    <span className={`mr-3 group-hover:animate-pulse`}>{item.type === "lore" ? "💡" : item.type === "born" ? "🐣" : "💼"}</span>
                                                    {item.year}</h2>
                                                <h3 className={`text-xl font-bold text-amber-950 font-montserrat`}>
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <p className={`mt-2 opacity-90 text-sm leading-relaxed text-red-800 font-semibold ${isLeft && "sm:text-end"}`}>
                                                {item.desc}
                                            </p>

                                            {item.tech?.length > 0 && (
                                                <div className={`mt-3 flex flex-wrap gap-2 ${isLeft ? "sm:justify-end" : "justify-start"}`}>
                                                    {item.tech.map((t) => (
                                                        <span key={t.name} className="rounded-full !text-amber-950 font-semibold font-montserrat flex gap-2 glass px-3 py-1 text-xs sm:text-md opacity-90">
                                                            <img src={t.src} height={10} width={10} />{t.name}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Accordion chevron (jobs only) */}
                                        {isJob && (
                                            <div className={`h-fit text-amber-300 flex ${isLeft ? "justify-end" : "justify-start"}`}>
                                                <motion.span
                                                    animate={{ rotate: expanded ? 180 : 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="inline-block select-none"
                                                    aria-hidden
                                                >
                                                    <KeyboardDoubleArrowDownOutlined />
                                                </motion.span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Expandable content — only for jobs */}
                                    <AnimatePresence initial={false}>
                                        {isJob && expanded && (
                                            <motion.div
                                                id={`${item.id}-panel`}
                                                key="details"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-5 pb-5 pt-1">
                                                    {item.details?.length > 0 && (
                                                        <ul className={`space-y-1 text-sm md:text-md opacity-90 ${isLeft ? "list-disc" : "list-disc pl-5"}`}>
                                                            {item.details.map((d, i) => (
                                                                <li key={i}>{d}</li>
                                                            ))}
                                                        </ul>
                                                    )}

                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </div>
                        </motion.section>
                    )
                })}
            </motion.div>

            <footer className="pb-10 text-center text-sm md:text-lg text-amber-950">
                — still writing new commits to this timeline —
            </footer>
        </main>
    )
}
