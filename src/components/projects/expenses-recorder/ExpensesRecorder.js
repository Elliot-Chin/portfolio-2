import { useEffect, useRef } from "react"
import Link from "next/link"
import { ReactTyped } from "react-typed"
import {
    AutoGraphOutlined,
    CheckCircleOutline,
    FolderCopyOutlined,
    PrecisionManufacturingOutlined,
    RadarOutlined,
    StorageOutlined,
    TimelineOutlined,
} from "@mui/icons-material"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import { ProjectImage } from "@/components/projects/ProjectImage"
import { ProjectOverviewCardsRow } from "@/components/projects/ProjectOverviewCardsRow"

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

const heroKpis = [
    { label: "Monthly Scope", value: "Income + Expenses", tone: "bg-amber-300" },
    { label: "Reports", value: "PDF Summaries", tone: "bg-emerald-300" },
    { label: "Monitoring", value: "Audit Trail", tone: "bg-sky-300" },
]

const heroCategories = [
    { label: "Budgets", amount: "Tracked", width: "82%" },
    { label: "Savings", amount: "Managed", width: "64%" },
    { label: "Bills", amount: "Synced", width: "58%" },
    { label: "Trips", amount: "Grouped", width: "40%" },
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
                <section data-fade className="translate-y-4 px-6 pb-6 pt-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                    <div className="mx-auto w-full max-w-[96rem]">
                        <div className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/8 bg-slate-900/78 px-5 py-3">
                                <div className="flex items-center gap-3 font-spacemono text-sm font-bold text-amber-200">
                                    <span className="text-slate-300">&gt;_</span>
                                    <span>~/projects/expenses-recorder</span>
                                </div>
                                <div className="font-spacemono text-[11px] uppercase tracking-[0.22em] text-slate-400/80">
                                    Active personal finance tool
                                </div>
                            </div>

                            <div className="grid gap-8 px-6 py-6 lg:grid-cols-[minmax(0,1.25fr)_24rem] lg:px-8 lg:py-8">
                                <div className="min-w-0">
                                    <div className="font-spacemono text-sm uppercase tracking-[0.22em] text-amber-300">
                                        Personal tooling / finance workflow
                                    </div>
                                    <h1 className="mt-3 font-montserrat text-[2.7rem] font-semibold tracking-tight text-blue-100 md:text-[3.25rem]">
                                        Expenses Recorder
                                    </h1>
                                    <p className="mt-6 max-w-4xl font-montserrat text-lg leading-relaxed text-slate-100/90">
                                        A full-stack personal finance application for tracking income, expenses, savings goals,
                                        recurring bills, credit accounts, budgets, trips, and monthly financial performance,
                                        with dashboards, audit logging, and polished PDF reporting.
                                    </p>

                                    <div className="mt-7 font-spacemono text-base font-bold text-amber-300">
                                        <span>{">> "}</span>
                                        <ReactTyped
                                            strings={["deploy expenses_recorder --inspect"]}
                                            typeSpeed={28}
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

                                <div className="overflow-hidden border border-slate-200/10 bg-[#07101f]">
                                    <div className="border-b border-slate-200/10 bg-slate-950/60 px-4 py-3">
                                        <div className="flex items-center justify-between gap-4 font-spacemono text-[11px] uppercase tracking-[0.22em] text-slate-400/80">
                                            <span>dashboard_preview</span>
                                            <span className="text-amber-200 md:block hidden">expenses.runtime</span>
                                        </div>
                                    </div>

                                    <div className="grid gap-0">
                                        <div className="grid gap-3 border-b border-slate-200/10 p-4 sm:grid-cols-3">
                                            {heroKpis.map((item) => (
                                                <div key={item.label} className="border border-slate-200/8 bg-slate-950/55 px-3 py-3">
                                                    <div className="font-spacemono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                                                        {item.label}
                                                    </div>
                                                    <div className="mt-2 font-spacemono text-sm font-bold text-slate-100">
                                                        {item.value}
                                                    </div>
                                                    <div className={`mt-3 h-1.5 w-10 ${item.tone}`} />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="p-4">
                                            <div className="font-spacemono text-[11px] font-bold uppercase tracking-[0.18em] text-amber-200">
                                                Category Pressure
                                            </div>
                                            <div className="mt-4 space-y-3">
                                                {heroCategories.map((item) => (
                                                    <div key={item.label}>
                                                        <div className="mb-1.5 flex items-center justify-between gap-4 font-spacemono text-[11px] uppercase tracking-[0.16em] text-slate-300/84">
                                                            <span>{item.label}</span>
                                                            <span className="text-amber-100">{item.amount}</span>
                                                        </div>
                                                        <div className="h-2 overflow-hidden bg-slate-900/80">
                                                            <div
                                                                className="h-full bg-[linear-gradient(90deg,rgba(251,146,60,0.95),rgba(250,204,21,0.78))]"
                                                                style={{ width: item.width }}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="border-t border-slate-200/10 px-4 py-3">
                                            <div className="flex items-center justify-between gap-4 font-spacemono text-[10px] uppercase tracking-[0.18em] text-slate-400/80">
                                                <span>rollover map</span>
                                                <span className="text-emerald-300">previous month imported</span>
                                            </div>
                                            <div className="mt-3 flex items-end gap-2">
                                                {[42, 68, 56, 83, 61, 74, 58].map((height, index) => (
                                                    <div key={`${height}-${index}`} className="flex-1">
                                                        <div
                                                            className="w-full bg-[linear-gradient(180deg,rgba(250,204,21,0.85),rgba(251,146,60,0.55))]"
                                                            style={{ height: `${height}px` }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section data-fade className="translate-y-4 px-6 pb-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                    <div className="mx-auto grid w-full max-w-[96rem] gap-5 lg:grid-cols-2 xl:grid-cols-4">
                        {featureCards.map(({ title, body, Icon }) => (
                            <article
                                key={title}
                                className="border border-slate-200/10 bg-slate-950/38 p-5 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]"
                            >
                                <Icon className="text-amber-300" sx={{ fontSize: 24 }} />
                                <h2 className="mt-4 font-montserrat text-[1.45rem] font-semibold tracking-tight text-slate-100">
                                    {title}
                                </h2>
                                <p className="mt-3 font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                    {body}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                <section data-fade className="translate-y-4 px-6 pb-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                    <div className="mx-auto grid w-full max-w-[96rem] gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
                        <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                            <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                System Evolution
                            </div>
                            <div className="grid gap-0 lg:grid-cols-2">
                                <div className="border-b border-slate-200/8 p-5 lg:border-b-0 lg:border-r">
                                    <div className="font-spacemono text-[11px] uppercase tracking-[0.22em] text-slate-400/80">
                                        Legacy Build
                                    </div>
                                    <h3 className="mt-3 font-montserrat text-[1.65rem] font-semibold tracking-tight text-slate-100">
                                        Java Swing Prototype
                                    </h3>
                                    <p className="mt-4 font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
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

                                <div className="p-5">
                                    <div className="font-spacemono text-[11px] uppercase tracking-[0.22em] text-amber-300">
                                        Current Build
                                    </div>
                                    <h3 className="mt-3 font-montserrat text-[1.65rem] font-semibold tracking-tight text-amber-100">
                                        Next.js Dashboard
                                    </h3>
                                    <p className="mt-4 font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
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
                            <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                Metadata / Runtime
                            </div>
                            <div className="grid gap-4 px-5 py-5">
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
                                    <div className="flex items-center gap-2 font-spacemono text-[11px] font-bold uppercase tracking-[0.22em] text-amber-200">
                                        <RadarOutlined sx={{ fontSize: 16 }} />
                                        <span>Capabilities</span>
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

                <section id="screens" data-fade className="translate-y-4 px-6 pb-14 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                    <div className="mx-auto w-full max-w-[96rem]">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="grid h-10 w-10 place-items-center border border-slate-200/10 bg-slate-950/38 text-amber-200">
                                <FolderCopyOutlined sx={{ fontSize: 20 }} />
                            </div>
                            <h2 className="font-spacemono text-lg font-bold uppercase tracking-[0.22em] text-slate-100">
                                Interface Captures
                            </h2>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-2">
                            {gallery.map((item) => (
                                <article
                                    key={item.title}
                                    className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]"
                                >
                                    <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3">
                                        <div className="font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                            {item.title}
                                        </div>
                                    </div>
                                    <div className="grid gap-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(260px,1.1fr)]">
                                        <div className="p-5">
                                            <p className="font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
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

                <section data-fade className="translate-y-4 px-6 pb-14 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                    <div className="mx-auto grid w-full max-w-[96rem] gap-6 lg:grid-cols-2">
                        <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                            <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                Conclusion
                            </div>
                            <div className="px-5 py-5">
                                <p className="font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                    {conclusion}
                                </p>
                            </div>
                        </article>

                        <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                            <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                Final Thoughts
                            </div>
                            <div className="px-5 py-5">
                                <p className="font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
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
