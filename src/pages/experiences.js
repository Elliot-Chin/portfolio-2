import ExperienceCard from "@/components/ExperienceCard"
import NavMenu from "@/components/NavMenu"
import { fetchEnvVars } from "@/utils/ServerFetchFunction"

import Loader from "@/components/Loader"
import { useState } from "react"





export default function Experiences ({EXP_SIEMENS_SUM, EXP_TA_UNB_SUM, EXP_SWD_UNB_SUM, EXP_RA_UNB_SUM, EXP_SC_UNB_SUM, EXP_PROC_UNB_SUM, EXP_CAMP_SUM}) {

    const [isLoading, setLoading] = useState(false)

    return (

        <>
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

                    <div className="flex flex-col gap-5 mb-3
                                    lg:grid lg:grid-cols-2 lg:mx-auto">
                        

                        <ExperienceCard
                            title={'Jr Software Developer'}
                            duration={'JUNE 2023 - PRESENT'}
                            img={'/experiencesLogo/Siemens_Logo.png'}
                            size={380}
                            summary={EXP_SIEMENS_SUM}
                            current
                        />

                        <ExperienceCard
                            title={'Teaching Assistant'}
                            duration={'SEPT 2022 - DEC 2022'}
                            img={'/experiencesLogo/UNB_Logo.png'}
                            size={512}
                            summary={EXP_TA_UNB_SUM}
                        />

                        <ExperienceCard
                            title={'Software Developer'}
                            duration={'MAY 2022 - DEC 2022'}
                            img={'/experiencesLogo/UNB_Logo.png'}
                            size={512}
                            summary={EXP_SWD_UNB_SUM}
                            coop
                            links={[{tooltip: 'View Employer Evaluation', link: '/WorkTermRecords/Software Developer WTR.pdf'}]}
                        />

                        <ExperienceCard
                            title={'Research Assistant'}
                            duration={'MAY 2021 - DEC 2022'}
                            img={'/experiencesLogo/UNB_Logo.png'}
                            size={512}
                            summary={EXP_RA_UNB_SUM}
                            coop
                            links={[{tooltip: 'View Employer Evaluation', link: '/WorkTermRecords/Research Assistant WTR.pdf'}]}
                        />

                        <ExperienceCard
                            title={'Student Consultant'}
                            duration={'JAN 2020 - APR 2020'}
                            img={'/experiencesLogo/UNB_Logo.png'}
                            size={512}
                            summary={EXP_SC_UNB_SUM}
                            coop
                            links={[{tooltip: 'View Employer Evaluation', link: '/WorkTermRecords/Student Consultant WTR.pdf'}]}
                        />

                        <ExperienceCard
                            title={'Residence Assistant'}
                            duration={'SEPT 2019 - SEPT 2020'}
                            img={'/experiencesLogo/UNB_Logo.png'}
                            size={512}
                            summary={EXP_PROC_UNB_SUM}
                        />

                        <ExperienceCard
                            title={'Camp Counselor'}
                            duration={'Summer Of 2018, 2019'}
                            img={'/experiencesLogo/Camp_Logo.png'}
                            size={210}
                            summary={EXP_CAMP_SUM}
                        />
                    </div>
                </div>

                <div className="mx-auto mb-16 lg:hidden">
                    <NavMenu about skills projects contact setLoading={setLoading}/>
                </div>

                <div name='nav-bar-wrapper' className="hidden lg:pt-[6rem] lg:block">
                    <NavMenu about experience skills contact setLoading={setLoading} verticle />
                </div>
            </div>
        </>
        
    )
}


export async function getServerSideProps() {
    return fetchEnvVars(['EXP_SIEMENS_SUM', 'EXP_TA_UNB_SUM', 'EXP_SWD_UNB_SUM', 'EXP_RA_UNB_SUM', 'EXP_SC_UNB_SUM', 'EXP_PROC_UNB_SUM', 'EXP_CAMP_SUM'])
}