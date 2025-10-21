// pages/resume.js
import Head from "next/head"
import Navbar from "@/components/nav/Navbar"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import { Loader } from "@/components/nav/Loader"
import { Button, Chip, Tooltip, Badge } from "@nextui-org/react"
import {
    DownloadOutlined,
    Email,
    GitHub,
    LinkedIn,
    PublicOutlined,
    CalendarMonth,
    PlaceOutlined,
    WorkOutline,
    FolderCopyOutlined,
    BoltOutlined,
    SchoolOutlined,
} from "@mui/icons-material"
import { useEffect, useMemo, useState } from "react"

import {
    email as emailStr,
    degree,
    university,
    name,
    githubName,
    portfolioStrLink,
    resumeDownloadFileName,
} from "../../public/data/Etc"
import {
    emailLink,
    githubLink,
    linkedInLink,
    portfolioLink,
    resumeLink,
} from "../../public/data/Links"
import { jobs, projects, skills } from "../../public/data/Resume"
import { eChin } from "../../public/data/People"
import { useRouter } from "next/router"

// ------- helpers to parse start date from job.duration -------
const MONTHS = {
    january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
    july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
}
function parseStartFromDuration(dur = "") {
    const s = String(dur).toLowerCase()

    // find first 4-digit year
    const yMatch = s.match(/\b(19|20)\d{2}\b/)
    if (!yMatch) return null
    const year = parseInt(yMatch[0], 10)

    // try to find a month name near the year
    let month = 0
    for (const [mName, idx] of Object.entries(MONTHS)) {
        if (s.includes(mName)) { month = idx; break }
    }
    return new Date(year, month, 1)
}
function yearsBetween(startDate, endDate = new Date()) {
    if (!startDate) return 0
    const ms = endDate.getTime() - startDate.getTime()
    const years = ms / (1000 * 60 * 60 * 24 * 365.25)
    // show one decimal if under 5 years; otherwise round
    return years < 5 ? Number(years.toFixed(1)) : Math.round(years)
}

