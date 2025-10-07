import Head from "next/head"
import { useMemo, useRef, useState, useEffect } from "react"
import { useRouter } from "next/router"
import Typewriter from "typewriter-effect"
import {
    FaceRetouchingNaturalOutlined,
    ApartmentOutlined,
    AssignmentOutlined,
} from "@mui/icons-material"

import { Loader } from "@/components/nav/Loader"
import { Model2 } from "@/components/avatar/Model_2"
import { Model } from "@/components/avatar/Model"
import { GitHub, LinkedIn, Mail } from "@mui/icons-material"
import { Button } from "@nextui-org/react"
import { emailLink, githubLink, linkedInLink } from "../../public/data/Links"
import { eChin } from "../../public/data/People"
import { BackToTopButton } from "@/components/nav/BackTopTop"

// --- Continuous scroll progress -> CSS var --vis (0..1)
function useScrollProgress(containerRef) {
    useEffect(() => {
        const el = containerRef.current
        if (!el) return
        const sections = Array.from(el.querySelectorAll("section[data-fade]"))
        let raf = 0

        const update = () => {
            const vh = el.clientHeight
            const center = vh / 2

            for (const sec of sections) {
                const r = sec.getBoundingClientRect()
                const secCenter = r.top + r.height / 2
                const dist = Math.abs(secCenter - center)

                // Visibility curve: 1 at center, falling off toward edges.
                const falloff = vh * 0.85
                let vis = 1 - dist / falloff
                if (vis < 0) vis = 0
                if (vis > 1) vis = 1

                sec.style.setProperty("--vis", vis.toFixed(3))
            }
            raf = 0
        }

        const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
        update()
        el.addEventListener("scroll", onScroll, { passive: true })
        window.addEventListener("resize", update)
        return () => {
            el.removeEventListener("scroll", onScroll)
            window.removeEventListener("resize", update)
            if (raf) cancelAnimationFrame(raf)
        }
    }, [containerRef])
}

function getJobDuration(startDateStr) {
    const start = new Date(startDateStr)
    const now = new Date()

    const diffMs = now - start
    const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25)
    const years = Math.floor(diffYears)
    const remainder = diffYears - years

    // handle < 1 year case
    if (years === 0) {
        if (remainder >= 0.4 && remainder < 0.6) return "half a year"
        if (remainder >= 0.6) return "almost a year"
        return `${Math.round(remainder * 12)} months`
    }

    // handle in-between years
    if (remainder >= 0.4 && remainder < 0.6)
        return years === 1 ? "a year and a half" : `${years} and a half years`

    // round to nearest whole year if remainder > 0.8
    if (remainder >= 0.8) return `${years + 1} years`

    // singular vs plural
    return years === 1 ? "a year" : `${years} years`
}

