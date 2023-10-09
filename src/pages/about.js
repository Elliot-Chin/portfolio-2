import { motionDiv_FloatUp } from "@/components/Config"
import Loader from "@/components/Loader"
import MyLogo from "@/components/MyLogo"
import NavMenu from "@/components/NavMenu"
import { fetchEnvVars } from "@/utils/ServerFetchFunction"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"



export default function About({ABOUT_ME}) {

    const formattedText = ABOUT_ME.replace('\n', '<br /><br />')

    const [isLoading, setLoading] = useState(false)

    return (
        <>

            {isLoading && <Loader />}

            <div className="scrollbar-none flex-col">
                <MyLogo size={150} />

                <div className="mb-16
                                xl:flex xl:items-center xl:w-3/4 xl:mx-auto xl:mb-0">
                    <div className="flex justify-center items-center p-5
                                        lg:w-1/3 lg:h-screen lg:mx-auto">
                        <div className="glow relative w-72 h-80 bg-[#f2b749] rounded-full flex items-center justify-center
                                        before:rounded-full
                                        lg:h-[35rem] lg:w-[19rem]"
                            style={{'--color': '#f2b749'}}>
                            <div className="relative w-[17.8rem] h-[19.8rem] rounded-full
                                            lg:h-[34.8rem] lg:w-[18.8rem]">
                                <Image
                                    src="/Images/avatar.jpeg"
                                    objectFit="cover"
                                    fill
                                    alt="Avatar Image"
                                    className='rounded-full overflow-hidden about-bg-image'
                                />
                            </div>
                        </div>  
                    </div>
                
                    <div className="lg:w-2/3 lg:mx-auto">
                        <div name='page-title' className="px-5 pt-3 
                                                        lg:w-2/3">  
                            <h1 className="font-lato text-5xl text-[#f2b749]
                                            lg:text-7xl lg:w-full">
                                About Me
                            </h1>
                        </div>

                        <motion.div {...motionDiv_FloatUp} className="p-5">
                            <p dangerouslySetInnerHTML={{__html: formattedText}}
                                className="font-inclusive-sans"
                            />
                        </motion.div>

                        <NavMenu experience skills projects contact setLoading={setLoading}/>
                    </div>
                </div>
            </div>
        </>
    )

}

export async function getServerSideProps() {
    return fetchEnvVars(['ABOUT_ME'])
}