import Link from "next/link"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import { useRef } from "react"
import { useHomeGridPage } from "@/components/hooks/useHomeGridPage"
import { SeoHead } from "@/components/seo/SeoHead"
import { resumeContactLinks, resumeSelectedProjects } from "@/data/resume"
import s from "@/styles/Resume.module.css"

const pdf = "/wtr/Elliot_Chin_Resume.pdf"
const socials = resumeContactLinks.filter(link => ["GitHub", "LinkedIn"].includes(link.label))
const roles = [
    { date: "JUN 2023 — PRESENT", company: "Siemens", title: "Junior Application Cybersecurity Specialist", summary: "Engineering and research across OT cybersecurity, industrial communication, and the infrastructure behind secure networked systems.", bullets: [
        <><strong>Analyze industrial protocols</strong> including OPC UA, PROFINET, S7, and IEC 104 using Wireshark and UAExpert.</>,
        <>Develop <strong>Zeek packet-analysis plugins in C++</strong> to parse industrial traffic and produce event-specific logs for cybersecurity monitoring.</>,
        <>Lead <strong>SINEC Security Monitor compatibility testing</strong>, validating deployment and integration behavior in representative OT environments.</>,
        <>Maintain an <strong>OT research lab</strong> simulating substation and building automation networks with relays, IEDs, servers, and industrial equipment.</>,
        <>Configure <strong>VLANs and network segmentation</strong>; troubleshoot Linux, Windows, Cisco switching, and Fortinet firewall environments.</>,
        <>Administer <strong>Proxmox virtualization</strong> for R&D systems, infrastructure VMs, and remotely accessible jumpboxes.</>,
        <>Build <strong>internal software tools and API integrations</strong> with React, Next.js, Python, Flask, Docker, and Git.</>,
    ], tech: "Zeek · C++ · OPC UA · Wireshark · Proxmox · Python" },
    { date: "MAY — DEC 2022", company: "University of New Brunswick", title: "Software Developer", summary: "Sole full-stack developer for two academic-support tools in the Department of Electrical and Computer Engineering.", bullets: [
        <>Worked directly with the <strong>Department Head and Software Engineering Advisor</strong> to turn academic workflow needs into usable software.</>,
        <>Built a <strong>Java Swing application with a Python backend</strong> to consolidate student records and generate CEAB audit-ready tier and ranking groups.</>,
        <>Developed an <strong>academic planning tool</strong> that analyzed course history and prerequisites to identify eligible courses, gaps, retakes, and semester sequencing.</>,
        <>Delivered <strong>stakeholder-testable releases every two weeks</strong>, incorporating feedback through regular meetings and GitHub Projects.</>,
    ], tech: "Java · Python · GitHub · Application Development" },
]
const capabilities = [
    ["Software engineering", "Python · C++ · JavaScript · React · Next.js · Flask · REST APIs · HTML / CSS"],
    ["Cybersecurity & analysis", "Zeek · Wireshark · Packet analysis · OpenSSL · Security monitoring · Authentication troubleshooting"],
    ["Industrial / OT", "OPC UA · PROFINET · S7 · IEC 104 · PLCs · SCADA · Industrial networking"],
    ["Infrastructure & networking", "Linux · Windows · Docker · Proxmox · Nginx · Cisco · Fortinet · VLANs · Git"],
    ["Data & backend", "PostgreSQL · Supabase · Redis · API design · Event handling · Real-time communication"],
]
function SectionTitle({ number, label }) {
    return <header className={s.sectionHeader}><h2 className={s.sectionLabel}><span>{number}</span> / {label}</h2></header>
}
function SocialLinks() {
    return socials.map(link => <a className={s.textLink} key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)
}
export default function Resume() {
    const pageRef = useRef(null)
    useHomeGridPage(pageRef, { observeFades: false })
    return <main className={s.page} ref={pageRef}>
        <SeoHead title="Resume | Elliot Chin" description="Software development, cybersecurity, and industrial systems engineering. Experience at Siemens and the University of New Brunswick." path="/resume" />
        <a className={s.skipLink} href="#resume-content">Skip to content</a>
        <div id="resume-content" className={s.container}>
            <section className={s.hero} aria-labelledby="identity">
                <p className={s.eyebrow}>~/resume/elliot-chin</p>
                <h1 id="identity">Elliot Chin<span>.</span></h1>
                <p className={s.subtitle}>Software Developer &amp;<br />Cybersecurity Engineer</p>
                <p className={s.intro}>Software developer working across cybersecurity, industrial networking, full-stack applications, and infrastructure. I build tools and systems that help analyze, test, and secure complex networked environments.</p>
                <div className={s.actions}><a className={s.button} href={pdf} download>Download Resume <span aria-hidden="true">↓</span></a><SocialLinks /></div>
                <dl className={s.facts}>{[["Location", "Canada"], ["Focus", "OT Security"], ["Degree", "BSc Software Engineering"], ["Experience", "3+ Years"]].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
            </section>
            <section className={s.section} id="career">
                <SectionTitle number="01" label="Career" />
                <ol className={s.timeline}>{[
                    ["2022", "Software Developer", "UNB", "Full-stack tools for academic advising and accreditation."],
                    ["2023", "Software Developer", "Siemens", "Industrial labs, networking, and product compatibility testing."],
                    ["2023 — PRESENT", "Junior Cybersecurity Application Specialist", "Siemens", "Protocol analysis, Zeek plugins, and secure product tooling."],
                ].map(([year, title, org, detail]) => <li key={title}><span className={s.year}>{year}</span><div className={s.timelinePoint} /><h3>{title}</h3><p className={s.organization}>{org}</p><p>{detail}</p></li>)}</ol>
            </section>
            <section className={s.section} id="experience">
                <SectionTitle number="02" label="Experience" />
                {roles.map(role => <article className={s.role} key={role.company}><div className={s.roleMeta}><p className={s.eyebrow}>{role.date}</p><h3>{role.company}</h3><p>Canada</p></div><div className={s.roleContent}><h3>{role.title}</h3><p className={s.roleSummary}>{role.summary}</p><ul>{role.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}</ul><p className={s.stack}>{role.tech}</p></div></article>)}
            </section>
            <section className={s.section} id="work">
                <SectionTitle number="03" label="Projects" />
                {resumeSelectedProjects.map((project, index) => <article className={s.project} key={project.title}>
                    <div><p className={s.eyebrow}>PROJECT_0{index + 1} / {index === 0 ? "OT SECURITY" : "FULL-STACK DEVELOPMENT"}</p><h3>{index === 0 ? "Industrial Protocol Analysis & Zeek Plugin Development" : "Expense Recorder"}</h3><p>{index === 0 ? "Protocol-aware cybersecurity monitoring for industrial OPC UA environments. Research with PLCs and Wireshark informed a Zeek plugin that turns network traffic into useful security logs for SINEC Security Monitor." : "A personal finance application for recording expenses, tracking budgets, and reviewing spending. Built across a Next.js frontend, Flask API, and PostgreSQL database hosted with Supabase."}</p><p className={s.stack}>{index === 0 ? "Zeek · C++ · OPC UA · Wireshark · PLCs" : "Next.js · React · Flask · Python · PostgreSQL · Supabase"}</p><Link className={s.textLink} href={index === 0 ? "/projects/industrial-protocol-analysis" : "/projects/expense-recorder"}>View project <span aria-hidden="true">→</span></Link></div>
                    <Link className={s.projectVisual} href={index === 0 ? "/projects/industrial-protocol-analysis" : "/projects/expense-recorder"} aria-label={`View ${index === 0 ? "Industrial Protocol Analysis" : "Expense Recorder"} project`}><img src={project.image} alt={index === 0 ? "Industrial Protocol Analysis project illustration" : "Expense Recorder application dashboard"} loading="lazy" /></Link>
                </article>)}
            </section>
            <section className={s.section} id="capabilities">
                <SectionTitle number="04" label="Capabilities" />
                <div className={s.skills}>{capabilities.map(([title, items]) => <div key={title}><h3>{title}</h3><p>{items}</p></div>)}<div><h3>Languages</h3><p>English · Mandarin · Cantonese · Malay</p></div></div>
            </section>
            <div className={s.credentials}>
                <section className={s.section} id="certifications"><SectionTitle number="05" label="Certifications" /><p className={s.eyebrow}>GIAC / GSEC</p><h3>GIAC Security Essentials</h3><p>SANS SEC401 — Security Essentials</p></section>
                <section className={s.section} id="education"><SectionTitle number="06" label="Education" /><p className={s.eyebrow}>2023 / FREDERICTON, NB</p><h3>University of New Brunswick</h3><p>Bachelor of Science in Software Engineering</p><p className={s.accreditation}>CEAB accredited</p></section>
            </div>
            <section className={s.contact} id="contact"><p className={s.eyebrow}>WHAT’S NEXT</p><h2>Let’s build something useful<span>.</span></h2><p>Interested in software, cybersecurity, and the systems that connect them.</p><a className={s.textLink} href="mailto:contact@elliotc.dev">Get in touch <span aria-hidden="true">→</span></a><a className={s.email} href="mailto:contact@elliotc.dev">contact@elliotc.dev</a><div className={s.actions}><SocialLinks /><a className={s.textLink} href={pdf} download>Resume PDF <span aria-hidden="true">↓</span></a></div></section>
        </div>
        <footer className={s.footer}><div><span>© {new Date().getFullYear()} Elliot Chin</span><a href="#identity">Back to top ↑</a></div></footer>
        <BackToTopButton targetRef={pageRef} />
    </main>
}