export default function Home() {
    const facts = [
        "I'm Elliot — loves solving weird problems.",
        "If it works, don’t touch it — sacred code.",
        "I like quiet UIs and loud laughter.",
        "I code like I cook — messy, but it comes out great - usually.",
        "I’m not lazy, I’m just optimizing for efficiency.",
        "I like ice cream more than semicolons.",
        "I build because I'm bored.",
        "Powered by caffeine and bad ideas.",
        "Curiosity drives my dreams — sometimes my work too.",
        "I call it ‘agile’ when I change my mind mid-project.",
    ]

    const [pageLoading, setPageLoading] = useState(false)
    const [selectedPage, setSelectedPage] = useState("")
    const router = useRouter()
    const containerRef = useRef(null)

    useScrollProgress(containerRef)

    const items = [
        "💾 Digital Tinkerer",
        "🧠 Problem Solver",
        "💼 Innovator @ Siemens",
        "🧩 Logic Architect",
        "🎓 Software Engineer, UNB",
        "🌳 Nature Seeker",
        "💪 Strength & Study Enthusiast",
        "🌍 Globe Trotter",
        "☕ Caffeine Philosopher",
    ]

    const [selectedSkill, setSelectedSkill] = useState(null)

    const skills = [
        {
            src: 'https://cdn.worldvectorlogo.com/logos/react-2.svg', name: 'React',
            desc: 'Learned through curiosity, boredom, and one too many YouTube tutorials.'
        },
        {
            src: 'https://cdn.worldvectorlogo.com/logos/html-1.svg', name: 'HTML5',
            desc: 'Built my first projects with it — still the foundation of everything.'
        },
        {
            src: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg', name: 'Tailwind',
            desc: 'My favorite for turning ideas into clean, responsive UIs fast.'
        },
        {
            src: 'https://cdn.worldvectorlogo.com/logos/css-3.svg', name: 'CSS',
            desc: 'Where the frustration started — and the fun of design too.'
        },
        {
            src: 'https://cdn.worldvectorlogo.com/logos/pandas.svg', name: 'Pandas',
            desc: 'Learned in class, refined at work — my go-to for data wrangling.'
        },
        {
            src: 'https://cdn.worldvectorlogo.com/logos/python-5.svg', name: 'Python',
            desc: 'Hands-down my favorite language — even if it runs a little slow.'
        },
        {
            src: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg', name: 'Postgres',
            desc: 'Learned at work, now my favorite database for personal projects.'
        },
        {
            src: 'https://cdn.worldvectorlogo.com/logos/flask.svg', name: 'Flask',
            desc: 'My comfort zone for backend work — lightweight and reliable.'
        },
        {
            src: 'https://cdn.worldvectorlogo.com/logos/next-js.svg', name: 'Nextjs',
            desc: 'My go-to frontend framework — fast, sleek, and intuitive to build with.'
        },
        {
            src: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg', name: 'JavaScript',
            desc: 'Started as a “let’s see what this does” — now can’t build without it.'
        },
        {
            src: 'https://cdn.worldvectorlogo.com/logos/robot-framework.svg', name: 'Robot Framework',
            desc: 'Learned at work — now my favorite way to automate the chaos.'
        },
        {
            src: 'https://cdn.worldvectorlogo.com/logos/linux-tux.svg', name: 'Linux',
            desc: 'Everyday environment — terminals, logs, and Debian are home now.'
        },
        {
            src: 'https://cdn.worldvectorlogo.com/logos/docker-4.svg', name: 'Docker',
            desc: 'Started at work, now essential for every personal project stack.'
        },
        {
            src: 'https://cdn.worldvectorlogo.com/logos/proxmox.svg', name: 'Proxmox',
            desc: 'Learned through managing lab servers — now my homelab playground.'
        },
        {
            src: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg', name: 'GitHub',
            desc: 'Where all the code lives — issues, actions, and experiments alike.'
        },
        {
            src: 'https://cdn.worldvectorlogo.com/logos/c-1.svg', name: 'C',
            desc: 'Old-school fundamentals — data structures, pointers, and grit.'
        },
        {
            src: 'https://cdn.worldvectorlogo.com/logos/java-14.svg', name: 'Java',
            desc: 'Learned through coursework — solid OOP roots still in the toolkit.'
        },
        {
            src: 'https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg', name: 'SQL',
            desc: 'Schemas, joins, and leaderboards — data made to tell stories.'
        },
        {
            src: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg', name: 'VS Code',
            desc: 'My daily workspace — extensions, themes, and organized chaos.'
        },
    ]


    const shuffledFacts = useMemo(() => {
        const arr = [...facts]
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const t = arr[i]; arr[i] = arr[j]; arr[j] = t
        }
        return arr
    }, [])

    const links = [
        { label: "About Me", href: "/about", Icon: FaceRetouchingNaturalOutlined },
        { label: "Experiences", href: "/experiences", Icon: ApartmentOutlined },
        { label: "Projects", href: "/projects", Icon: AssignmentOutlined },
    ]

    const handleClick = (url) => {
        const a = document.createElement("a")
        a.href = url
        a.click()
    }

    // “About Me” scrolls to the next on-page section
    const handleNavClick = (href, label) => {
        if (label === "About Me" && containerRef.current) {
            const secs = Array.from(containerRef.current.querySelectorAll("section[data-fade]"))
            if (secs.length > 1) secs[1].scrollIntoView({ behavior: "smooth", block: "start" })
            return
        }
        setSelectedPage(label)
        setPageLoading(true)
        router.push(href)
    }

    // Smooth open/close without unmounting immediately
    const SkillInfoCard = ({ skill, onClosed }) => {
        const [isClosing, setIsClosing] = useState(false)

        const handleClose = () => {
            setIsClosing(true)
            // match CSS duration (180ms). After animation, unmount via parent.
            setTimeout(() => onClosed(), 180)
        }

        if (!skill) return null

        return (
            <div
                className={`glass absolute inset-x-0 top-0 max-w-[90%]
                    rounded-xl p-3 !shadow-none w-full mx-auto !text-black
                    ${isClosing ? 'animate-skill-out' : 'animate-skill-in'}`}
            >
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <div className="font-semibold flex gap-3 items-center text-amber-950 text-2xl">
                            <img src={skill.src} height={20} width={20} alt={skill.name} />
                            {skill.name}
                        </div>
                        <p className="text-sm opacity-80">{skill.desc}</p>
                    </div>
                    <button
                        type="button"
                        className="shrink-0 rounded-md px-2 py-1 hover:bg-black/5"
                        onClick={handleClose}
                        aria-label="Close"
                    >
                        ✕
                    </button>
                </div>
            </div>
        )
    }


    return (
        <main
            ref={containerRef}
            className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth overscroll-contain"
        >

            <BackToTopButton targetRef={containerRef} />
            <Head>
                <title>Elliot Chin — Portfolio</title>
                <meta name="description" content="Hey — I’m Elliot. I like making things that feel good to use." />
            </Head>

            {pageLoading && <Loader pageName={selectedPage} />}

            {/* SECTION 1 — HERO */}
            <section
                data-fade
                className="relative min-h-screen snap-start overflow-hidden
                   transition-[opacity,transform] duration-200 ease-linear
                   will-change-[opacity,transform]"
                style={{
                    opacity: "var(--vis, 0)",
                    transform: "translateY(calc((1 - var(--vis, 0)) * 8vh))",
                }}
            >
                {/* Background model layer */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Model2 modelScale={0.7} cameraZ={1.5} fov={38} dprMax={2} />
                </div>

                {/* Foreground overlay */}
                <div className="relative z-10 flex flex-col items-center h-full px-4">
                    <div className="rounded-3xl p-6 sm:p-8 lg:p-10 text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
                            Hey! I’m Elliot.
                        </h1>

                        <div className="text-sm md:text-2xl lg:text-3xl font-spacemono leading-relaxed text-slate-50 min-h-[4rem] sm:min-h-[4.5rem]">
                            <Typewriter
                                options={{
                                    strings: shuffledFacts,
                                    autoStart: true,
                                    loop: true,
                                    delay: 75,
                                    deleteSpeed: 20,
                                    pauseFor: 2200,
                                    cursor: "▍",
                                    wrapperClassName: "inline whitespace-pre-wrap align-baseline",
                                    cursorClassName: "typewriter-cursor inline-block align-baseline ml-2 opacity-90",
                                }}
                            />
                        </div>

                        <div className="mt-4 flex gap-3 justify-center items-center flex-wrap">
                            {links.map(({ label, href, Icon }) => (
                                <button
                                    key={href}
                                    onClick={() => handleNavClick(href, label)}
                                    className="glass px-4 py-3 w-32 sm:w-40 justify-center rounded-xl flex items-center gap-2 transition transform hover:-translate-y-2 !focus:translate-y-0 active:translate-y-0"
                                    aria-label={label}
                                >
                                    <Icon fontSize="small" />
                                    <span className="text-sm sm:text-base font-medium">{label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION 2 — ABOUT (Intro) — single responsive block */}
            <section
                id="about"
                data-fade
                className="min-h-screen snap-start transition-[opacity,transform] duration-200 ease-linear will-change-[opacity,transform]"
                style={{
                    opacity: "var(--vis, 0)",
                    transform: "translateY(calc((1 - var(--vis, 0)) * 8vh))",
                }}
            >
                <div className="
    relative w-full h-screen mx-auto overflow-hidden text-black
    lg:w-[65rem] xl:w-full
    lg:max-w-6xl lg:mx-auto lg:grid lg:grid-cols-2 lg:items-center lg:gap-10
  ">
                    {/* MODEL BLOCK */}
                    <div
                        className="
        absolute inset-x-0 top-0 h-[56vh] overflow-hidden
        flex items-end justify-center pb-2
        lg:static lg:h-auto lg:pb-0 lg:order-2
      "
                    >
                        <div className="relative shrink-0 w-[30rem] h-[23rem] md:h-[35rem] lg:h-[40rem] lg:w-[22rem] xl:h-[56rem] xl:w-[35rem] lg:aspect-[4/5] lg:overflow-visible">
                            <div className="w-full h-full flex items-center justify-center">
                                <Model />
                            </div>
                        </div>
                    </div>

                    {/* TEXT + MARQUEE + CTAs */}
                    <div
                        className="
        absolute inset-x-0 bottom-0 z-10 px-4 pb-6 pt-8
        backdrop-blur-[2px]
        lg:static lg:px-0 lg:pt-0 lg:pb-0
        lg:bg-none lg:backdrop-blur-0
        lg:order-1
      "
                    >
                        <h2 className="text-3xl lg:text-3xl leading-tight font-semibold text-white">
                            Hi, nice to meet ya! <span className="animate-bounce absolute hidden ml-3 md:inline">👋</span><br />
                            <span className="opacity-80 text-2xl lg:text-3xl text-amber-950">
                                Malaysian-born, <span className="text-red-700">Canadian-built.</span>
                            </span>
                        </h2>

                        {/* —— “Intro text” wrapper is relative so the box can be absolute below it —— */}
                        <div className="relative">
                            <p className="mt-3 font-montserrat lg:mt-4 text-base font-bold sm:font-normal lg:text-lg opacity-90 lg:opacity-100 lg:text-black">
                                <span className="font-bold">{getJobDuration("2023-06-05")}</span> as a <span className="font-bold">JR. Application Cybersecurity Specialist</span> at Siemens. I design quiet UIs, create things that work,
                                and tinker after hours because I actually enjoy it&nbsp;✨
                            </p>
                        </div>

                        {/* Marquee: mobile fades + desktop mask */}
                        <div className="
        relative mt-4 lg:mt-6 w-full overflow-hidden p-0
        [--fade:12%]
        md:[mask-image:linear-gradient(to_right,transparent_0,black_var(--fade),black_calc(100%-var(--fade)),transparent_100%)]
        md:[-webkit-mask-image:linear-gradient(to_right,transparent_0,black_var(--fade),black_calc(100%-var(--fade)),transparent_100%)]
      ">
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:hidden bg-gradient-to-r from-transparent via-transparent to-transparent mix-blend-soft-light z-10" />
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:hidden bg-gradient-to-l from-transparent via-transparent to-transparent mix-blend-soft-light z-10" />
                            <div className="flex min-w-max whitespace-nowrap gap-3 will-change-transform transform-gpu animate-slide-left">
                                {[...items, ...items].map((t, i) => (
                                    <span
                                        key={i}
                                        className="mx-0 px-3 lg:px-4 py-1.5 lg:py-2 font-monts rounded-full backdrop-blur-md bg-white/20 inline-block text-sm lg:text-base"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>



                        {/* Skills marquee — clickable on md+ only */}
                        <div className="
        relative mt-4 lg:mt-6 w-full overflow-hidden p-0
        [--fade:12%]
        md:[mask-image:linear-gradient(to_right,transparent_0,black_var(--fade),black_calc(100%-var(--fade)),transparent_100%)]
        md:[-webkit-mask-image:linear-gradient(to_right,transparent_0,black_var(--fade),black_calc(100%-var(--fade)),transparent_100%)]
      ">
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:hidden bg-gradient-to-r from-transparent via-transparent to-transparent mix-blend-soft-light z-10" />
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:hidden bg-gradient-to-l from-transparent via-transparent to-transparent mix-blend-soft-light z-10" />

                            <div className="flex min-w-max whitespace-nowrap gap-3 will-change-transform transform-gpu animate-slide-left-skills">
                                {[...skills, ...skills].map((t, i) => (
                                    <button
                                        type="button"
                                        key={i}
                                        onMouseEnter={() => setSelectedSkill(t)}
                                        title={t.name}
                                        className="
                mx-0 gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full
                backdrop-blur-md bg-white/20 flex items-center
                text-sm lg:text-base
                pointer-events-none md:pointer-events-auto
                md:hover:bg-white/30 md:cursor-pointer
                focus:outline-none
              "
                                        aria-label={`Show details for ${t.name}`}
                                    >
                                        <img src={t.src} height={20} width={20} alt={t.name} />
                                        {t.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Skill explanation area (md+). 
    h-[96px] reserves space so nothing shifts. */}
                        <div className="hidden md:block relative mt-3 h-[96px]">
                            {selectedSkill && (
                                <SkillInfoCard
                                    skill={selectedSkill}
                                    onClosed={() => setSelectedSkill(null)}
                                />
                            )}
                        </div>


                    </div>
                </div>
            </section>



            {/* SECTION 3 — ABOUT (Details) */}
            <section
                data-fade
                className="min-h-screen snap-start flex items-center justify-center
             transition-[opacity,transform] duration-200 ease-linear
             will-change-[opacity,transform]"
                style={{
                    opacity: "var(--vis, 0)",
                    transform: "translateY(calc((1 - var(--vis, 0)) * 8vh))",
                }}
            >
                <div className="w-11/12 max-w-6xl mx-auto grid items-center gap-10
                  grid-cols-1 lg:grid-cols-[minmax(18rem,28rem)_1fr]
                  h-screen lg:h-auto">
                    {/* Left: model (image/visual) */}
                    <div className="relative shrink-0 w-full max-w-[28rem] md:flex hidden justify-center overflow-visible">
                        <div className="relative shrink-0 w-[30rem] h-[23rem] md:h-[35rem] lg:h-[40rem] lg:w-[22rem] xl:h-[56rem] xl:w-[35rem] lg:aspect-[4/5] lg:overflow-visible">
                            <Model animate={false} />
                        </div>
                    </div>

                    {/* Right: text — scrolls only on small screens if it needs to,
        md+ unchanged */}
                    {/* Right: long-form “subtitle” feel */}
                    <div className="order-2 relative h-[90vh] md:h-fit">
                        {/* Title: sticky only on small screens */}
                        <h3
                            className="text-2xl md:text-3xl  font-semibold text-amber-950
               sticky top-0 z-10 md:static"
                        >
                            A little more <span className="text-red-700">About Me</span>
                        </h3>

                        <div className="overflow-y-auto md:max-h-none md:overflow-visible md:pt-0 font-montserrat text-black font-bold sm:font-normal">
                            <p className="mt-3 text-base md:text-lg opacity-85 ">
                                I grew up in Kuala Lumpur and moved to Canada to study, eventually
                                graduating in Software Engineering from UNB. These days I’m a developer / engineer at
                                Siemens, and outside of work you’ll usually find me recharging with a walk
                                in the park, getting lost in a book, or hitting the gym.
                            </p>
                            <p className="mt-4 text-base md:text-lg opacity-85">
                                Coding is also how I unwind. I experiment with new stacks, ship small tools,
                                and polish details most people never notice. If you’re curious, the
                                <span className="mx-1 underline cursor-pointer" onClick={() => handleClick('/projects')}>
                                    Projects
                                </span>
                                section has a few of my recent builds.
                            </p>
                            <p className="mt-4 text-base md:text-lg opacity-85">
                                I’m always up for swapping ideas—whether it’s debugging a strange problem or
                                planning the next trail. Feel free to say hi; I’m just a message away.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex gap-5 mt-5 lg:mt-7 items-center">
                            <Button isIconOnly className="bg-transparent" onPress={() => handleClick(eChin.linkedin)}>
                                <LinkedIn htmlColor="dark:white" fontSize="large" />
                            </Button>
                            <Button isIconOnly className="bg-transparent" onPress={() => handleClick(githubLink)}>
                                <GitHub htmlColor="dark:white" fontSize="large" />
                            </Button>
                            <Button isIconOnly className="bg-transparent" onPress={() => handleClick(emailLink)}>
                                <Mail htmlColor="dark:white" fontSize="large" />
                            </Button>
                        </div>
                    </div>

                </div>
            </section>



        </main>
    )
}
