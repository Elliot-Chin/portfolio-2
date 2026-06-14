import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import {
    BoltOutlined,
    CalendarMonth,
    DownloadOutlined,
    Email,
    FolderCopyOutlined,
    GitHub,
    LinkedIn,
    PlaceOutlined,
    PublicOutlined,
    SchoolOutlined,
    WorkOutline,
} from "@mui/icons-material"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import { SeoHead } from "@/components/seo/SeoHead"

const summary =
    "Software developer with experience across cybersecurity, OT and industrial networking, infrastructure management, full-stack application development, and applied AI research support. Skilled in building technical solutions for networked and industrial environments, maintaining virtualized lab infrastructure, troubleshooting Windows and Linux systems, and supporting research and development for cybersecurity use cases and products. Experienced with industrial communication systems, network segmentation, packet analysis, real-time web application development, and exploratory AI workflows for network and security analysis. Interested in roles that combine cybersecurity, networking, software development, AI-enabled tooling, and system architecture."

const contactLinks = [
    { label: "Email", value: "contact@elliotc.dev", href: "mailto:contact@elliotc.dev", Icon: Email },
    { label: "GitHub", value: "Elliot-Chin", href: "https://github.com/Elliot-Chin", Icon: GitHub },
    { label: "LinkedIn", value: "elliot-chin", href: "https://www.linkedin.com/in/elliot-chin-90b4311a6", Icon: LinkedIn },
    { label: "Portfolio", value: "elliotc.dev", href: "https://elliotc.dev", Icon: PublicOutlined },
]

const highlights = [
    "Cybersecurity",
    "Industrial Networking",
    "Full-Stack Development",
    "Virtualized Lab Infrastructure",
]

function AutoPanLabel({ text, className = "" }) {
    const viewportRef = useRef(null)
    const trackRef = useRef(null)
    const [style, setStyle] = useState({})
    const [shouldPan, setShouldPan] = useState(false)

    useEffect(() => {
        const viewport = viewportRef.current
        const track = trackRef.current
        if (!viewport || !track) return

        const update = () => {
            const mobile = window.innerWidth < 640
            if (!mobile) {
                setShouldPan(false)
                setStyle({})
                return
            }

            const overflow = Math.ceil(track.scrollWidth - viewport.clientWidth)
            if (overflow <= 8) {
                setShouldPan(false)
                setStyle({})
                return
            }

            setShouldPan(true)
            setStyle({
                "--experience-title-scroll-distance": `-${overflow}px`,
                "--experience-title-scroll-duration": `${Math.max(7, overflow / 26 + 5)}s`,
                "--experience-title-scroll-delay": "1s",
            })
        }

        const requestUpdate = () => requestAnimationFrame(update)
        const resizeObserver = new ResizeObserver(requestUpdate)
        resizeObserver.observe(viewport)
        resizeObserver.observe(track)
        window.addEventListener("resize", requestUpdate)
        update()

        return () => {
            resizeObserver.disconnect()
            window.removeEventListener("resize", requestUpdate)
        }
    }, [text])

    return (
        <div ref={viewportRef} className={`max-w-full overflow-hidden ${className}`}>
            <div
                ref={trackRef}
                style={style}
                className={`inline-flex min-w-max whitespace-nowrap ${shouldPan ? "experience-title-marquee" : ""}`}
            >
                {text}
            </div>
        </div>
    )
}

const experience = [
    {
        title: "Jr Application Cybersecurity Specialist",
        company: "Siemens",
        location: "Canada",
        duration: "June 2023 - Current",
        bullets: [
            "Lead compatibility testing for SINEC Security Monitor across representative OT lab configurations and deployment scenarios.",
            "Analyze industrial protocols including PROFINET, OPC UA, S7 communication, and IEC 104 with Wireshark and UAExpert.",
            "Develop Zeek packet-analysis plugins in C++ to inspect, parse, and log industrial and OT traffic for cybersecurity monitoring and R&D use cases.",
            "Administer Proxmox virtualization hosting R&D virtual machines, project infrastructure VMs, and remotely accessible jumpboxes.",
            "Maintain an OT lab simulating electric power substation and building automation networks with relays, IEDs, servers, switches, and rack-mounted industrial equipment.",
            "Configure VLANs, segmentation, switch connectivity, and OT lab infrastructure used for cybersecurity testing and development.",
            "Troubleshoot Linux, Windows, Proxmox, Cisco switching, Cisco and Fortinet firewall environments, and industrial network equipment.",
            "Build and debug tools and web applications using React, Next.js, Python, Flask, Docker, and Git, including SSM API integrations and protocol support work.",
        ],
    },
    {
        title: "Software Developer",
        company: "University of New Brunswick",
        location: "Canada",
        duration: "May 2022 - Dec 2022",
        bullets: [
            "Led the full-stack development effort for the Department of Electrical and Computer Engineering.",
            "Gathered requirements from academic stakeholders for a department-wide tool supporting academic advising and CEAB accreditation workflows.",
            "Designed and implemented maintainable software solutions that could scale with advising, curriculum, and accreditation needs.",
            "Analyzed academic and accreditation-related data to identify improvement areas and support future development recommendations.",
            "Provided progress updates in remote and in-person meetings with collaborators and stakeholders.",
        ],
    },
]

