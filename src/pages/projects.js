import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ReactTyped } from "react-typed"
import { ExpandLessOutlined, ExpandMoreOutlined } from "@mui/icons-material"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import { SeoHead } from "@/components/seo/SeoHead"

import { timeline } from "@/components/data/timelineData"

const projectsFromTimeline = (timeline ?? []).filter((entry) => entry.type === "project")

const stripTags = (value = "") => value.replace(/<[^>]*>/g, "").trim()

const decodeProjectTitle = (title = "") => (
    title
        .replace(/ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â/g, "â€”")
        .replace(/Ã¢â‚¬â€/g, "â€”")
        .replace(/&mdash;/gi, "â€”")
        .replace(/<br\s*\/?>/gi, " ")
)

const getProjectLabel = (title = "") => {
    const cleaned = decodeProjectTitle(title)
    const parts = cleaned.split("â€”")
    return stripTags(parts.length > 1 ? parts[parts.length - 1] : cleaned) || "Project"
}

const getProjectHeading = (title = "") => {
    const cleaned = decodeProjectTitle(title)
    return stripTags(cleaned).replace(/^Project\s*â€”\s*/i, "") || "Project"
}

const getProjectImage = (project) => {
    if (project?.logo && typeof project.logo === "string" && project.logo.startsWith("/")) {
        return project.logo
    }
}

const getProjectMetadata = (project) => {
    const metadata = project?.metadata ?? {}
    return {
        updated: metadata.updated ?? "N/A",
        uptime: metadata.uptime ?? null,
        risk: metadata.risk ?? "N/A",
        version: metadata.version ?? "UNVERSIONED",
        branch: metadata.branch ?? (project?.year >= 2024 ? "MAIN" : "LEGACY"),
    }
}

function AutoPanLabel({ text, className = "" }) {
    const viewportRef = useRef(null)
    const trackRef = useRef(null)
    const [style, setStyle] = useState({})
    const [shouldPan, setShouldPan] = useState(false)

    useEffect(() => {
        const viewport = viewportRef.current
        const track = trackRef.current
        if (!viewport || !track) return

        const update = () => {
            const mobile = window.innerWidth < 640
            if (!mobile) {
                setShouldPan(false)
                setStyle({})
                return
            }

            const overflow = Math.ceil(track.scrollWidth - viewport.clientWidth)
            if (overflow <= 8) {
                setShouldPan(false)
                setStyle({})
                return
            }

            setShouldPan(true)
            setStyle({
                "--experience-title-scroll-distance": `-${overflow}px`,
                "--experience-title-scroll-duration": `${Math.max(7, overflow / 26 + 5)}s`,
                "--experience-title-scroll-delay": "1s",
            })
        }

        const requestUpdate = () => requestAnimationFrame(update)
        const resizeObserver = new ResizeObserver(requestUpdate)
        resizeObserver.observe(viewport)
        resizeObserver.observe(track)
        window.addEventListener("resize", requestUpdate)
        update()

        return () => {
            resizeObserver.disconnect()
            window.removeEventListener("resize", requestUpdate)
        }
    }, [text])

    return (
        <div ref={viewportRef} className={`max-w-full overflow-hidden ${className}`}>
            <div
                ref={trackRef}
                style={style}
                className={`inline-flex min-w-max whitespace-nowrap ${shouldPan ? "experience-title-marquee" : ""}`}
            >
                {text}
            </div>
        </div>
    )
}

