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
    relative w-full h-screen mx-auto overflow-hidden  text-black
    lg:w-[65rem] xl:w-full
    lg:max-w-6xl lg:mx-auto lg:grid lg:grid-cols-2 lg:items-center lg:gap-10
  ">
                    {/* MODEL BLOCK */}
                    <div
                        className="
        absolute inset-x-0 top-0 h-[56vh] overflow-hidden
        flex items-end justify-center
        pb-2           
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
        lg:bg-none       /* remove gradient on desktop to kill the 'border' */
        lg:backdrop-blur-0
        lg:order-1
      "
                    >
                        <h2 className="text-3xl lg:text-3xl leading-tight font-semibold text-white">
                            Hi, nice to meet ya! <span className="animate-bounce absolute hidden ml-3 md:inline">👋</span> <br />
                            <span className="opacity-80 text-2xl lg:text-3xl text-amber-950">
                                Malaysian-born, <span className="text-red-700">Canadian-built.</span>
                            </span>
                        </h2>

                        <p className="mt-3 font-montserrat lg:mt-4 text-base font-bold sm:font-normal lg:text-lg opacity-90 lg:opacity-100 lg:text-black">
                            JR. Application Cybersecurity Specialist at Siemens. I design quiet UIs, create things that work,
                            and tinker after hours because I actually enjoy it&nbsp;✨
                        </p>

                        {/* Marquee: mobile fades + desktop mask */}
                        <div className="
        relative mt-4 lg:mt-6 w-full overflow-hidden p-0
        [--fade:12%]
        md:[mask-image:linear-gradient(to_right,transparent_0,black_var(--fade),black_calc(100%-var(--fade)),transparent_100%)]
        md:[-webkit-mask-image:linear-gradient(to_right,transparent_0,black_var(--fade),black_calc(100%-var(--fade)),transparent_100%)]
      ">
                            {/* mobile-only side fades */}
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:hidden
          bg-gradient-to-r from-transparent via-transparent to-transparent mix-blend-soft-light z-10" />
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:hidden
          bg-gradient-to-l from-transparent via-transparent to-transparent mix-blend-soft-light z-10" />

                            {/* moving track */}
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
                    </div>

                </div>
            </section>



        </main>
    )
}
