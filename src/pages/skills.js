import Loader from "@/components/Loader"
import MyLogo from "@/components/MyLogo"
import NavMenu from "@/components/NavMenu"
import { fetchEnvVars } from "@/utils/ServerFetchFunction"
import Image from "next/image"
import { useState } from "react"


export default function Skills ({SKILLS_TECH, SKILLS_LANG, SKILLS_API, SKILLS_TOOL, SKILLS_MGNT, SKILLS_SPEK, SKILLS}) {

    const [isLoading, setLoading] = useState(false)
    const [selectedSkill, setSelectedSkill] = useState(0)

    const tech = SKILLS_TECH.split("|")
    const language = SKILLS_LANG.split("|")
    const api = SKILLS_API.split("|")
    const tools = SKILLS_TOOL.split("|")
    const mngt = SKILLS_MGNT.split("|")
    const speak = SKILLS_SPEK.split("|")
    const skills = SKILLS.split("|")

    const listSkills = (key) => (
            key.map((k, i) => (
                <span id={i} className="rounded-md border border-lime-600 px-3 py-1 bg-transparent pointer-events-none">{k}</span>
            ))
    )

    return (
        <div>
            <MyLogo size={150}/>

            {isLoading && <Loader />}

            <div className="lg:flex lg:items-center lg:justify-center lg:h-11/12">
                <div className="flex justify-center items-center p-5
                                lg:w-1/3 lg:h-screen">
                    <div className="glow relative w-72 h-80 bg-lime-700 rounded-full flex items-center justify-center
                                        lg:h-[35rem] lg:w-[19rem]"
                        style={{'--color': 'rgb(77 124 15)'}}>
                        <div className="absolute w-[17.8rem] h-[19.8rem] rounded-full
                                        lg:h-[34.8rem] lg:w-[18.8rem]">
                            <Image
                                src="/Images/skills.jpeg"
                                objectFit="cover"
                                fill
                                alt="Avatar Image"
                                className='rounded-full overflow-hidden bg-slate-800'
                            />
                        </div>
                    </div> 
                </div>

                <div className="lg:flex lg:flex-col lg:w-1/2 lg:pr-10">
                    <div name='page-title' className="px-5 pt-3 mb-5
                                                    lg:w-2/3">  
                            <h1 className="font-lato text-5xl text-[#0da305] px-3
                                            lg:text-7xl">
                                Skills
                            </h1>
                    </div>

                    <div className="p-5 flex h-80 mx-auto gap-3 w-11/12 bg-slate-900 rounded-md
                                    lg:h-fit">
                        {/* Skill Selection Bar */}
                        <div className="w-fit flex flex-col items-center gap-3 font-roboto-condensed bg-transparent
                                        lg:text-3xl lg:gap-5">
                            {
                                skills.map((s, i) => (
                                    <span className={`px-3 py-1 items-center flex h-full rounded-md w-full transition-all duration-300 glass-effect green-shadow ${selectedSkill == i ? 'bg-green-800 ': 'bg-lime-600' } 
                                                    hover:bg-green-800 hover:cursor-pointer`}
                                            onClick={() => setSelectedSkill(i)}
                                            id={i}>{s}</span>
                                ))
                            }
                        </div>
                        {/* Skill display bar */}
                        <div className="flex items-start justify-start gap-1 overflow-scroll bg-transparent scrollbar-thin scrollbar-thumb-lime-500
                                        lg:h-96">
                            <div className="flex flex-wrap gap-2 font-inclusive-sans bg-transparent
                                            lg:text-2xl lg:items-start lg:justify-start">
                            {
                                (selectedSkill == 0) ? listSkills(tech) :
                                (selectedSkill == 1) ? listSkills(language) :
                                (selectedSkill == 2) ? listSkills(api) :
                                (selectedSkill == 3) ? listSkills(tools) :
                                (selectedSkill == 4) ? listSkills(mngt):
                                (selectedSkill == 5) ? listSkills(speak) :
                                null
                            }
                            </div>
                        </div>
                    </div>

                    <div name='nav-bar-wrapper' className="mb-16 mt-10
                                                        lg:w-fit lg:pl-5">
                        <NavMenu about experience projects contact setLoading={setLoading}/>
                    </div>
                </div>
            </div>
        </div>
    )

}


export async function getServerSideProps() {
    return fetchEnvVars(['SKILLS_TECH','SKILLS_API', 'SKILLS_LANG', 'SKILLS_MGNT', 'SKILLS_SPEK', 'SKILLS_TOOL', 'SKILLS'])
}