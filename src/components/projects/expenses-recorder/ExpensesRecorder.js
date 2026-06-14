import { useEffect, useRef } from "react"
import Link from "next/link"
import {
    AutoGraphOutlined,
    CheckCircleOutline,
    FolderCopyOutlined,
    PrecisionManufacturingOutlined,
    StorageOutlined,
    TimelineOutlined,
} from "@mui/icons-material"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import { ProjectImage } from "@/components/projects/ProjectImage"
import { ProjectOverviewCardsRow } from "@/components/projects/ProjectOverviewCardsRow"
import { ProjectTerminalCommand, ProjectTerminalLabel } from "@/components/projects/ProjectTerminalLine"

const featureCards = [
    {
        title: "Financial Tracking",
        body: "Tracks income, expenses, savings activity, recurring bills, credit accounts, and trip spending inside one monthly finance workflow.",
        Icon: AutoGraphOutlined,
    },
    {
        title: "Budget Control",
        body: "Manages budgets, sub-budgets, and carried-forward monthly allocations so category planning does not need to be rebuilt from scratch.",
        Icon: TimelineOutlined,
    },
    {
        title: "Reporting Layer",
        body: "Aggregates monthly data into dashboards, summaries, and polished PDF reports with breakdowns, charts, and savings progress.",
        Icon: StorageOutlined,
    },
    {
        title: "Audit + Platform",
        body: "Includes audit-event logging and uses Supabase authentication with a Next.js frontend and Flask backend for structured access and monitoring.",
        Icon: PrecisionManufacturingOutlined,
    },
]

const gallery = [
    {
        title: "Dashboard",
        image: "/projects/exprec/exprec_dashboard.png",
        description: "Main dashboard view for reviewing categorized spending and month-level summaries.",
    },
    {
        title: "Spending Breakdown",
        image: "/projects/exprec/exprec_spending-breakdown.png",
        description: "Category-focused spending visualization used to compare how budget areas are performing.",
    },
    {
        title: "Report View",
        image: "/projects/exprec/exprec_report.png",
        description: "Report-focused output for reviewing recorded expenses in a more structured summary format.",
    },
    {
        title: "Trip Groups",
        image: "/projects/exprec/exprec_trip-groups.png",
        description: "Separate trip expenditure tracking used to analyze travel-specific spending patterns.",
    },
]

const documentedNotes = [
    "Tracks monthly income and expenses by category while comparing spending against defined budget targets.",
    "Supports budgets, sub-budgets, savings goals, contribution history, and rollover allocations between months.",
    "Handles recurring bills, installment-style payments, credit account balances, and linked bill expenses.",
    "Generates monthly summaries and PDF reports with executive-style overviews, charts, and savings progress.",
]

const metadataRows = [
    { label: "Status", value: "Active", accent: "text-amber-300" },
    { label: "Frontend", value: "Next.js" },
    { label: "Backend", value: "Flask" },
    { label: "Auth / Data", value: "Supabase" },
    { label: "Reports", value: "Monthly PDF" },
]

const capabilityPills = ["Income Logs", "Budgeting", "Savings Goals", "Recurring Bills", "Credit Tracking", "Trip Groups", "PDF Reports", "Audit Trail"]

const operationsNotes = [
    "Monthly records are treated as both an operational ledger and an analytical review surface for financial behavior over time.",
    "Recurring bills and linked expenses reduce manual entry while keeping bill-related activity synchronized in the monthly record.",
    "Audit and session event logging provide a stronger recordkeeping layer than a simple personal expense tracker.",
]

const conclusion =
    "Expenses Recorder evolved from a straightforward budgeting tool into a broader financial tracking platform that combines day-to-day recordkeeping with higher-level review. By tying together transaction logging, budgeting, recurring obligations, savings behavior, credit monitoring, trip tracking, and monthly reporting, the project supports both operational finance management and reflective analysis over time."

const finalThoughts =
    "What makes the project stronger than a basic expense tracker is the way it connects financial activity to structure and accountability. Features like synced recurring bills, grouped trip spending, PDF reporting, and audit logging turn the system into something that is useful not only for entering data, but for understanding patterns, reviewing decisions, and maintaining a more complete personal financial record."

const systemSnapshot = [
    {
        label: "Runtime",
        value: "Next.js + Flask + Supabase",
        body: "Full-stack personal finance workflow with authentication, budgeting, reporting, and audit-aware data handling.",
    },
    {
        label: "Core Scope",
        value: "Budgets / Savings / Bills / Credit",
        body: "Monthly records connect transaction logging with planning, recurring obligations, and review-oriented summaries.",
    },
    {
        label: "Output Layer",
        value: "Dashboard + PDF Reporting",
        body: "The system supports both day-to-day entry and higher-level monthly review with exported reporting and visual breakdowns.",
    },
]

