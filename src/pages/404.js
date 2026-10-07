import { useRef } from "react"
import { SeoHead } from "@/components/seo/SeoHead"
import { useHomeGridPage } from "@/components/hooks/useHomeGridPage"
import s from "@/styles/NotFound.module.css"

const routes = [
    ["Projects", "Explore the projects.", "/projects"],
    ["Resume", "Experience, skills, and background.", "/resume"],
    ["Contact", "Start a conversation.", "/contact"],
]

export default function Custom404() {
    const containerRef = useRef(null)
    useHomeGridPage(containerRef, { observeFades: false })
    return <>
        <SeoHead title="404 — Page Not Found | Elliot Chin" description="This page doesn't exist or may have moved. Return to Elliot Chin's portfolio, projects, resume, or contact page." path="/404" noindex />
        <main ref={containerRef} className={s.page}>
            <div className={s.container}>
                <section className={s.hero} aria-labelledby="error-heading">
                    <div className={s.copy}>
                        <p className={s.path}>~/404</p>
                        <h1 id="error-heading"><span className={s.number}>404</span><span className={s.heading}>Route not found<span className={s.dot}>.</span></span></h1>
                        <p className={s.intro}>The page you're looking for doesn't exist<br className={s.break} /> or may have moved.</p>
                        <div className={s.actions}><a href="/" className={s.button}>Return Home <span aria-hidden="true">→</span></a><a href="/projects" className={s.textLink}>View Projects <span aria-hidden="true">→</span></a></div>
                    </div>
                    <div className={s.diagram}>
                        <svg className={s.desktopDiagram} viewBox="0 0 420 350" role="img" aria-label="A router connects to Home, Projects, and Resume. A fourth route ends at a missing destination.">
                            <g className={s.lines}><path d="M60 40V90M60 138V290M60 170H300M60 220H300M60 270H300" /><path className={s.failed} d="M60 290V320H245" /></g>
                            <g className={s.nodes}><rect x="20" y="90" width="100" height="48" rx="6"/><circle cx="300" cy="170" r="4"/><circle cx="300" cy="220" r="4"/><circle cx="300" cy="270" r="4"/></g>
                            <g className={s.labels}><text x="60" y="25" textAnchor="middle">REQUEST</text><text x="70" y="119" textAnchor="middle">ROUTER</text><text x="320" y="174">HOME</text><text x="320" y="224">PROJECTS</text><text x="320" y="274">RESUME</text><text x="270" y="325" className={s.failed}>NOT_FOUND</text></g>
                            <path className={s.cross} d="M243 313L257 327M257 313L243 327"/>
                            <circle className={s.packet} cx="60" cy="150" r="4" />
                        </svg>
                        <svg className={s.mobileDiagram} viewBox="0 0 340 80" role="img" aria-label="A request reaches the router, then stops at a missing route."><path className={s.lines} d="M30 25H150"/><path className={s.failed} d="M150 25H295"/><circle className={s.nodes} cx="30" cy="25" r="4"/><circle className={s.nodes} cx="150" cy="25" r="4"/><path className={s.cross} d="M290 18L304 32M304 18L290 32"/><g className={s.labels}><text x="5" y="60">REQUEST</text><text x="125" y="60">ROUTER</text><text x="265" y="60" className={s.failed}>404</text></g></svg>
                        <p className={s.diagnostic}>STATUS::NOT_FOUND</p>
                    </div>
                </section>
                <nav className={s.recovery} aria-label="Recovery options"><p className={s.label}>Recovery options</p><div className={s.routes}>{routes.map(([title,description,href],index)=><a href={href} key={href}><span className={s.routeNumber}>0{index+1}</span><div><h2>{title}</h2><p>{description}</p></div><span className={s.arrow} aria-hidden="true">→</span></a>)}</div></nav>
                <footer className={s.footer}><span>STATUS::404 <span className={s.separator}>/</span> FALLBACK::/</span><span>© Elliot Chin</span></footer>
            </div>
        </main>
    </>
}
