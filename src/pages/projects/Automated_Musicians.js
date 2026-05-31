import Head from "next/head"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { ReactTyped } from "react-typed"
import {
    FolderCopyOutlined,
    GraphicEqOutlined,
    LibraryMusicOutlined,
    OpenInNewOutlined,
    PsychologyOutlined,
} from "@mui/icons-material"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import { ProjectImage } from "@/components/projects/ProjectImage"

import { am } from "../../../public/data/Projects"

const researchCards = [
    {
        title: "Music Algorithms",
        body: am.musicAlgorithmsDesc,
        Icon: GraphicEqOutlined,
    },
    {
        title: "Pattern Recognition",
        body: am.patternExtractionDesc,
        Icon: PsychologyOutlined,
    },
    {
        title: "Composition Generator",
        body: am.compositionGenDesc,
        Icon: LibraryMusicOutlined,
    },
]

const algorithmShots = [am.hStepImg, am.iScaleImg, am.aScaleImg]
const patternShots = [am.sheetMusicImg, am.abcFormatImg]
const generatorShots = [am.pseudocodeImg]

const externalLinks = [
    am.ytLink ? { label: "YouTube_Demo", href: am.ytLink } : null,
    am.ghLink ? { label: "GitHub_Repo", href: am.ghLink } : null,
    am.cbcLink ? { label: "CBC_Feature", href: am.cbcLink } : null,
].filter(Boolean)

const heroSignals = [
    "Music theory rules were encoded first so later pattern extraction had a structured base to operate on.",
    "Pattern recognition stages focused on identifying recurring note relationships that could be reused compositionally.",
    "The generation pipeline explored how algorithmic structure could produce coherent musical output instead of random sequences.",
]

function ImageStrip({ items, columnsClass = "" }) {
    return (
        <div className={`grid gap-4 ${columnsClass || (items.length > 1 ? "lg:grid-cols-2" : "")}`}>
            {items.map((item) => (
                <div key={item.alt} className="overflow-hidden border border-slate-200/10 bg-[#07101f] px-3 py-2">
                    <ProjectImage
                        src={item.src}
                        alt={item.alt}
                        description={item.description}
                        lg_size="w-full"
                        maxH="max-h-[44vh]"
                    />
                </div>
            ))}
        </div>
    )
}

