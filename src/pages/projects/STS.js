import Loader from "@/components/Loader"
import MyLogo from "@/components/MyLogo"
import NavMenu from "@/components/NavMenu"
import { fetchEnvVars } from "@/utils/ServerFetchFunction"
import { useState } from "react"



export default function StudentTrackingSystem ({PROJECTS_STS_DESC, PROJECTS_STS_P1, PROJECTS_STS_P2, PROJECTS_STS_P3, PROJECTS_STS_FIN}) {

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
                            Student Tracking System
                        </h1>
                    </div>

                    <div name='project-intro' className="flex flex-col gap-3">    
                        <h1 className="font-inclusive-sans text-3xl font-bold text-violet-400
                                        lg:text-4xl">
                            🗒️ Project Overview
                        </h1>
                        <p className="lg:text-lg px-2" dangerouslySetInnerHTML={{__html: PROJECTS_STS_DESC}}/>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h1 className="font-inclusive-sans text-3xl font-bold text-violet-400
                                        lg:text-4xl">
                            😤 Embarking on Development
                        </h1>
                        <h3 className="font-roboto-condensed text-2xl font-bold text-slate-200
                                        lg:text-3xl">
                            Initial Phase
                        </h3>

                        <p className="lg:text-lg px-2" dangerouslySetInnerHTML={{__html: PROJECTS_STS_P1}} />


                        <h3 className="font-roboto-condensed text-2xl font-bold text-slate-200
                                        lg:text-3xl">
                            Progress...
                        </h3>
                        <p className="lg:text-lg px-2">
                            {PROJECTS_STS_P2}
                        </p>

                        <h3 className="font-roboto-condensed text-2xl font-bold text-slate-200
                                        lg:text-3xl">
                            Final Stretch
                        </h3>
                        <p className="lg:text-lg px-2">
                            {PROJECTS_STS_P3}
                        </p>
                    </div>

                    <div name='project-intro' className="flex flex-col gap-3">    
                        <h1 className="font-inclusive-sans text-3xl font-bold text-violet-400
                                        lg:text-4xl">
                            💭 Final Thoughts
                        </h1>
                        <p className="lg:text-lg px-2" dangerouslySetInnerHTML={{__html: PROJECTS_STS_FIN}}/>
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
    return fetchEnvVars(['PROJECTS_STS_DESC', 'PROJECTS_STS_P1', 'PROJECTS_STS_P2', 'PROJECTS_STS_P3', 'PROJECTS_STS_FIN'])
}