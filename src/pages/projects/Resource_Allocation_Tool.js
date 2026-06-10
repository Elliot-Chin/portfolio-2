import Link from "next/link"
import { useEffect, useRef } from "react"
import { ReactTyped } from "react-typed"
import {
    AssignmentTurnedInOutlined,
    FolderCopyOutlined,
    GridViewOutlined,
    InsightsOutlined,
    LockOutlined,
    SchemaOutlined,
    StorageOutlined,
    ViewTimelineOutlined,
} from "@mui/icons-material"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import { ProjectOverviewCardsRow } from "@/components/projects/ProjectOverviewCardsRow"
import { SeoHead } from "@/components/seo/SeoHead"

const ratProject = {
    title: "Resource Allocation Tool",
    slug: "~/projects/resource-allocation-tool",
    eyebrow: "planning dashboard / internal tooling / resource allocation / role-based access",
    duration: "Project proposal / internal web-app concept",
    year: "2024",
    TLDR:
        "A proposal to replace an Excel-based employee time-allocation tracker with a multi-user web application so managers could clearly see team capacity, allocation levels, and whether there was room to take on additional project work.",
    command: "migrate allocation-planning --from excel --to nextjs-flask-postgres",
    contextOne:
        "The original tool was an Excel-based tracker used to manage employee time allocation so managers could visually understand who had available capacity and whether the team could absorb more projects. As the workflow grew, the spreadsheet approach became harder to manage reliably.",
    contextTwo:
        "The proposed solution was to turn that spreadsheet workflow into a web-based Resource Allocation Tool with management dashboards, upload workflows, employee and project planning views, and role-based access controls while leaving room for phased expansion.",
    outcome:
        "The project was cancelled after phase one delivery when management changed and the organization no longer saw a need to continue tool development.",
    conclusion:
        "The proposal framed the migration as a usability, governance, and scalability improvement rather than just a technology refresh, with each rollout phase tied to a concrete planning workflow. In practice, the work stopped after phase one because a management change removed the business need to continue the tool.",
    finalThoughts:
        "Even though the project did not continue beyond phase one, it still reflects a solid internal-tooling approach: identify the workflow pain, scope the rollout in manageable phases, and align the stack and access model with how the team actually operates.",
}

const overviewCards = [
    {
        title: "Why Replace Excel",
        body:
            "The proposal focused on the limits of using Excel for employee time-allocation tracking once multiple stakeholders needed reliable visibility into team capacity and future project load.",
        Icon: InsightsOutlined,
    },
    {
        title: "Phased Delivery",
        body:
            "The rollout was split into three implementation phases so the manager dashboard, operational features, and project-specific planning views could be introduced in a controlled way.",
        Icon: ViewTimelineOutlined,
    },
    {
        title: "Governed Access",
        body:
            "Role-based access control and user management were treated as first-class requirements so the tool could support both stakeholders and broader team usage safely.",
        Icon: LockOutlined,
    },
]

const metadataItems = [
    { label: "Type:", value: "Internal Web Application Proposal" },
    { label: "Primary Goal:", value: "Replace Excel-based planning workflow" },
    { label: "Frontend:", value: "Next.js" },
    { label: "Backend:", value: "Flask" },
    { label: "Database:", value: "PostgreSQL" },
    { label: "Hosting:", value: "Docker" },
]

const phaseCards = [
    {
        title: "Phase 1",
        body:
            "Establish the initial system foundation: login, database design, dataset uploads, and a management dashboard for employee utilization, project planning, and hours allocation overview.",
        command: "bootstrap auth + uploads + management dashboard",
    },
    {
        title: "Phase 2",
        body:
            "Expand the operational surface with employee pages, project and employee creation, user management, RBAC, and profile editing so the tool supports broader team usage.",
        command: "add planning workflows + user management + RBAC",
    },
    {
        title: "Phase 3",
        body:
            "Introduce a project-specific planning dashboard so planning can be explored from the project perspective, not only through management or employee views.",
        command: "add project-specific dashboard and planning views",
    },
]