export default function AutomatedMusiciansPage() {
    const containerRef = useRef(null)

    useEffect(() => {
        document.body.classList.add("home-grid-bg")
        return () => document.body.classList.remove("home-grid-bg")
    }, [])

    useEffect(() => {
        const root = containerRef.current
        if (!root) return

        const nodes = Array.from(root.querySelectorAll("[data-fade]"))
        if (!nodes.length) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return
                    entry.target.classList.add("!translate-y-0", "!opacity-100")
                    observer.unobserve(entry.target)
                })
            },
            {
                root,
                threshold: 0.14,
                rootMargin: "0px 0px -8% 0px",
            }
        )

        nodes.forEach((node) => observer.observe(node))

        return () => observer.disconnect()
    }, [])

    return (
        <>
            <Head>
                <title>EC - Automated Musicians</title>
                <meta name="description" content="Elliot Chin - Automated Musicians project" />
            </Head>

            <main
                ref={containerRef}
                className="relative h-screen overflow-y-scroll scroll-smooth overscroll-contain bg-transparent text-slate-50"
            >
                <BackToTopButton targetRef={containerRef} />

                <div className="pt-14">
                    <section data-fade className="translate-y-4 px-6 pb-6 pt-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                        <div className="mx-auto w-full max-w-[96rem]">
                            <div className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/8 bg-slate-900/78 px-5 py-3">
                                    <div className="flex items-center gap-3 font-spacemono text-sm font-bold text-amber-200">
                                        <span className="text-slate-300">&gt;_</span>
                                        <span>~/projects/automated-musicians</span>
                                    </div>
                                    <div className="font-spacemono text-[11px] uppercase tracking-[0.22em] text-slate-400/80">
                                        Engineering capstone / 2021-2022
                                    </div>
                                </div>

                                <div className="grid gap-8 px-6 py-6 lg:grid-cols-[minmax(0,1.25fr)_24rem] lg:px-8 lg:py-8">
                                    <div className="min-w-0">
                                        <div className="font-spacemono text-sm uppercase tracking-[0.22em] text-amber-300">
                                            Capstone / music systems / pattern analysis
                                        </div>
                                        <h1 className="mt-3 font-montserrat text-[2.7rem] font-semibold tracking-tight text-blue-100 md:text-[3.25rem]">
                                            Automated Musicians
                                        </h1>
                                        <p className="mt-6 max-w-4xl font-montserrat text-lg leading-relaxed text-slate-100/90">
                                            {am.TLDR}
                                        </p>

                                        <div className="mt-7 font-spacemono text-base font-bold text-amber-300">
                                            <span>{">> "}</span>
                                            <ReactTyped
                                                strings={["compile motifs --extract-patterns --generate-score"]}
                                                typeSpeed={28}
                                                showCursor={false}
                                                startWhenVisible
                                                className="inline"
                                            />
                                            <span className="typewriter-cursor">_</span>
                                        </div>

                                        <div className="mt-7 flex flex-wrap gap-3">
                                            <Link href="/projects" className="home-btn home-btn-primary">
                                                <FolderCopyOutlined sx={{ fontSize: 18 }} />
                                                <span>All_Projects</span>
                                            </Link>
                                            {externalLinks.map((item) => (
                                                <a
                                                    key={item.label}
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="home-btn home-btn-secondary"
                                                >
                                                    <OpenInNewOutlined sx={{ fontSize: 17 }} />
                                                    <span>{item.label}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="overflow-hidden border border-slate-200/10 bg-[#07101f]">
                                        <div className="border-b border-slate-200/10 bg-slate-950/60 px-4 py-3">
                                            <div className="flex items-center justify-between gap-4 font-spacemono text-[11px] uppercase tracking-[0.22em] text-slate-400/80">
                                                <span>composition_signal</span>
                                                <span className="text-amber-200 md:block hidden">musicians.runtime</span>
                                            </div>
                                        </div>

                                        <div className="grid gap-0">
                                            <div className="p-4">
                                                <div className="font-spacemono text-[11px] font-bold uppercase tracking-[0.18em] text-amber-200">
                                                    Operational Intent
                                                </div>
                                                <div className="mt-4 space-y-3">
                                                    {heroSignals.map((signal) => (
                                                        <div key={signal} className="flex gap-3">
                                                            <span className="text-amber-200">+</span>
                                                            <p className="font-montserrat text-[0.95rem] leading-relaxed text-slate-300/88">
                                                                {signal}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section data-fade className="translate-y-4 px-6 pb-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                        <div className="mx-auto grid w-full max-w-[96rem] gap-5 lg:grid-cols-3">
                            {researchCards.map(({ title, body, Icon }) => (
                                <article
                                    key={title}
                                    className="border border-slate-200/10 bg-slate-950/38 p-5 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]"
                                >
                                    <Icon className="text-amber-300" sx={{ fontSize: 24 }} />
                                    <h2 className="mt-4 font-montserrat text-[1.45rem] font-semibold tracking-tight text-slate-100">
                                        {title}
                                    </h2>
                                    <p className="mt-3 font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                        {body}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section data-fade className="translate-y-4 px-6 pb-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                        <div className="mx-auto grid w-full max-w-[96rem] gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                    Project Context
                                </div>
                                <div className="px-5 py-5">
                                    <p className="font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                        This project was conducted during senior-year engineering capstone work and focused on
                                        automated music generation through programmed music theory, pattern recognition, and
                                        composition automation.
                                    </p>
                                    <p className="mt-4 font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                        The system was structured in stages so that music-theory modeling supported pattern
                                        extraction, and the extracted structures then fed the composition generator.
                                    </p>
                                </div>
                            </article>

                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                    Metadata
                                </div>
                                <div className="space-y-5 px-5 py-5 font-spacemono text-sm text-slate-300/85">
                                    <div className="flex items-center justify-between gap-6">
                                        <dt>Duration:</dt>
                                        <dd className="text-right text-slate-100">{am.duration}</dd>
                                    </div>
                                    <div className="flex items-center justify-between gap-6">
                                        <dt>Domain:</dt>
                                        <dd className="text-right text-amber-300">Music AI</dd>
                                    </div>
                                    <div className="flex items-center justify-between gap-6">
                                        <dt>Delivery:</dt>
                                        <dd className="text-right text-slate-100">Capstone Project</dd>
                                    </div>
                                    <div className="flex items-center justify-between gap-6">
                                        <dt>Coverage:</dt>
                                        <dd className="text-right text-slate-100">Theory / Extraction / Generation</dd>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </section>

                    <section data-fade className="translate-y-4 px-6 pb-6 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                        <div className="mx-auto flex w-full max-w-[96rem] flex-col gap-6">
                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                    Music Algorithms
                                </div>
                                <div className="grid gap-6 px-5 py-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                                    <div>
                                        <p className="font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                            {am.musicAlgorithmsDesc}
                                        </p>
                                    </div>
                                    <ImageStrip items={algorithmShots} columnsClass="md:grid-cols-2 xl:grid-cols-3" />
                                </div>
                            </article>

                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                    Pattern Recognition And Extraction
                                </div>
                                <div className="grid gap-6 px-5 py-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                                    <div>
                                        <p className="font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                            {am.patternExtractionDesc}
                                        </p>
                                    </div>
                                    <ImageStrip items={patternShots} />
                                </div>
                            </article>

                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                    Composition Generator
                                </div>
                                <div className="grid gap-6 px-5 py-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                                    <div>
                                        <p className="font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                            {am.compositionGenDesc}
                                        </p>
                                    </div>
                                    <ImageStrip items={generatorShots} />
                                </div>
                            </article>
                        </div>
                    </section>

                    <section data-fade className="translate-y-4 px-6 pb-14 opacity-0 transition duration-700 ease-out sm:px-10 lg:px-14">
                        <div className="mx-auto grid w-full max-w-[96rem] gap-6 lg:grid-cols-2">
                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                    Conclusion
                                </div>
                                <div className="px-5 py-5">
                                    <p className="font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                        {am.conclusion}
                                    </p>
                                </div>
                            </article>

                            <article className="overflow-hidden border border-slate-200/10 bg-slate-950/38 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                <div className="border-b border-slate-200/8 bg-slate-900/78 px-5 py-3 font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                    Final Thoughts
                                </div>
                                <div className="px-5 py-5">
                                    <p className="font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                        {am.finalThoughts}
                                    </p>
                                </div>
                            </article>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
