import Link from "next/link"
import { useEffect, useRef } from "react"
import { ReactTyped } from "react-typed"
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
import { SeoHead } from "@/components/seo/SeoHead"

const ai4security = {
    title: "AI4Security Research",
    slug: "~/projects/ai4security-research",
    eyebrow: "AI security research / alert enrichment / CIC Modbus PCAP analysis / agentic AI",
    duration: "Internal Siemens research project",
    year: "2024",
    TLDR:
        "An internal Siemens research project with two main tracks: an LLM-based alert-enrichment workflow backed by asset and CVE context, and AI-assisted traffic analysis using PCAPs from the 2023 UNB CIC Modbus dataset.",
    command: "evaluate ai-security-workflows --tracks alert-enrichment,cic-modbus-analysis",
    contextOne:
        "I worked on this project with a co-op student to investigate where AI could actually help security analysis rather than just generate convincing text. One track focused on alert enrichment, where we combined dummy asset records stored in PostgreSQL with current CVE information so an LLM could explain why a system might be vulnerable and relate that risk back to the asset under investigation.",
    contextTwo:
        "The second track focused on packet analysis using PCAPs from the 2023 UNB CIC Modbus dataset. We evaluated open-source models already fine-tuned for cybersecurity, prepared structured JSON training data for Azure fine-tuning, and reformatted the dataset traffic into higher-level flow and prompt representations to test whether the models could distinguish benign from anomalous behavior more reliably.",
    conclusion:
        "The main takeaway was that LLMs were not reliable enough for exact byte counting or raw hex interpretation on their own, but they became more useful when the input was transformed into structured protocol or flow context and placed inside a validated analysis loop.",
    finalThoughts:
        "The project was put on hold after the co-op term ended, but it clarified where AI fits best in security analysis: narrow fine-tuned workflows can work on consistent traffic structures, while prompt-based and agentic approaches are better for variation when paired with preprocessing, structure, and validation rather than treated as a standalone detection engine.",
}

const researchCards = [
    {
        title: "PCAP + Protocol Research",
        body:
            "Analyzed packet captures from the 2023 UNB CIC Modbus dataset to understand which fields, byte patterns, and protocol structures mattered for AI-assisted threat analysis.",
        Icon: InsightsOutlined,
    },
    {
        title: "LLM Fine-Tuning + Prompting",
        body:
            "Evaluated open-source models that were already fine-tuned for cybersecurity, prepared structured JSON training data for Azure fine-tuning, and compared those paths against one-shot, multi-shot, and chain-of-thought prompting for packet reasoning.",
        Icon: SecurityOutlined,
    },
    {
        title: "Agentic Validation Loop",
        body:
            "Designed a workflow where AI agents could generate expected traffic frames or behavioral baselines, compare them against observed traffic, and pass invalid outputs back through a correction step instead of relying on a single-pass classifier.",
        Icon: PsychologyOutlined,
    },
]

const metadataItems = [
    { label: "Domain:", value: "OT Cybersecurity / AI Research" },
    { label: "Primary Themes:", value: "PCAP Analysis / Industrial Protocols / Threat Detection" },
    { label: "Model Sources:", value: "Open-Source Cybersecurity-Tuned Models + Azure Fine-Tuned Models" },
    { label: "Methods:", value: "Fine-Tuning / One-Shot / Multi-Shot / Chain-of-Thought / Agentic Loops" },
    { label: "Dataset:", value: "2023 UNB CIC Modbus" },
    { label: "Data Context:", value: "Dataset PCAPs / Structured JSON / NetFlow-Style Traffic Views" },
]

const openSourceWorkflow = [
    {
        title: "Hex-Level Parsing",
        body:
            "Started with raw packet bytes from PCAPs and mapped out which byte sequences, packet fields, and protocol segments should be inspected, skipped, or preserved as context for the model.",
        command: "pcap -> hex -> packet structure -> labeled fields",
        Icon: HubOutlined,
    },
    {
        title: "Structured Training Data",
        body:
            "Converted packet-analysis findings into structured JSON for Azure fine-tuning while also benchmarking open-source cybersecurity-tuned models against the same packet-analysis problem.",
        command: "pcap review -> json examples + cyber models -> compare outputs",
        Icon: StorageOutlined,
    },
    {
        title: "Higher-Level Traffic Context",
        body:
            "Shifted from direct hex reasoning toward NetFlow-style and protocol-aware summaries so the model could reason over communication patterns, metadata, and expected behavior rather than only raw bytes.",
        command: "pcap -> flow context -> behavioral reasoning",
        Icon: AutoAwesomeOutlined,
    },
]

