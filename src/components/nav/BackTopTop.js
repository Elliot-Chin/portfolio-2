import { ArrowUpwardOutlined } from '@mui/icons-material'
import { Button } from '@nextui-org/react'
import { useState, useEffect } from 'react'





export const BackToTopButton = () => {

    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className={`z-20 fade-in fixed bottom-3 right-3 lg:bottom-5 lg:right-10 ${showButton ? 'flex' : 'hidden'}
                        `}>
            <Button
                isIconOnly
                size="md"
                radius="md"
                variant="solid"
                color='primary'
                className={`font-oswald dark:bg-blue-600 bg-slate-700  text-lg text-white hover:cursor-pointer lg:w-16 lg:h-16`}
                onClick={scrollToTop}
            >
                <ArrowUpwardOutlined className='lg:text-5xl'/>
            </Button>
        </div>
    )
}