export default function Resume() {
    const [loading, setLoading] = useState({ state: false, name: "" })
    const router = useRouter()
    useEffect(() => {
        document.body.classList.add("wave-bg")
        return () => document.body.classList.remove("wave-bg")
    }, [])

    // ---------- stats (now includes computed yearsExp) ----------
    const stats = useMemo(() => {
        const projectCount = projects?.length || 0

        // earliest job start across your jobs list
        const starts = (jobs || [])
            .map(j => parseStartFromDuration(j?.duration))
            .filter(Boolean)
        const earliest = starts.length ? new Date(Math.min(...starts.map(d => d.getTime()))) : null
        const yearsExp = yearsBetween(earliest)

        // top skill categories (unchanged)
        const topCats = (skills || []).slice(0, 3).map(s => s.category)

        return {
            projectCount,
            yearsExp,                        // <— new
            yearsExpDisplay: yearsExp ? `${yearsExp}` : "0",
            topCats,
        }
    }, [])

    const handleOpen = (url) => window.open(url, "_blank", "noopener,noreferrer")
    const handleDownload = () => {
        const link = document.createElement("a")
        link.href = resumeLink
        link.download = resumeDownloadFileName
        link.click()
    }

    return (
        <main className="min-h-screen relative text-neutral-900 pb-10">
            <Head>
                <title>{name} — Resume</title>
                <meta name="description" content="Resume overview of Elliot Chin" />
            </Head>

            {/* translucent wavy orange gradient background */}
            <Navbar />

            {/* header */}
            <header
                id="summary"
                className="mx-auto w-full mt-16 px-3 md:w-11/12 xl:w-4/5 2xl:w-3/4"
            >
                <div className="rounded-2xl p-5 md:p-7 shadow-lg border border-amber-100/20">
                    <div className="flex flex-col gap-5 md:flex-row md:justify-between">
                        {/* intro */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-amber-900">
                                {name}
                            </h1>
                            <p className="mt-3 text-white leading-relaxed max-w-2xl font-montserrat">
                                I build products that balance <b>clarity and depth</b> — from
                                interactive systems to clean dashboards. I enjoy working across
                                the stack where UI/UX meets reliability.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <Tag icon={<BoltOutlined fontSize="small" />} text="Full Stack Developer" />
                                <Tag icon={<BoltOutlined fontSize="small" />} text="Next.js + Flask" />
                                <Tag icon={<BoltOutlined fontSize="small" />} text="Postgres/Redis" />
                            </div>
                        </div>

                        {/* contacts & stats */}
                        <div className="w-full md:w-auto">
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <IconLink icon={<Email />} text={emailStr} onClick={() => handleOpen(emailLink)} />
                                <IconLink icon={<LinkedIn />} text="LinkedIn" onClick={() => handleOpen(linkedInLink || eChin?.linkedin)} />
                                <IconLink icon={<GitHub />} text={githubName} onClick={() => handleOpen(githubLink)} />
                                <IconLink icon={<PublicOutlined />} text={portfolioStrLink} onClick={() => handleOpen(portfolioLink)} />
                            </div>

                            {/* UPDATED stats row */}
                            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                                <Stat label="Years Work Experience" value={stats.yearsExpDisplay} size="3rem" />
                                <Stat label="Favourite Languages" value="JS · Python" size='1.7rem' />
                                <Stat label="Core Stack" value="Next.js · Flask" size='1.5rem' />
                            </div>

                        </div>
                    </div>
                </div>
            </header>

            {/* section: experience */}
            <Section id="experience" title="Experience" icon={<WorkOutline />}>
                <div className="relative ">
                    <div className="absolute left-[10px] top-0 h-full w-[2px] bg-gradient-to-b from-amber-400/70 via-amber-300/40 to-transparent" />
                    <div className="space-y-5">
                        {jobs?.map((job, i) => (
                            <article
                                key={i}
                                className="relative ml-8 rounded-xl border border-amber-100/20  p-4 shadow-sm hover:shadow-md transition"
                                style={{ animation: `fadein 500ms ease ${i * 60}ms both` }}
                            >
                                <div className="flex flex-wrap justify-between gap-3">
                                    <h3 className="font-semibold text-lg md:text-xl text-white">
                                        {job.title}
                                    </h3>
                                    {job.duration && (
                                        <span className="inline-flex items-center gap-1 text-white font-semibold">
                                            <CalendarMonth fontSize="small" />
                                            {job.duration}
                                        </span>
                                    )}
                                </div>
                                {job.location && (
                                    <div className="mt-1 inline-flex items-center gap-1 text-white/70">
                                        <PlaceOutlined fontSize="small" /> {job.location}
                                    </div>
                                )}
                                {job.description && (
                                    <div
                                        className="prose prose-sm mt-3 text-white font-montserrat"
                                        dangerouslySetInnerHTML={{ __html: job.description }}
                                    />
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Skills */}
            <Section id="skills" title="Skills" icon={<BoltOutlined />}>
                <div className="relative">
                    <div className="absolute left-[10px] top-0 h-full w-[2px] bg-gradient-to-b from-amber-400/70 via-amber-300/40 to-transparent" />
                    <div className="space-y-5 ml-8">
                        {skills?.map((grp, i) => (
                            <div
                                key={i}
                                className="relative rounded-xl border border-amber-100/20 p-4 shadow-sm hover:shadow-md transition"
                                style={{ animation: `fadein 500ms ease ${i * 50}ms both` }}
                            >
                                <div className="flex items-center gap-2 text-white text-xl font-semibold">
                                    {grp.icon} {grp.category}
                                </div>
                                <div className="mt-3 flex flex-wrap gap-2 ">
                                    {grp.skills.map((s, k) => (
                                        <Chip key={k} color="warning" variant="flat" className="!text-white/80 font-montserrat">
                                            {s}
                                        </Chip>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Projects */}
            <Section id="projects" title="Projects" icon={<FolderCopyOutlined />}>
                <div className="relative">
                    <div className="absolute left-[10px] top-0 h-full w-[2px] bg-gradient-to-b from-amber-400/70 via-amber-300/40 to-transparent" />
                    <div className="space-y-5 ml-8 ">
                        {projects?.map((p, i) => (
                            <div
                                key={i}
                                className="relative rounded-xl border border-amber-100/20 p-4 shadow-sm hover:shadow-md transition"
                                style={{ animation: `fadein 500ms ease ${i * 50}ms both` }}
                            >
                                <div className="flex items-center gap-2 text-2xl text-white font-semibold">
                                    <FolderCopyOutlined /> {p.title}
                                </div>
                                <p
                                    className="mt-2 text-white font-montserrat"
                                    dangerouslySetInnerHTML={{ __html: p.summary }}
                                />
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {p.tech?.map((t, k) => (
                                        <Chip key={k} size="sm" color="warning" variant="flat" className="text-white">
                                            {t}
                                        </Chip>
                                    ))}
                                </div>
                                <Button variant="flat" color="warning" className="!text-white" onPress={() => { router.push(p.link), setLoading(true) }}>
                                    See More
                                </Button>
                            </div>
                        ))}
                    </div>

                </div>
            </Section>

            {/* Education */}
            <Section id="education" title="Education" icon={<SchoolOutlined />}>
                <div className="relative">
                    <div className="absolute left-[10px] top-0 h-full w-[2px] bg-gradient-to-b from-amber-400/70 via-amber-300/40 to-transparent" />
                    <div className="ml-8 relative rounded-xl border border-amber-100/20 p-4 shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-2 text-white text-2xl font-semibold">
                            <SchoolOutlined fontSize="large" /> {university}
                        </div>
                        <p className="mt-2 text-white">{degree}</p>
                    </div>
                </div>
            </Section>

            <BackToTopButton />
            {loading.state && <Loader pageName={loading.name} />}

            <style jsx global>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </main>
    )
}

/* helpers */
function Section({ id, title, icon, children }) {
    return (
        <section id={id} className="mx-auto mt-10 w-full px-3 md:w-11/12 xl:w-4/5 2xl:w-3/4">
            <div className="mb-4 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg border border-amber-400/40 bg-amber-200/60 text-amber-800">
                    {icon}
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-amber-900">{title}</h2>
            </div>
            {children}
        </section>
    )
}

function IconLink({ icon, text, onClick }) {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-100/50 px-3 py-2 text-left hover:bg-amber-200/70 transition"
        >
            <span className="text-amber-800">{icon}</span>
            <span className="font-semibold text-amber-900">{text}</span>
        </button>
    )
}

function Tag({ icon, text }) {
    return (
        <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-200/50 px-2 py-0.5 text-xs font-semibold text-amber-900">
            {icon}
            {text}
        </span>
    )
}

function Stat({ label, value, size }) {
    return (
        <div className="rounded-xl border border-amber-100 flex flex-col justify-between bg-white/80 p-3">
            <div
                className="text-amber-900 font-extrabold md:text-2xl"
                style={size ? { fontSize: size } : {}}
            >
                {value}
            </div>
            <div className="text-xs text-amber-800/80">{label}</div>
        </div>
    );
}