const anomalyApproaches = [
    {
        title: "Approach 1: Fine-Tuning on Structured PCAP Data",
        metric: "Best on narrow, repeatable traffic",
        body:
            "Fine-tuned models performed efficiently when the incoming PCAP closely matched the traffic structure seen in the training examples, but the approach degraded when the packet patterns varied from the baseline.",
    },
    {
        title: "Approach 2: Prompt-Based Reasoning",
        metric: "More flexible, still not detection-grade",
        body:
            "One-shot, multi-shot, and chain-of-thought prompting handled variation better than fine-tuning alone, but the outputs were still not accurate enough to be trusted as a reliable threat-detection workflow.",
    },
    {
        title: "Approach 3: Agentic Baseline + Validation",
        metric: "Most promising direction for control",
        body:
            "A more agentic pipeline showed better potential by having models generate expected frames or baselines, compare them with observed traffic, and use a feedback loop to reject and regenerate invalid analyses.",
    },
]

const externalLinks = [
    { label: "HF_Models", href: "https://huggingface.co/models?pipeline_tag=text-generation&other=cybersecurity" },
    { label: "CIC_Modbus_Dataset", href: "https://www.unb.ca/cic/datasets/modbus-2023.html" },
]

const enrichmentShots = [
    {
        src: "/projects/ai4security/hf-model-search.png",
        alt: "Hugging Face cybersecurity model search",
        description: "Model discovery phase for narrowing cybersecurity-domain candidates on Hugging Face.",
    },
    {
        src: "/projects/ai4security/local-model-load.png",
        alt: "Local model loading code",
        description: "Example of loading a quantized open-source cybersecurity model for local inference.",
    },
    {
        src: "/projects/ai4security/alert-response-sample.png",
        alt: "Alert enrichment response sample",
        description: "Sample model output summarizing a security alert and associated vulnerability context.",
    },
]

