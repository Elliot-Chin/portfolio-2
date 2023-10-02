

export default function ExperienceCard ({title, duration, img, size, summary, links, current, coop}) {


    return (
        <div name='exp-card' className="p-5 flex flex-col gap-5 w-11/12 mx-auto rounded-md glass-effect glass-shadow bg-slate-600 bg-opacity-30">
            <div className="flex flex-col gap-2">
                <h1 className={`font-lato text-3xl ${current? 'text-amber-400': ''}`}>
                    {title}
                </h1>

                <h3 className="font-roboto-condensed text-xl">
                    {duration}
                    {coop && " (Co-Op)"}
                </h3>

                <div className="bg-white px-3 py-2 h-fit rounded-md flex items-center justify-center">
                    <img
                        src={img}
                        height={size}
                        width={size}
                        />
                </div>

                <p name='job summary' className={`font-inclusive-sans py-2 ${links? '': 'rounded-br-md rounded-bl-md'}`} dangerouslySetInnerHTML={{__html: summary}}/>

                {links && <div className="p-2 flex flex-col items-center">
                    {
                        links.map((l, i) => (
                            <span id={i} onClick={() =>  window.open(l.link, '_blank')} className="font-roboto-condensed px-3 py-1 rounded-full glass-effect glass-shadow bg-slate-600 bg-opacity-30 transition-all duration-300
                                            hover:cursor-pointer hover:bg-slate-300 hover:text-slate-900">
                                {l.tooltip}
                            </span>
                        ))
                    }
                </div>}
            </div>
        </div>
    )
}