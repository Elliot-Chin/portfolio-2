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
import { useHomeGridPage } from "@/components/hooks/useHomeGridPage"
import { expensesRecorderPageData } from "@/data/project-pages/expensesRecorder"

const expensesIconMap = {
    AutoGraphOutlined,
    PrecisionManufacturingOutlined,
    StorageOutlined,
    TimelineOutlined,
}

const featureCardsData = expensesRecorderPageData.featureCards.map((item) => ({ ...item, Icon: expensesIconMap[item.iconKey] }))

export default function ExpensesRecorder() {
    const containerRef = useRef(null)
    useHomeGridPage(containerRef)

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
                                    <ProjectTerminalLabel text={expensesRecorderPageData.hero.slug} className="flex-1" />
                                </div>
                                <div className="w-full font-spacemono text-[10px] uppercase tracking-[0.16em] text-slate-400/80 sm:w-auto sm:text-[11px] sm:tracking-[0.22em]">
                                    {expensesRecorderPageData.hero.meta}
                                </div>
                            </div>

                            <div className="grid gap-5 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-[minmax(0,1.25fr)_24rem] lg:gap-8 lg:px-8 lg:py-8">
                                <div className="min-w-0">
                                    <div className="font-spacemono text-[12px] uppercase tracking-[0.16em] text-amber-300 sm:text-sm sm:tracking-[0.22em]">
                                        {expensesRecorderPageData.hero.eyebrow}
                                    </div>
                                    <h1 className="mt-3 font-montserrat text-[clamp(1.8rem,8vw,3.25rem)] font-semibold tracking-tight text-blue-100">
                                        {expensesRecorderPageData.hero.title}
                                    </h1>
                                    <p className="mt-4 max-w-4xl font-montserrat text-[0.98rem] leading-relaxed text-slate-100/90 sm:mt-6 sm:text-lg">
                                        {expensesRecorderPageData.hero.summary}
                                    </p>

                                    <ProjectTerminalCommand text={expensesRecorderPageData.hero.command} className="mt-5 sm:mt-7" />

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
                                        {expensesRecorderPageData.systemSnapshot.map((item) => (
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
                    <ProjectOverviewCardsRow cards={featureCardsData} columnsClass="lg:grid-cols-2 xl:grid-cols-4" />
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
                                        {expensesRecorderPageData.documentedNotes.map((note) => (
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
                                    {expensesRecorderPageData.metadataRows.map(({ label, value, accent }) => (
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
                                        {expensesRecorderPageData.capabilityPills.map((item) => (
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
                                        {expensesRecorderPageData.operationsNotes.map((note) => (
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
                            {expensesRecorderPageData.gallery.map((item) => (
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
                                    {expensesRecorderPageData.conclusion}
                                </p>
                            </div>
                        </article>

                        <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                            <div className="border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:px-5 sm:text-sm sm:tracking-[0.22em]">
                                Final Thoughts
                            </div>
                            <div className="px-4 py-4 sm:px-5 sm:py-5">
                                <p className="font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88 sm:text-[1rem]">
                                    {expensesRecorderPageData.finalThoughts}
                                </p>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </main>
    )
}
