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
import { useHomeGridPage } from "@/components/hooks/useHomeGridPage"
import { northboundApiPageData } from "@/data/project-pages/northboundApi"

const northboundIconMap = {
    ApiOutlined,
    DashboardOutlined,
    HubOutlined,
    OpenInNewOutlined,
    QueryStatsOutlined,
    SecurityOutlined,
    StorageOutlined,
}

const hero = northboundApiPageData.hero
const overviewCardsData = northboundApiPageData.overviewCards.map((item) => ({ ...item, Icon: northboundIconMap[item.iconKey] }))
const implementationCardsData = northboundApiPageData.implementationCards.map((item) => ({ ...item, Icon: northboundIconMap[item.iconKey] }))
const outcomeCardsData = northboundApiPageData.outcomeCards.map((item) => ({ ...item, Icon: northboundIconMap[item.iconKey] }))

export default function NorthboundApiPage() {
    const containerRef = useRef(null)
    useHomeGridPage(containerRef)

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
                                        <ProjectTerminalLabel text={hero.slug} className="flex-1" />
                                    </div>
                                    <div className="w-full font-spacemono text-[10px] uppercase tracking-[0.16em] text-slate-400/80 sm:w-auto sm:text-[11px] sm:tracking-[0.22em]">
                                        internal platform integration / {hero.year}
                                    </div>
                                </div>

                                <div className="grid gap-5 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-[minmax(0,1.25fr)_24rem] lg:gap-8 lg:px-8 lg:py-8">
                                    <div className="min-w-0">
                                        <div className="font-spacemono text-[12px] uppercase tracking-[0.16em] text-amber-300 sm:text-sm sm:tracking-[0.22em]">
                                            {hero.eyebrow}
                                        </div>

                                        <h1 className="mt-3 font-montserrat text-[clamp(1.75rem,8vw,3.15rem)] font-semibold tracking-tight text-blue-100">
                                            {hero.title}
                                        </h1>

                                        <p className="mt-4 max-w-4xl font-montserrat text-[0.98rem] leading-relaxed text-slate-100/90 sm:mt-6 sm:text-lg">
                                            {hero.TLDR}
                                        </p>

                                        <ProjectTerminalCommand text={hero.command} className="mt-5 sm:mt-7" />

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
                                            {northboundApiPageData.dataRoute.map((item) => (
                                                <div key={item.label} className="border border-slate-200/10 bg-slate-950/36 px-4 py-3">
                                                    <div className="font-spacemono text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                                                        {item.label}
                                                    </div>
                                                    <p className="mt-2 font-montserrat text-sm leading-relaxed text-slate-200/86">
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
                        <ProjectOverviewCardsRow cards={overviewCardsData} columnsClass="lg:grid-cols-3" />
                    </section>

                    <section data-fade className="translate-y-4 px-4 pb-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                        <div className="mx-auto grid w-full max-w-[96rem] gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:px-5 sm:text-sm sm:tracking-[0.22em]">
                                    Project Context
                                </div>
                                <div className="px-4 py-4 sm:px-5 sm:py-5">
                                    <p className="font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88 sm:text-[1rem]">
                                        {hero.contextOne}
                                    </p>
                                    <p className="mt-4 font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88 sm:text-[1rem]">
                                        {hero.contextTwo}
                                    </p>
                                    <p className="mt-4 font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88 sm:text-[1rem]">
                                        {hero.contextThree}
                                    </p>
                                </div>
                            </article>

                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:px-5 sm:text-sm sm:tracking-[0.22em]">
                                    Metadata
                                </div>
                                <dl className="space-y-3 px-4 py-4 font-spacemono text-[12px] text-slate-300/85 sm:space-y-5 sm:px-5 sm:py-5 sm:text-sm">
                                    {northboundApiPageData.metadataItems.map((item) => (
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
                                    {implementationCardsData.map(({ title, body, command, Icon }) => (
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
                                    {outcomeCardsData.map(({ title, body, Icon }) => (
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
                                        {hero.conclusion}
                                    </p>
                                </div>
                            </article>

                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:px-5 sm:text-sm sm:tracking-[0.22em]">
                                    Final Thoughts
                                </div>
                                <div className="px-4 py-4 sm:px-5 sm:py-5">
                                    <p className="font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88 sm:text-[1rem]">
                                        {hero.finalThoughts}
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
