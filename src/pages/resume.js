import Head from "next/head"
import Link from "next/link"
import { useEffect, useRef } from "react"
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
import { HomeTopNav } from "@/components/nav/HomeTopNav"
import { BackToTopButton } from "@/components/nav/BackTopTop"

const summary =
    "Software developer with experience across cybersecurity, OT and industrial networking, infrastructure management, full-stack application development, and applied AI research support. Skilled in building technical solutions for networked and industrial environments, maintaining virtualized lab infrastructure, troubleshooting Windows and Linux systems, and supporting research and development for cybersecurity use cases and products. Experienced with industrial communication systems, network segmentation, packet analysis, real-time web application development, and exploratory AI workflows for network and security analysis. Interested in roles that combine cybersecurity, networking, software development, AI-enabled tooling, and system architecture."

const contactLinks = [
    { label: "Email", value: "e.chincys@gmail.com", href: "mailto:e.chincys@gmail.com", Icon: Email },
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
        image: "/projects/sts/Logo.png",
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
            className="flex items-center gap-3 border border-slate-200/10 bg-slate-950/38 px-4 py-3 transition hover:border-amber-200/20 hover:bg-slate-950/48"
        >
            <Icon className="text-amber-200" sx={{ fontSize: 18 }} />
            <div className="min-w-0">
                <div className="font-spacemono text-[11px] uppercase tracking-[0.22em] text-slate-400/70">{label}</div>
                <div className="truncate font-montserrat text-sm font-medium text-slate-100">{value}</div>
            </div>
        </a>
    )
}

