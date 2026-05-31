import { ArrowUpwardOutlined } from "@mui/icons-material"
import { useEffect, useState } from "react"

export const BackToTopButton = ({ targetRef }) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const el = targetRef?.current || window
        const getTop = () => (targetRef?.current ? targetRef.current.scrollTop : window.scrollY)

        const onScroll = () => setShow(getTop() > 200)

        el.addEventListener("scroll", onScroll, { passive: true })
        onScroll()
        return () => el.removeEventListener("scroll", onScroll)
    }, [targetRef])

    const scrollToTop = () => {
        const node = targetRef?.current || document.scrollingElement || document.documentElement
        const isContainer = !!targetRef?.current

        const hadSnap =
            isContainer &&
            (node.classList.contains("snap-y") || node.classList.contains("snap-mandatory"))
        if (hadSnap) node.classList.add("snap-none")

        const firstSection = isContainer
            ? targetRef.current.querySelector("section")
            : document.querySelector("main section, section")

        if (firstSection) {
            firstSection.scrollIntoView({ behavior: "smooth", block: "start" })
        } else {
            node.scrollTo({ top: 0, behavior: "smooth" })
        }

        let done = false
        const correct = () => {
            if (done) return
            done = true
            if (node.scrollTop > 2) node.scrollTo({ top: 0, behavior: "auto" })
            if (hadSnap) node.classList.remove("snap-none")
            cleanup()
        }

        const onScrollEnd = () => correct()
        node.addEventListener?.("scrollend", onScrollEnd, { once: true })

        const t = setTimeout(correct, 600)

        let resizeTimer
        const onVVResize = () => {
            clearTimeout(resizeTimer)
            resizeTimer = setTimeout(() => {
                if (!done && node.scrollTop > 2) correct()
            }, 150)
        }
        const vv = window.visualViewport
        vv?.addEventListener("resize", onVVResize)

        function cleanup() {
            node.removeEventListener?.("scrollend", onScrollEnd)
            clearTimeout(t)
            vv?.removeEventListener("resize", onVVResize)
        }
    }

    return (
        <div className={`fixed bottom-3 right-3 z-50 lg:bottom-5 lg:right-10 ${show ? "flex" : "hidden"}`}>
            <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="home-btn home-btn-secondary home-btn-icon text-slate-100"
            >
                <ArrowUpwardOutlined style={{ fontSize: 18 }} />
            </button>
        </div>
    )
}
