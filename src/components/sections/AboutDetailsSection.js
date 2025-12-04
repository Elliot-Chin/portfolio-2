import { Button } from "@nextui-org/react"
import { GitHub, LinkedIn, Mail } from "@mui/icons-material"
import { eChin } from "../../../public/data/People"
import { emailLink, githubLink } from "../../../public/data/Links"
import { Model } from "@/components/avatar/Model"
import { handleClick } from "@/components/utils/handleClick"

export function AboutDetailsSection() {

    return (
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
            <div
                className="w-11/12 max-w-6xl mx-auto grid items-center gap-10
                  grid-cols-1 lg:grid-cols-[minmax(18rem,28rem)_1fr]
                  h-screen lg:h-auto"
            >
                {/* Left: model (image/visual) */}
                <div className="relative shrink-0 w-full md:flex hidden justify-center overflow-visible">
                    <div className="relative shrink-0 w-[30rem] h-[55vh] md:h-[50vh] lg:h-[80vh] lg:w-[22rem] xl:h-[100vh] xl:w-[35rem] lg:aspect-[4/5] lg:overflow-visible">
                        <Model animate={false} />
                    </div>
                </div>

                {/* Right: long-form “subtitle” feel */}
                <div className="order-2 relative h-[90vh] md:h-fit">
                    {/* Title: sticky only on small screens */}
                    <h3
                        className="text-2xl md:text-3xl  font-semibold text-amber-950
               sticky top-0 z-10 md:static"
                    >
                        A little more <span className="text-red-700">About Me</span>
                    </h3>

                    <div className="overflow-y-auto md:max-h-none md:overflow-visible md:pt-0 font-montserrat text-white font-bold sm:font-normal">
                        <p className="mt-3 text-base md:text-lg opacity-85 ">
                            I grew up in Malaysia and moved to Canada to study, eventually graduating in Software Engineering from
                            UNB. These days I’m a developer / engineer at Siemens, and outside of work you’ll usually find me
                            recharging with a walk in the park, getting lost in a book, or hitting the gym.
                        </p>
                        <p className="mt-4 text-base md:text-lg opacity-85">
                            Coding is also how I unwind. I experiment with new stacks, ship small tools, and polish details most
                            people never notice. If you’re curious, the
                            <span className="mx-1 underline cursor-pointer hover:font-bold" onClick={() => handleClick("/projects")}>
                                Projects
                            </span>
                            section has a few of my recent builds.
                        </p>
                        <p className="mt-4 text-base md:text-lg opacity-85">
                            I’m always up for swapping ideas—whether it’s debugging a strange problem or planning the next trail.
                            Feel free to say hi; I’m just a message away.
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
    )
}
