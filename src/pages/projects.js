import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import { useHomeGridPage } from "@/components/hooks/useHomeGridPage"
import { SeoHead } from "@/components/seo/SeoHead"
import { caseStudies } from "@/data/caseStudies"
import { ProjectFooter, TextLink } from "@/components/projects/case-study/CaseStudy"
import s from "@/styles/Projects.module.css"

export default function Projects() {
    const scrollRef = useRef(null)
    useHomeGridPage(scrollRef, { observeFades: false })
    return <>
        <SeoHead title="Engineering Projects | Elliot Chin" description="Case studies across industrial cybersecurity, software development, security integrations, and applied research." path="/projects" />
        <main className={s.page} ref={scrollRef}>
            <a className={s.skipLink} href="#project-list">Skip to projects</a>
            <div className={s.container}>
                <header className={s.indexHero}><p className={s.annotation}>~/projects</p><h1>Projects<span>.</span></h1><p>Systems, tools, and experiments across cybersecurity, industrial networks, and full-stack development.</p><span className={s.indexCount}>07 PROJECTS / SOFTWARE · SYSTEMS · SECURITY</span></header>
                <div id="project-list">{caseStudies.map((project, index) => <article className={`${s.indexEntry} ${index === 0 ? s.flagship : ""} ${index % 2 ? s.reversed : ""}`} key={project.slug}>
                    <div className={s.indexCopy}><p className={s.annotation}>{String(index+1).padStart(2,"0")} / {project.category}</p><h2><Link href={`/projects/${project.slug}`}>{project.title}</Link></h2><p>{project.summary}</p><p className={s.indexStack}>{project.stack.join(" · ")}</p>{project.signals && <ul className={s.signals}>{project.signals.map(signal => <li key={signal}>{signal}</li>)}</ul>}<TextLink href={`/projects/${project.slug}`}>View project</TextLink><span className={s.projectType}>{project.type}</span></div>
                    <Link href={`/projects/${project.slug}`} className={s.indexVisual} aria-label={`View ${project.shortTitle} project`}>
                        {<div className={s.indexImage}><Image src={project.cover} alt={`${project.shortTitle} preview`} fill sizes="(max-width: 700px) 94vw, 560px" priority={index===0} className={s.screenshot} /></div>}
                    </Link>
                </article>)}</div>
                <div className={s.indexContact}><p>Have a system worth building?</p><TextLink href="/contact">Get in touch</TextLink></div><ProjectFooter />
            </div><BackToTopButton targetRef={scrollRef} />
        </main>
    </>
}
