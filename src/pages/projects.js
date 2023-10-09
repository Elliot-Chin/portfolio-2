import { motionDiv_FloatUp } from "@/components/Config"
import Loader from "@/components/Loader"
import MyLogo from "@/components/MyLogo"
import NavMenu from "@/components/NavMenu"
import ProjectCard from "@/components/ProjectCard"
import { motion } from "framer-motion"
import D_Projects from "public/projects/Data_Projects.json"
import { useState } from "react"



export default function Projects () {

    const [isLoading, setLoading] = useState(false)

    return (
        <>
        {isLoading && <Loader />}

        <MyLogo size={150}/>

        <div className="h-fit flex flex-col
                        lg:w-2/3 lg:mx-auto lg:flex-row">

            <div>
                <div className="lg:w-2/3">
                    <div name='page-title' className="px-5 pt-3
                                                    lg:w-full">  
                        <h1 className="font-lato text-5xl text-[#8f41d4]
                                        lg:text-7xl lg:w-full">
                            Projects
                        </h1>
                    </div>
                </div>

                <motion.div {...motionDiv_FloatUp} className="flex flex-col gap-5 items-center p-5">
                    
                    {
                        D_Projects.map((e, i) => (
                            <ProjectCard 
                            imgSrc={e.imgSrc}
                            desc={e.desc}
                            title={e.title}
                            link={e.link}
                            setLoading={setLoading}
                            links={e.links}
                            />
                        ))
                    }

                </motion.div>
            </div>
            
            <div name='nav-bar-wrapper' className="lg:pt-[6rem] lg:hidden">
                <NavMenu about experience skills contact setLoading={setLoading} />
            </div>

            <div name='nav-bar-wrapper' className="lg:pt-[6rem] hidden lg:block">
                <NavMenu about experience skills contact setLoading={setLoading} verticle />
            </div>
        </div>
    </> 

    )
}
