import { BackToTopButton } from "@/components/nav/BackTopTop";
import { Nav } from "@/components/nav/Navbar";
import { ProjectImage } from "@/components/projects/ProjectImage";
import YouTubePlayer from "@/components/projects/YoutubePlayer";
import { GitHub, YouTube } from "@mui/icons-material";
import { AvatarGroup, Divider, Avatar, Progress, Button } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { am } from "../../../public/data/Projects";
import { eChin, edChang, edChange, olee, oleeAvatarLink, oleeLinkedInLink, tcamp } from "../../../public/data/People";



export default function AutomatedMusicians() {

    const placeholder = 'Contributors'

    const [name, setName] = useState('placeholder')

    return (
        <main className="min-h-screen h-fit dark:bg-slate-800 bg-slate-300 border border-transparent flex flex-col items-center pb-10
        lg:h-fit">

            <Nav />

            <BackToTopButton />

            <div className=" rounded-lg mt-10 w-11/12 overflow-hidden fade-in
                            lg:w-1/2">
                <Image
                    alt={am.amLogoImg.alt}
                    height={2048}
                    src={am.amLogoImg.src}
                    width={2048}
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
                        <Avatar name={olee.name}
                            onMouseEnter={() => setName(olee.name)}
                            onMouseLeave={() => setName(placeholder)}
                            onClick={() => window.open(olee.linkedin, '_blank')}
                            src={olee.avatarLink} />
                        <Avatar name={tcamp.name}
                            onMouseEnter={() => setName(tcamp.name)}
                            onMouseLeave={() => setName(placeholder)}
                            onClick={() => window.open(tcamp.linkedin, '_blank')}
                            src={tcamp.avatarLink} />
                        <Avatar name={edChang.name}
                            onMouseEnter={() => setName("Edward Chang")}
                            onMouseLeave={() => setName(placeholder)}
                            onClick={() => window.open(edChang.linkedin, '_blank')}
                            src={edChang.avatarLink} />
                        <Avatar name={eChin.name}
                            onMouseEnter={() => setName(eChin.name)}
                            onMouseLeave={() => setName(placeholder)}
                            onClick={() => window.open(eChin.linkedin, '_blank')}
                            src={eChin.avatarLink} />
                    </AvatarGroup>

                    <div className="flex flex-col">
                        <span className="font-montserrat dark:text-white text-slate-950 text-xl lg:text-3xl">{name}</span>
                        <span className="font-oswald dark:text-white text-slate-950 text-sm">{am.duration}</span>
                    </div>
                </div>

                <div className="lg:flex gap-2 w-fit px-2 hidden">
                    <Button
                        isIconOnly
                        size="md"
                        radius="lg"
                        variant="ghost"
                        color='warning'
                        className={`font-oswald text-lg text-red-600 hover:cursor-pointer`}
                        onClick={() => window.open(am.ytLink, '_blank')}
                    >
                        <YouTube />
                    </Button>

                    <Button
                        isIconOnly
                        size="md"
                        radius="lg"
                        variant="ghost"
                        color='warning'
                        className={`font-oswald text-lg dark:text-white text-slate-950 hover:cursor-pointer`}
                        onClick={() => window.open(am.ghLink, '_blank')}
                    >
                        <GitHub />
                    </Button>

                    <Button
                        isIconOnly
                        size="md"
                        radius="lg"
                        variant="ghost"
                        color='warning'
                        className={`font-oswald text-lg dark:text-white text-slate-950 p-2 hover:cursor-pointer`}
                        onClick={() => window.open(am.cbcLink, '_blank')}
                    >
                        <Image
                            width={256}
                            height={256}
                            alt="CBC logo"
                            src={am.cbcLogoImg}
                        />
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
                        radius="lg"
                        variant="ghost"
                        color='warning'
                        className={`font-oswald text-lg text-red-600 hover:cursor-pointer`}
                        onClick={() => window.open(am.ytLink, '_blank')}
                    >
                        <YouTube />
                    </Button>

                    <Button
                        isIconOnly
                        size="md"
                        radius="lg"
                        variant="ghost"
                        color='warning'
                        className={`font-oswald text-lg dark:text-white text-slate-950 hover:cursor-pointer`}
                        onClick={() => window.open(am.ghLink, '_blank')}
                    >
                        <GitHub />
                    </Button>

                    <Button
                        isIconOnly
                        size="md"
                        radius="lg"
                        variant="ghost"
                        color='warning'
                        className={`font-oswald text-lg dark:text-white text-slate-950 p-2 hover:cursor-pointer`}
                        onClick={() => window.open(am.cbcLink, '_blank')}
                    >
                        <Image
                            width={256}
                            height={256}
                            alt="CBC logo"
                            src={am.cbcLogoImg}
                        />
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
                    <span className="dark:text-white text-amber-700 text-3xl font-rubikmono ">
                        TLDR
                    </span>
                    <p className="font-raleway dark:text-slate-300 text-slate-900">
                        {am.TLDR}
                    </p>
                </div>

                <div className="w-full px-2 flex flex-col gap-2">
                    <span className="dark:text-white text-amber-700 text-3xl font-rubikmono ">
                        GENERATED MUSIC
                    </span>
                    <YouTubePlayer videoId={am.ytVideoID} />
                </div>

                <div className="w-full px-2 flex flex-col gap-2">
                    <span className="dark:text-white text-amber-700 text-3xl font-rubikmono ">
                        BREAKDOWN OF LANGUAGES USED
                    </span>

                    <div className="rounded-md px-3 py-2 glass-effect dark:bg-slate-950 bg-slate-400 bg-opacity-30 flex flex-col
                                    ">
                        <div className="flex flex-col gap-2 mb-5">
                            {
                                am.languages.map((language, index) => (
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
                    <span className="dark:text-white text-amber-700 text-3xl font-rubikmono ">
                        COMPONENTS
                    </span>

                    <span className="dark:text-white text-slate-950 text-xl font-bold font-spacemono">
                        Music Algorithms
                    </span>
                    <p className="font-raleway dark:text-slate-300 text-slate-900">
                        {am.musicAlgorithmsDesc}
                    </p>

                    <div className="flex flex-col gap-3
                                    lg:flex-row">
                        <ProjectImage
                            {...am.hStepImg}
                        />

                        <ProjectImage
                            {...am.iScaleImg}
                        />

                        <ProjectImage
                            {...am.aScaleImg}
                        />
                    </div>

                    <span className="dark:text-white text-slate-950 text-xl font-bold font-spacemono mt-3">
                        Pattern Recognition and Extraction
                    </span>
                    <p className="font-raleway dark:text-slate-300 text-slate-900">
                        {am.patternExtractionDesc}
                    </p>

                    <div className="flex flex-col gap-3
                                    lg:flex-row">
                        <ProjectImage
                            {...am.sheetMusicImg}
                        />

                        <ProjectImage
                            {...am.abcFormatImg}
                        />
                    </div>

                    <span className="dark:text-white text-slate-950 text-xl font-bold font-spacemono mt-3">
                        Music Composition Generator
                    </span>
                    <p className="font-raleway dark:text-slate-300 text-slate-900">
                        {am.compositionGenDesc}
                    </p>

                    <div className="flex flex-col gap-3
                                    lg:flex-row">
                        <ProjectImage
                            {...am.pseudocodeImg}
                        />
                    </div>
                </div>

                <div className="w-full px-2 flex flex-col gap-2">
                    <span className="dark:text-white text-amber-700 text-3xl font-rubikmono ">
                        CONCLUSION
                    </span>
                    <p className="font-raleway dark:text-slate-300 text-slate-900">
                        {am.conclusion}
                    </p>
                </div>

                <div className="w-full px-2 flex flex-col gap-2">
                    <span className="dark:text-white text-amber-700 text-3xl font-rubikmono ">
                        FINAL THOUGHTS
                    </span>
                    <p className="font-raleway dark:text-slate-300 text-slate-900">
                        {am.finalThoughts}
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