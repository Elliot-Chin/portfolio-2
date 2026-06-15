export function ProjectOverviewCard({ title, body, Icon, active = false }) {
    return (
        <article
            className={`project-overview-card w-[85vw] max-w-[24rem] shrink-0 snap-center border border-slate-200/10 bg-slate-950/38 p-4 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px] lg:w-auto lg:max-w-none lg:shrink lg:snap-none lg:p-5${active ? " is-active" : ""}`}
        >
            <span className="project-overview-trace" aria-hidden="true">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <rect
                        className="project-overview-trace__path"
                        x="0.75"
                        y="0.75"
                        width="98.5"
                        height="98.5"
                        rx="0"
                        ry="0"
                        pathLength="100"
                    />
                    <rect
                        className="project-overview-trace__path project-overview-trace__path--alt"
                        x="0.75"
                        y="0.75"
                        width="98.5"
                        height="98.5"
                        rx="0"
                        ry="0"
                        pathLength="100"
                    />
                </svg>
            </span>
            <Icon className="text-amber-300" sx={{ fontSize: 24 }} />
            <h2 className="mt-4 font-montserrat text-[1.2rem] font-semibold tracking-tight text-slate-100 lg:text-[1.45rem]">
                {title}
            </h2>
            <p className="mt-3 font-montserrat text-[0.96rem] leading-relaxed text-slate-300/88 lg:text-[1rem]">
                {body}
            </p>
        </article>
    )
}