const careerNodes = [
    {
        years: "2022",
        code: "01_DEV",
        title: "Software Developer",
        summary: "Full-stack delivery for advising and accreditation workflows at UNB.",
        accent: "muted",
    },
    {
        years: "2023",
        code: "02_JR",
        title: "Jr. Software Developer",
        summary: "Joined Siemens and worked on internal tooling, application support, and product-adjacent engineering workflows.",
        accent: "muted",
    },
    {
        years: "2025 - Current",
        code: "03_SEC",
        title: "Jr. Cybersecurity Application Specialist",
        summary: "Focused on OT lab operations, industrial protocol analysis, Zeek plugin development, and secure product tooling.",
        accent: "primary",
    },
]

const selectedProjects = [
    {
        title: "Industrial Protocol Analysis / Zeek Plugin Development",
        context: "Canada",
        command: "zeek-build --protocol opcua --lab ot-rnd",
        summary:
            "R&D work focused on understanding OPC UA behavior in industrial environments and translating that knowledge into protocol-aware monitoring for SINEC Security Monitor.",
        bullets: [
            "Researched OPC UA protocol behavior in an R&D lab using PLCs, Wireshark, and UAExpert to simulate normal and abnormal communication scenarios.",
            "Developed a Zeek-based protocol analysis plugin for SINEC Security Monitor to inspect and parse OPC UA traffic and emit event-specific logs.",
            "Defined attack procedures and generated test data to validate detection, certificate handling, access-level checks, and write-response conditions.",
        ],
        tech: ["Zeek", "C++", "Wireshark", "PLCs", "OPC UA", "Industrial Networking", "SINEC Security Monitor"],
        image: "/projects/ipa/Logo.png",
    },
]

const skillGroups = [
    {
        title: "Programming / Web",
        items: ["JavaScript", "React", "Next.js", "Python", "Flask", "REST APIs", "HTML/CSS", "Tailwind CSS", "Material UI", "HeroUI"],
    },
    {
        title: "Data / Backend",
        items: ["Redis", "Backend event handling", "API design", "Real-time communication"],
    },
    {
        title: "Cybersecurity / Analysis",
        items: ["Wireshark", "Packet analysis", "Windows Event Viewer", "Audit policy review", "Authentication and logon troubleshooting", "OpenSSL"],
    },
    {
        title: "Industrial / OT",
        items: ["OPC UA", "PROFINET", "S7 communication", "IEC 104", "VLANs", "Trunk and access ports", "SIEM/SCADA systems"],
    },
    {
        title: "Infrastructure / Tools",
        items: ["Docker", "Linux", "Windows", "Proxmox", "Nginx", "Cisco switch troubleshooting", "Fortinet firewall diagnostics", "Git", "PowerShell", "Bash"],
    },
    {
        title: "Languages",
        items: ["English", "Mandarin", "Cantonese", "Malay"],
    },
]

const education = {
    school: "University of New Brunswick",
    location: "Fredericton, NB, Canada",
    degree: "Bachelor of Science in Software Engineering",
    year: "2023",
    notes: ["CEAB-accredited program"],
}

function InfoLink({ href, label, value, Icon }) {
    return (
        <a
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
            className="flex items-center gap-3 border border-slate-200/16 bg-slate-950/38 px-3 py-2.5 transition hover:border-amber-200/20 hover:bg-slate-950/48 sm:px-4 sm:py-3"
        >
            <Icon className="text-amber-200" sx={{ fontSize: 18 }} />
            <div className="min-w-0">
                <div className="font-spacemono text-[10px] uppercase tracking-[0.16em] text-slate-400/70 sm:text-[11px] sm:tracking-[0.22em]">
                    {label}
                </div>
                <div className="truncate font-montserrat text-[13px] font-medium text-slate-100 sm:text-sm">{value}</div>
            </div>
        </a>
    )
}

