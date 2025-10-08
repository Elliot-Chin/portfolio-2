import { useState } from "react"
import { Model } from "@/components/avatar/Model"
import { items, skills } from "@/components/data/aboutIntroData"
import { SkillInfoCard } from "@/components/cards/SkillInfoCard"

export function AboutIntroSection({ getJobDuration }) {

    const [selectedSkill, setSelectedSkill] = useState(null)

    return (
        <section
            data-fade
            className="relative min-h-[100svh] sm:min-h-screen snap-start overflow-hidden
         transition-[opacity,transform] duration-200 ease-linear
         will-change-[opacity,transform]"
            style={{
                opacity: "var(--vis, 0)",
                transform: "translateY(calc((1 - var(--vis, 0)) * 8vh))",
            }}
        >
            <div className="
  relative w-full min-h-[100svh] supports-[height:100dvh]:min-h-[100dvh] mx-auto overflow-hidden text-black
  lg:w-[65rem] xl:w-full
  lg:max-w-6xl lg:mx-auto lg:grid lg:grid-cols-2 lg:items-center lg:gap-10
">

                {/* MODEL BLOCK */}
                <div
                    className="
    absolute inset-x-0 top-0 h-[56svh] supports-[height:100dvh]:h-[56dvh] overflow-hidden
    flex items-end justify-center pb-2
    lg:static lg:h-auto lg:pb-0 lg:order-2
  "
                >
                    <div className="relative shrink-0 w-[30rem]
                h-[50svh] md:h-[50svh]
                supports-[height:100dvh]:h-[50dvh]
                lg:h-[80vh] lg:w-[22rem]
                xl:h-[100vh] xl:w-[35rem]
                lg:aspect-[4/5] lg:overflow-visible">
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
                        Hi, nice to meet ya! <span className="animate-bounce absolute hidden ml-3 md:inline">👋</span>
                        <br />
                        <span className="opacity-80 text-xl lg:text-3xl text-amber-950">
                            Malaysian-born,
                            <span className="block sm:inline text-red-700"> Canadian-built.</span>
                        </span>
                    </h2>

                    {/* —— “Intro text” wrapper is relative so the box can be absolute below it —— */}
                    <div className="relative">
                        <p className="mt-3 font-montserrat lg:mt-4 text-base font-bold sm:font-normal lg:text-lg opacity-90 lg:opacity-100 lg:text-black">
                            <span className="font-bold">{getJobDuration("2023-06-05")}</span> as a{" "}
                            <span className="font-bold">JR. Application Cybersecurity Specialist</span> at Siemens. I design quiet UIs,
                            create things that work, and tinker after hours because I actually enjoy it&nbsp;✨
                        </p>
                    </div>

                    {/* Marquee: mobile fades + desktop mask */}
                    <div
                        className="
        relative mt-4 lg:mt-6 w-full overflow-hidden p-0
        [--fade:12%]
        md:[mask-image:linear-gradient(to_right,transparent_0,black_var(--fade),black_calc(100%-var(--fade)),transparent_100%)]
        md:[-webkit-mask-image:linear-gradient(to_right,transparent_0,black_var(--fade),black_calc(100%-var(--fade)),transparent_100%)]
      "
                    >
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:hidden bg-gradient-to-r from-transparent via-transparent to-transparent mix-blend-soft-light z-10" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:hidden bg-gradient-to-l from-transparent via-transparent to-transparent mix-blend-soft-light z-10" />
                        <div className="flex min-w-max whitespace-nowrap gap-3 will-change-transform transform-gpu animate-slide-left">
                            {[...items, ...items].map((t, i) => (
                                <span
                                    key={i}
                                    className="mx-0 px-3 lg:px-4 py-1.5 lg:py-2 font-monts rounded-full backdrop-blur-md bg-white/20 inline-block text-sm lg:text-base glass font-montserrat !text-amber-950
                                    !shadow-none font-semibold"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Skills marquee — clickable on md+ only */}
                    <div
                        className="
        relative mt-4 lg:mt-6 w-full overflow-hidden p-0
        [--fade:12%]
        md:[mask-image:linear-gradient(to_right,transparent_0,black_var(--fade),black_calc(100%-var(--fade)),transparent_100%)]
        md:[-webkit-mask-image:linear-gradient(to_right,transparent_0,black_var(--fade),black_calc(100%-var(--fade)),transparent_100%)]
      "
                    >
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
                font-semibold
                pointer-events-none md:pointer-events-auto
                md:hover:bg-white/30 md:cursor-pointer
                focus:outline-none
                glass
                !shadow-none font-montserrat !text-amber-950
              "
                                    aria-label={`Show details for ${t.name}`}
                                >
                                    <img src={t.src} height={20} width={20} alt={t.name} />
                                    {t.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Skill explanation area (md+). h-[96px] reserves space so nothing shifts. */}
                    <div className="hidden md:block relative mt-3 h-[96px]">
                        {selectedSkill && <SkillInfoCard skill={selectedSkill} onClosed={() => setSelectedSkill(null)} />}
                    </div>
                </div>
            </div>
        </section>
    )
}
