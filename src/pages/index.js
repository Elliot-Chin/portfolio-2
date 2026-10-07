import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { HomeModel } from "@/components/avatar/HomeModel"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import { useHomeGridPage } from "@/components/hooks/useHomeGridPage"
import { SeoHead } from "@/components/seo/SeoHead"
import { caseStudies } from "@/data/caseStudies"
import { resumeContactLinks } from "@/data/resume"
import s from "@/styles/Home.module.css"

const selectedProjects = ["industrial-protocol-analysis", "expense-recorder", "trip-scheduler"].map(slug => caseStudies.find(project => project.slug === slug))
const socials = resumeContactLinks.filter(link => ["GitHub", "LinkedIn"].includes(link.label))
const capabilities = [
    ["Software engineering", "Building full-stack applications, backend services, internal tools, and automation.", "Python · C++ · JavaScript · Next.js · React · Flask · REST APIs"],
    ["Cybersecurity", "Understanding network behavior and turning low-level activity into useful security visibility.", "Zeek · Wireshark · Packet analysis · Security monitoring · OpenSSL"],
    ["Industrial / OT", "Working with industrial protocols, devices, and the networks that connect them.", "OPC UA · PROFINET · PLCs · SCADA · Industrial networking"],
    ["Infrastructure", "Building and troubleshooting the environments that software and security systems run on.", "Linux · Docker · Proxmox · Cisco · Fortinet · VLANs"],
]
function ArrowLink({ href, children }) {
    return <Link className={s.textLink} href={href}>{children}<span aria-hidden="true">→</span></Link>
}
function SocialLinks() {
    return socials.map(link => <a key={link.label} className={s.textLink} href={link.href} target="_blank" rel="noreferrer">{link.label}<span aria-hidden="true">↗</span></a>)
}
function SectionHeading({ number, title, id }) {
    return <h2 id={id} className={s.sectionHeading}><span>{number} /</span>{title}</h2>
}
function ProjectPreview({ project, flagship = false }) {
    return <article className={`${s.project} ${flagship ? s.flagship : ""}`}>
        <div className={s.projectCopy}><p className={s.annotation}>{project.category}</p><h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3><p>{project.summary}</p><p className={s.stack}>{project.stack.slice(0,5).join(" · ")}</p><ArrowLink href={`/projects/${project.slug}`}>View project</ArrowLink></div>
        <Link className={s.projectImage} href={`/projects/${project.slug}`} aria-label={`View ${project.shortTitle} project`}><Image src={project.cover} alt={`${project.shortTitle} project artwork`} fill sizes={flagship ? "(max-width: 700px) 94vw, 550px" : "(max-width: 700px) 94vw, 560px"} className={s.cover} /></Link>
    </article>
}
export default function Home() {
    const containerRef = useRef(null)
    useHomeGridPage(containerRef, { observeFades: false })
    return <main className={s.page} ref={containerRef}>
        <SeoHead title="Elliot Chin — Software Developer & Cybersecurity Engineer" description="Software developer and cybersecurity engineer working across industrial systems, networking, infrastructure, and full-stack software." path="/" />
        <a className={s.skipLink} href="#selected-work">Skip to selected projects</a>
        <div className={s.container}>
            <section className={s.hero} aria-labelledby="name">
                <div className={s.heroCopy}><p className={s.annotation}>~/elliot-chin</p><h1 id="name">Elliot Chin<span>.</span></h1><p className={s.identity}>Software Developer &amp;<br />Cybersecurity Engineer</p><p className={s.description}>Building software, security tooling, and infrastructure for complex networked environments—from web applications to industrial protocols and OT systems.</p><div className={s.actions}><Link className={s.primaryButton} href="/projects">View Projects <span aria-hidden="true">→</span></Link><ArrowLink href="/resume">Resume</ArrowLink></div><div className={s.socials}><SocialLinks /></div></div>
                <HomeModel />
                <dl className={s.facts}>{[["Current","At Siemens"],["Focus","OT security"],["Domain","Software + security"],["Location","Canada"]].map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
            </section>
            <section className={s.section} id="selected-work" aria-labelledby="work-heading"><SectionHeading number="01" title="Selected projects" id="work-heading" /><ProjectPreview project={selectedProjects[0]} flagship /><div className={s.secondaryProjects}>{selectedProjects.slice(1).map(project => <ProjectPreview key={project.slug} project={project} />)}</div><div className={s.allProjects}><ArrowLink href="/projects">View all projects</ArrowLink></div></section>
            <section className={`${s.section} ${s.focus}`} aria-labelledby="focus-heading"><SectionHeading number="02" title="Current focus" id="focus-heading" /><div className={s.focusContent}><h3>Engineering at Siemens</h3><p>Working across industrial cybersecurity, network visibility, software systems, and OT infrastructure.</p><ul>{["OT security","Protocol analysis","Industrial networking","Software systems"].map(item=><li key={item}>{item}</li>)}</ul></div></section>
            <section className={s.section} aria-labelledby="capabilities-heading"><SectionHeading number="03" title="What I work on" id="capabilities-heading" /><div className={s.capabilities}>{capabilities.map(([title, description, tech]) => <article key={title}><h3>{title}</h3><p>{description}</p><p className={s.stack}>{tech}</p></article>)}</div></section>
            <section className={`${s.section} ${s.about}`} aria-labelledby="about-heading"><SectionHeading number="04" title="About" id="about-heading" /><div><h3>From application layer<br />to packet level<span>.</span></h3><p>My work often sits between layers: user interfaces and backend services, the infrastructure beneath them, and the network traffic connecting industrial systems.</p><p>I like understanding how those pieces fit together—and building tools that make them easier to analyze, test, and secure.</p><ArrowLink href="/resume">View resume</ArrowLink></div></section>
            <section className={`${s.section} ${s.contact}`} aria-labelledby="contact-heading"><SectionHeading number="05" title="Contact" id="contact-heading" /><h3>Have something interesting<br />to build or secure<span>?</span></h3><div className={s.actions}><ArrowLink href="/contact">Let’s talk</ArrowLink><a className={s.email} href="mailto:contact@elliotc.dev">contact@elliotc.dev</a></div><div className={s.socials}><SocialLinks /></div></section>
            <footer className={s.footer}><span>© {new Date().getFullYear()} Elliot Chin</span><Link href="/projects">Explore projects →</Link></footer>
        </div><BackToTopButton targetRef={containerRef} />
    </main>
}
