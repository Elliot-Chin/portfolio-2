import Loader from "@/components/Loader";
import MyLogo from "@/components/MyLogo";
import NavMenu from "@/components/NavMenu";
import ProjectCard from "@/components/ProjectCard";
import { fetchEnvVars } from "@/utils/ServerFetchFunction";
import { useState } from "react";




export default function Projects ({PROJECTS_SUM_AM, PROJECTS_SUM_STS}) {

    const [isLoading, setLoading] = useState(false)

    const AM_summary = PROJECTS_SUM_AM.replaceAll('\n', "<br /><br />")
    const STS_summary = PROJECTS_SUM_STS.replaceAll('\n', "<br /><br />")

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

                <div className="flex flex-col gap-5 items-center p-5">

                    <ProjectCard 
                        imgSrc={'/SDP.jpg'}
                        desc={AM_summary}
                        title={'Automated Musicians'}
                        link={'/projects/AM'}
                        setLoading={setLoading}
                        links={[
                            {title: 'Github', tooltip: 'Github project repository', link: 'https://github.com/edwardchang7/engg4000'},
                            {title: 'Youtube', tooltip: 'Example song generation', link: 'https://www.youtube.com/watch?v=sYTcTymlJhc&feature=youtu.be'},
                            {title: 'CBC News', tooltip: 'CBC news article', link: 'https://www.cbc.ca/news/canada/new-brunswick/unb-engineering-design-symposium-1.6411721'}
                        ]}
                    />

                    <ProjectCard
                        imgSrc={'/STS.png'}
                        desc={STS_summary}
                        title={'Student Tracking System'}
                        link={'/projects/STS'}
                        setLoading={setLoading}
                        links={[
                            {title: 'Github', tooltip: 'Github project repository', link: 'https://github.com/Elliot-Chin/StudentTrackingSystem-1'},
                        ]}
                    />

                </div>
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

export async function getServerSideProps() {
    return fetchEnvVars(['PROJECTS_SUM_AM', 'PROJECTS_SUM_STS'])
}