import Image from "next/image"
import MyButton from "./MyButton"






export default function ProjectCard({imgSrc, title, desc, link, setLoading, links, left}) {
    return (
        <div name='project-container' className="w-full flex flex-col p-2 gap-3 rounded-md bg-violet-400 bg-opacity-10 pb-5
                                                lg:flex-row lg:flex-wrap">

            <div className="p-5 rounded-md glass-effect glass-shadow bg-slate-600 bg-opacity-30 flex
                            lg:w-full">
                <h1 name='project-title' className="font-lato text-3xl w-full
                                                    lg:text-5xl">
                    {title}
                </h1>

                <div className="hidden right-0 w-3/4 justify-end items-center
                                lg:flex">
                    <MyButton text="See More" link={link} background={'#6a08bf'} shadowColor={'#c930f0'}  onClick={() => setLoading(true)}/>
                </div>
            </div>

            <div className="gap-3 flex flex-col w-full
                            lg:grid lg:grid-cols-2">
                <div name='image-wrapper'>
                    <Image
                        src={imgSrc}
                        objectFit="cover"
                        height={512}
                        width={512}
                        unoptimized
                        className="rounded-md w-full"
                    />
                </div>

                <div name='project-desc' className="rounded-md flex flex-col justify-center">
                    <div className="p-5 rounded-md glass-effect glass-shadow bg-slate-600 bg-opacity-30
                                    lg:h-full">
                        <p name='desc-context' className="font-inclusive-sans
                                                        lg:px-0 lg:text-lg"
                            dangerouslySetInnerHTML={{__html:desc}}/>
                    </div>
                </div>
            </div>

            {links && <div className="p-5 rounded-md glass-effect glass-shadow bg-slate-600 bg-opacity-30 flex flex-col
                                        lg:w-full">
                <div className="flex gap-3 font-roboto-condensed
                                lg:text-2xl">
                {
                    links.map((l,i) => (
                        <span title={l.tooltip} className="px-2 py-1 rounded-full w-fit transition-all duration-300 bg-opacity-30 glass-effect glass-shadow
                                        hover:cursor-pointer hover:border-purple-400 hover:bg-slate-400"
                            onClick={() => window.open(l.link, '_blank')}>
                            {l.title}
                        </span>
                    ))
                }
                </div>
            </div>}
            
            

            <div className="items-center flex flex-col mt-3
                            lg:hidden">
                <MyButton text="See More" link={link} background={'#6a08bf'} shadowColor={'#c930f0'}  onClick={() => setLoading(true)}/>
            </div>
        </div>
    )
}