const stackCards = [
    {
        title: "Next.js Frontend",
        body:
            "Selected for faster page loads and a cleaner dashboard experience through server-side rendering and modern app structure.",
        Icon: GridViewOutlined,
    },
    {
        title: "Flask Backend",
        body:
            "Used as a lightweight Python backend to keep implementation fast while still supporting authentication, upload flows, and dashboard APIs.",
        Icon: SchemaOutlined,
    },
    {
        title: "PostgreSQL + Docker",
        body:
            "PostgreSQL handled structured planning data, while Docker isolated each service for a cleaner deployment and operations story.",
        Icon: StorageOutlined,
    },
]

const externalLinks = []

export default function ResourceAllocationToolPage() {
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
                title="Resource Allocation Tool | Elliot Chin"
                description="Internal planning dashboard proposal by Elliot Chin to replace an Excel-based resource allocation workflow with a multi-user web application."
                path="/projects/Resource_Allocation_Tool"
                image="https://elliotc.dev/projects/rat-proposal/logo.png"
            />

            <main
                ref={containerRef}
                className="relative h-screen overflow-y-scroll scroll-smooth overscroll-contain bg-transparent text-slate-50"
            >
                <BackToTopButton targetRef={containerRef} />

                <div className="pt-14">
                    <section data-fade className="translate-y-4 px-6 pb-6 pt-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                        <div className="mx-auto w-full max-w-[96rem]">
                            <div className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/8 bg-slate-900/78 px-5 py-3">
                                    <div className="flex items-center gap-3 font-spacemono text-sm font-bold text-amber-200">
                                        <span className="text-slate-300">&gt;_</span>
                                        <span>{ratProject.slug}</span>
                                    </div>
                                    <div className="font-spacemono text-[11px] uppercase tracking-[0.22em] text-slate-400/80">
                                        internal tooling / proposal / {ratProject.year}
                                    </div>
                                </div>

                                <div className="grid gap-8 px-6 py-6 lg:grid-cols-[minmax(0,1.25fr)_24rem] lg:px-8 lg:py-8">
                                    <div className="min-w-0">
                                        <div className="font-spacemono text-sm uppercase tracking-[0.22em] text-amber-300">
                                            {ratProject.eyebrow}
                                        </div>

                                        <h1 className="mt-3 font-montserrat text-[2.55rem] font-semibold tracking-tight text-blue-100 md:text-[3.15rem]">
                                            {ratProject.title}
                                        </h1>

                                        <p className="mt-6 max-w-4xl font-montserrat text-lg leading-relaxed text-slate-100/90">
                                            {ratProject.TLDR}
                                        </p>

                                        <div className="mt-7 font-spacemono text-base font-bold text-amber-300">
                                            <span>{">> "}</span>
                                            <ReactTyped
                                                strings={[ratProject.command]}
                                                typeSpeed={22}
                                                showCursor={false}
                                                startWhenVisible
                                                className="inline"
                                            />
                                            <span className="typewriter-cursor">_</span>
                                        </div>

                                        <div className="mt-7 flex flex-wrap gap-3">
                                            <Link href="/projects" className="home-btn home-btn-primary">
                                                <FolderCopyOutlined sx={{ fontSize: 18 }} />
                                                <span>All_Projects</span>
                                            </Link>

                                        </div>
                                    </div>

                                    <aside className="overflow-hidden border border-slate-200/10 bg-[#07101f]">
                                        <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                            Manager View
                                        </div>

                                        <div className="space-y-4 px-5 py-5">
                                            <div className="border border-slate-200/10 bg-slate-950/46 p-4">
                                                <div className="flex items-start gap-3">
                                                    <AssignmentTurnedInOutlined sx={{ fontSize: 22 }} className="mt-0.5 text-amber-300" />
                                                    <div>
                                                        <div className="font-spacemono text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                                                            Core Question
                                                        </div>
                                                        <p className="mt-2 font-montserrat text-sm leading-relaxed text-slate-200/88">
                                                            Can the team take on more project work without overloading current employees?
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid gap-3">
                                                <div className="border border-slate-200/10 bg-slate-950/36 px-4 py-3">
                                                    <div className="font-spacemono text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                                                        What Managers Needed
                                                    </div>
                                                    <p className="mt-2 font-montserrat text-sm leading-relaxed text-slate-200/86">
                                                        A fast way to see employee allocation, forecast upcoming load, and judge remaining delivery capacity.
                                                    </p>
                                                </div>

                                                <div className="border border-slate-200/10 bg-slate-950/36 px-4 py-3">
                                                    <div className="font-spacemono text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                                                        Why Excel Broke Down
                                                    </div>
                                                    <p className="mt-2 font-montserrat text-sm leading-relaxed text-slate-200/86">
                                                        Version drift, limited change visibility, weak collaboration, and no reliable path for structured scaling.
                                                    </p>
                                                </div>

                                                <div className="border border-slate-200/10 bg-slate-950/36 px-4 py-3">
                                                    <div className="font-spacemono text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                                                        Proposed Shift
                                                    </div>
                                                    <p className="mt-2 font-montserrat text-sm leading-relaxed text-slate-200/86">
                                                        Move planning into a shared web tool with dashboard visibility, uploads, access control, and clearer operational ownership.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section data-fade className="translate-y-4 px-6 pb-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                        <ProjectOverviewCardsRow cards={overviewCards} columnsClass="lg:grid-cols-3" />
                    </section>

                    <section data-fade className="translate-y-4 px-6 pb-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                        <div className="mx-auto grid w-full max-w-[96rem] gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                    Project Context
                                </div>
                                <div className="px-5 py-5">
                                    <p className="font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                        {ratProject.contextOne}
                                    </p>
                                    <p className="mt-4 font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                        {ratProject.contextTwo}
                                    </p>
                                    <p className="mt-4 font-montserrat text-[1rem] leading-relaxed text-amber-100/88">
                                        {ratProject.outcome}
                                    </p>
                                </div>
                            </article>

                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                    Metadata
                                </div>
                                <dl className="space-y-5 px-5 py-5 font-spacemono text-sm text-slate-300/85">
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

                    <section data-fade className="translate-y-4 px-6 pb-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                        <div className="mx-auto flex w-full max-w-[96rem] flex-col gap-6">
                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                    Rollout Phases
                                </div>

                                <div className="grid gap-5 px-5 py-5 lg:grid-cols-3">
                                    {phaseCards.map((item) => (
                                        <article key={item.title} className="border border-slate-200/10 bg-[#07101f] p-5">
                                            <h3 className="font-montserrat text-[1.25rem] font-semibold tracking-tight text-slate-100">
                                                {item.title}
                                            </h3>
                                            <p className="mt-3 font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                                {item.body}
                                            </p>
                                            <div className="mt-5 border border-slate-200/10 bg-slate-950/52 px-4 py-3 font-spacemono text-sm text-amber-200">
                                                {item.command}
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </article>

                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                    Proposed Stack
                                </div>

                                <div className="grid gap-5 px-5 py-5 lg:grid-cols-3">
                                    {stackCards.map(({ title, body, Icon }) => (
                                        <article
                                            key={title}
                                            className="border border-slate-200/10 bg-[#07101f] p-5"
                                        >
                                            <Icon className="text-amber-300" sx={{ fontSize: 24 }} />
                                            <h3 className="mt-4 font-montserrat text-[1.25rem] font-semibold tracking-tight text-slate-100">
                                                {title}
                                            </h3>
                                            <p className="mt-3 font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                                {body}
                                            </p>
                                        </article>
                                    ))}
                                </div>
                            </article>

                        </div>
                    </section>

                    <section data-fade className="translate-y-4 px-6 pb-14 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                        <div className="mx-auto grid w-full max-w-[96rem] gap-6 lg:grid-cols-2">
                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                    Conclusion
                                </div>
                                <div className="px-5 py-5">
                                    <p className="font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                        {ratProject.conclusion}
                                    </p>
                                </div>
                            </article>

                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                    Final Thoughts
                                </div>
                                <div className="px-5 py-5">
                                    <p className="font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                        {ratProject.finalThoughts}
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