function SectionShell({ id, title, Icon, children }) {
    return (
        <section
            id={id}
            data-fade
            className="translate-y-4 px-4 pb-8 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14"
        >
            <div className="mx-auto w-full max-w-[96rem]">
                <div className="mb-4 flex items-center gap-2.5 sm:gap-3">
                    <div className="grid h-9 w-9 place-items-center border border-slate-200/10 bg-slate-950/38 text-amber-200 sm:h-10 sm:w-10">
                        <Icon sx={{ fontSize: 18 }} />
                    </div>
                    <h2 className="font-spacemono text-[0.95rem] font-bold uppercase tracking-[0.16em] text-slate-100 sm:text-lg sm:tracking-[0.22em]">
                        {title}
                    </h2>
                </div>
                {children}
            </div>
        </section>
    )
}

function CareerSchematic() {
    return (
        <div className="overflow-hidden border border-slate-200/10 bg-[#06101d]/92 px-4 py-4 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px] sm:px-5 sm:py-5">
            <div className="mb-5 flex items-center gap-3 font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:text-sm sm:tracking-[0.2em]">
                <span>Career_Schematic</span>
            </div>

            <div className="relative items-center border border-slate-200/6 bg-[#050d18] px-4 py-5 sm:px-6 sm:py-6">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(151,190,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(151,190,255,0.03)_1px,transparent_1px)] bg-[size:22px_22px]" />
                <div className="relative grid gap-6 lg:hidden">
                    {careerNodes.map((node, index) => (
                        <div
                            key={node.code}
                            className={`border ${node.accent === "primary" ? "border-amber-300/55 bg-[#24170d]" : "border-slate-200/10 bg-slate-900/78"} p-4`}
                        >
                            <div className="flex items-start justify-between gap-4 font-spacemono text-[11px] uppercase tracking-[0.18em] text-slate-400/80">
                                <span>{node.years}</span>
                                <span className={node.accent === "primary" ? "text-amber-300" : "text-amber-200"}>{node.code}</span>
                            </div>
                            <h3 className={`mt-4 font-montserrat text-[clamp(1.4rem,7vw,1.85rem)] font-semibold leading-none tracking-tight ${node.accent === "primary" ? "text-amber-300" : "text-slate-100"}`}>
                                {node.title}
                            </h3>
                            <p className="mt-3 max-w-[18rem] font-spacemono text-[12px] leading-5 text-slate-300/84">
                                {node.summary}
                            </p>
                            <div className={`mt-4 h-[2px] w-16 ${node.accent === "primary" ? "bg-amber-300" : "bg-amber-200/50"}`} />
                            {index < careerNodes.length - 1 && (
                                <div className="mt-4 h-6 border-l border-dashed border-amber-300/45 ml-1" />
                            )}
                        </div>
                    ))}
                </div>

                <div className="relative hidden px-4 py-6 lg:block">
                    <div className="flex items-center justify-center">
                        {careerNodes.map((node, index) => (
                            <div key={node.code} className="contents">
                                <div className="w-[21rem]">
                                    <div
                                        className={`min-h-[15rem] border p-4 ${
                                            node.accent === "primary"
                                                ? "border-amber-300/55 bg-[#24170d]"
                                                : "border-slate-200/10 bg-slate-900/78"
                                        }`}
                                    >
                                        <div className="flex items-start justify-between gap-4 font-spacemono text-[11px] uppercase tracking-[0.18em] text-slate-400/80">
                                            <span>{node.years}</span>
                                            <span className={node.accent === "primary" ? "text-amber-300" : "text-amber-200"}>
                                                {node.code}
                                            </span>
                                        </div>
                                        <h3
                                            className={`mt-4 max-w-[16rem] font-montserrat text-[1.95rem] font-semibold leading-none tracking-tight ${
                                                node.accent === "primary" ? "text-amber-300" : "text-slate-100"
                                            }`}
                                        >
                                            {node.title}
                                        </h3>
                                        <p className="mt-3 max-w-[16.5rem] font-spacemono text-[12px] leading-5 text-slate-300/84">
                                            {node.summary}
                                        </p>
                                        <div className={`mt-4 h-[2px] w-16 ${node.accent === "primary" ? "bg-amber-300" : "bg-amber-200/50"}`} />
                                    </div>
                                </div>

                                {index < careerNodes.length - 1 && (
                                    <div className="relative mt-[8rem] w-[7rem] self-start">
                                        <div className={`career-flow-line h-px w-full ${index === 0 ? "career-flow-seg-1" : "career-flow-seg-2"}`} />
                                        <span className="career-flow-node left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                                        <span className="career-flow-node left-full top-1/2 -translate-x-1/2 -translate-y-1/2" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ResumePage() {
    const containerRef = useRef(null)
    const [loadingProjectCta, setLoadingProjectCta] = useState(false)

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
                title="Resume | Elliot Chin"
                description="Resume and experience overview for Elliot Chin, covering OT cybersecurity, software development, industrial networking, and infrastructure work."
                path="/resume"
            />

            <main
                ref={containerRef}
                className="relative h-screen overflow-y-scroll scroll-smooth overscroll-contain bg-transparent text-slate-50"
            >
                <BackToTopButton targetRef={containerRef} />

                <div className="pt-14">
                    <section
                        data-fade
                        className="translate-y-4 px-4 pb-6 pt-4 opacity-0 transition duration-700 ease-out sm:px-10 sm:pt-6 lg:px-14"
                    >
                        <div className="mx-auto w-full max-w-[96rem] space-y-4">
                            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_22rem]">
                                <div className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 sm:px-5">
                                        <div className="min-w-0 flex items-center gap-3 font-spacemono text-[12px] font-bold text-amber-200 sm:text-sm">
                                            <span className="text-slate-300">&gt;_</span>
                                            <span className="truncate">~/resume/elliot-chin.profile</span>
                                        </div>
                                        <div className="font-spacemono text-[10px] uppercase tracking-[0.16em] text-slate-400/80 sm:text-[11px] sm:tracking-[0.22em]">
                                            Secure candidate profile
                                        </div>
                                    </div>

                                    <div className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
                                        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-5">
                                            <div className="min-w-0">
                                                <div className="font-spacemono text-[10px] uppercase tracking-[0.12em] text-amber-300 sm:text-sm sm:tracking-[0.22em]">
                                                    Software Development / Cybersecurity / Industrial Networking
                                                </div>
                                                <h1 className="mt-3 font-montserrat text-[clamp(1.9rem,8vw,3.35rem)] font-semibold tracking-tight text-blue-100">
                                                    Elliot Chin
                                                </h1>
                                                <div className="mt-4 flex flex-wrap gap-2">
                                                    {highlights.map((item) => (
                                                        <span
                                                            key={item}
                                                            className="border border-amber-200/10 bg-amber-300/10 px-2.5 py-1 font-spacemono text-[10px] font-bold uppercase tracking-[0.12em] text-amber-100 sm:px-3 sm:text-[11px] sm:tracking-[0.16em]"
                                                        >
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <a
                                                href="/wtr/Elliot_Chin_Resume.pdf"
                                                className="home-btn home-btn-primary w-full justify-center !px-4 !py-2.5 sm:w-auto sm:justify-start"
                                            >
                                                <DownloadOutlined sx={{ fontSize: 18 }} />
                                                <span>Download_Resume</span>
                                            </a>
                                        </div>

                                        <p className="mt-6 max-w-5xl font-montserrat text-[0.98rem] leading-relaxed text-slate-100/90 sm:mt-7 sm:text-lg">
                                            {summary}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="border border-white bg-slate-950/38 p-4 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px] sm:p-5">
                                            <div className="font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:text-sm sm:tracking-[0.22em]">
                                            Contact / Links
                                        </div>
                                        <div className="mt-4 grid gap-2.5 sm:gap-3">
                                            {contactLinks.map((item) => (
                                                <InfoLink key={item.label} {...item} />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="border border-slate-200/10 bg-slate-950/38 p-4 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px] sm:p-5">
                                            <div className="font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:text-sm sm:tracking-[0.22em]">
                                            Header Data
                                        </div>
                                        <dl className="mt-4 space-y-3 font-spacemono text-[12px] text-slate-300/85 sm:space-y-4 sm:text-sm">
                                            <div className="flex items-center justify-between gap-6">
                                                <dt>Base:</dt>
                                                <dd className="text-right text-slate-100">Canada</dd>
                                            </div>
                                            <div className="flex items-center justify-between gap-6">
                                                <dt>Focus:</dt>
                                                    <dd className="text-right text-amber-300">OT Security</dd>
                                            </div>
                                            <div className="flex items-center justify-between gap-6">
                                                <dt>Degree:</dt>
                                                <dd className="text-right text-slate-100">BScSwE</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>

                            <div className="-mt-1">
                                <CareerSchematic />
                            </div>
                        </div>
                    </section>

                    <SectionShell id="experience" title="Engineering Experience" Icon={WorkOutline}>
                        <div className="grid gap-6">
                            {experience.map((role) => (
                                <article
                                    key={`${role.company}-${role.title}`}
                                    className="overflow-hidden border border-white bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]"
                                >
                                    <div className="flex flex-col items-start gap-2.5 border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3 sm:px-5">
                                        <div className="min-w-0 w-full font-spacemono text-[12px] font-bold text-amber-200 sm:w-auto sm:flex-1 sm:flex-none sm:text-sm">
                                            <AutoPanLabel text={`${role.company.toLowerCase().replace(/\s+/g, "_")}::${role.title.toLowerCase().replace(/\s+/g, "_")}`} />
                                        </div>
                                        <div className="flex w-full flex-wrap items-center gap-3 font-spacemono text-[10px] uppercase tracking-[0.14em] text-slate-400/80 sm:w-auto sm:gap-4 sm:text-[11px] sm:tracking-[0.22em]">
                                            <span className="inline-flex items-center gap-1.5">
                                                <CalendarMonth sx={{ fontSize: 15 }} />
                                                {role.duration}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <PlaceOutlined sx={{ fontSize: 15 }} />
                                                {role.location}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
                                        <h3 className="font-montserrat text-[clamp(1.35rem,6vw,1.9rem)] font-semibold tracking-tight text-amber-100">
                                            {role.title}
                                        </h3>
                                        <p className="mt-1 font-montserrat text-[0.95rem] text-slate-300/86 sm:text-base">{role.company}</p>
                                        <div className="mt-4 grid gap-2.5 sm:mt-5 sm:gap-3">
                                            {role.bullets.map((bullet) => (
                                                <div key={bullet} className="flex gap-3 font-montserrat text-[0.96rem] leading-relaxed text-slate-100/90 sm:text-[1rem]">
                                                    <span className="pt-1 font-spacemono text-amber-200">+</span>
                                                    <span>{bullet}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </SectionShell>

                    <SectionShell id="projects" title="Selected Projects" Icon={FolderCopyOutlined}>
                        <div className="grid gap-6">
                            {selectedProjects.map((project) => (
                                <article
                                    key={project.title}
                                    className="overflow-hidden border border-white bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]"
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 sm:px-5">
                                        <div className="min-w-0 flex items-center gap-3 font-spacemono text-[12px] font-bold text-amber-200 sm:text-sm">
                                            <span className="text-slate-300">&gt;_</span>
                                            <span className="truncate">~/projects/industrial-protocol-analysis</span>
                                        </div>
                                        <div className="font-spacemono text-[10px] uppercase tracking-[0.14em] text-slate-400/80 sm:text-[11px] sm:tracking-[0.22em]">
                                            {project.context}
                                        </div>
                                    </div>

                                    <div className="grid gap-5 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-[minmax(0,1.55fr)_20rem] lg:gap-8 lg:px-8">
                                        <div className="min-w-0">
                                            <h3 className="font-montserrat text-[clamp(1.4rem,6vw,2rem)] font-semibold tracking-tight text-amber-100">
                                                {project.title}
                                            </h3>
                                            <p className="mt-3 max-w-4xl font-montserrat text-[0.98rem] leading-relaxed text-slate-100/90 sm:mt-4 sm:text-lg">
                                                {project.summary}
                                            </p>

                                            <div className="mt-5 break-all font-spacemono text-[12px] font-bold text-amber-300 sm:mt-7 sm:text-sm md:text-base">
                                                {">> "}
                                                {project.command}
                                            </div>

                                            <div className="mt-4 overflow-hidden border border-slate-200/10 bg-[#07101f]">
                                                <div className="grid gap-0 lg:grid-cols-[minmax(0,1.16fr)_minmax(240px,0.84fr)]">
                                                    <div className="border-b border-slate-200/10 p-4 lg:border-b-0 lg:border-r">
                                                        <div className="space-y-2 font-spacemono text-[12px] leading-5 text-slate-300/88 sm:text-[13px] sm:leading-6">
                                                            {project.bullets.map((bullet) => (
                                                                <div key={bullet} className="flex gap-3">
                                                                    <span className="text-amber-200">+</span>
                                                                    <span>{bullet}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="relative flex min-h-[200px] items-end overflow-hidden bg-slate-950/50 p-4 sm:min-h-[240px] sm:p-5">
                                                        <img src={project.image} alt={project.title} className="h-full w-full object-contain opacity-90" />
                                                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,31,0)_0%,rgba(7,16,31,0.16)_48%,rgba(7,16,31,0.52)_100%)]" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <aside className="border-l-0 border-slate-200/8 pl-0 lg:border-l lg:pl-8">
                                            <div className="font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:text-sm sm:tracking-[0.24em]">
                                                Stack
                                            </div>
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {project.tech.map((item) => (
                                                    <span
                                                        key={item}
                                                        className="border border-amber-200/8 bg-amber-300/10 px-2.5 py-1 font-spacemono text-[11px] font-bold uppercase tracking-[0.16em] text-amber-100"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="mt-8">
                                                <Link
                                                    href="/projects"
                                                    onClick={() => setLoadingProjectCta(true)}
                                                    aria-disabled={loadingProjectCta}
                                                    className={`home-btn home-btn-secondary w-full justify-center !px-4 !py-2.5 sm:justify-start ${loadingProjectCta ? "pointer-events-none opacity-70" : ""}`}
                                                >
                                                    {loadingProjectCta ? (
                                                        <span
                                                            aria-hidden="true"
                                                            className="h-4 w-4 animate-spin rounded-full border-2 border-amber-100/25 border-t-amber-100"
                                                        />
                                                    ) : (
                                                        "View_Projects"
                                                    )}
                                                </Link>
                                            </div>
                                        </aside>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </SectionShell>

                    <SectionShell id="skills" title="Specialized Skills" Icon={BoltOutlined}>
                        <div className="grid gap-5 lg:grid-cols-2">
                            {skillGroups.map((group) => (
                                <article
                                    key={group.title}
                                    className="border border-slate-white bg-slate-950/38 p-4 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px] sm:p-5"
                                >
                                    <h3 className="font-spacemono text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100 sm:text-sm sm:tracking-[0.22em]">
                                        {group.title}
                                    </h3>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <span
                                                key={item}
                                                className="border border-slate-200/10 bg-slate-900/76 px-2.5 py-1.5 font-montserrat text-[13px] text-slate-100/92 sm:px-3 sm:text-sm"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </SectionShell>

                    <SectionShell id="education" title="Education" Icon={SchoolOutlined}>
                        <article className="overflow-hidden border border-white bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                            <div className="flex flex-col items-start gap-2.5 border-b border-slate-200/8 bg-slate-900/78 px-4 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3 sm:px-5">
                                <div className="min-w-0 w-full font-spacemono text-[12px] font-bold text-amber-200 sm:w-auto sm:flex-1 sm:flex-none sm:text-sm">
                                    <AutoPanLabel text="university_of_new_brunswick::education_record" />
                                </div>
                                <div className="w-full font-spacemono text-[10px] uppercase tracking-[0.16em] text-slate-400/80 sm:w-auto sm:text-[11px] sm:tracking-[0.22em]">
                                    {education.year}
                                </div>
                            </div>
                            <div className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
                                <h3 className="font-montserrat text-[clamp(1.4rem,6vw,2rem)] font-semibold tracking-tight text-amber-100">
                                    {education.school}
                                </h3>
                                <div className="mt-3 flex flex-wrap items-center gap-3 font-montserrat text-[0.96rem] text-slate-300/86 sm:gap-4 sm:text-base">
                                    <span>{education.degree}</span>
                                    <span className="font-spacemono text-slate-500">/</span>
                                    <span>{education.location}</span>
                                </div>
                                <div className="mt-4 grid gap-2.5 sm:mt-5 sm:gap-3">
                                    {education.notes.map((note) => (
                                        <div key={note} className="flex gap-3 font-montserrat text-[0.96rem] leading-relaxed text-slate-100/90 sm:text-[1rem]">
                                            <span className="pt-1 font-spacemono text-amber-200">+</span>
                                            <span>{note}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </SectionShell>
                </div>
            </main>
        </>
    )
}
