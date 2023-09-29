import MyButton from "./MyButton";





export default function Links({}) {

    const openResumePDF = () => {
        window.open('/files/EC_Resume.pdf', '_blank')
    }

    const openGithub = () => {
        window.open('https://www.github.com/Elliot-Chin', '_blank')
    }

    const openLinkedIn = () => {
        window.open('https://www.linkedin.com/in/elliot-chin-90b4311a6/', '_blank')
    }

    return (
        <div name='links-wrapper' className="w-full flex flex-col items-center p-5 gap-5 bg-transparent">
            <div name='page-title' className="px-5 pt-3
                                            lg:hidden">
                <h1 className="font-lato text-5xl text-[#940650]">
                    Social Links
                </h1>
            </div>

            <div className="items-center p-5 gap-10 flex flex-col">
                <MyButton text={"Resume"}
                            background={'#2f2f2f'}
                            shadowColor={'#a0a0a0'}
                            link={''}
                            onClick={() => openResumePDF()} />

                <MyButton text={"Github"}
                            background={'#2f2f2f'}
                            shadowColor={'#a0a0a0'}
                            link={''}
                            onClick={() => openGithub()} />

                <MyButton text={"LinkedIn"}
                            background={'#2f2f2f'}
                            shadowColor={'#a0a0a0'}
                            link={''}
                            onClick={() => openLinkedIn()} />

                <MyButton text={"Email"}
                            background={'#2f2f2f'}
                            shadowColor={'#a0a0a0'}
                            link={'mailto:ychin@unb.ca?subject=CONTACT: ELLIOT CHIN PORTFOLIO'} />
            </div>
        </div>
    )
}