export default function ExpensesRecorder() {
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
                                    <ProjectTerminalLabel text="~/projects/expenses-recorder" className="flex-1" />
                                </div>
                                <div className="w-full font-spacemono text-[10px] uppercase tracking-[0.16em] text-slate-400/80 sm:w-auto sm:text-[11px] sm:tracking-[0.22em]">
                                    Active personal finance tool
                                </div>
                            </div>

                            <div className="grid gap-5 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-[minmax(0,1.25fr)_24rem] lg:gap-8 lg:px-8 lg:py-8">
                                <div className="min-w-0">
                                    <div className="font-spacemono text-[12px] uppercase tracking-[0.16em] text-amber-300 sm:text-sm sm:tracking-[0.22em]">
                                        Personal tooling / finance workflow
                                    </div>
                                    <h1 className="mt-3 font-montserrat text-[clamp(1.8rem,8vw,3.25rem)] font-semibold tracking-tight text-blue-100">
                                        Expenses Recorder
                                    </h1>
                                    <p className="mt-4 max-w-4xl font-montserrat text-[0.98rem] leading-relaxed text-slate-100/90 sm:mt-6 sm:text-lg">
                                        A full-stack personal finance application for tracking income, expenses, savings goals,
                                        recurring bills, credit accounts, budgets, trips, and monthly financial performance,
                                        with dashboards, audit logging, and polished PDF reporting.
                                    </p>

                                    <ProjectTerminalCommand text="deploy expenses_recorder --inspect" className="mt-5 sm:mt-7" />

                                    <div className="mt-7 flex flex-wrap gap-3">
                                        <Link href="/projects" className="home-btn home-btn-primary w-full justify-center sm:w-auto">
                                            <FolderCopyOutlined sx={{ fontSize: 18 }} />
                                            <span>All_Projects</span>
                                        </Link>
                                    </div>
                                </div>

                                <aside className="overflow-hidden border border-slate-200/10 bg-[#07101f]">
                                    <div className="border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:px-5 sm:text-sm sm:tracking-[0.22em]">
                                        System Snapshot
                                    </div>

                                    <div className="space-y-4 px-4 py-4 sm:px-5 sm:py-5">
                                        {systemSnapshot.map((item) => (
                                            <div key={item.label} className="border border-slate-200/10 bg-slate-950/36 px-4 py-3">
                                                <div className="font-spacemono text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                                                    {item.label}
                                                </div>
                                                <div className="mt-2 font-spacemono text-sm font-bold text-amber-200">
                                                    {item.value}
                                                </div>
                                                <p className="mt-3 font-montserrat text-sm leading-relaxed text-slate-200/86">
                                                    {item.body}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>

                <section data-fade className="translate-y-4 px-4 pb-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                    <ProjectOverviewCardsRow cards={featureCards} columnsClass="lg:grid-cols-2 xl:grid-cols-4" />
                </section>

                <section data-fade className="translate-y-4 px-4 pb-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                    <div className="mx-auto grid w-full max-w-[96rem] gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
                        <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                            <div className="border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:px-5 sm:text-sm sm:tracking-[0.22em]">
                                System Evolution
                            </div>
                            <div className="grid gap-0 lg:grid-cols-2">
                                <div className="border-b border-slate-200/8 p-4 sm:p-5 lg:border-b-0 lg:border-r">
                                    <div className="font-spacemono text-[10px] uppercase tracking-[0.18em] text-slate-400/80 sm:text-[11px] sm:tracking-[0.22em]">
                                        Legacy Build
                                    </div>
                                    <h3 className="mt-3 font-montserrat text-[1.35rem] font-semibold tracking-tight text-slate-100 sm:text-[1.65rem]">
                                        Java Swing Prototype
                                    </h3>
                                    <p className="mt-4 font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88 sm:text-[1rem]">
                                        The project began as a desktop application built with Java Swing and file-based
                                        storage, with multiple panels for entries, stats, graphs, and CSV report generation.
                                    </p>
                                    <div className="mt-5 overflow-hidden border border-slate-200/10 bg-[#07101f] px-3 py-2">
                                        <ProjectImage
                                            src="/projects/exprec/old_exprec.png"
                                            alt="Expenses Recorder legacy prototype"
                                            description="Expenses Recorder legacy prototype built with Java Swing."
                                            lg_size="w-full"
                                            maxH="max-h-[52vh]"
                                        />
                                    </div>
                                </div>

                                <div className="p-4 sm:p-5">
                                    <div className="font-spacemono text-[10px] uppercase tracking-[0.18em] text-amber-300 sm:text-[11px] sm:tracking-[0.22em]">
                                        Current Build
                                    </div>
                                    <h3 className="mt-3 font-montserrat text-[1.35rem] font-semibold tracking-tight text-amber-100 sm:text-[1.65rem]">
                                        Next.js Dashboard
                                    </h3>
                                    <p className="mt-4 font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88 sm:text-[1rem]">
                                        The current version keeps the original budgeting goals while moving the interface
                                        to a web application with a cleaner dashboard workflow and additional features.
                                    </p>
                                    <div className="mt-5 space-y-3 font-spacemono text-[13px] leading-6 text-slate-300/88">
                                        {documentedNotes.map((note) => (
                                            <div key={note} className="flex gap-3">
                                                <span className="text-amber-200">+</span>
                                                <span>{note}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:px-5 sm:text-sm sm:tracking-[0.22em]">
                                    Metadata
                                </div>
                            <div className="grid gap-4 px-4 py-4 sm:px-5 sm:py-5">
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {metadataRows.map(({ label, value, accent }) => (
                                        <div
                                            key={label}
                                            className="border border-slate-200/8 bg-slate-950/46 px-4 py-3"
                                        >
                                            <div className="font-spacemono text-[10px] uppercase tracking-[0.22em] text-slate-400/80">
                                                {label}
                                            </div>
                                            <div className={`mt-2 font-spacemono text-sm font-bold ${accent ?? "text-slate-100"}`}>
                                                {value}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="border border-slate-200/8 bg-slate-950/46 px-4 py-4">
                                    <div className="font-spacemono text-[11px] font-bold uppercase tracking-[0.22em] text-amber-200">
                                        Capabilities
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {capabilityPills.map((item) => (
                                            <span
                                                key={item}
                                                className="border border-amber-200/12 bg-amber-300/8 px-2.5 py-1 font-spacemono text-[10px] font-bold uppercase tracking-[0.18em] text-amber-100"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="border border-slate-200/8 bg-slate-950/46 px-4 py-4">
                                    <div className="flex items-center gap-2 font-spacemono text-[11px] font-bold uppercase tracking-[0.22em] text-amber-200">
                                        <CheckCircleOutline sx={{ fontSize: 16 }} />
                                        <span>Operational Notes</span>
                                    </div>
                                    <div className="mt-4 space-y-3">
                                        {operationsNotes.map((note) => (
                                            <div key={note} className="flex gap-3">
                                                <span className="mt-0.5 text-amber-300">+</span>
                                                <p className="font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88">
                                                    {note}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                <section id="screens" data-fade className="translate-y-4 px-4 pb-14 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                    <div className="mx-auto w-full max-w-[96rem]">
                        <div className="mb-4 flex items-center gap-2.5 sm:gap-3">
                            <div className="grid h-9 w-9 place-items-center border border-slate-200/10 bg-slate-950/38 text-amber-200 sm:h-10 sm:w-10">
                                <FolderCopyOutlined sx={{ fontSize: 18 }} />
                            </div>
                            <h2 className="font-spacemono text-[0.95rem] font-bold uppercase tracking-[0.16em] text-slate-100 sm:text-lg sm:tracking-[0.22em]">
                                Interface Captures
                            </h2>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-2">
                            {gallery.map((item) => (
                                <article
                                    key={item.title}
                                    className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]"
                                >
                                    <div className="border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 sm:px-5">
                                        <div className="font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:text-sm sm:tracking-[0.22em]">
                                            {item.title}
                                        </div>
                                    </div>
                                    <div className="grid gap-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(260px,1.1fr)]">
                                        <div className="p-4 sm:p-5">
                                            <p className="font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88 sm:text-[1rem]">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="border-t border-slate-200/10 bg-[#07101f] px-3 py-2 lg:border-l lg:border-t-0">
                                            <ProjectImage
                                                src={item.image}
                                                alt={item.title}
                                                description={item.description}
                                                lg_size="w-full"
                                                maxH="max-h-[42vh]"
                                            />
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
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
                                    {conclusion}
                                </p>
                            </div>
                        </article>

                        <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                            <div className="border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:px-5 sm:text-sm sm:tracking-[0.22em]">
                                Final Thoughts
                            </div>
                            <div className="px-4 py-4 sm:px-5 sm:py-5">
                                <p className="font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88 sm:text-[1rem]">
                                    {finalThoughts}
                                </p>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </main>
    )
}
