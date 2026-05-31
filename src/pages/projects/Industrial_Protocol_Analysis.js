import Head from "next/head"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { ReactTyped } from "react-typed"
import {
    AccountTreeOutlined,
    BugReportOutlined,
    DataObjectOutlined,
    FolderCopyOutlined,
    MemoryOutlined,
    OpenInNewOutlined,
    SchemaOutlined,
    SecurityOutlined,
    TerminalOutlined,
} from "@mui/icons-material"
import { BackToTopButton } from "@/components/nav/BackTopTop"

const opcuaPlugin = {
    title: "SINEC Security Monitor OPC UA Plugin",
    slug: "~/projects/sinec-security-monitor/opcua-plugin",
    eyebrow: "Siemens / SINEC Security Monitor / Zeek / OPC UA",
    duration: "Research & development",
    year: "2024-2026",
    TLDR:
        "Development of a Zeek-based plugin for Siemens SINEC Security Monitor to inspect OPC UA traffic, generate event-specific logs, and support OT-focused detection logic for industrial network monitoring.",
    command: "build zeek-plugin --target sinec_security_monitor --protocol opcua",
    contextOne:
        "SINEC Security Monitor is Siemens' platform for passive, continuous OT security monitoring during production, giving visibility into industrial assets, communication topologies, potential threats, and network intrusions without disrupting operations.",
    contextTwo:
        "Within that environment, the work focused on researching OPC UA behavior in an R&D lab using PLCs, generated traffic, Wireshark, and UAExpert, then translating those findings into a Zeek-based plugin that could parse protocol activity and emit logs useful for OT monitoring and detection engineering.",
    conclusion:
        "The result is a protocol-aware monitoring component that connects low-level OPC UA traffic with higher-level OT security visibility inside Siemens' SINEC Security Monitor workflow.",
    finalThoughts:
        "This work deepened protocol analysis, Zeek plugin development, OT lab validation, and detection engineering skills while producing a practical foundation for custom OPC UA monitoring in industrial environments.",
}

const researchCards = [
    {
        title: "Protocol Decoding",
        body:
            "Break down OPC UA traffic into structured protocol fields such as secure channel setup, service requests, service responses, access behavior, node targets, and status conditions.",
        Icon: DataObjectOutlined,
    },
    {
        title: "Plugin Integration",
        body:
            "Develop the Zeek-based plugin so decoded OPC UA behavior can be surfaced inside Siemens SINEC Security Monitor as event-specific telemetry for industrial security monitoring.",
        Icon: SchemaOutlined,
    },
    {
        title: "Detection Logic",
        body:
            "Implement custom checks around service behavior, certificate handling, access-level validation, and write-response conditions so the plugin can support targeted OT detection use cases.",
        Icon: SecurityOutlined,
    },
]

const developmentSteps = [
    {
        title: "Packet Capture Review",
        body:
            "Review generated OPC UA traffic in Wireshark and UAExpert sessions to identify message boundaries, secure-channel behavior, service types, and protocol fields worth elevating into monitoring telemetry.",
        command: "wireshark + uaexpert + plc traffic generation",
        Icon: TerminalOutlined,
    },
    {
        title: "Plugin Buildout",
        body:
            "Build the Zeek-based plugin structure in C++, define the parser flow, and prepare the analyzer to inspect OPC UA traffic inside the SINEC Security Monitor pipeline.",
        command: "plugin registration -> parsing -> event hooks",
        Icon: MemoryOutlined,
    },
    {
        title: "Behavior Mapping",
        body:
            "Track protocol state so requests, responses, service mappings, status conditions, and communication behavior can be associated correctly and turned into meaningful events.",
        command: "request -> service -> validation -> response",
        Icon: AccountTreeOutlined,
    },
    {
        title: "Detection Validation",
        body:
            "Define attack procedures and generate test-data scenarios to validate how the plugin logs protocol events, certificate handling, access-level checks, and suspicious write behavior.",
        command: "test scenarios -> log review -> detection tuning",
        Icon: BugReportOutlined,
    },
]

const metadataItems = [
    {
        label: "Domain:",
        value: "OT / Industrial Cybersecurity",
    },
    {
        label: "Protocol:",
        value: "OPC UA",
    },
    {
        label: "Platform:",
        value: "SINEC Security Monitor / Zeek",
    },
    {
        label: "Language:",
        value: "C++",
    },
    {
        label: "Focus:",
        value: "Parsing / Logging / Detection Logic",
    },
]

const technicalFocus = [
    {
        title: "OPC UA Message Structure",
        body:
            "The plugin work starts with understanding OPC UA transport framing, secure channel negotiation, service identifiers, request handles, response status codes, and how these appear in actual PLC communication.",
    },
    {
        title: "SINEC Monitoring Integration",
        body:
            "The analyzer is built so decoded protocol behavior can be surfaced in Siemens SINEC Security Monitor as structured, OT-relevant telemetry rather than raw packet data alone.",
    },
    {
        title: "Behavior-Aware Analysis",
        body:
            "Because OPC UA relies on request and response flows, the plugin needs enough state to associate responses with earlier actions and distinguish ordinary industrial behavior from unusual or security-relevant activity.",
    },
    {
        title: "Detection-Oriented Output",
        body:
            "Rather than only dumping decoded fields, the output is shaped around monitoring questions: what service was used, what node was targeted, what validation condition was triggered, whether the write or access behavior succeeded, and whether the sequence looks suspicious.",
    },
]

