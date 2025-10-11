import Image from "next/image"
import { motion } from "framer-motion"
import { AvatarGroup, Avatar } from "@nextui-org/react"
import { ProjectImage } from "@/components/projects/ProjectImage"
import { subtleHover } from "./animations"

// Build the sections array. We accept dependencies as args to avoid brittle relative imports.
export function buildSections({ name, setName, exp, ECAvatarLink, linkedInLink, eChin }) {
    return [
        {
            key: "hero",
            title: "Expenses Recorder",
            desc: exp.TLDR,
            media: (
                <motion.div {...subtleHover} className="max-w-[512px]">
                    <Image
                        alt={exp.ExpLogoImg.alt}
                        height={512}
                        width={512}
                        src={exp.ExpLogoImg.src}
                        className="object-contain mx-auto"
                        priority
                    />
                </motion.div>
            ),
            meta: (
                <div className="flex flex-col gap-3 items-start">
                    <div className="flex gap-4 items-center">
                        <AvatarGroup color="warning" isBordered className="hover:cursor-pointer">
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Avatar
                                    name={eChin.name}
                                    onMouseEnter={() => setName(eChin.name)}
                                    onMouseLeave={() => setName("Contributor")}
                                    onClick={() => window.open(linkedInLink, "_blank")}
                                    src={ECAvatarLink}
                                />
                            </motion.div>
                        </AvatarGroup>
                        <div className="flex flex-col">
                            <span className="font-montserrat text-white text-xl lg:text-2xl">{name}</span>
                            <span className="font-oswald text-white text-sm opacity-80">{exp.duration}</span>
                        </div>
                    </div>
                </div>
            ),
            images: true,
        },
        {
            key: "legacy",
            title: "Legacy Version",
            desc: (
                <p
                    dangerouslySetInnerHTML={{ __html: exp.legacyVersion }}
                    className="font-raleway text-slate-100/90 text-left"
                />
            ),
            media: (
                <motion.div {...subtleHover} className="w-full">
                    <ProjectImage
                        alt="Expenses Recorder - Initial Prototype"
                        src="/projects/exprec/old_exprec.png"
                        description="Expenses Recorder - Initial Prototype written with Java Swing UI Library. Some values are masked for privacy reasons."
                        size={1024}
                        lg_size="h-fit"
                    />
                </motion.div>
            ),
            images: true,
        },
        {
            key: "current",
            title: "Current Version",
            desc: (
                <p
                    dangerouslySetInnerHTML={{ __html: exp.currentVersion }}
                    className="font-raleway text-slate-100/90  text-left"
                />
            ),
            media: null,
            images: false,
        },
        {
            key: "new-components",
            title: "New Components",
            desc: <p className="font-raleway text-slate-100/90 text-left">{exp.dashboardDesc}</p>,
            media: (
                <div className="flex flex-col gap-5 lg:flex-row">
                    <div className="w-full lg:w-[100%] flex flex-col items-center gap-5">
                        <motion.div {...subtleHover} className="w-[90%] sm:w-[80%] lg:w/full">
                            <ProjectImage
                                alt={exp.CMSChartImg.alt}
                                src={exp.CMSChartImg.src}
                                description={exp.CMSChartImg.desc}
                                lg_size="w-full"
                                maxH="max-h-[34vh] md:max-h-[36vh] lg:max-h-[36vh]"
                            />
                        </motion.div>

                        <motion.div {...subtleHover} className="w/[90%] sm:w/[80%] lg:w/full">
                            <ProjectImage
                                alt={exp.PMSChartImg.alt}
                                src={exp.PMSChartImg.src}
                                description={exp.PMSChartImg.desc}
                                lg_size="w-full"
                                maxH="max-h-[34vh] md:max-h-[36vh] lg:max-h-[36vh]"
                            />
                        </motion.div>
                    </div>
                </div>
            ),
            images: true,
        },
        {
            key: "expenses-view",
            title: "Expenses View",
            desc: <p className="font-raleway text-slate-100/90text-left">{exp.expViewDesc}</p>,
            media: (
                <div className="flex flex-col gap-4 items-center justify-center">
                    <motion.div {...subtleHover} className="w-full">
                        <ProjectImage
                            alt={exp.ExpViewImg.alt}
                            src={exp.ExpViewImg.src}
                            description={exp.ExpViewImg.desc}
                            lg_size="w-full"
                            maxH="max-h-[100vh] lg:max-h-[35vh]"
                        />
                    </motion.div>
                    <motion.div {...subtleHover} className="w-full">
                        <ProjectImage
                            alt="Expenses Recorder - Past Month Spending Chart Example"
                            src="/projects/exprec/exprec_expview_details.png"
                            description="A snippet of an example list of expenses for the selected month."
                            lg_size="w-full"
                            maxH="max-h-[100vh] lg:max-h-[35vh]"
                        />
                    </motion.div>
                </div>
            ),
            images: true,
        },
        {
            key: "budgets",
            title: "Budgets Page",
            desc: <p className="font-ralewaytext-slate-100/90 text-left">{exp.budgetPageDesc}</p>,
            media: (
                <motion.div {...subtleHover} className="w-full">
                    <ProjectImage
                        alt="Expenses Recorder - Expenses Month Summary Example"
                        src="/projects/exprec/exprec_budget.png"
                        description="A snippet of the budget page, where I am able to modify the amounts to fit my financial needs."
                        size={512}
                        lg_size="w-3/4"
                    />
                </motion.div>
            ),
            images: true,
        },
        {
            key: "trip-final",
            title: "Final Thoughts",
            desc: (
                <div className="space-y-4 font-raleway text-slate-100/90  text-left">
                    <p>{exp.finalThoughts}</p>
                </div>
            ),
            media: (
                <div className="w-full max-w-2xl">
                    <h2 className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-extrabold text-amber-400 font-rubikmono mb-4">
                        Trip Expenditures
                    </h2>
                    <div className="space-y-4 font-raleway text-slate-100/90  text-left">
                        <p>{exp.tripExpenditureDesc}</p>
                    </div>
                </div>
            ),
            images: true,
            mediaLeft: true,
        },
    ]
}
