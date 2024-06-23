import { Nav } from "@/components/nav/Navbar"
import ResumeJobEntry from "@/components/resume/resumeJobEntry"
import ResumeProjectEntry from "@/components/resume/resumeProjectEntry"
import ResumeSkillEntry from "@/components/resume/resumeSkillEntry"
import { AccountTreeOutlined, ApiOutlined, CodeOutlined, ConstructionOutlined, DownloadOutlined, Email, GitHub, GpsFixed, LinkedIn, PublicOutlined, SettingsOutlined, SpeakerNotesOutlined, } from "@mui/icons-material"
import { useState } from "react"
import { Button } from "@nextui-org/react"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import { Loader } from "@/components/nav/Loader"
import { emailLink, githubLink, linkedInLink, portfolioLink, resumeLink } from "../../public/data/Links"
import { degree, email, githubName, name, portfolioStrLink, resumeDownloadFileName, university } from "../../public/data/Etc"
import { jobs, projects, skills } from "../../public/data/Resume"
import { eChin } from "../../public/data/People"



export default function Resume() {

    const [showExperience, setShowExperience] = useState(true)
    const [showSkills, setShowSkills] = useState(true)
    const [showProjects, setShowProjects] = useState(true)
    const [loading, setLoading] = useState({
        state: false,
        name: '',
    })

    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = resumeLink
        link.download = resumeDownloadFileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const handleClick = (url) => {
        console.log()
        const link = document.createElement('a')
        link.href = url
        link.target = '_blank'
        link.rel = 'noopener noreferrer'
        link.click()
    }

    return (
        <main className="min-h-screen h-fit dark:bg-slate-800 bg-slate-300 border border-transparent flex flex-col items-center pb-10
        lg:h-fit">

            <Nav />

            {loading.state && <Loader pageName={loading.name} />}

            <div className="mt-5 dark:text-white w-full px-2 float-up text-slate-950
                            lg:w-1/2">
                <span className="font-montserrat text-6xl font-bold lg:text-7xl">{name}</span>
            </div>

            <div className="grid grid-cols-2 gap-y-2 w-full float-up text-slate-950
                            lg:w-1/2 lg:text-2xl">
                <div className="flex gap-2 w-fit px-2 mt-3 items-center hover:cursor-pointer" onClick={() => handleClick(emailLink)}>
                    <Email className="text-2xl dark:text-slate-400" />
                    <span className="dark:text-slate-300 font-raleway">{email}</span>
                </div>

                <div className="flex gap-2 w-fit px-2 mt-3 items-center hover:cursor-pointer" onClick={() => handleClick(eChin.linkedin)}>
                    <LinkedIn className="text-2xl dark:text-slate-400" />
                    <span className="dark:text-slate-300 font-raleway">{eChin.name}</span>
                </div>

                <div className="flex gap-2 w-fit px-2 mt-3 items-center hover:cursor-pointer" onClick={() => handleClick(githubLink)}>
                    <GitHub className="text-2xl dark:text-slate-400" />
                    <span className="dark:text-slate-300 font-raleway">{githubName}</span>
                </div>

                <div className="flex gap-2 w-fit px-2 mt-3 items-center hover:cursor-pointer" onClick={() => handleClick(portfolioLink)}>
                    <PublicOutlined className="text-2xl dark:text-slate-400" />
                    <span className="dark:text-slate-300 font-raleway">{portfolioStrLink}</span>
                </div>
            </div>

            <div className="w-full px-2 mt-3 flex flex-col mb-5 float-up
                            lg:w-1/2">
                <div className="flex">
                    <span className="dark:text-white font-montserrat text-2xl pr-3 lg:text-4xl">{'EDUCATION'}</span>
                    <div className="border w-full h-0 my-auto mr-2 border-blue-600" />
                </div>
                <div className="w-full flex flex-col mt-3">
                    <div className="flex gap-2">
                        <GpsFixed className="text-2xl  dark:text-white" />
                        <span className="dark:text-white font-raleway text-xl lg:text-2xl">{university}</span>
                    </div>
                    <span className="dark:text-white font-montserrat mt-3 text-sm lg:text-medium">
                        {degree}
                    </span>
                </div>
            </div>


            <div className="mb-5 w-full float-up
                            lg:w-1/2">
                <ResumeJobEntry
                    setLoading={setLoading}
                    title={'EXPERIENCE'}
                    bool={showExperience}
                    toggle={setShowExperience}
                    jobs={jobs}
                />
            </div>

            <div className="mb-5 w-full float-up
                            lg:w-1/2">
                <ResumeSkillEntry
                    title={'SKILLS'}
                    bool={showSkills}
                    toggle={setShowSkills}
                    skills={skills}
                />
            </div>

            <div className="w-full float-up
                            lg:w-1/2">
                <ResumeProjectEntry
                    setLoading={setLoading}
                    title={'PROJECTS'}
                    bool={showProjects}
                    toggle={setShowProjects}
                    projects={projects}
                />
            </div>

            <BackToTopButton />

            <div className="fixed bottom-16 right-3
                            lg:bottom-24 lg:right-10">
                <Button isIconOnly color="warning" variant="solid" className="font-oswald text-white lg:w-16 lg:h-16" onClick={handleDownload}>
                    <DownloadOutlined className="lg:text-5xl" />
                </Button>
            </div>


        </main>
    )
}