function ProjectPanel({ project, isLoading, onOpen, revealImmediately = false }) {
    const label = getProjectLabel(project.title)
    const heading = getProjectHeading(project.title)
    const imageSrc = getProjectImage(project)
    const metadata = getProjectMetadata(project)
    const [isMobileExpanded, setIsMobileExpanded] = useState(revealImmediately)
    const MobileToggleIcon = isMobileExpanded ? ExpandLessOutlined : ExpandMoreOutlined

    return (
        <article
            data-fade={revealImmediately ? undefined : true}
            className={`overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px] transition duration-700 ease-out ${
                revealImmediately ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
        >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 sm:px-5">
                <div className="flex min-w-0 flex-1 items-center gap-3 font-spacemono text-[12px] font-bold text-amber-200 sm:flex-none sm:text-sm">
                    <span className="text-amber-100/85">&gt;_</span>
                    <AutoPanLabel text={`~/projects/${label.toLowerCase().replace(/\s+/g, "-")}`} className="flex-1" />
                </div>
                <div className="hidden items-center gap-4 font-spacemono text-[11px] uppercase tracking-[0.22em] text-slate-400/80 lg:flex">
                    <span>
                        Branch: <span className="text-amber-300">{metadata.branch}</span>
                    </span>
                    <span>{metadata.version}</span>
                </div>
            </div>

            <div className="grid gap-5 px-4 py-4 sm:px-6 sm:py-5 lg:grid-cols-[minmax(0,1.65fr)_18rem] lg:gap-8 lg:px-8 lg:py-7">
                <div className="min-w-0">
                    <div className="mb-3 flex items-center justify-between gap-4 lg:hidden">
                        <div className="font-spacemono text-[10px] uppercase tracking-[0.16em] text-slate-400/78">
                            <span>{metadata.branch}</span>
                            <span className="mx-2 text-slate-600">/</span>
                            <span>{metadata.version}</span>
                        </div>
                    </div>

                    <h2 className="font-montserrat text-[clamp(1.02rem,5.4vw,1.45rem)] font-semibold tracking-tight text-amber-100 sm:text-[1.7rem] md:text-[2.3rem]">
                        {heading}
                    </h2>
                    <p className="mt-3 max-w-4xl font-montserrat text-[0.95rem] leading-relaxed text-slate-100/92 sm:mt-4 sm:text-[1.02rem] md:text-lg">
                        {stripTags(project.desc)}
                    </p>

                    <div className="mt-4 overflow-hidden border border-slate-200/10 bg-[#07101f] lg:hidden">
                        <div className="relative min-h-[200px] bg-slate-950/50 p-3">
                            <Image
                                src={imageSrc}
                                alt={`${heading} preview`}
                                fill
                                sizes="100vw"
                                className="object-contain p-2"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,31,0)_0%,rgba(7,16,31,0.14)_45%,rgba(7,16,31,0.48)_100%)]" />
                        </div>
                    </div>

                    <div className="mt-4 lg:hidden">
                        <button
                            type="button"
                            onClick={() => setIsMobileExpanded((current) => !current)}
                            className="inline-flex min-h-[2.75rem] items-center gap-2 border border-amber-200/18 bg-amber-300/10 px-4 py-2 font-spacemono text-[11px] font-bold uppercase tracking-[0.2em] text-amber-50 shadow-[0_10px_24px_rgba(2,8,23,0.22)]"
                        >
                            <span>{isMobileExpanded ? "Less Details" : "More Details"}</span>
                            <MobileToggleIcon sx={{ fontSize: 18 }} />
                        </button>
                    </div>

                    <div className="mt-5 flex items-start gap-2 font-spacemono text-[12px] font-bold text-amber-300 sm:mt-6 sm:text-sm md:text-base">
                        <span>{">> "}</span>
                        <AutoPanLabel
                            text={
                                project.deploy
                                    ? `deploy ${project.deploy.toLowerCase().replace(/\s+/g, "-")} --inspect`
                                    : "deep-inspect --preview"
                            }
                            className="flex-1"
                        />
                    </div>

                    <div className={`mt-4 overflow-hidden border border-slate-200/10 bg-[#07101f] ${isMobileExpanded ? "block" : "hidden"} lg:block`}>
                        <div className="grid gap-0 lg:grid-cols-[minmax(0,1.18fr)_minmax(260px,0.82fr)]">
                            <div className="border-b border-slate-200/10 p-4 lg:border-b-0 lg:border-r">
                                <div className="mb-3 font-spacemono text-[10px] font-bold uppercase tracking-[0.18em] text-amber-100 lg:hidden">
                                    Project Details
                                </div>
                                <div className="space-y-2 font-spacemono text-[12px] leading-5 text-slate-300/88 sm:text-[13px] sm:leading-6 md:text-[14px]">
                                    {(project.details ?? []).map((detail, detailIndex) => (
                                        <div key={detailIndex} className="flex gap-3">
                                            <span className="text-amber-200">+</span>
                                            <span>{stripTags(detail)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative hidden min-h-[220px] bg-slate-950/50 p-3 lg:block lg:min-h-[240px] lg:p-4">
                                <Image
                                    src={imageSrc}
                                    alt={`${heading} preview`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 28rem"
                                    className="object-contain"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,31,0)_0%,rgba(7,16,31,0.14)_45%,rgba(7,16,31,0.48)_100%)]" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 lg:hidden">
                        <Link
                            href={project.link}
                            onClick={() => onOpen(label)}
                            aria-disabled={isLoading}
                            className={`home-btn home-btn-secondary w-full justify-center !px-4 !py-2.5 ${isLoading ? "pointer-events-none opacity-70" : ""}`}
                        >
                            {isLoading ? (
                                <span
                                    aria-hidden="true"
                                    className="h-4 w-4 animate-spin rounded-full border-2 border-amber-100/25 border-t-amber-100"
                                />
                            ) : (
                                "Open_Project"
                            )}
                        </Link>
                    </div>
                </div>

                <aside className={`border-l-0 border-slate-200/8 pl-0 ${isMobileExpanded ? "block" : "hidden"} lg:block lg:border-l lg:pl-8`}>
                    <h3 className="font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:text-sm sm:tracking-[0.24em]">
                        Metadata
                    </h3>

                    <dl className="mt-4 space-y-3 font-spacemono text-[12px] text-slate-300/85 sm:mt-5 sm:space-y-4 sm:text-sm">
                        <div className="flex items-center justify-between gap-6">
                            <dt>Updated:</dt>
                            <dd className="text-right text-slate-100">{metadata.updated}</dd>
                        </div>
                        {metadata.uptime && (
                            <div className="flex items-center justify-between gap-6">
                                <dt>Uptime:</dt>
                                <dd className="text-right text-slate-100">{metadata.uptime}</dd>
                            </div>
                        )}
                        <div className="flex items-center justify-between gap-6">
                            <dt>Risk Profile:</dt>
                            <dd className="text-right text-amber-100">{metadata.risk}</dd>
                        </div>
                    </dl>

                    {project.tech?.length > 0 && (
                        <div className="mt-8 flex flex-wrap gap-2">
                            {project.tech.map((item) => (
                                <span
                                    key={item}
                                    className="border border-amber-200/10 bg-amber-300/10 px-2.5 py-1 font-spacemono text-[11px] font-bold uppercase tracking-[0.16em] text-amber-100"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    )}

                    {project.link && (
                        <div className="mt-7 hidden lg:block lg:mt-9">
                            <Link
                                href={project.link}
                                onClick={() => onOpen(label)}
                                aria-disabled={isLoading}
                                className={`home-btn home-btn-secondary w-full ${isLoading ? "pointer-events-none opacity-70" : ""}`}
                            >
                                {isLoading ? (
                                    <span
                                        aria-hidden="true"
                                        className="h-4 w-4 animate-spin rounded-full border-2 border-amber-100/25 border-t-amber-100"
                                    />
                                ) : (
                                    "View_Source"
                                )}
                            </Link>
                        </div>
                    )}
                </aside>
            </div>
        </article>
    )
}

export default function ProjectsPage() {
    const containerRef = useRef(null)
    const [loadingProjectId, setLoadingProjectId] = useState(null)

    const projects = useMemo(() => {
        if (projectsFromTimeline.length >= 1) return projectsFromTimeline
        return []
    }, [])

    useEffect(() => {
        document.body.classList.add("home-grid-bg")
        return () => document.body.classList.remove("home-grid-bg")
    }, [])

    useEffect(() => {
        const root = containerRef.current
        if (!root) return

        const nodes = Array.from(root.querySelectorAll("[data-fade]"))
        if (!nodes.length) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return
                    entry.target.classList.add("!translate-y-0", "!opacity-100")
                    observer.unobserve(entry.target)
                })
            },
            {
                root,
                threshold: 0.14,
                rootMargin: "0px 0px -8% 0px",
            }
        )

        nodes.forEach((node) => observer.observe(node))

        return () => observer.disconnect()
    }, [])

    return (
        <>
            <SeoHead
                title="Projects | Elliot Chin"
                description="Selected projects by Elliot Chin across OT cybersecurity, industrial protocol analysis, internal tooling, APIs, and applied AI research."
                path="/projects"
            />

            <main
                ref={containerRef}
                className="relative h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth overscroll-contain bg-transparent text-amber-50"
            >
                <BackToTopButton targetRef={containerRef} />

                <div className="pt-14">
                    <section data-fade data-projects-header className="px-4 pb-5 pt-4 sm:px-10 sm:pb-6 sm:pt-6 lg:px-14">
                        <div className="mx-auto w-full max-w-[96rem]">
                            <div className="relative overflow-hidden border border-slate-200/10 bg-slate-950/38 px-4 py-4 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px] sm:px-6 sm:py-6">
                                <div className="mb-3 flex items-center gap-3 sm:mb-4">
                                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                                </div>
                                <div className="font-spacemono text-[clamp(0.95rem,4.1vw,2.2rem)] leading-tight text-amber-300 sm:text-[clamp(1.1rem,6vw,2.2rem)] lg:text-[clamp(1.28rem,2.05vw,1.95rem)] lg:whitespace-nowrap">
                                    <span className="block lg:inline">
                                        <span className="text-amber-100 lg:hidden">visitor</span>
                                        <span className="hidden text-amber-100 lg:inline">visitor@elliot-chin</span>
                                        <span className="text-slate-200">:~/projects$ </span>
                                    </span>
                                    <span className="block lg:inline">
                                        <ReactTyped
                                            strings={["ls -la --deep-inspect"]}
                                            typeSpeed={34}
                                            showCursor={false}
                                            startWhenVisible
                                            className="inline"
                                        />
                                        <span className="typewriter-cursor">_</span>
                                    </span>
                                </div>
                                <p className="mt-3 font-spacemono text-[12px] text-slate-400/90 sm:text-sm">
                                    Total items: {projects.length}. Displaying active deployments and secure repository entries.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section data-fade data-projects-browser className="px-4 pb-14 sm:px-10 lg:px-14">
                        <div className="mx-auto flex w-full max-w-[96rem] flex-col gap-5 sm:gap-8">
                            {projects.map((project, index) => (
                                <ProjectPanel
                                    key={project.id}
                                    project={project}
                                    isLoading={loadingProjectId === project.id}
                                    onOpen={() => setLoadingProjectId(project.id)}
                                    revealImmediately={index === 0}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
