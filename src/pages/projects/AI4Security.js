import Link from "next/link"
import { useEffect, useRef } from "react"
import {
    AutoAwesomeOutlined,
    BugReportOutlined,
    FolderCopyOutlined,
    HubOutlined,
    InsightsOutlined,
    OpenInNewOutlined,
    PsychologyOutlined,
    SecurityOutlined,
    StorageOutlined,
} from "@mui/icons-material"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import { ProjectImage } from "@/components/projects/ProjectImage"
import { ProjectOverviewCardsRow } from "@/components/projects/ProjectOverviewCardsRow"
import { ProjectTerminalCommand, ProjectTerminalLabel } from "@/components/projects/ProjectTerminalLine"
import { SeoHead } from "@/components/seo/SeoHead"
import { useHomeGridPage } from "@/components/hooks/useHomeGridPage"
import { ai4securityProject } from "@/data/project-pages/ai4security"

const aiIconMap = {
    AutoAwesomeOutlined,
    HubOutlined,
    InsightsOutlined,
    PsychologyOutlined,
    SecurityOutlined,
    StorageOutlined,
}

const hero = ai4securityProject.hero
const researchCards = ai4securityProject.researchCards.map((item) => ({ ...item, Icon: aiIconMap[item.iconKey] }))
const openSourceWorkflow = ai4securityProject.openSourceWorkflow.map((item) => ({ ...item, Icon: aiIconMap[item.iconKey] }))

function ProcessNode({ title, body, Icon }) {
    return (
        <article className="border border-slate-200/10 bg-[#07101f] p-5">
            <div className="flex items-center gap-3">
                <Icon className="text-amber-300" sx={{ fontSize: 23 }} />
                <h3 className="font-montserrat text-[1.2rem] font-semibold tracking-tight text-slate-100">
                    {title}
                </h3>
            </div>
            <p className="mt-3 font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                {body}
            </p>
        </article>
    )
}

