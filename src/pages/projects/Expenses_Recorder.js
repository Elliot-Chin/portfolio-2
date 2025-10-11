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

export default function ExpensesRecorder() {
    const [name, setName] = useState("Contributor")

    // ---- Content sections ----
    const sections = useMemo(() => {
        return [
            {
                key: "hero",
                title: "Expenses Recorder",
                desc: exp.TLDR,
                media: (
                    <Image
                        alt={exp.ExpLogoImg.alt}
                        height={512}
                        width={512}
                        src={exp.ExpLogoImg.src}
                        className="object-contain mx-auto"
                        priority
                    />
                ),
                meta: (
                    <div className="flex flex-col gap-3 items-start">
                        <div className="flex gap-4 items-center">
                            <AvatarGroup color="warning" isBordered className="hover:cursor-pointer">
                                <Avatar
                                    name={eChin.name}
                                    onMouseEnter={() => setName(eChin.name)}
                                    onMouseLeave={() => setName("Contributor")}
                                    onClick={() => window.open(linkedInLink, "_blank")}
                                    src={ECAvatarLink}
                                />
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
                    <ProjectImage
                        alt="Expenses Recorder - Initial Prototype"
                        src="/projects/exprec/old_exprec.png"
                        description="Expenses Recorder - Initial Prototype written with Java Swing UI Library. Some values are masked for privacy reasons."
                        size={1024}
                        lg_size="h-fit"
                    />
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
                            <ProjectImage
                                alt={exp.CMSChartImg.alt}
                                src={exp.CMSChartImg.src}
                                description={exp.CMSChartImg.desc}
                                lg_size="w-[100%]"
                                maxH="max-h-[34vh] md:max-h-[36vh] lg:max-h-[36vh]"
                            />
                            <ProjectImage
                                alt={exp.PMSChartImg.alt}
                                src={exp.PMSChartImg.src}
                                description={exp.PMSChartImg.desc}
                                lg_size="w-[100%]"
                                maxH="max-h-[34vh] md:max-h-[36vh] lg:max-h-[36vh]"
                            />
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
                        <ProjectImage
                            alt={exp.ExpViewImg.alt}
                            src={exp.ExpViewImg.src}
                            description={exp.ExpViewImg.desc}
                            lg_size="w-[45%]"
                            maxH="max-h-[100vh] lg:max-h-[35vh]"
                        />
                        <ProjectImage
                            alt="Expenses Recorder - Past Month Spending Chart Example"
                            src="/projects/exprec/exprec_expview_details.png"
                            description="A snippet of an example list of expenses for the selected month."
                            lg_size="w-[45%]"
                            maxH="max-h-[100vh] lg:max-h-[35vh]"
                        />
                    </div>
                ),
                images: true,
            },

            {
                key: "budgets",
                title: "Budgets Page",
                desc: <p className="font-raleway dark:text-slate-100/90 text-slate-900 text-left">{exp.budgetPageDesc}</p>,
                media: (
                    <ProjectImage
                        alt="Expenses Recorder - Expenses Month Summary Example"
                        src="/projects/exprec/exprec_budget.png"
                        description="A snippet of the budget page, where I am able to modify the amounts to fit my financial needs."
                        size={512}
                        lg_size="w-3/4"
                    />
                ),
                images: true,
            },

            // One slide, two titled subsections (left/right)
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
        ]
    }, [name])

    // -------- DESKTOP HORIZONTAL RAIL (separate from mobile) --------
    const railRef = useRef(null)

    useEffect(() => {
        const el = railRef.current
        if (!el) return

        const isDesktop = () => window.matchMedia("(min-width: 1024px)").matches

        const onWheel = (e) => {
            if (!isDesktop()) return
            e.preventDefault()
            el.scrollBy({ left: e.deltaY, behavior: "smooth" })
        }

        const onKey = (e) => {
            if (!isDesktop()) return
            if (e.key === "ArrowRight" || e.key === "PageDown") {
                e.preventDefault()
                el.scrollBy({ left: window.innerWidth, behavior: "smooth" })
            } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
                e.preventDefault()
                el.scrollBy({ left: -window.innerWidth, behavior: "smooth" })
            }
        }

        // Attach only once (desktop container exists only on lg)
        el.addEventListener("wheel", onWheel, { passive: false })
        window.addEventListener("keydown", onKey)
        return () => {
            el.removeEventListener("wheel", onWheel)
            window.removeEventListener("keydown", onKey)
        }
    }, [])

    // Helpers to render one section (avoid duplicate JSX mistakes)
    const MediaContent = ({ s }) => (
        <>
            {/* MEDIA column (alternates on desktop, or forced by mediaLeft) */}
            <div className="flex items-center justify-center">
                <div className="w-full flex items-center justify-center">{s.media}</div>
            </div>
            {/* CONTENT column */}
            <div className="flex items-center justify-center">
                <div className="w-full max-w-3xl lg:max-w-2xl text-left lg:text-left">
                    {s.title && (
                        <h2 className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-extrabold text-amber-700 dark:text-amber-400 font-rubikmono mb-4">
                            {s.title}
                        </h2>
                    )}
                    {s.desc && <div className="mb-6">{s.desc}</div>}
                    {s.meta}
                </div>
            </div>
        </>
    )

    const NoMediaContent = ({ s }) => (
        <div className="w-full max-w-3xl text-left lg:text-center">
            {s.title && (
                <h2 className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-extrabold text-amber-700 dark:text-amber-400 font-rubikmono mb-4">
                    {s.title}
                </h2>
            )}
            {s.desc && <div className="mb-6 lg:mb-8">{s.desc}</div>}
            {s.media && <div className="flex items-center justify-center">{s.media}</div>}
            {s.meta && <div className="mt-6">{s.meta}</div>}
        </div>
    )

    return (
        <main
            className="
        fixed inset-0
        bg-gradient-to-b from-amber-50 via-amber-100 to-amber-200
        dark:from-amber-900/70 dark:via-amber-950/80 dark:to-black
      "
        >
            <Navbar pageName="Project - Expenses Recorder" />

            {/* ---------- MOBILE/TABLET (unchanged vertical flow) ---------- */}
            <div className="lg:hidden pt-14 h-full w-full overflow-y-auto scroll-smooth">
                {(() => {
                    // Alternate media/text only across media sections
                    let mediaIndex = -1
                    return sections.map((s, idx) => {
                        const hasMedia = !!s.media && s.images
                        const _ = hasMedia ? (++mediaIndex, true) : false // just to increment in order
                        return (
                            <section
                                key={s.key}
                                className="py-4 sm:py-6 flex items-center justify-center px-4 fade-in"
                            >
                                <div
                                    className={[
                                        "w-full max-w-6xl grid",
                                        hasMedia ? "gap-4" : "place-items-center",
                                    ].join(" ")}
                                >
                                    {hasMedia ? <MediaContent s={s} /> : <NoMediaContent s={s} />}
                                </div>
                            </section>
                        )
                    })
                })()}
            </div>

            {/* ---------- DESKTOP (horizontal rail) ---------- */}
            <div
                ref={railRef}
                className="
          hidden lg:block
          pt-14 w-full
          overflow-x-auto overflow-y-hidden
          scroll-smooth
          snap-x snap-mandatory
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          h-[calc(100vh-56px)]
        "
            >
                <div className="flex flex-row h-full items-stretch">
                    {(() => {
                        let mediaIndex = -1
                        return sections.map((s) => {
                            const hasMedia = !!s.media && s.images
                            const computedLeft = hasMedia ? (++mediaIndex % 2 === 0) : null
                            const mediaOnLeft = s.mediaLeft ?? computedLeft

                            return (
                                <section
                                    key={s.key}
                                    className="
                                        snap-start
    px-8
    grid place-items-center          
    h-[calc(100vh-56px)]             
    w-screen flex-none
  "
                                >

                                    <div
                                        className={[
                                            "w-full max-w-6xl grid",
                                            hasMedia ? "gap-10 grid-cols-1 lg:grid-cols-2" : "place-items-center",
                                        ].join(" ")}
                                        style={{ direction: mediaOnLeft ? "ltr" : "rtl" }} // cheap, robust swap
                                    >
                                        {/* Using direction swap keeps DOM simple; flip children back */}
                                        <div style={{ direction: "ltr" }}>
                                            {hasMedia ? (
                                                <div className="flex items-center justify-center">
                                                    <div className="w-full flex items-center justify-center">{s.media}</div>
                                                </div>
                                            ) : (
                                                <NoMediaContent s={s} />
                                            )}
                                        </div>
                                        {hasMedia && (
                                            <div style={{ direction: "ltr" }}>
                                                <div className="flex h-full items-center justify-center">
                                                    <div className="w-full max-w-2xl text-left">
                                                        {s.title && (
                                                            <h2 className="text-center lg:text-left text-5xl font-extrabold text-amber-700 dark:text-amber-400 font-rubikmono mb-4">
                                                                {s.title}
                                                            </h2>
                                                        )}
                                                        {s.desc && <div className="mb-6">{s.desc}</div>}
                                                        {s.meta}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </section>
                            )
                        })
                    })()}
                </div>
            </div>

            <BackToTopButton />
        </main>
    )
}