const externalLinks = [
    {
        label: "Zeek_Docs",
        href: "https://docs.zeek.org/",
    },
    {
        label: "OPC_UA_Spec",
        href: "https://reference.opcfoundation.org/",
    },
]

function FlowNode({ label, active = false }) {
    return (
        <div
            className={`border px-4 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.16em] ${active
                    ? "border-amber-300/50 bg-amber-300/10 text-amber-200"
                    : "border-slate-200/10 bg-slate-950/42 text-slate-200"
                }`}
        >
            {label}
        </div>
    )
}

export default function ZeekOpcuaPluginPage() {
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
                <title>EC - Zeek OPC UA Plugin</title>
                <meta
                    name="description"
                    content="Elliot Chin - SINEC Security Monitor OPC UA plugin project"
                />
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
                                        <span>{opcuaPlugin.slug}</span>
                                    </div>
                                    <div className="font-spacemono text-[11px] uppercase tracking-[0.22em] text-slate-400/80">
                                        Industrial protocol analysis / {opcuaPlugin.year}
                                    </div>
                                </div>

                                <div className="grid gap-8 px-6 py-6 lg:grid-cols-[minmax(0,1.25fr)_24rem] lg:px-8 lg:py-8">
                                    <div className="min-w-0">
                                        <div className="font-spacemono text-sm uppercase tracking-[0.22em] text-amber-300">
                                            {opcuaPlugin.eyebrow}
                                        </div>

                                        <h1 className="mt-3 font-montserrat text-[2.55rem] font-semibold tracking-tight text-blue-100 md:text-[3.15rem]">
                                            {opcuaPlugin.title}
                                        </h1>

                                        <p className="mt-6 max-w-4xl font-montserrat text-lg leading-relaxed text-slate-100/90">
                                            {opcuaPlugin.TLDR}
                                        </p>

                                        <div className="mt-7 font-spacemono text-base font-bold text-amber-300">
                                            <span>{">> "}</span>
                                            <ReactTyped
                                                strings={[opcuaPlugin.command]}
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
                                            Analyzer Pipeline
                                        </div>

                                        <div className="space-y-4 px-5 py-5">
                                            <FlowNode label="PCAP / Live Traffic" />
                                            <div className="pl-4 font-spacemono text-slate-500">↓</div>
                                            <FlowNode label="TCP Stream" />
                                            <div className="pl-4 font-spacemono text-slate-500">↓</div>
                                            <FlowNode label="OPC UA Parser" active />
                                            <div className="pl-4 font-spacemono text-slate-500">↓</div>
                                            <FlowNode label="Zeek Events" />
                                            <div className="pl-4 font-spacemono text-slate-500">↓</div>
                                            <FlowNode label="Structured Logs" />

                                            <div className="mt-5 border-t border-slate-200/8 pt-5">
                                                <div className="font-spacemono text-xs uppercase tracking-[0.22em] text-slate-400">
                                                    Output Goal
                                                </div>
                                                <p className="mt-3 font-montserrat text-sm leading-relaxed text-slate-300/88">
                                                    Convert raw OPC UA traffic into SINEC-facing security telemetry for
                                                    protocol analysis, OT monitoring, and custom detection logic.
                                                </p>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section data-fade className="translate-y-4 px-6 pb-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                        <div className="mx-auto grid w-full max-w-[96rem] gap-5 lg:grid-cols-3">
                            {researchCards.map(({ title, body, Icon }) => (
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
                                    Project Context
                                </div>
                                <div className="px-5 py-5">
                                    <p className="font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                        {opcuaPlugin.contextOne}
                                    </p>
                                    <p className="mt-4 font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                        {opcuaPlugin.contextTwo}
                                    </p>
                                </div>
                            </article>

                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                    Metadata
                                </div>
                                <dl className="space-y-5 px-5 py-5 font-spacemono text-sm text-slate-300/85">
                                    {metadataItems.map((item) => (
                                        <div
                                            key={item.label}
                                            className="flex items-center justify-between gap-6"
                                        >
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
                                    Development Workflow
                                </div>

                                <div className="grid gap-5 px-5 py-5 lg:grid-cols-2">
                                    {developmentSteps.map(({ title, body, command, Icon }) => (
                                        <article
                                            key={title}
                                            className="border border-slate-200/10 bg-[#07101f] p-5"
                                        >
                                            <div className="flex items-center gap-3">
                                                <Icon className="text-amber-300" sx={{ fontSize: 23 }} />
                                                <h2 className="font-montserrat text-[1.25rem] font-semibold tracking-tight text-slate-100">
                                                    {title}
                                                </h2>
                                            </div>

                                            <p className="mt-4 font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                                {body}
                                            </p>

                                            <div className="mt-5 border border-slate-200/10 bg-slate-950/52 px-4 py-3 font-spacemono text-sm text-amber-200">
                                                {command}
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </article>

                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                    Technical Focus Areas
                                </div>

                                <div className="grid gap-5 px-5 py-5 md:grid-cols-2">
                                    {technicalFocus.map((item) => (
                                        <article
                                            key={item.title}
                                            className="border border-slate-200/10 bg-[#07101f] p-5"
                                        >
                                            <h2 className="font-montserrat text-[1.25rem] font-semibold tracking-tight text-slate-100">
                                                {item.title}
                                            </h2>
                                            <p className="mt-3 font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                                {item.body}
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
                                        {opcuaPlugin.conclusion}
                                    </p>
                                </div>
                            </article>

                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                    Final Thoughts
                                </div>
                                <div className="px-5 py-5">
                                    <p className="font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                        {opcuaPlugin.finalThoughts}
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
