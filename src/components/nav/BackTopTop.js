// BackToTopButton.jsx
import { ArrowUpwardOutlined } from '@mui/icons-material'
import { Button } from '@nextui-org/react'
import { useState, useEffect } from 'react'

export const BackToTopButton = ({ targetRef }) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const el = targetRef?.current || window
        const getTop = () =>
            targetRef?.current ? targetRef.current.scrollTop : window.scrollY

        const onScroll = () => setShow(getTop() > 200)

        el.addEventListener('scroll', onScroll, { passive: true })
        onScroll() // set initial state
        return () => el.removeEventListener('scroll', onScroll)
    }, [targetRef])

    const scrollToTop = () => {
        const node = targetRef?.current || document.scrollingElement || document.documentElement
        const isContainer = !!targetRef?.current

        // Temporarily disable snap so it doesn't nudge us off 0
        const hadSnap =
            isContainer &&
            (node.classList.contains('snap-y') || node.classList.contains('snap-mandatory'))
        if (hadSnap) node.classList.add('snap-none')

        // Smooth scroll first (keeps the nice animation)
        const firstSection = isContainer
            ? targetRef.current.querySelector('section')
            : document.querySelector('main section, section')

        if (firstSection) {
            firstSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
            node.scrollTo({ top: 0, behavior: 'smooth' })
        }

        // ---- Correct only AFTER scrolling truly ends ----
        let done = false
        const correct = () => {
            if (done) return
            done = true
            // Tiny nudge ONLY if we’re still a bit off (prevents visible jump)
            if (node.scrollTop > 2) node.scrollTo({ top: 0, behavior: 'auto' })
            if (hadSnap) node.classList.remove('snap-none')
            cleanup()
        }

        // 1) Use scrollend when available (Chrome 115+, Safari 17+)
        const onScrollEnd = () => correct()
        node.addEventListener?.('scrollend', onScrollEnd, { once: true })

        // 2) Fallback timer (matches your smooth duration; tune 500–650ms)
        const t = setTimeout(correct, 600)

        // 3) Handle mobile URL bar resize: wait until viewport stabilizes, then correct
        let resizeTimer
        const onVVResize = () => {
            clearTimeout(resizeTimer)
            resizeTimer = setTimeout(() => {
                if (!done && node.scrollTop > 2) correct()
            }, 150) // debounce
        }
        const vv = window.visualViewport
        vv?.addEventListener('resize', onVVResize)

        function cleanup() {
            node.removeEventListener?.('scrollend', onScrollEnd)
            clearTimeout(t)
            vv?.removeEventListener('resize', onVVResize)
        }
    }





    return (
        <div
            className={`z-50 fixed bottom-3 right-3 lg:bottom-5 lg:right-10 ${show ? 'flex' : 'hidden'
                }`}
        >
            <Button
                isIconOnly
                size="md"
                radius="md"
                variant="solid"
                color="primary"
                className="dark:bg-blue-600 bg-slate-700 text-white lg:w-16 lg:h-16"
                onClick={scrollToTop}
            >
                <ArrowUpwardOutlined className="lg:text-5xl" />
            </Button>
        </div>
    )
}
