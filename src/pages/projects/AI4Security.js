import Head from "next/head"
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

const ai4security = {
    title: "AI4Security Research",
    slug: "~/projects/ai4security-research",
    eyebrow: "LLM assessment / cybersecurity workflows / alert enrichment / anomaly detection",
    duration: "Research presentation / internship workstream",
    year: "2024",
    TLDR:
        "A research project exploring how open-source and hosted LLMs can support cybersecurity workflows, including alert enrichment, synthetic data generation, retrieval-augmented context building, and anomaly detection over industrial network data.",
    command: "evaluate llm-stack --domain cybersecurity --tasks enrichment,rag,anomaly-detection",
    contextOne:
        "The work surveyed practical AI use cases for cybersecurity teams, focusing on model accessibility, local deployment constraints, domain specialization, and how LLM-assisted reasoning might improve analysis of alerts, assets, and vulnerabilities.",
    contextTwo:
        "Two tracks were explored in parallel: Hugging Face open-source model assessment for alert enrichment and security-data interpretation, and anomaly detection experiments using Azure OpenAI workflows on network-flow data derived from industrial traffic captures.",
    conclusion:
        "The strongest results came from domain-tuned cybersecurity models and from prompt structures that force reasoning before prediction, especially when the task depends on structured evidence and contextual security knowledge.",
    finalThoughts:
        "This project sharpened practical thinking around model selection, quantization, prompt design, synthetic data safety, and how to evaluate whether an AI workflow is actually useful for analysts instead of only sounding impressive in a demo.",
}

const researchCards = [
    {
        title: "Model Assessment",
        body:
            "Compared general-purpose and cybersecurity-specific open-source models on tasks such as security interpretation, alert enrichment, and context-aware response generation.",
        Icon: InsightsOutlined,
    },
    {
        title: "Alert Enrichment",
        body:
            "Built an enrichment flow around alerts, assets, vulnerabilities, and synthetic records so a model could generate summaries, remediation guidance, and contributing factors.",
        Icon: SecurityOutlined,
    },
    {
        title: "Anomaly Detection",
        body:
            "Tested LLM-assisted anomaly classification on industrial network-derived NetFlows, comparing in-context learning, fine-tuning, and reasoning-first prompting.",
        Icon: PsychologyOutlined,
    },
]

const metadataItems = [
    { label: "Domain:", value: "Cybersecurity / AI Research" },
    { label: "Primary Themes:", value: "Alert Enrichment / RAG / Anomaly Detection" },
    { label: "Model Families:", value: "Mistral / Lily Cybersecurity / SecurityLLM / GPT-4o" },
    { label: "Deployment Focus:", value: "Quantized local inference + hosted API evaluation" },
    { label: "Data Context:", value: "Alerts / Assets / CVEs / Industrial NetFlows" },
]

const openSourceWorkflow = [
    {
        title: "Hugging Face Discovery",
        body:
            "Filtered cybersecurity-domain models and narrowed the field to candidates that were realistic to run, compare, and evaluate in a security-research workflow.",
        command: "filter models -> cybersecurity -> quantized candidates",
        Icon: HubOutlined,
    },
    {
        title: "Local Deployment",
        body:
            "Focused on quantized 4-bit models that could be deployed locally with GPU support, reducing hardware cost while keeping experiments practical.",
        command: "quantized gguf -> llama.cpp -> local inference",
        Icon: StorageOutlined,
    },
    {
        title: "Prompted Security Analysis",
        body:
            "Tested whether models could read alert context, asset data, and vulnerability records and turn that information into useful analyst-facing summaries.",
        command: "alert + asset + cve context -> summary + remediation",
        Icon: AutoAwesomeOutlined,
    },
]

const anomalyApproaches = [
    {
        title: "Approach 1: In-Context Learning",
        metric: "Accuracy 0.7300 / Recall 0.9700",
        body:
            "Provided labeled examples of normal and anomalous NetFlows directly in the prompt to guide classification. It performed well on recall but remained constrained by token limits.",
    },
    {
        title: "Approach 2: Fine-Tuning",
        metric: "Accuracy 0.7240 / F1 0.1882",
        body:
            "Fine-tuned a hosted model on labeled NetFlow data to avoid prompt-size limits. It scaled example volume better, but the measured classification quality was weaker than the best prompt-driven runs.",
    },
    {
        title: "Approach 3: Reasoning First",
        metric: "Accuracy 0.7300 / Recall 1.0000",
        body:
            "Asked the model to explain its reasoning before producing a prediction, reducing post-hoc hallucinated justifications and yielding the strongest overall balance in the deck’s reported results.",
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
        src: "/projects/ai4security/synthetic-cve-record.png",
        alt: "Synthetic vulnerability data sample",
        description: "Structured vulnerability data used as part of the alert-enrichment context layer.",
    },
    {
        src: "/projects/ai4security/netflow-prompt-format.png",
        alt: "NetFlow prompt format",
        description: "Structured message format used for anomaly-detection prompting with network-flow data.",
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
            <Head>
                <title>EC - AI4Security Research</title>
                <meta name="description" content="Elliot Chin - AI4Security research project" />
            </Head>

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
                                    Open-Source Model Workflow
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
                                            The first major use case combined alerts, assets, and vulnerability context
                                            into a security-enrichment pipeline. Synthetic datasets were created to avoid
                                            confidentiality and integrity risks while still giving the models realistic
                                            security data to reason over.
                                        </p>
                                        <p className="mt-4 font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                            Domain-tuned models such as Lily Cybersecurity and SecurityLLM outperformed
                                            the baseline Mistral run in the presentation’s qualitative results, even
                                            though all tested models still carried heavy inference costs.
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
                                    Anomaly Detection Track
                                </div>
                                <div className="grid gap-6 px-5 py-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                                    <div>
                                        <p className="font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                            The second track used the UNB CIC Modbus 2023 dataset, converting PCAPs to
                                            NetFlows and then reformatting those flows into structured LLM prompts. The
                                            goal was to determine whether LLMs could classify benign versus anomalous
                                            industrial traffic under different prompting and fine-tuning strategies.
                                        </p>
                                        <div className="mt-5 grid gap-4">
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

                                    <div className="grid gap-4 md:grid-cols-2">
                                        {dataShots.map((item) => (
                                            <div key={item.alt} className="overflow-hidden border border-slate-200/10 bg-[#07101f] px-3 py-2">
                                                <ProjectImage
                                                    src={item.src}
                                                    alt={item.alt}
                                                    description={item.description}
                                                    lg_size="w-full"
                                                    maxH="max-h-[42vh]"
                                                />
                                            </div>
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
