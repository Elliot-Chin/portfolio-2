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

const floatingSignals = [
    "Engineer @ Siemens",
    "OT Security",
    "Full-Stack Systems",
    "Protocol Analysis",
    "Network Hardening",
    "Detection Tooling",
    "Cybersecurity",
    "Industrial Networking",
]

const floatingSkills = [
    { name: "Python", src: "https://cdn.simpleicons.org/python" },
    { name: "Pandas", src: "https://cdn.simpleicons.org/pandas" },
    { name: "Flask", src: "https://cdn.simpleicons.org/flask/ffffff" },
    { name: "JavaScript", src: "https://cdn.simpleicons.org/javascript" },
    { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
    { name: "React", src: "https://cdn.simpleicons.org/react" },
    { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Postgres", src: "https://cdn.simpleicons.org/postgresql" },
    { name: "MySQL", src: "https://cdn.simpleicons.org/mysql" },
    { name: "Redis", src: "https://cdn.simpleicons.org/redis" },
    { name: "Tailwind", src: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "Material UI", src: "https://cdn.simpleicons.org/mui" },
    { name: "Docker", src: "https://cdn.simpleicons.org/docker" },
    { name: "Linux", src: "https://cdn.simpleicons.org/linux" },
    { name: "Ubuntu", src: "https://cdn.simpleicons.org/ubuntu" },
    { name: "Windows", src: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/windows11.svg" },
    { name: "Git", src: "https://cdn.simpleicons.org/git" },
    { name: "GitHub", src: "https://cdn.simpleicons.org/github/ffffff" },
    { name: "Vercel", src: "https://cdn.simpleicons.org/vercel/ffffff" },
    { name: "Nginx", src: "https://cdn.simpleicons.org/nginx" },
    { name: "C++", src: "https://cdn.simpleicons.org/cplusplus" },
    { name: "Azure", src: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg" },
    { name: "Wireshark", src: "https://cdn.simpleicons.org/wireshark" },
    { name: "Cisco", src: "https://cdn.simpleicons.org/cisco" },
    { name: "OpenAI", src: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" },
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

function MarqueeSignals() {
    return (
        <div className="relative overflow-hidden [--fade:10%] md:[mask-image:linear-gradient(to_right,transparent_0,black_var(--fade),black_calc(100%-var(--fade)),transparent_100%)] md:[-webkit-mask-image:linear-gradient(to_right,transparent_0,black_var(--fade),black_calc(100%-var(--fade)),transparent_100%)]">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#081628] to-transparent md:hidden" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#081628] to-transparent md:hidden" />
            <div className="animate-slide-left flex min-w-max gap-3 whitespace-nowrap will-change-transform">
                {[...floatingSignals, ...floatingSignals].map((item, index) => (
                    <span
                        key={`${item}-${index}`}
                        className="inline-flex border border-amber-200/10 bg-slate-950 px-4 py-2 font-spacemono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200 shadow-[0_8px_22px_rgba(2,8,23,0.22)]"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}

function MarqueeSkills() {
    return (
        <div className="relative overflow-hidden [--fade:10%] md:[mask-image:linear-gradient(to_right,transparent_0,black_var(--fade),black_calc(100%-var(--fade)),transparent_100%)] md:[-webkit-mask-image:linear-gradient(to_right,transparent_0,black_var(--fade),black_calc(100%-var(--fade)),transparent_100%)]">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#081628] to-transparent md:hidden" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#081628] to-transparent md:hidden" />
            <div className="animate-slide-left-skills flex min-w-max gap-3 whitespace-nowrap will-change-transform">
                {[...floatingSkills, ...floatingSkills].map(({ name, src }, index) => (
                    <div
                        key={`${name}-${index}`}
                        className="inline-flex items-center gap-2 border border-slate-200/10 bg-[#0b1626] px-4 py-2 font-montserrat text-sm font-semibold text-amber-50 shadow-[0_8px_22px_rgba(2,8,23,0.24)]"
                    >
                        <img
                            src={src}
                            alt={name}
                            width="18"
                            height="18"
                            className="h-[18px] w-[18px] object-contain"
                        />
                        <span className="tracking-[0.01em]">{name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function AboutIntroSection() {
    return (
        <section
            data-fade
            className="relative min-h-[100dvh] snap-start overflow-hidden translate-y-4 opacity-0 transition duration-700 ease-out lg:h-[100dvh] lg:min-h-[100dvh]"
        >
            <div className="mx-auto flex min-h-[100dvh] w-full max-w-[96rem] items-center px-6 py-12 sm:px-10 md:px-12 md:py-10 lg:min-h-[calc(100dvh-3.5rem)] lg:px-12 lg:py-8 xl:px-14 xl:py-10">
                <div className="w-full">
                    <div className="w-full md:hidden">
                        <div className="mb-4 flex items-center justify-between font-spacemono text-[10px] uppercase tracking-[0.2em] text-slate-400/70">
                            <span>System Modules</span>
                            <span>Swipe to browse</span>
                        </div>

                        <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:-mx-10 sm:px-10">
                            {cards.map(({ id, title, body, cta, href, Icon, accent }) => (
                                <article
                                    key={id}
                                    className="relative min-h-[24rem] w-[85vw] max-w-[24rem] shrink-0 snap-center overflow-hidden border border-slate-200/8 bg-slate-950/34 px-5 py-5 shadow-[0_10px_40px_rgba(2,8,23,0.22)] backdrop-blur-[2px] transition hover:border-amber-200/16 hover:bg-slate-950/42"
                                >
                                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.015),rgba(255,255,255,0))]" />
                                    <div className="relative z-10 flex h-full flex-col">
                                        <div className="flex items-start justify-between">
                                            <Icon className={`${accent} text-[3rem]`} />
                                            <span className="font-spacemono text-[11px] uppercase tracking-[0.22em] text-slate-400/60">
                                                {id}
                                            </span>
                                        </div>

                                        <h3 className="mt-8 font-montserrat text-[1.65rem] font-semibold tracking-tight text-slate-50">
                                            {title}
                                        </h3>

                                        <p className="mt-4 max-w-[24rem] flex-1 font-montserrat text-[0.98rem] leading-relaxed text-slate-200/82">
                                            {body}
                                        </p>

                                        <div className="mt-6">
                                            <CardLink
                                                href={href}
                                                className={title === "Technical Skills" ? "text-emerald-300" : "text-amber-200"}
                                            >
                                                <span>{cta}</span>
                                                <ArrowOutward
                                                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                                    fontSize="inherit"
                                                />
                                            </CardLink>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="hidden w-full items-stretch gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:gap-6">
                        {cards.map(({ id, title, body, cta, href, Icon, accent }) => (
                            <article
                                key={id}
                                className="relative h-full overflow-hidden border border-slate-200/8 bg-slate-950/34 px-5 py-5 shadow-[0_10px_40px_rgba(2,8,23,0.22)] backdrop-blur-[2px] transition hover:border-amber-200/16 hover:bg-slate-950/42 lg:px-5 lg:py-5 xl:px-7 xl:py-7"
                            >
                                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.015),rgba(255,255,255,0))]" />
                                <div className="relative z-10 flex h-full flex-col">
                                    <div className="flex items-start justify-between">
                                        <Icon className={`${accent} text-[3rem] lg:text-[2.75rem] xl:text-[4rem]`} />
                                        <span className="font-spacemono text-[11px] uppercase tracking-[0.22em] text-slate-400/60">
                                            {id}
                                        </span>
                                    </div>

                                    <h3 className="mt-8 font-montserrat text-[1.65rem] font-semibold tracking-tight text-slate-50 lg:mt-8 lg:text-[1.55rem] xl:mt-14 xl:text-[2rem]">
                                        {title}
                                    </h3>

                                    <p className="mt-4 max-w-[24rem] flex-1 font-montserrat text-[0.98rem] leading-relaxed text-slate-200/82 lg:text-[0.95rem] lg:leading-[1.65] xl:mt-5 xl:text-[1.06rem]">
                                        {body}
                                    </p>

                                    <div className="mt-6 xl:mt-10">
                                        <CardLink
                                            href={href}
                                            className={title === "Technical Skills" ? "text-emerald-300" : "text-amber-200"}
                                        >
                                            <span>{cta}</span>
                                            <ArrowOutward
                                                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                                fontSize="inherit"
                                            />
                                        </CardLink>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-6 w-full space-y-4 md:mt-8">
                        <MarqueeSignals />
                        <MarqueeSkills />
                    </div>
                </div>
            </div>
        </section>
    )
}
