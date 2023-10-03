import Loader from '@/components/Loader'
import MyButton from '@/components/MyButton'
import MyLogo from '@/components/MyLogo'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { motionDiv_FloatUp } from '@/components/Config'

export default function Home() {

    const [name, setName] = useState('')
    const [isLoading, setLoading] = useState(false)

    

    useEffect(() => {
        const n = 'Elliot'
        const chars = []
        let index = 0

        const typeCharacter = () => {
            if (index < n.length) {
                chars.push(n[index])
                setName(chars.join(''))
                index += 1
                setTimeout(typeCharacter, 300)
            }
        }
        typeCharacter()
    }, [])

    return (
        <>
            {isLoading && <Loader />}
            
            <div className='scrollbar-none'>
                <MyLogo size={150} isMain/>

                <div name='full-wrapper' className='h-screen overflow-y-auto scrollbar-none justify-center items-center
                                                    lg:flex lg:mx-auto'>
                    <div className="flex justify-center items-center p-5
                                    lg:w-1/3 lg:h-full
                                    xl:pt-20">
                        <div className="glowing relative w-72 h-80 bg-blue-500 rounded-full flex items-center justify-center
                                        before:rounded-full
                                        lg:h-[39rem] lg:w-[25rem]">
                            <div className="relative w-[17.8rem] h-[19.8rem] rounded-full
                                            lg:h-[38.8rem] lg:w-[24.8rem]">
                                <Image
                                    src="/avatar.jpeg"
                                    objectFit="cover"
                                    fill
                                    unoptimized
                                    priority
                                    alt="Avatar Image"
                                    className='rounded-full overflow-hidden index-bg-image'
                                />
                            </div>
                        </div>  
                    </div>

                    <div name='right-wrapper' className='flex flex-col gap-5 mb-16 
                                                        lg:w-1/2 lg:my-auto'>
                        <div name='title' className='w-3/4 mx-auto p-5 gap-3 font-lato items-center flex flex-col
                                                    lg:h-1/4 lg:items-center lg:justify-center lg:my-auto lg:w-5/6'> 
                            <h1 className='w-full text-white text-4xl
                                            md:w-2/3
                                            lg:text-6xl lg:w-5/6'>
                                Hi, my name is
                            </h1>
                            <h3 className='w-full text-amber-300 text-6xl text-left font-roboto-condensed font-bold
                                            md:w-2/3
                                            lg:text-8xl lg:w-5/6'>
                                {name}
                            </h3>
                        </div>

                        <motion.div  {...motionDiv_FloatUp} name='nav-menu' className='flex flex-col items-center justify-center p-5 gap-7
                                                        lg:'>
                            <MyButton text={"🧑‍💻 About Me"}
                                background={'#f2b749'}
                                shadowColor={'#db8b2a'}
                                link={'/about'}
                                onClick={() => setLoading(true)}
                                bClassName={'lg:w-3/4 lg:text-3xl lg:h-14'}/>

                            <MyButton text={"👔 Experiences"}
                                background={'#429bf5'}
                                shadowColor={'#1331f0'}
                                link={'/experiences'}
                                onClick={() => setLoading(true)}
                                bClassName={'lg:w-3/4 lg:text-3xl lg:h-14'}/>

                            <MyButton text={"⚒️ Skills"}
                                background={'#0da305'}
                                shadowColor={'#1ae010'}
                                link={'/skills'}
                                onClick={() => setLoading(true)}
                                bClassName={'lg:w-3/4 lg:text-3xl lg:h-14'}/>

                            <MyButton text={"📂 Projects"}
                                background={'#6a08bf'}
                                shadowColor={'#c930f0'}
                                link={'/projects'}
                                onClick={() => setLoading(true)}
                                bClassName={'lg:w-3/4 lg:text-3xl lg:h-14'}/>

                            <MyButton text={"💬 Contact"}
                                background={'#d907ab'}
                                shadowColor={'#940650'}
                                link={'/contact'}
                                onClick={() => setLoading(true)}
                                bClassName={'lg:w-3/4 lg:text-3xl lg:h-14'}/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}