const dataShots = [
    {
        src: "/projects/ai4security/modbus-netflow-json.png",
        alt: "UNB CIC Modbus flow record",
        description: "Example flow record derived from a PCAP in the 2023 UNB CIC Modbus dataset, preserving protocol, byte, timing, and endpoint fields for downstream analysis.",
    },
    {
        src: "/projects/ai4security/netflow-prompt-format.png",
        alt: "NetFlow prompt format",
        description: "Structured prompt format built from the 2023 UNB CIC Modbus flow data so the model could reason over traffic context instead of raw packet bytes alone.",
    },
    {
        src: "/projects/ai4security/raw-netflow-record.png",
        alt: "Raw Modbus NetFlow record",
        description: "Another prompt-ready flow example from the 2023 UNB CIC Modbus dataset showing the higher-level traffic representation we used for anomaly classification experiments.",
    },
]

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
                    <section data-fade className="translate-y-4 px-6 pb-6 pt-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                        <div className="mx-auto w-full max-w-[96rem]">
                            <div className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/8 bg-slate-900/78 px-5 py-3">
                                    <div className="flex items-center gap-3 font-spacemono text-sm font-bold text-amber-200">
                                        <span className="text-slate-300">&gt;_</span>
                                        <span>{ai4security.slug}</span>
                                    </div>
                                    <div className="font-spacemono text-[11px] uppercase tracking-[0.22em] text-slate-400/80">
                                        AI research / cybersecurity / {ai4security.year}
                                    </div>
                                </div>

                                <div className="grid gap-8 px-6 py-6 lg:grid-cols-[minmax(0,1.25fr)_24rem] lg:px-8 lg:py-8">
                                    <div className="min-w-0">
                                        <div className="font-spacemono text-sm uppercase tracking-[0.22em] text-amber-300">
                                            {ai4security.eyebrow}
                                        </div>

                                        <h1 className="mt-3 font-montserrat text-[2.55rem] font-semibold tracking-tight text-blue-100 md:text-[3.15rem]">
                                            {ai4security.title}
                                        </h1>

                                        <p className="mt-6 max-w-4xl font-montserrat text-lg leading-relaxed text-slate-100/90">
                                            {ai4security.TLDR}
                                        </p>

                                        <div className="mt-7 font-spacemono text-base font-bold text-amber-300">
                                            <span>{">> "}</span>
                                            <ReactTyped
                                                strings={[ai4security.command]}
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

                                            {externalLinks.map((item) => (
                                                <a
                                                    key={item.label}
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="home-btn home-btn-secondary"
                                                >
                                                    <OpenInNewOutlined sx={{ fontSize: 17 }} />
                                                    <span>{item.label}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    <aside className="overflow-hidden border border-slate-200/10 bg-[#07101f]">
                                        <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                            Research Snapshot
                                        </div>

                                        <div className="px-5 py-5">
                                            <img
                                                src="/projects/ai4security/cover-shield.png"
                                                alt="AI4Security visual"
                                                className="mx-auto w-full max-w-[17rem] object-contain"
                                            />

                                            <div className="mt-5 border-t border-slate-200/8 pt-5">
                                                <div className="font-spacemono text-xs uppercase tracking-[0.22em] text-slate-400">
                                                    Focus
                                                </div>
                                                <p className="mt-3 font-montserrat text-sm leading-relaxed text-slate-300/88">
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

                    <section data-fade className="translate-y-4 px-6 pb-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                        <ProjectOverviewCardsRow cards={researchCards} columnsClass="lg:grid-cols-3" />
                    </section>

                    <section data-fade className="translate-y-4 px-6 pb-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                        <div className="mx-auto grid w-full max-w-[96rem] gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                    Project Context
                                </div>
                                <div className="px-5 py-5">
                                    <p className="font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                        {ai4security.contextOne}
                                    </p>
                                    <p className="mt-4 font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                        {ai4security.contextTwo}
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
                                    PCAP Analysis And Data Preparation
                                </div>

                                <div className="grid gap-5 px-5 py-5 lg:grid-cols-3">
                                    {openSourceWorkflow.map((item) => (
                                        <div key={item.title}>
                                            <ProcessNode title={item.title} body={item.body} Icon={item.Icon} />
                                            <div className="border-x border-b border-slate-200/10 bg-slate-950/52 px-4 py-3 font-spacemono text-sm text-amber-200">
                                                {item.command}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </article>

                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                    Alert Enrichment And Local Inference
                                </div>
                                <div className="grid gap-6 px-5 py-5 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
                                    <div>
                                        <p className="font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                            One track focused on alert enrichment. We set up a PostgreSQL database with
                                            dummy asset records so an LLM could query internal asset context, match it
                                            against current CVE information, and generate vulnerability explanations and
                                            supporting analysis for the alert being investigated.
                                        </p>
                                        <p className="mt-4 font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                            The goal was to give the model more than just the alert text. By combining
                                            asset details, vulnerability records, and current CVE context, the workflow
                                            could explain why a system might be exposed, what the likely risk meant, and
                                            how the vulnerability related back to the asset under investigation.
                                        </p>
                                    </div>
                                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                                        {enrichmentShots.map((item) => (
                                            <div key={item.alt} className="overflow-hidden border border-slate-200/10 bg-[#07101f] px-3 py-2">
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
                            </article>

                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                    CIC Modbus Detection Results
                                </div>
                                <div className="px-5 py-5">
                                    <p className="font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                        With PCAPs from the 2023 UNB CIC Modbus dataset represented as structured flows and prompts, we
                                        then compared different ways of classifying benign versus anomalous industrial
                                        traffic. The main question was which workflow still held up once the traffic
                                        started to vary from the examples we had prepared.
                                    </p>
                                    <p className="mt-4 font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                        These results pushed the project away from treating the model as a standalone
                                        detector. Fine-tuning worked best when traffic stayed close to the training
                                        structure, prompt-based approaches were more flexible but still not accurate
                                        enough on their own, and the agentic validation idea looked more promising
                                        because it added control and feedback around the model output.
                                    </p>
                                    <div className="mt-5 grid gap-4 lg:grid-cols-3">
                                        {anomalyApproaches.map((item) => (
                                            <article key={item.title} className="border border-slate-200/10 bg-[#07101f] p-4">
                                                <div className="flex items-start gap-3">
                                                    <BugReportOutlined className="mt-0.5 text-amber-300" sx={{ fontSize: 19 }} />
                                                    <div>
                                                        <h3 className="font-montserrat text-[1.08rem] font-semibold tracking-tight text-slate-100">
                                                            {item.title}
                                                        </h3>
                                                        <div className="mt-1 font-spacemono text-xs uppercase tracking-[0.18em] text-emerald-300">
                                                            {item.metric}
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mt-3 font-montserrat text-[0.98rem] leading-relaxed text-slate-300/88">
                                                    {item.body}
                                                </p>
                                            </article>
                                        ))}
                                    </div>
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
                                        {ai4security.conclusion}
                                    </p>
                                </div>
                            </article>

                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                    Final Thoughts
                                </div>
                                <div className="px-5 py-5">
                                    <p className="font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                        {ai4security.finalThoughts}
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


