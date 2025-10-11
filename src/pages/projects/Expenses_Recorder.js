import { BackToTopButton } from "@/components/nav/BackTopTop";
import Navbar from "@/components/nav/Navbar";
import { ProjectImage } from "@/components/projects/ProjectImage";
import { AvatarGroup, Divider, Avatar, Progress } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { ECAvatarLink, exp } from "../../../public/data/Projects";
import { linkedInLink } from "../../../public/data/Links";
import { eChin } from "../../../public/data/People";



export default function ExpensesRecorder() {

    const [name, setName] = useState('Contributor')

    return (
        <main className="min-h-screen h-fit dark:bg-slate-800 bg-slate-300 border border-transparent flex flex-col items-center pb-10
        lg:h-fit">

            <Navbar />

            <BackToTopButton />

            <div className=" rounded-lg w-11/12 overflow-hidden fade-in flex flex-col
                            lg:w-1/5">
                <Image
                    alt={exp.ExpLogoImg.alt}
                    height={256}
                    src={exp.ExpLogoImg.src}
                    width={256}
                    className="w-full"
                    priority
                />
            </div>

            <Divider
                className="bg-slate-500 mt-5 w-11/12 mx-auto mb-5
                            lg:w-1/2"
            />

            <div className="px-2 w-full flex gap-5 fade-in
            lg:w-1/2 lg:justify-between">
                <div className="flex gap-5">
                    <AvatarGroup color="warning" isBordered className="hover:cursor-pointer">
                        <Avatar name={eChin.name}
                            onMouseEnter={() => setName(eChin.name)}
                            onMouseLeave={() => setName("Contributor")}
                            onClick={() => window.open(linkedInLink, '_blank')}
                            src={ECAvatarLink} />
                    </AvatarGroup>

                    <div className="flex flex-col">
                        <span className="font-montserrat dark:text-white text-slate-950 text-xl lg:text-3xl">{name}</span>
                        <span className="font-oswald dark:text-white text-slate-950 text-sm">{exp.duration}</span>
                    </div>
                </div>
            </div>



            <Divider
                className="bg-slate-500 mt-5 w-11/12 mx-auto mb-5
                            lg:w-1/2"
            />

            <div className="flex flex-col gap-5 fade-in
                            lg:w-1/2">
                <div className="w-full px-2 flex flex-col gap-2">
                    <span className="dark:text-white text-amber-700 text-3xl font-bold font-rubikmono ">
                        TLDR
                    </span>
                    <p className="font-raleway dark:text-slate-300 text-slate-900">
                        {exp.TLDR}
                    </p>
                </div>

                <div className="w-full px-2 flex flex-col gap-2">
                    <span className="dark:text-white text-amber-700 text-3xl font-bold font-rubikmono ">
                        BREAKDOWN OF LANGUAGES USED
                    </span>

                    <div className="rounded-md px-3 py-2 glass-effect dark:bg-slate-950 bg-gray-400 bg-opacity-30 flex flex-col
                                    ">
                        <div className="flex flex-col gap-2 mb-5">
                            {
                                exp.languages.map((language, index) => (
                                    <Progress
                                        key={index}
                                        label={language.label}
                                        value={language.value}
                                        classNames={{
                                            base: "max-w-md",
                                            track: "bg-transparent",
                                            indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                                            label: "tracking-wider dark:text-white text-slate-950 font-spacemono",
                                        }}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="w-full px-2 flex flex-col gap-2">
                    <span className="dark:text-white text-amber-700 text-3xl font-bold font-rubikmono ">
                        LEGACY VERSION
                    </span>
                    <p dangerouslySetInnerHTML={{ __html: exp.legacyVersion }} className="font-raleway dark:text-slate-300 text-slate-900" />

                    <ProjectImage
                        alt={'Expenses Recorder - Initial Prototype'}
                        src={'/projects/exprec/old_exprec.png'}
                        description={'Expenses Recorder - Initial Prototype written with Java Swing UI Library. Some values are masked for privacy reasons.'}
                        size={'w-3/4'}
                        lg_size={'w-1/3'}
                    />

                    <span className="dark:text-white text-amber-700 text-3xl font-bold font-rubikmono mt-5">
                        CURRENT VERSION
                    </span>
                    <p dangerouslySetInnerHTML={{ __html: exp.currentVersion }} className="font-raleway dark:text-slate-300 text-slate-900" />

                    <span className="dark:text-white text-amber-700 text-3xl font-bold font-rubikmono mt-5">
                        NEW COMPONENTS
                    </span>

                    <div className="w-full flex flex-col gap-2">
                        <span className="dark:text-white text-slate-950 text-xl font-bold font-spacemono">
                            Dashboard
                        </span>
                        <p className="font-raleway dark:text-slate-300 text-slate-900">
                            {exp.dashboardDesc}
                        </p>

                        <div className="flex flex-col gap-2
                                    lg:flex-row">
                            <ProjectImage
                                alt={exp.CMSChartImg.alt}
                                src={exp.CMSChartImg.src}
                                description={exp.CMSChartImg.desc}
                                size={'w-3/4'}
                                lg_size={'w-1/3'}
                            />
                            <ProjectImage
                                alt={exp.PMSChartImg.alt}
                                src={exp.PMSChartImg.src}
                                description={exp.PMSChartImg.desc}
                                size={'w-3/4'}
                                lg_size={'w-1/3'}
                            />
                        </div>

                        <span className="dark:text-white text-slate-950 text-xl font-bold font-spacemono">
                            Expenses View
                        </span>
                        <p className="font-raleway dark:text-slate-300 text-slate-900">
                            {exp.expViewDesc}
                        </p>

                        <div className="flex flex-col gap-2">
                            <ProjectImage
                                alt={exp.ExpViewImg.alt}
                                src={exp.ExpViewImg.src}
                                description={exp.ExpViewImg.desc}
                                size={'w-3/4'}
                                lg_size={'w-1/2'}
                            />
                            <ProjectImage
                                alt={'Expenses Recorder - Past Month Spending Chart Example'}
                                src={'/projects/exprec/exprec_expview_details.png'}
                                description={'A snippet of an example list of expenses for the selected month.'}
                                size={'w-3/4'}
                                lg_size={'w-1/2'}
                            />
                        </div>

                        <span className="dark:text-white text-slate-950 text-xl font-bold font-spacemono">
                            Budgets Page
                        </span>
                        <p className="font-raleway dark:text-slate-300 text-slate-900">
                            {exp.budgetPageDesc}
                        </p>

                        <div className="flex flex-col gap-2
                                    lg:flex-row">
                            <ProjectImage
                                alt={'Expenses Recorder - Expenses Month Summary Example'}
                                src={'/projects/exprec/exprec_budget.png'}
                                description={'A snippet of the budget page, where I am able to modify the amounts to fit my financial needs.'}
                                size={'w-3/4'}
                                lg_size={'w-1/2'}
                            />
                        </div>

                        <span className="dark:text-white text-slate-950 text-xl font-bold font-spacemono">
                            Trip Expenditures
                        </span>
                        <p className="font-raleway dark:text-slate-300 text-slate-900">
                            {exp.tripExpenditureDesc}
                        </p>
                    </div>


                    <div className="w-full flex flex-col gap-2 mt-5">
                        <span className="dark:text-white text-amber-700 text-3xl font-bold font-rubikmono ">
                            FINAL THOUGHTS
                        </span>
                        <p className="font-raleway dark:text-slate-300 text-slate-900">
                            {exp.finalThoughts}
                        </p>
                    </div>

                    <div className="flex justify-center items-center gap-5 px-2 mt-5">
                        <Divider className="bg-amber-600 w-1/3 h-1" />
                        <span className="dark:text-white text-slate-950 text-xl font-rubikmono w-1/4 text-center">END</span>
                        <Divider className="bg-amber-600 w-1/3 h-1" />
                    </div>
                </div>
            </div>
        </main>
    )
}