export default function AI4SecurityPage() {
    const containerRef = useRef(null)
    useHomeGridPage(containerRef)

    return (
        <>
            <SeoHead
                title="AI4Security Research | Elliot Chin"
                description="AI4Security research project by Elliot Chin covering alert enrichment, PCAP analysis, Modbus traffic workflows, and AI-assisted cybersecurity analysis."
                path="/projects/AI4Security"
                image="https://elliotc.dev/projects/ai4security/cover-shield.png"
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
                                        AI research / cybersecurity / {hero.year}
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

                                            {ai4securityProject.externalLinks.map((item) => (
                                                <a
                                                    key={item.label}
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="home-btn home-btn-secondary w-full justify-center sm:w-auto"
                                                >
                                                    <OpenInNewOutlined sx={{ fontSize: 17 }} />
                                                    <span>{item.label}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    <aside className="overflow-hidden border border-slate-200/10 bg-[#07101f]">
                                        <div className="border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:px-5 sm:text-sm sm:tracking-[0.22em]">
                                            Research Snapshot
                                        </div>

                                        <div className="px-4 py-4 sm:px-5 sm:py-5">
                                            <img
                                                src="/projects/ai4security/cover-shield.png"
                                                alt="AI4Security visual"
                                                className="mx-auto w-full max-w-[17rem] object-contain"
                                            />

                                            <div className="mt-5 border-t border-slate-200/8 pt-5">
                                                <div className="font-spacemono text-[11px] uppercase tracking-[0.18em] text-slate-400 sm:text-xs sm:tracking-[0.22em]">
                                                    Focus
                                                </div>
                                                <p className="mt-3 font-montserrat text-[0.95rem] leading-relaxed text-slate-300/88 sm:text-sm">
                                                    Evaluate whether LLMs can move beyond general text generation into
                                                    concrete cybersecurity analyst workflows with measurable value.
                                                </p>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section data-fade className="translate-y-4 px-4 pb-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                        <ProjectOverviewCardsRow cards={researchCards} columnsClass="lg:grid-cols-3" />
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
                                </div>
                            </article>

                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:px-5 sm:text-sm sm:tracking-[0.22em]">
                                    Metadata
                                </div>
                                <dl className="space-y-3 px-4 py-4 font-spacemono text-[12px] text-slate-300/85 sm:space-y-5 sm:px-5 sm:py-5 sm:text-sm">
                                    {ai4securityProject.metadataItems.map((item) => (
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
                                    PCAP Analysis And Data Preparation
                                </div>

                                <div className="grid gap-4 px-4 py-4 sm:gap-5 sm:px-5 sm:py-5 lg:grid-cols-3">
                                    {openSourceWorkflow.map((item) => (
                                        <div key={item.title}>
                                            <ProcessNode title={item.title} body={item.body} Icon={item.Icon} />
                                            <div className="border-x border-b border-slate-200/10 bg-slate-950/52 px-4 py-3 font-spacemono text-[12px] text-amber-200 sm:text-sm">
                                                {item.command}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </article>

                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:px-5 sm:text-sm sm:tracking-[0.22em]">
                                    Alert Enrichment And Local Inference
                                </div>
                                <div className="grid gap-5 px-4 py-4 sm:gap-6 sm:px-5 sm:py-5 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
                                    <div>
                                        <p className="font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88 sm:text-[1rem]">
                                            One track focused on alert enrichment. We set up a PostgreSQL database with
                                            dummy asset records so an LLM could query internal asset context, match it
                                            against current CVE information, and generate vulnerability explanations and
                                            supporting analysis for the alert being investigated.
                                        </p>
                                        <p className="mt-4 font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88 sm:text-[1rem]">
                                            The goal was to give the model more than just the alert text. By combining
                                            asset details, vulnerability records, and current CVE context, the workflow
                                            could explain why a system might be exposed, what the likely risk meant, and
                                            how the vulnerability related back to the asset under investigation.
                                        </p>
                                    </div>
                                    <div className="-mx-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory lg:mx-0 lg:grid lg:overflow-visible lg:px-0 lg:pb-0 lg:snap-none lg:gap-4 lg:grid-cols-2 xl:grid-cols-3">
                                        <div className="flex w-max min-w-full flex-nowrap gap-4 lg:contents">
                                            {ai4securityProject.enrichmentShots.map((item) => (
                                                <div key={item.alt} className="w-[85vw] min-w-[85vw] max-w-[24rem] shrink-0 snap-center overflow-hidden border border-slate-200/10 bg-[#07101f] px-3 py-2 lg:w-auto lg:min-w-0 lg:max-w-none lg:shrink lg:snap-none">
                                                    <ProjectImage
                                                        src={item.src}
                                                        alt={item.alt}
                                                        description={item.description}
                                                        lg_size="w-full"
                                                        maxH="max-h-[38vh]"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:px-5 sm:text-sm sm:tracking-[0.22em]">
                                    CIC Modbus Detection Results
                                </div>
                                <div className="px-4 py-4 sm:px-5 sm:py-5">
                                    <p className="font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88 sm:text-[1rem]">
                                        With PCAPs from the 2023 UNB CIC Modbus dataset represented as structured flows and prompts, we
                                        then compared different ways of classifying benign versus anomalous industrial
                                        traffic. The main question was which workflow still held up once the traffic
                                        started to vary from the examples we had prepared.
                                    </p>
                                    <p className="mt-4 font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88 sm:text-[1rem]">
                                        These results pushed the project away from treating the model as a standalone
                                        detector. Fine-tuning worked best when traffic stayed close to the training
                                        structure, prompt-based approaches were more flexible but still not accurate
                                        enough on their own, and the agentic validation idea looked more promising
                                        because it added control and feedback around the model output.
                                    </p>
                                    <div className="mt-5 grid gap-4 lg:grid-cols-3">
                                        {ai4securityProject.anomalyApproaches.map((item) => (
                                            <article key={item.title} className="border border-slate-200/10 bg-[#07101f] p-4">
                                                <div className="flex items-start gap-3">
                                                    <BugReportOutlined className="mt-0.5 text-amber-300" sx={{ fontSize: 19 }} />
                                                    <div>
                                                        <h3 className="font-montserrat text-[1rem] font-semibold tracking-tight text-slate-100 sm:text-[1.08rem]">
                                                            {item.title}
                                                        </h3>
                                                        <div className="mt-1 font-spacemono text-xs uppercase tracking-[0.18em] text-emerald-300">
                                                            {item.metric}
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mt-3 font-montserrat text-[0.94rem] leading-relaxed text-slate-300/88 sm:text-[0.98rem]">
                                                    {item.body}
                                                </p>
                                            </article>
                                        ))}
                                    </div>
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


