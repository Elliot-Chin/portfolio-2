import Link from "next/link"
import { useRef } from "react"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import { useHomeGridPage } from "@/components/hooks/useHomeGridPage"
import { SeoHead } from "@/components/seo/SeoHead"
import { caseStudies } from "@/data/caseStudies"
import { ScreenshotGallery, SystemFlow } from "./ProjectVisuals"
import s from "@/styles/Projects.module.css"

export function ProjectFooter() {
    return <footer className={s.footer}><span>© {new Date().getFullYear()} Elliot Chin</span><Link href="/contact">Get in touch <span aria-hidden="true">↗</span></Link></footer>
}
export function TextLink({ href, children, external = false }) {
    return external ? <a className={s.textLink} href={href} target="_blank" rel="noreferrer">{children}<span aria-hidden="true">↗</span></a> : <Link className={s.textLink} href={href}>{children}<span aria-hidden="true">→</span></Link>
}
function DetailList({ items, label }) {
    return <div className={s.detailList}>{label && <p className={s.annotation}>{label}</p>}{items.map(([title, text]) => <div className={s.detail} key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
}
export default function CaseStudy({ project }) {
    const scrollRef = useRef(null)
    useHomeGridPage(scrollRef, { observeFades: false })
    const index = caseStudies.findIndex(item => item.slug === project.slug)
    const next = caseStudies[(index + 1) % caseStudies.length]
    return <>
        <SeoHead title={`${project.title} | Elliot Chin`} description={project.summary} path={`/projects/${project.slug}`} image={project.image ? `https://elliotc.dev${project.image}` : undefined} />
        <main className={s.page} ref={scrollRef}>
            <a className={s.skipLink} href="#project-overview">Skip to project</a>
            <div className={s.container}>
                <header className={s.hero}>
                    <Link href="/projects" className={s.backLink}>← Projects</Link>
                    <p className={s.annotation}>PROJECT_{String(index + 1).padStart(2, "0")} / {project.category}</p>
                    <h1>{project.title}</h1><p className={s.tagline}>{project.tagline}</p>
                    <dl className={s.metadata}>{[["Role",project.role], ["Domain", project.domain], ["Timeline", project.timeline], ["Type",project.type]].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
                    <p className={s.stack}><span>STACK</span>{project.stack.join(" · ")}</p>
                </header>
                <nav aria-label="Project sections" className={s.contents}><span className={s.annotation}>On this page</span>{project.sections.map((section, i) => <a key={section.id} href={`#${section.id === "overview" ? "project-overview" : section.id}`}><span>{String(i+1).padStart(2,"0")}</span>{section.title}</a>)}</nav>
                {project.sections.map((section, i) => <section key={section.id} id={section.id === "overview" ? "project-overview" : section.id} className={s.section}>
                    <header className={s.sectionHead}><span className={s.sectionNumber}>{String(i+1).padStart(2,"0")}</span><h2>{section.title}</h2></header>
                    <div className={s.sectionBody}>
                        {section.text && <p className={s.reading}>{section.text}</p>}
                        {i === 0 && <div className={s.contribution}><p className={s.annotation}>My contribution</p><p>{project.contribution}</p></div>}
                        {section.flow && <SystemFlow nodes={section.flow} />}
                        {section.details && <DetailList items={section.details} />}
                        {section.decisions && <DetailList items={section.decisions} label="Technical decisions" />}
                        {section.gallery && <ScreenshotGallery items={section.gallery} />}
                        {section.galleryGroups && section.galleryGroups.map(group => <div className={s.galleryGroup} key={group.title}><h3>{group.title}</h3><ScreenshotGallery items={group.items} /></div>)}
                        {section.challenges && <div className={s.challenges}>{section.challenges.map((item, n) => <article className={s.challenge} key={item.title}><div><span className={s.annotation}>{String(n+1).padStart(2,"0")}</span><h3>{item.title}</h3></div><dl>{[["Problem",item.problem], ["Approach",item.approach], ["Result",item.result]].map(([label,text]) => <div key={label}><dt>{label}</dt><dd>{text}</dd></div>)}</dl></article>)}</div>}
                        {section.bullets && <ul className={s.lessonList}>{section.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}
                    </div>
                </section>)}
                {project.links && <div className={s.references}><span className={s.annotation}>Explore further</span>{project.links.map(link => <TextLink key={link.href} href={link.href} external>{link.label}</TextLink>)}</div>}
                <aside className={s.nextProject}><p className={s.annotation}>Next project / {next.category}</p><Link href={`/projects/${next.slug}`}><h2>{next.shortTitle}</h2><span aria-hidden="true">→</span></Link><p>{next.summary}</p></aside>
                <ProjectFooter />
            </div>
            <BackToTopButton targetRef={scrollRef} />
        </main>
    </>
}
