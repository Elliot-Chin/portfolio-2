import { motionDiv_FloatUp } from "@/components/Config"
import ExperienceCard from "@/components/ExperienceCard"
import Loader from "@/components/Loader"
import MyLogo from "@/components/MyLogo"
import NavMenu from "@/components/NavMenu"
import { motion } from "framer-motion"
import D_Experience from "public/experiences/Data_Experiences.json"
import { useState } from "react"




export default function Experiences () {

    const [isLoading, setLoading] = useState(false)

    return (

        <>
            <MyLogo size={150} />
            {isLoading && <Loader />}
            <div className="
                            lg:w-2/3 lg:mx-auto lg:flex lg:flex-row">
                <div>
                    <div name='page-title' className="px-5 pt-3 mb-5
                                                    lg:w-full">  
                        <h1 className="font-lato text-5xl text-[#429bf5]
                                        lg:text-7xl lg:w-full">
                            Experiences
                        </h1>
                    </div>

                    <motion.div {...motionDiv_FloatUp} className="flex flex-col gap-5 mb-3
                                    lg:grid lg:grid-cols-2 lg:mx-auto">
                                        
                        {
                            D_Experience.map((e,i) => (
                                <ExperienceCard
                                title={e.title}
                                duration={e.duration}
                                img={e.img}
                                size={e.size}
                                summary={e.summary}
                                current={e.current}
                                coop={e.coop}
                                links={e.links}
                                />
                            ))
                        }

                    </motion.div>
                </div>

                <div className="mx-auto mb-16 lg:hidden">
                    <NavMenu about skills projects contact setLoading={setLoading}/>
                </div>

                <div name='nav-bar-wrapper' className="hidden lg:pt-[6rem] lg:block">
                    <NavMenu about projects skills contact setLoading={setLoading} verticle />
                </div>
            </div>
        </>
        
    )
}