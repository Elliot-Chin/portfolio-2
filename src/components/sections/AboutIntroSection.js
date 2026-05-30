import Link from "next/link"
import {
    ArrowOutward,
    ContactSupportOutlined,
    MemoryOutlined,
    TerminalOutlined,
} from "@mui/icons-material"

const cards = [
    {
        id: "01/03",
        title: "View Projects",
        body: "Exploring hardened architectures, OT protocol parsers, and custom security tooling.",
        cta: "Access_Repository",
        href: "/projects",
        Icon: TerminalOutlined,
        accent: "text-amber-200",
    },
    {
        id: "02/03",
        title: "Technical Skills",
        body: "Systematic mastery of C++, Python, Modbus/TCP, and secure cloud infrastructure.",
        cta: "Load_Capabilities",
        href: "/resume",
        Icon: MemoryOutlined,
        accent: "text-emerald-300",
    },
    {
        id: "03/03",
        title: "Contact",
        body: "Reach out for collaboration, security engineering work, or thoughtful technical conversations.",
        cta: "Open_Channel",
        href: "/contact",
        Icon: ContactSupportOutlined,
        accent: "text-amber-100",
    },
]

function CardLink({ href, children, className }) {
    const shared = `${className} group inline-flex items-center gap-2 font-spacemono text-[11px] font-bold uppercase tracking-[0.22em]`

    if (href.startsWith("/")) {
        return (
            <Link href={href} className={shared}>
                {children}
            </Link>
        )
    }

    return (
        <a href={href} className={shared}>
            {children}
        </a>
    )
}

export function AboutIntroSection() {
    return (
        <section
            data-fade
            className="relative min-h-[100svh] sm:min-h-screen snap-start overflow-hidden"
            style={{
                opacity: "var(--vis, 1)",
                transform: "translateY(calc((1 - var(--vis, 1)) * 6vh))",
            }}
        >
            <div className="mx-auto flex min-h-[100svh] w-full max-w-[96rem] items-center px-7 py-16 sm:px-10 lg:px-14">
                <div className="grid w-full gap-5 lg:grid-cols-3">
                    {cards.map(({ id, title, body, cta, href, Icon, accent }) => (
                        <article
                            key={id}
                            className="relative overflow-hidden border border-slate-200/8 bg-slate-950/34 px-7 py-7 shadow-[0_10px_40px_rgba(2,8,23,0.22)] backdrop-blur-[2px] transition hover:border-amber-200/16 hover:bg-slate-950/42"
                        >
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.015),rgba(255,255,255,0))]" />
                            <div className="relative z-10">
                                <div className="flex items-start justify-between">
                                    <Icon className={`${accent}`} sx={{ fontSize: "4rem" }} />
                                    <span className="font-spacemono text-[11px] uppercase tracking-[0.22em] text-slate-400/60">
                                        {id}
                                    </span>
                                </div>

                                <h3 className="mt-14 font-montserrat text-[2rem] font-semibold tracking-tight text-slate-50">
                                    {title}
                                </h3>

                                <p className="mt-5 max-w-[24rem] font-montserrat text-[1.06rem] leading-relaxed text-slate-200/82">
                                    {body}
                                </p>

                                <div className="mt-10">
                                    <CardLink
                                        href={href}
                                        className={title === "Technical Skills" ? "text-emerald-300" : "text-amber-200"}
                                    >
                                        <span>{cta}</span>
                                        <ArrowOutward className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fontSize="inherit" />
                                    </CardLink>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
