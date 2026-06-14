import Link from "next/link"
import { useEffect, useRef } from "react"
import {
    ApiOutlined,
    DashboardOutlined,
    FolderCopyOutlined,
    HubOutlined,
    OpenInNewOutlined,
    QueryStatsOutlined,
    SecurityOutlined,
    StorageOutlined,
} from "@mui/icons-material"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import { ProjectOverviewCardsRow } from "@/components/projects/ProjectOverviewCardsRow"
import { ProjectTerminalCommand, ProjectTerminalLabel } from "@/components/projects/ProjectTerminalLine"
import { SeoHead } from "@/components/seo/SeoHead"

const northboundApiProject = {
    title: "Northbound API",
    slug: "~/projects/sinec-security-monitor/northbound-api",
    eyebrow: "Siemens / SINEC Security Monitor / API interfaces / dashboard POC",
    duration: "Proof of concept / internal platform extension",
    year: "2025",
    TLDR:
        "A proof-of-concept effort to develop Northbound API interfaces within Siemens SINEC Security Monitor so processed information could be extracted, shown in an external dashboard, or passed into other downstream process pipelines.",
    command: "expose northbound-api --source ssm --output dashboard,pipeline",
    contextOne:
        "SINEC Security Monitor is Siemens' OT cybersecurity platform for passive monitoring of industrial environments, providing visibility into assets, communication behavior, threats, alerts, and broader network activity without interfering with production operations.",
    contextTwo:
        "The goal of this project was to prove that selected processed information from that environment could be made available through clean API interfaces, allowing the data to leave the core product boundary and be consumed by other dashboards or workflow systems.",
    contextThree:
        "As part of the proof of concept, I also developed a companion dashboard using Next.js and Flask to demonstrate how the extracted information could be queried, displayed, and combined with asset information, security events, and alert data pulled through the API layer and supporting database interactions.",
    conclusion:
        "The POC showed that SINEC Security Monitor data could be exposed through a practical Northbound API layer and immediately reused in external views or integration paths, turning internal processed data into something more portable and operationally useful.",
    finalThoughts:
        "This project strengthened API design, internal platform integration, dashboard prototyping, and data-flow thinking around how security telemetry should move between systems instead of staying trapped in a single interface.",
}

const overviewCards = [
    {
        title: "API Exposure",
        body:
            "Develop API interfaces inside SINEC Security Monitor so processed data can be queried by systems outside the primary application surface.",
        Icon: ApiOutlined,
    },
    {
        title: "Dashboard POC",
        body:
            "Build an external dashboard to prove the extracted information is usable, navigable, and valuable once it leaves the original product context.",
        Icon: DashboardOutlined,
    },
    {
        title: "Pipeline Reuse",
        body:
            "Design the concept around portability so the same data can support downstream analytics, reporting, or additional security workflows.",
        Icon: HubOutlined,
    },
]

const metadataItems = [
    { label: "Type:", value: "Internal POC / Platform Extension" },
    { label: "Product:", value: "SINEC Security Monitor" },
    { label: "Frontend:", value: "Next.js" },
    { label: "Backend:", value: "Flask" },
    { label: "Focus:", value: "API Interfaces / Data Extraction / Dashboarding" },
    { label: "Outputs:", value: "Assets / Security Events / Alerts" },
]

const implementationCards = [
    {
        title: "Northbound Interface Design",
        body:
            "Define how processed SSM information should be exposed so external consumers can retrieve structured results without needing direct knowledge of the product internals.",
        command: "map processed telemetry -> external API contracts",
        Icon: ApiOutlined,
    },
    {
        title: "Data Access Layer",
        body:
            "Use the API interfaces and supporting database interactions to retrieve asset information, security events, alerts, and other processed records needed for the demonstration workflow.",
        command: "query APIs + collect supporting asset/event records",
        Icon: StorageOutlined,
    },
    {
        title: "External Visualization",
        body:
            "Build a Next.js and Flask dashboard proof of concept that turns the extracted data into a separate operational view for stakeholders.",
        command: "render dashboard -> validate external usability",
        Icon: QueryStatsOutlined,
    },
]

const outcomeCards = [
    {
        title: "Stakeholder Demonstration",
        body:
            "A working POC build was prepared to show stakeholders that processed SSM data could be surfaced outside the main product in a usable way.",
        Icon: OpenInNewOutlined,
    },
    {
        title: "Integration Direction",
        body:
            "The concept established a practical path for moving data into other dashboards or process pipelines instead of limiting visibility to a single interface.",
        Icon: HubOutlined,
    },
    {
        title: "Security Context Preservation",
        body:
            "Even when displayed externally, the extracted information kept its operational value by preserving links to assets, alerts, and security event context.",
        Icon: SecurityOutlined,
    },
]