function SectionShell({ id, title, Icon, children }) {
    return (
        <section id={id} data-fade className="px-6 pb-8 sm:px-10 lg:px-14">
            <div className="mx-auto w-full max-w-[96rem]">
                <div className="mb-4 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center border border-slate-200/10 bg-slate-950/38 text-amber-200">
                        <Icon sx={{ fontSize: 20 }} />
                    </div>
                    <h2 className="font-spacemono text-lg font-bold uppercase tracking-[0.22em] text-slate-100">
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
            <div className="mb-5 flex items-center gap-3 font-spacemono text-sm font-bold uppercase tracking-[0.2em] text-amber-100">
                <span>Career_Schematic</span>
            </div>

            <div className="relative border border-slate-200/6 bg-[#050d18] px-4 py-5 sm:px-6 sm:py-6 items-center">
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
                            <h3 className={`mt-4 font-montserrat text-[1.85rem] font-semibold leading-none tracking-tight ${node.accent === "primary" ? "text-amber-300" : "text-slate-100"}`}>
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

    useEffect(() => {
        document.body.classList.add("home-grid-bg")
        return () => document.body.classList.remove("home-grid-bg")
    }, [])

    return (
        <>
            <Head>
                <title>Elliot Chin - Resume</title>
                <meta name="description" content="Resume overview for Elliot Chin." />
            </Head>

            <main
                ref={containerRef}
                className="relative h-screen overflow-y-scroll scroll-smooth overscroll-contain bg-transparent text-slate-50"
            >
                <HomeTopNav containerRef={containerRef} />
                <BackToTopButton targetRef={containerRef} />

                <div className="pt-14">
                    <section data-fade className="px-6 pb-6 pt-6 sm:px-10 lg:px-14">
                        <div className="mx-auto w-full max-w-[96rem] space-y-4">
                            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_22rem]">
                                <div className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/8 bg-slate-900/78 px-5 py-3">
                                        <div className="flex items-center gap-3 font-spacemono text-sm font-bold text-amber-200">
                                            <span className="text-slate-300">&gt;_</span>
                                            <span>~/resume/elliot-chin.profile</span>
                                        </div>
                                        <div className="font-spacemono text-[11px] uppercase tracking-[0.22em] text-slate-400/80">
                                            Secure candidate profile
                                        </div>
                                    </div>

                                    <div className="px-6 py-6 lg:px-8 lg:py-8">
                                        <div className="flex flex-wrap items-start justify-between gap-5">
                                            <div>
                                                <div className="font-spacemono text-sm uppercase tracking-[0.22em] text-amber-300">
                                                    Software Development / Cybersecurity / Industrial Networking
                                                </div>
                                                <h1 className="mt-3 font-montserrat text-[2.7rem] font-semibold tracking-tight text-blue-100 md:text-[3.35rem]">
                                                    Elliot Chin
                                                </h1>
                                                <div className="mt-4 flex flex-wrap gap-2">
                                                    {highlights.map((item) => (
                                                        <span
                                                            key={item}
                                                            className="border border-amber-200/10 bg-amber-300/10 px-3 py-1 font-spacemono text-[11px] font-bold uppercase tracking-[0.16em] text-amber-100"
                                                        >
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <a href="/wtr/Elliot_Chin_Resume.docx" className="home-btn home-btn-primary">
                                                <DownloadOutlined sx={{ fontSize: 18 }} />
                                                <span>Download_Resume</span>
                                            </a>
                                        </div>

                                        <p className="mt-7 max-w-5xl font-montserrat text-lg leading-relaxed text-slate-100/90">
                                            {summary}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="border border-slate-200/10 bg-slate-950/38 p-5 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                            <div className="font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                            Contact / Links
                                        </div>
                                        <div className="mt-4 grid gap-3">
                                            {contactLinks.map((item) => (
                                                <InfoLink key={item.label} {...item} />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="border border-slate-200/10 bg-slate-950/38 p-5 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                            <div className="font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                            Header Data
                                        </div>
                                        <dl className="mt-4 space-y-4 font-spacemono text-sm text-slate-300/85">
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
                                    className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]"
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/8 bg-slate-900/78 px-5 py-3">
                                        <div className="font-spacemono text-sm font-bold text-amber-200">
                                            {role.company.toLowerCase().replace(/\s+/g, "_")}::{role.title.toLowerCase().replace(/\s+/g, "_")}
                                        </div>
                                        <div className="flex flex-wrap items-center gap-4 font-spacemono text-[11px] uppercase tracking-[0.22em] text-slate-400/80">
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

                                    <div className="px-6 py-6 lg:px-8">
                                        <h3 className="font-montserrat text-[1.9rem] font-semibold tracking-tight text-amber-100">
                                            {role.title}
                                        </h3>
                                        <p className="mt-1 font-montserrat text-base text-slate-300/86">{role.company}</p>
                                        <div className="mt-5 grid gap-3">
                                            {role.bullets.map((bullet) => (
                                                <div key={bullet} className="flex gap-3 font-montserrat text-[1rem] leading-relaxed text-slate-100/90">
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
                                    className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]"
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/8 bg-slate-900/78 px-5 py-3">
                                        <div className="flex items-center gap-3 font-spacemono text-sm font-bold text-amber-200">
                                            <span className="text-slate-300">&gt;_</span>
                                            <span>~/projects/industrial-protocol-analysis</span>
                                        </div>
                                        <div className="font-spacemono text-[11px] uppercase tracking-[0.22em] text-slate-400/80">
                                            {project.context}
                                        </div>
                                    </div>

                                    <div className="grid gap-8 px-6 py-6 lg:grid-cols-[minmax(0,1.55fr)_20rem] lg:px-8">
                                        <div className="min-w-0">
                                            <h3 className="font-montserrat text-[2rem] font-semibold tracking-tight text-amber-100">
                                                {project.title}
                                            </h3>
                                            <p className="mt-4 max-w-4xl font-montserrat text-lg leading-relaxed text-slate-100/90">
                                                {project.summary}
                                            </p>

                                            <div className="mt-7 font-spacemono text-base font-bold text-amber-300">
                                                {">> "}
                                                {project.command}
                                            </div>

                                            <div className="mt-4 overflow-hidden border border-slate-200/10 bg-[#07101f]">
                                                <div className="grid gap-0 lg:grid-cols-[minmax(0,1.16fr)_minmax(240px,0.84fr)]">
                                                    <div className="border-b border-slate-200/10 p-4 lg:border-b-0 lg:border-r">
                                                        <div className="space-y-2 font-spacemono text-[13px] leading-6 text-slate-300/88">
                                                            {project.bullets.map((bullet) => (
                                                                <div key={bullet} className="flex gap-3">
                                                                    <span className="text-amber-200">+</span>
                                                                    <span>{bullet}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="relative flex min-h-[240px] items-end overflow-hidden bg-slate-950/50 p-5">
                                                        <img src={project.image} alt={project.title} className="h-full w-full object-contain opacity-90" />
                                                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,31,0)_0%,rgba(7,16,31,0.16)_48%,rgba(7,16,31,0.52)_100%)]" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <aside className="border-l-0 border-slate-200/8 pl-0 lg:border-l lg:pl-8">
                                            <div className="font-spacemono text-sm font-bold uppercase tracking-[0.24em] text-amber-100">
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
                                                <Link href="/projects" className="home-btn home-btn-secondary w-full">
                                                    View_Projects
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
                                    className="border border-slate-200/10 bg-slate-950/38 p-5 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]"
                                >
                                    <h3 className="font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                        {group.title}
                                    </h3>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <span
                                                key={item}
                                                className="border border-slate-200/10 bg-slate-900/76 px-3 py-1.5 font-montserrat text-sm text-slate-100/92"
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
                        <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/8 bg-slate-900/78 px-5 py-3">
                                <div className="font-spacemono text-sm font-bold text-amber-200">
                                    university_of_new_brunswick::education_record
                                </div>
                                <div className="font-spacemono text-[11px] uppercase tracking-[0.22em] text-slate-400/80">
                                    {education.year}
                                </div>
                            </div>
                            <div className="px-6 py-6 lg:px-8">
                                <h3 className="font-montserrat text-[2rem] font-semibold tracking-tight text-amber-100">
                                    {education.school}
                                </h3>
                                <div className="mt-3 flex flex-wrap items-center gap-4 font-montserrat text-base text-slate-300/86">
                                    <span>{education.degree}</span>
                                    <span className="font-spacemono text-slate-500">/</span>
                                    <span>{education.location}</span>
                                </div>
                                <div className="mt-5 grid gap-3">
                                    {education.notes.map((note) => (
                                        <div key={note} className="flex gap-3 font-montserrat text-[1rem] leading-relaxed text-slate-100/90">
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
