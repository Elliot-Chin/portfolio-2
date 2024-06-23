
import { Accordion, AccordionItem, Button, Divider } from "@nextui-org/react"
import { Nav } from "@/components/nav/Navbar"
import { ReactTyped } from "react-typed"
import Image from "next/image"
import { useRouter } from "next/router"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import { useState } from "react"
import { Loader } from "@/components/nav/Loader"
import { projects } from "../../public/data/Projects"





export default function Projects() {

    const [loading, setLoading] = useState({ state: false, name: '' })
    const router = useRouter()


    return (
        <main className="min-h-screen h-fit dark:bg-slate-800 bg-slate-300 border border-transparent flex flex-col items-center pb-10
        lg:h-fit">

            <Nav currentPage={'Projects'} />

            {loading.state && <Loader
                pageName={loading.name}
            />
            }
            <BackToTopButton />

            <div className="text-white rounded-lg mx-auto w-full text-center mt-10 mb-10">

                <ReactTyped
                    startWhenVisible
                    strings={["Projects"]}
                    typeSpeed={40}
                    className='dark:text-slate-300 text-warning-600 bg-transparent text-4xl font-bold capitalize font-montserrat
                                lg:text-6xl'
                    showCursor={false}
                />
            </div>

            <div className=" w-full float-in
                                lg:w-1/2">
                <Accordion variant="light" showDivider={false} >
                    {projects.map((project, index) => (<AccordionItem key={index} className="glass-effect rounded-md bg-opacity-20 dark:bg-slate-950 bg-gray-500 mb-3"
                        textValue={project.title}
                        classNames={{
                            'indicator': 'mr-3',
                        }}
                        title={
                            <div className="flex items-center gap-2">
                                <Image
                                    src={project.imgSrc}
                                    width={128}
                                    height={128}
                                    alt={project.title}
                                    className="rounded-md overflow-hidden ml-3"
                                    priority
                                />
                                <span className="font-montserrat text-xl dark:text-white text-slate-950 ml-3
                                                lg:text-3xl">{project.title}</span>
                            </div>
                        }
                    >
                        <div className="flex flex-col gap-3 ml-1 mr-1 p-1">
                            <Divider
                                className="bg-slate-600"
                            />
                            <span className="dark:text-slate-300 text-slate-950 font-oswald
                                            lg:text-xl">
                                {project.duration}
                            </span>
                            <span className="dark:text-white text-slate-950 dark:font-raleway font-montserrat
                                            lg:text-xl">
                                {project.summary}
                            </span>

                            {project.link && <div className="w-full justify-end flex pr-2">
                                <Button color="success" variant="flat"
                                    onClick={() => { setLoading({ state: true, name: project.title }), router.push(project.link) }} className="font-oswald lg:text-2xl dark:text-white">See More</Button>
                            </div>}
                        </div>
                    </AccordionItem>))}

                </Accordion>
            </div>

        </main>
    )
}