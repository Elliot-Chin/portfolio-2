import { useEffect, useMemo, useRef, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { ReactTyped } from "react-typed"
import { HomeTopNav } from "@/components/nav/HomeTopNav"
import { Loader } from "@/components/nav/Loader"

import { timeline } from "@/components/data/timelineData"

const projectsFromTimeline = (timeline ?? []).filter((entry) => entry.type === "project")

const placeholderImages = [
    "/projects/exprec/Logo.png",
    "/projects/am/Logo.png",
]

const metadataPresets = [
    { updated: "14-JUN-2024", uptime: "99.999%", risk: "LOW", version: "v2.1.4-LTS" },
    { updated: "03-NOV-2022", uptime: "98.410%", risk: "MED", version: "v1.8.2-STABLE" },
    { updated: "22-AUG-2024", uptime: "99.270%", risk: "LOW", version: "v3.0.1" },
]

const stripTags = (value = "") => value.replace(/<[^>]*>/g, "").trim()

const decodeProjectTitle = (title = "") => (
    title
        .replace(/Ã¢â‚¬â€/g, "—")
        .replace(/â€”/g, "—")
        .replace(/&mdash;/gi, "—")
        .replace(/<br\s*\/?>/gi, " ")
)

const getProjectLabel = (title = "") => {
    const cleaned = decodeProjectTitle(title)
    const parts = cleaned.split("—")
    return stripTags(parts.length > 1 ? parts[parts.length - 1] : cleaned) || "Project"
}

const getProjectHeading = (title = "") => {
    const cleaned = decodeProjectTitle(title)
    return stripTags(cleaned).replace(/^Project\s*—\s*/i, "") || "Project"
}

const getProjectImage = (project, index) => {
    if (project?.logo && typeof project.logo === "string" && project.logo.startsWith("/")) {
        return project.logo
    }
    return placeholderImages[index % placeholderImages.length]
}

const getProjectMetadata = (project, index) => {
    const preset = metadataPresets[index % metadataPresets.length]
    return {
        updated: preset.updated,
        uptime: preset.uptime,
        risk: preset.risk,
        version: preset.version,
        branch: project?.year >= 2024 ? "MAIN" : "LEGACY",
    }
}

function ProjectPanel({ project, index, onOpen }) {
    const label = getProjectLabel(project.title)
    const heading = getProjectHeading(project.title)
    const imageSrc = getProjectImage(project, index)
    const metadata = getProjectMetadata(project, index)

    return (
        <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/8 bg-slate-900/78 px-5 py-3">
                <div className="flex items-center gap-3 font-spacemono text-sm font-bold text-blue-200">
                    <span className="text-slate-300">&gt;_</span>
                    <span>~/projects/{label.toLowerCase().replace(/\s+/g, "-")}</span>
                </div>
                <div className="flex items-center gap-4 font-spacemono text-[11px] uppercase tracking-[0.22em] text-slate-400/80">
                    <span>
                        Branch: <span className="text-emerald-300">{metadata.branch}</span>
                    </span>
                    <span>{metadata.version}</span>
                </div>
            </div>

            <div className="grid gap-8 px-6 py-6 lg:grid-cols-[minmax(0,1.65fr)_18rem] lg:px-8 lg:py-7">
                <div className="min-w-0">
                    <h2 className="font-montserrat text-[2rem] font-semibold tracking-tight text-blue-100 md:text-[2.3rem]">
                        {heading}
                    </h2>
                    <p className="mt-4 max-w-4xl font-montserrat text-lg leading-relaxed text-slate-100/92">
                        {stripTags(project.desc)}
                    </p>

                    <div className="mt-7 font-spacemono text-base font-bold text-emerald-300">
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
                                            <span className="text-blue-200">+</span>
                                            <span>{stripTags(detail)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative min-h-[240px] bg-slate-950/50">
                                <Image
                                    src={imageSrc}
                                    alt={`${heading} preview`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 28rem"
                                    className="object-cover"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,31,0)_0%,rgba(7,16,31,0.14)_45%,rgba(7,16,31,0.48)_100%)]" />
                            </div>
                        </div>
                    </div>
                </div>

                <aside className="border-l-0 border-slate-200/8 pl-0 lg:border-l lg:pl-8">
                    <h3 className="font-spacemono text-sm font-bold uppercase tracking-[0.24em] text-blue-100">
                        Metadata
                    </h3>

                    <dl className="mt-5 space-y-4 font-spacemono text-sm text-slate-300/85">
                        <div className="flex items-center justify-between gap-6">
                            <dt>Updated:</dt>
                            <dd className="text-right text-slate-100">{metadata.updated}</dd>
                        </div>
                        <div className="flex items-center justify-between gap-6">
                            <dt>Risk Profile:</dt>
                            <dd className="text-right text-blue-100">{metadata.risk}</dd>
                        </div>
                    </dl>

                    {project.tech?.length > 0 && (
                        <div className="mt-8 flex flex-wrap gap-2">
                            {project.tech.map((item) => (
                                <span
                                    key={item}
                                    className="border border-blue-200/8 bg-blue-300/10 px-2.5 py-1 font-spacemono text-[11px] font-bold uppercase tracking-[0.16em] text-blue-100"
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
                                className="home-btn home-btn-secondary w-full"
                            >
                                View_Source
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
    const [loading, setLoading] = useState({ state: false, name: "" })

    const projects = useMemo(() => {
        if (projectsFromTimeline.length >= 1) return projectsFromTimeline
        return []
    }, [])

    useEffect(() => {
        document.body.classList.add("home-grid-bg")
        return () => document.body.classList.remove("home-grid-bg")
    }, [])

    return (
        <>
            <Head>
                <title>Elliot Chin — Projects</title>
                <meta name="description" content="Selected projects by Elliot Chin." />
            </Head>

            {loading.state && <Loader pageName={loading.name} />}

            <main
                ref={containerRef}
                className="relative h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth overscroll-contain bg-transparent text-amber-50"
            >
                <HomeTopNav containerRef={containerRef} />

                <div className="pt-14">
                    <section data-fade data-projects-header className="px-6 pb-6 pt-6 sm:px-10 lg:px-14">
                        <div className="mx-auto w-full max-w-[96rem]">
                            <div className="relative overflow-hidden border border-slate-200/10 bg-slate-950/38 px-6 py-6 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                                </div>
                                <div className="font-spacemono text-[clamp(1.5rem,3vw,2.2rem)] leading-tight text-emerald-300">
                                    <span className="text-cyan-300">visitor@elliot-chin</span>
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
                            {projects.map((project, index) => (
                                <ProjectPanel
                                    key={project.id}
                                    project={project}
                                    index={index}
                                    onOpen={(name) => setLoading({ state: true, name })}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
