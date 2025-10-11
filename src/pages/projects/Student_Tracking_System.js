import { BackToTopButton } from "@/components/nav/BackTopTop";
import { Nav } from "@/components/nav/Navbar";
import { GitHub } from "@mui/icons-material";
import { AvatarGroup, Divider, Avatar, Progress, Button } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { sts } from "../../../public/data/Projects";
import { carterMl, eChin, jdr, olee } from "../../../public/data/People";

export default function Student_Tracking_System() {

    const [name, setName] = useState('Contributors')

    return (
        <main className="min-h-screen h-fit dark:bg-slate-800 bg-slate-300 border border-transparent flex flex-col items-center pb-10
        lg:h-fit">

            <Nav />

            <BackToTopButton />

            <div className=" rounded-lg overflow-hidden fade-in items-center flex justify-center
                            lg:w-1/2">
                <Image
                    {...sts.stsLogoImg}
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
                    <AvatarGroup color="warning" isBordered className="hover:cursor-pointer" total={7} max={4}>
                        <Avatar name={olee.name}
                            onMouseEnter={() => setName(olee.name)}
                            onMouseLeave={() => setName("Contributors")}
                            onClick={() => window.open(olee.linkedin, '_blank')}
                            src={olee.avatarLink} />
                        <Avatar name={jdr.name}
                            onMouseEnter={() => setName(jdr.name)}
                            onMouseLeave={() => setName("Contributors")}
                            onClick={() => window.open(jdr.linkedin, '_blank')}
                            src={jdr.avatarLink} />
                        <Avatar name={carterMl.name}
                            onMouseEnter={() => setName(carterMl.name)}
                            onMouseLeave={() => setName("Contributors")}
                            onClick={() => window.open(carterMl.linkedin, '_blank')}
                            src={carterMl.avatarLink} />
                        <Avatar name={eChin.name}
                            onMouseEnter={() => setName(eChin.name)}
                            onMouseLeave={() => setName("Contributors")}
                            onClick={() => window.open(eChin.linkedin, '_blank')}
                            src={eChin.avatarLink} />
                    </AvatarGroup>

                    <div className="flex flex-col">
                        <span className="font-montserrat dark:text-white text-slate-950 text-xl lg:text-3xl">{name}</span>
                        <span className="font-oswald dark:text-white text-slate-950 text-sm">{sts.duration}</span>
                    </div>
                </div>

                <div className="lg:flex gap-2 w-fit px-2 hidden">

                    <Button
                        isIconOnly
                        size="md"
                        radius="md"
                        variant="ghost"
                        color='warning'
                        className={`font-oswald text-lg dark:text-white text-slate-950 hover:cursor-pointer`}
                        onClick={() => window.open(sts.projectRepo, '_blank')}
                    >
                        <GitHub />
                    </Button>

                </div>
            </div>

            <div className="w-full mt-3 lg:hidden">
                <Divider
                    className="bg-slate-500 mt-3 w-11/12 mx-auto mb-3
                            lg:w-1/2"
                />

                <div className="flex gap-2 w-fit px-2">
                    <Button
                        isIconOnly
                        size="md"
                        radius="md"
                        variant="ghost"
                        color='warning'
                        className={`font-oswald text-lg dark:text-white text-slate-950 hover:cursor-pointer`}
                        onClick={() => window.open(sts.projectRepo, '_blank')}
                    >
                        <GitHub />
                    </Button>
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
                    <p className="font-raleway dark:text-slate-300 text-slate-950">
                        {sts.TLDR}
                    </p>
                </div>

                <div className="w-full px-2 flex flex-col gap-2">
                    <span className="dark:text-white text-amber-700 text-3xl font-bold font-rubikmono ">
                        LANGUAGES USED:
                    </span>

                    <div className="rounded-md px-3 py-2 glass-effect dark:bg-slate-950 bg-gray-400 bg-opacity-30 flex flex-col
                                    ">
                        <div className="flex flex-col gap-2 mb-5">
                            {
                                sts.languages.map((language, index) => (
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

                    <span className="dark:text-white text-amber-700 text-3xl font-bold font-rubikmono">
                        PROJECT OUTLINE
                    </span>
                    <span className="dark:text-slate-300 text-slate-950 font-raleway">
                        {sts.projectOutlineDesc}
                    </span>
                    <span className="dark:text-white text-amber-700 text-3xl font-bold font-rubikmono ">
                        INITIAL PHASE
                    </span>
                    <p className="font-raleway dark:text-slate-300 text-slate-950">
                        {sts.initPhaseDesc}
                    </p>

                    <span className="dark:text-white text-amber-700 text-3xl font-bold font-rubikmono ">
                        PROGRESS...
                    </span>
                    <p className="font-raleway dark:text-slate-300 text-slate-950">
                        {sts.progressDesc}
                    </p>

                    <span className="dark:text-white text-amber-700 text-3xl font-bold font-rubikmono ">
                        FINAL STRETCH
                    </span>
                    <p className="font-raleway dark:text-slate-300 text-slate-950">
                        {sts.finalStretchDesc}
                    </p>
                </div>

                <div className="w-full px-2 flex flex-col gap-2">
                    <span className="dark:text-white text-amber-700 text-3xl font-bold font-rubikmono ">
                        FINAL THOUGHTS
                    </span>
                    <p className="font-raleway dark:text-slate-300 text-slate-950">
                        {sts.finalThoughts}
                    </p>
                </div>

                <div className="flex justify-center items-center gap-5 px-2">
                    <Divider className="bg-amber-600 w-1/3 h-1" />
                    <span className="dark:text-white text-slate-950 text-xl font-rubikmono w-1/4 text-center">END</span>
                    <Divider className="bg-amber-600 w-1/3 h-1" />
                </div>

            </div>
        </main>
    )
}