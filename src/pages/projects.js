import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ReactTyped } from "react-typed"
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

function ProjectPanel({ project, isLoading, onOpen }) {
    const label = getProjectLabel(project.title)
    const heading = getProjectHeading(project.title)
    const imageSrc = getProjectImage(project)
    const metadata = getProjectMetadata(project)

    return (
        <article
            data-fade
            className="translate-y-4 overflow-hidden border border-slate-200/10 bg-slate-950/38 opacity-0 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px] transition duration-700 ease-out"
        >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/8 bg-slate-900/78 px-5 py-3">
                <div className="flex items-center gap-3 font-spacemono text-sm font-bold text-amber-200">
                    <span className="text-amber-100/85">&gt;_</span>
                    <span>~/projects/{label.toLowerCase().replace(/\s+/g, "-")}</span>
                </div>
                <div className="flex items-center gap-4 font-spacemono text-[11px] uppercase tracking-[0.22em] text-slate-400/80">
                    <span>
                        Branch: <span className="text-amber-300">{metadata.branch}</span>
                    </span>
                    <span>{metadata.version}</span>
                </div>
            </div>

            <div className="grid gap-8 px-6 py-6 lg:grid-cols-[minmax(0,1.65fr)_18rem] lg:px-8 lg:py-7">
                <div className="min-w-0">
                    <h2 className="font-montserrat text-[2rem] font-semibold tracking-tight text-amber-100 md:text-[2.3rem]">
                        {heading}
                    </h2>
                    <p className="mt-4 max-w-4xl font-montserrat text-lg leading-relaxed text-slate-100/92">
                        {stripTags(project.desc)}
                    </p>

                    <div className="mt-7 font-spacemono md:text-base font-bold text-sm text-amber-300">
                        {">> "}
                        {project.deploy
                            ? `deploy ${project.deploy.toLowerCase().replace(/\s+/g, "-")} --inspect`
                            : "deep-inspect --preview"}
                    </div>

                    <div className="mt-4 overflow-hidden border border-slate-200/10 bg-[#07101f]">
                        <div className="grid gap-0 lg:grid-cols-[minmax(0,1.18fr)_minmax(260px,0.82fr)]">
                            <div className="border-b border-slate-200/10 p-4 lg:border-b-0 lg:border-r">
                                <div className="space-y-2 font-spacemono text-[14px] leading-6 text-slate-300/88">
                                    {(project.details ?? []).map((detail, detailIndex) => (
                                        <div key={detailIndex} className="flex gap-3">
                                            <span className="text-amber-200">+</span>
                                            <span>{stripTags(detail)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative min-h-[240px] bg-slate-950/50 p-4">
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
                </div>

                <aside className="border-l-0 border-slate-200/8 pl-0 lg:border-l lg:pl-8">
                    <h3 className="font-spacemono text-sm font-bold uppercase tracking-[0.24em] text-amber-100">
                        Metadata
                    </h3>

                    <dl className="mt-5 space-y-4 font-spacemono text-sm text-slate-300/85">
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
                        <div className="mt-9">
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
                    <section data-fade data-projects-header className="px-6 pb-6 pt-6 sm:px-10 lg:px-14">
                        <div className="mx-auto w-full max-w-[96rem]">
                            <div className="relative overflow-hidden border border-slate-200/10 bg-slate-950/38 px-6 py-6 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                                </div>
                                <div className="font-spacemono text-[clamp(1.5rem,3vw,2.2rem)] leading-tight text-amber-300">
                                    <span className="text-amber-100">visitor@elliot-chin</span>
                                    <span className="text-slate-200">:~/projects$ </span>
                                    <ReactTyped
                                        strings={["ls -la --deep-inspect"]}
                                        typeSpeed={34}
                                        showCursor={false}
                                        startWhenVisible
                                        className="inline"
                                    />
                                    <span className="typewriter-cursor">_</span>
                                </div>
                                <p className="mt-3 font-spacemono text-sm text-slate-400/90">
                                    Total items: {projects.length}. Displaying active deployments and secure repository entries.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section data-fade data-projects-browser className="px-6 pb-14 sm:px-10 lg:px-14">
                        <div className="mx-auto flex w-full max-w-[96rem] flex-col gap-8">
                            {projects.map((project) => (
                                <ProjectPanel
                                    key={project.id}
                                    project={project}
                                    isLoading={loadingProjectId === project.id}
                                    onOpen={() => setLoadingProjectId(project.id)}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