export default function NorthboundApiPage() {
    const containerRef = useRef(null)

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
                title="Northbound API | Elliot Chin"
                description="Proof-of-concept Northbound API project for Siemens SINEC Security Monitor, including external dashboard and data extraction workflows."
                path="/projects/Northbound_API"
                image="https://elliotc.dev/projects/northbound-api/logo.png"
            />

            <main
                ref={containerRef}
                className="relative h-screen overflow-y-scroll scroll-smooth overscroll-contain bg-transparent text-slate-50"
            >
                <BackToTopButton targetRef={containerRef} />

                <div className="pt-14">
                    <section data-fade className="translate-y-4 px-4 pb-6 pt-4 opacity-0 transition duration-700 ease-out sm:px-10 sm:pt-6 lg:px-14">
                        <div className="mx-auto w-full max-w-[96rem]">
                            <div className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="flex flex-col items-start gap-2.5 border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3 sm:px-5">
                                    <div className="flex min-w-0 w-full items-center gap-3 font-spacemono text-[12px] font-bold text-amber-200 sm:w-auto sm:flex-1 sm:flex-none sm:text-sm">
                                        <span className="text-slate-300">&gt;_</span>
                                        <ProjectTerminalLabel text={northboundApiProject.slug} className="flex-1" />
                                    </div>
                                    <div className="w-full font-spacemono text-[10px] uppercase tracking-[0.16em] text-slate-400/80 sm:w-auto sm:text-[11px] sm:tracking-[0.22em]">
                                        internal platform integration / {northboundApiProject.year}
                                    </div>
                                </div>

                                <div className="grid gap-5 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-[minmax(0,1.25fr)_24rem] lg:gap-8 lg:px-8 lg:py-8">
                                    <div className="min-w-0">
                                        <div className="font-spacemono text-[12px] uppercase tracking-[0.16em] text-amber-300 sm:text-sm sm:tracking-[0.22em]">
                                            {northboundApiProject.eyebrow}
                                        </div>

                                        <h1 className="mt-3 font-montserrat text-[clamp(1.75rem,8vw,3.15rem)] font-semibold tracking-tight text-blue-100">
                                            {northboundApiProject.title}
                                        </h1>

                                        <p className="mt-4 max-w-4xl font-montserrat text-[0.98rem] leading-relaxed text-slate-100/90 sm:mt-6 sm:text-lg">
                                            {northboundApiProject.TLDR}
                                        </p>

                                        <ProjectTerminalCommand text={northboundApiProject.command} className="mt-5 sm:mt-7" />

                                        <div className="mt-7 flex flex-wrap gap-3">
                                            <Link href="/projects" className="home-btn home-btn-primary w-full justify-center sm:w-auto">
                                                <FolderCopyOutlined sx={{ fontSize: 18 }} />
                                                <span>All_Projects</span>
                                            </Link>
                                        </div>
                                    </div>

                                    <aside className="overflow-hidden border border-slate-200/10 bg-[#07101f]">
                                        <div className="border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:px-5 sm:text-sm sm:tracking-[0.22em]">
                                            Data Route
                                        </div>

                                        <div className="space-y-4 px-4 py-4 sm:px-5 sm:py-5">
                                            <div className="border border-slate-200/10 bg-slate-950/36 px-4 py-3">
                                                <div className="font-spacemono text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                                                    Source
                                                </div>
                                                <p className="mt-2 font-montserrat text-sm leading-relaxed text-slate-200/86">
                                                    Processed SSM data, asset records, security events, and alert context.
                                                </p>
                                            </div>

                                            <div className="border border-slate-200/10 bg-slate-950/36 px-4 py-3">
                                                <div className="font-spacemono text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                                                    Interface
                                                </div>
                                                <p className="mt-2 font-montserrat text-sm leading-relaxed text-slate-200/86">
                                                    Northbound APIs provide structured access for systems outside the main product view.
                                                </p>
                                            </div>

                                            <div className="border border-slate-200/10 bg-slate-950/36 px-4 py-3">
                                                <div className="font-spacemono text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                                                    Consumers
                                                </div>
                                                <p className="mt-2 font-montserrat text-sm leading-relaxed text-slate-200/86">
                                                    External dashboards and downstream process pipelines that need actionable security context.
                                                </p>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section data-fade className="translate-y-4 px-4 pb-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                        <ProjectOverviewCardsRow cards={overviewCards} columnsClass="lg:grid-cols-3" />
                    </section>

                    <section data-fade className="translate-y-4 px-4 pb-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                        <div className="mx-auto grid w-full max-w-[96rem] gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:px-5 sm:text-sm sm:tracking-[0.22em]">
                                    Project Context
                                </div>
                                <div className="px-4 py-4 sm:px-5 sm:py-5">
                                    <p className="font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88 sm:text-[1rem]">
                                        {northboundApiProject.contextOne}
                                    </p>
                                    <p className="mt-4 font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88 sm:text-[1rem]">
                                        {northboundApiProject.contextTwo}
                                    </p>
                                    <p className="mt-4 font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88 sm:text-[1rem]">
                                        {northboundApiProject.contextThree}
                                    </p>
                                </div>
                            </article>

                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:px-5 sm:text-sm sm:tracking-[0.22em]">
                                    Metadata
                                </div>
                                <dl className="space-y-3 px-4 py-4 font-spacemono text-[12px] text-slate-300/85 sm:space-y-5 sm:px-5 sm:py-5 sm:text-sm">
                                    {metadataItems.map((item) => (
                                        <div key={item.label} className="flex items-center justify-between gap-6">
                                            <dt>{item.label}</dt>
                                            <dd className="text-right text-slate-100">{item.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </article>
                        </div>
                    </section>

                    <section data-fade className="translate-y-4 px-4 pb-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                        <div className="mx-auto flex w-full max-w-[96rem] flex-col gap-6">
                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:px-5 sm:text-sm sm:tracking-[0.22em]">
                                    Implementation Flow
                                </div>

                                <div className="grid gap-4 px-4 py-4 sm:gap-5 sm:px-5 sm:py-5 lg:grid-cols-3">
                                    {implementationCards.map(({ title, body, command, Icon }) => (
                                        <article key={title} className="border border-slate-200/10 bg-[#07101f] p-5">
                                            <Icon className="text-amber-300" sx={{ fontSize: 24 }} />
                                            <h2 className="mt-4 font-montserrat text-[1.12rem] font-semibold tracking-tight text-slate-100 sm:text-[1.25rem]">
                                                {title}
                                            </h2>
                                            <p className="mt-3 font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88 sm:text-[1rem]">
                                                {body}
                                            </p>
                                            <div className="mt-5 border border-slate-200/10 bg-slate-950/52 px-4 py-3 font-spacemono text-[12px] text-amber-200 sm:text-sm">
                                                {command}
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </article>

                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:px-5 sm:text-sm sm:tracking-[0.22em]">
                                    Outcome
                                </div>

                                <div className="grid gap-4 px-4 py-4 sm:gap-5 sm:px-5 sm:py-5 lg:grid-cols-3">
                                    {outcomeCards.map(({ title, body, Icon }) => (
                                        <article key={title} className="border border-slate-200/10 bg-[#07101f] p-5">
                                            <Icon className="text-amber-300" sx={{ fontSize: 24 }} />
                                            <h2 className="mt-4 font-montserrat text-[1.12rem] font-semibold tracking-tight text-slate-100 sm:text-[1.25rem]">
                                                {title}
                                            </h2>
                                            <p className="mt-3 font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88 sm:text-[1rem]">
                                                {body}
                                            </p>
                                        </article>
                                    ))}
                                </div>
                            </article>
                        </div>
                    </section>

                    <section data-fade className="translate-y-4 px-4 pb-14 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                        <div className="mx-auto grid w-full max-w-[96rem] gap-6 lg:grid-cols-2">
                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:px-5 sm:text-sm sm:tracking-[0.22em]">
                                    Conclusion
                                </div>
                                <div className="px-4 py-4 sm:px-5 sm:py-5">
                                    <p className="font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88 sm:text-[1rem]">
                                        {northboundApiProject.conclusion}
                                    </p>
                                </div>
                            </article>

                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:px-5 sm:text-sm sm:tracking-[0.22em]">
                                    Final Thoughts
                                </div>
                                <div className="px-4 py-4 sm:px-5 sm:py-5">
                                    <p className="font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88 sm:text-[1rem]">
                                        {northboundApiProject.finalThoughts}
                                    </p>
                                </div>
                            </article>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
