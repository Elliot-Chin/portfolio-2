import ResumeJobEntry from "@/components/resume/resumeJobEntry"
import ResumeProjectEntry from "@/components/resume/resumeProjectEntry"
import ResumeSkillEntry from "@/components/resume/resumeSkillEntry"
import {
    DownloadOutlined,
    Email,
    GitHub,
    LinkedIn,
    PublicOutlined,
    GpsFixed,
} from "@mui/icons-material"
import { useState } from "react"
import { Button, Navbar } from "@nextui-org/react"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import { Loader } from "@/components/nav/Loader"
import {
    emailLink,
    githubLink,
    linkedInLink,
    portfolioLink,
    resumeLink,
} from "../../public/data/Links"
import {
    degree,
    email,
    githubName,
    name,
    portfolioStrLink,
    resumeDownloadFileName,
    university,
} from "../../public/data/Etc"
import { jobs, projects, skills } from "../../public/data/Resume"
import { eChin } from "../../public/data/People"

export default function Resume() {
    const [showExperience, setShowExperience] = useState(true)
    const [showSkills, setShowSkills] = useState(true)
    const [showProjects, setShowProjects] = useState(true)
    const [loading, setLoading] = useState({ state: false, name: "" })

    const handleDownload = () => {
        const link = document.createElement("a")
        link.href = resumeLink
        link.download = resumeDownloadFileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const handleClick = (url) => {
        const link = document.createElement("a")
        link.href = url
        link.target = "_blank"
        link.rel = "noopener noreferrer"
        link.click()
    }

    return (
        <main
            className="
        min-h-screen h-fit
        flex flex-col items-center pb-24
      "
        >
            <Navbar />

            {loading.state && <Loader pageName={loading.name} />}

            {/* Top header */}
            <div
                className="
          w-full px-3 mt-8 lg:w-1/2 float-up
        "
            >
                <div className="
            rounded-2xl p-4 lg:p-6
            bg-white/40 backdrop-blur-md shadow-xl ring-1 ring-white/40
            dark:bg-slate-800/50 dark:ring-slate-700/60
          ">
                    <span className="block font-montserrat text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        {name}
                    </span>

                    {/* contact row */}
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-slate-900 dark:text-slate-200">
                        <div
                            className="flex gap-2 items-center px-1 hover:opacity-90 hover:translate-x-[1px] transition-transform duration-200 cursor-pointer"
                            onClick={() => handleClick(emailLink)}
                        >
                            <Email className="text-2xl opacity-80" />
                            <span className="font-raleway">{email}</span>
                        </div>

                        <div
                            className="flex gap-2 items-center px-1 hover:opacity-90 hover:translate-x-[1px] transition-transform duration-200 cursor-pointer"
                            onClick={() => handleClick(linkedInLink || eChin.linkedin)}
                        >
                            <LinkedIn className="text-2xl opacity-80" />
                            <span className="font-raleway">{eChin?.name || "LinkedIn"}</span>
                        </div>

                        <div
                            className="flex gap-2 items-center px-1 hover:opacity-90 hover:translate-x-[1px] transition-transform duration-200 cursor-pointer"
                            onClick={() => handleClick(githubLink)}
                        >
                            <GitHub className="text-2xl opacity-80" />
                            <span className="font-raleway">{githubName}</span>
                        </div>

                        <div
                            className="flex gap-2 items-center px-1 hover:opacity-90 hover:translate-x-[1px] transition-transform duration-200 cursor-pointer"
                            onClick={() => handleClick(portfolioLink)}
                        >
                            <PublicOutlined className="text-2xl opacity-80" />
                            <span className="font-raleway">{portfolioStrLink}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Education */}
            <div className="w-full px-3 mt-6 lg:w-1/2 float-up">
                <div className="
            rounded-2xl p-4 lg:p-6
            bg-white/40 backdrop-blur-md shadow-xl ring-1 ring-white/40
            dark:bg-slate-800/50 dark:ring-slate-700/60
          ">
                    <div className="flex items-center gap-3">
                        <span className="font-montserrat text-2xl lg:text-4xl text-slate-900 dark:text-white">
                            EDUCATION
                        </span>
                        <div className="h-[2px] flex-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 dark:from-amber-400 dark:via-amber-300 dark:to-yellow-300 rounded-full" />
                    </div>

                    <div className="mt-4">
                        <div className="flex gap-2 items-center">
                            <GpsFixed className="text-2xl text-slate-900 dark:text-white" />
                            <span className="font-raleway text-xl lg:text-2xl text-slate-900 dark:text-white">
                                {university}
                            </span>
                        </div>
                        <span className="block font-montserrat mt-2 text-sm lg:text-base text-slate-800 dark:text-slate-200">
                            {degree}
                        </span>
                    </div>
                </div>
            </div>

            {/* Experience */}
            <div className="w-full px-3 mt-6 lg:w-1/2 float-up">
                <div className="
            rounded-2xl p-4 lg:p-6
            bg-white/40 backdrop-blur-md shadow-xl ring-1 ring-white/40
            dark:bg-slate-800/50 dark:ring-slate-700/60
          ">
                    <ResumeJobEntry
                        setLoading={setLoading}
                        title={"EXPERIENCE"}
                        bool={showExperience}
                        toggle={setShowExperience}
                        jobs={jobs}
                    />
                </div>
            </div>

            {/* Skills */}
            <div className="w-full px-3 mt-6 lg:w-1/2 float-up">
                <div className="
            rounded-2xl p-4 lg:p-6
            bg-white/40 backdrop-blur-md shadow-xl ring-1 ring-white/40
            dark:bg-slate-800/50 dark:ring-slate-700/60
          ">
                    <ResumeSkillEntry
                        title={"SKILLS"}
                        bool={showSkills}
                        toggle={setShowSkills}
                        skills={skills}
                    />
                </div>
            </div>

            {/* Projects */}
            <div className="w-full px-3 mt-6 lg:w-1/2 float-up">
                <div className="
            rounded-2xl p-4 lg:p-6
            bg-white/40 backdrop-blur-md shadow-xl ring-1 ring-white/40
            dark:bg-slate-800/50 dark:ring-slate-700/60
          ">
                    <ResumeProjectEntry
                        setLoading={setLoading}
                        title={"PROJECTS"}
                        bool={showProjects}
                        toggle={setShowProjects}
                        projects={projects}
                    />
                </div>
            </div>

            <BackToTopButton />

            {/* Download button */}
            <div className="fixed bottom-16 right-3 lg:bottom-24 lg:right-10">
                <Button
                    isIconOnly
                    variant="shadow"
                    className="
            w-14 h-14 lg:w-16 lg:h-16 rounded-full
            bg-gradient-to-br from-amber-500 to-yellow-400
            text-white shadow-lg hover:opacity-95 active:scale-[0.98]
            transition
          "
                    onClick={handleDownload}
                >
                    <DownloadOutlined className="text-3xl lg:text-5xl" />
                </Button>
            </div>
        </main>
    )
}
