import Loader from "@/components/Loader"
import MyLogo from "@/components/MyLogo"
import NavMenu from "@/components/NavMenu"
import { fetchEnvVars } from "@/utils/ServerFetchFunction"
import { useState } from "react"



export default function AutomatedMusicians ({PROJECTS_AM_DESC, PROJECTS_AM_P1, PROJECTS_AM_P2, PROJECTS_AM_P3, PROJECTS_AM_FIN, PROJECTS_AM_CON}) {

    const [isLoading, setLoading] = useState(false)

    return (

        <>
            
            {isLoading && <Loader /> }   
        
            <div className="flex flex-col p-5 gap-5 font-inclusive-sans
                            lg:w-2/3 lg:mx-auto lg:flex-row lg:gap-16">

                <MyLogo size={150}/>

                <div className="flex flex-col gap-10">
                    <div name='page-title' className="
                                                    lg:w-full">  
                        <h1 className="font-lato text-4xl
                                        lg:text-7xl lg:w-full">
                            Automated Musicians
                        </h1>
                    </div>

                    <div name='project-intro' className="flex flex-col gap-3">    
                        <h1 className="font-inclusive-sans text-3xl font-bold text-violet-400
                                        lg:text-4xl">
                            🎶 Introduction
                        </h1>
                        <p className="lg:text-lg px-2" dangerouslySetInnerHTML={{__html: PROJECTS_AM_DESC}}/>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h1 className="font-inclusive-sans text-3xl font-bold text-violet-400
                                        lg:text-4xl">
                            🤖 Automated Music Creation
                        </h1>
                        <h3 className="font-roboto-condensed text-2xl font-bold text-slate-200
                                        lg:text-3xl">
                            Music Algorithms
                        </h3>

                        <p className="lg:text-lg px-2" dangerouslySetInnerHTML={{__html: PROJECTS_AM_P1}} />


                        <h3 className="font-roboto-condensed text-2xl font-bold text-slate-200
                                        lg:text-3xl">
                            Pattern Recognition and Extraction
                        </h3>
                        <p className="lg:text-lg px-2">
                            {PROJECTS_AM_P2}
                        </p>

                        <h3 className="font-roboto-condensed text-2xl font-bold text-slate-200
                                        lg:text-3xl">
                            Music Composition Generator
                        </h3>
                        <p className="lg:text-lg px-2">
                            {PROJECTS_AM_P3}
                        </p>
                    </div>

                    <div name='project-intro' className="flex flex-col gap-3">    
                        <h1 className="font-inclusive-sans text-3xl font-bold text-violet-400
                                        lg:text-4xl">
                            🏁 Conclusion
                        </h1>
                        <p className="lg:text-lg px-2" dangerouslySetInnerHTML={{__html: PROJECTS_AM_CON}}/>
                    </div>

                    <div name='project-intro' className="flex flex-col gap-3">    
                        <h1 className="font-inclusive-sans text-3xl font-bold text-violet-400
                                        lg:text-4xl">
                            💭 Final Thoughts
                        </h1>
                        <p className="lg:text-lg px-2" dangerouslySetInnerHTML={{__html: PROJECTS_AM_FIN}}/>
                    </div>
                </div>

                <div name='nav-bar-wrapper' className="lg:pt-[6rem] lg:hidden">
                    <NavMenu about experience skills projects contact setLoading={setLoading} />
                </div>

                <div name='nav-bar-wrapper' className="lg:pt-[6rem] hidden lg:block">
                    <NavMenu about experience skills projects contact setLoading={setLoading} verticle />
                </div>

            </div>
        </>
    )
}


export async function getServerSideProps() {
    return fetchEnvVars(['PROJECTS_AM_DESC', 'PROJECTS_AM_P1', 'PROJECTS_AM_P2', 'PROJECTS_AM_P3', 'PROJECTS_AM_FIN', 'PROJECTS_AM_CON'])
}