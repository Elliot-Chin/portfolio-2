import Head from "next/head"
import { useEffect, useRef } from "react"
import { BackToTopButton } from "@/components/nav/BackTopTop"

import { useScrollProgress } from "@/components/hooks/useScrollProgress"
import { useScreenSnap } from "@/components/hooks/useScreenSnap"
import { useDesktop } from "@/components/hooks/useDesktop"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutIntroSection } from "@/components/sections/AboutIntroSection"

export default function Home() {
    const containerRef = useRef(null)
    const isDesktop = useDesktop()

    useScrollProgress(containerRef)
    useScreenSnap(containerRef, { enabled: isDesktop })

    useEffect(() => {
        document.body.classList.add("home-grid-bg")
        return () => document.body.classList.remove("home-grid-bg")
    }, [])

    useEffect(() => {
        const root = containerRef.current
        if (!root) return

        const nodes = Array.from(root.querySelectorAll("[data-fade]"))
        if (!nodes.length) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return
                    entry.target.classList.add("!translate-y-0", "!opacity-100")
                    observer.unobserve(entry.target)
                })
            },
            {
                root,
                threshold: 0.14,
                rootMargin: "0px 0px -8% 0px",
            }
        )

        nodes.forEach((node) => observer.observe(node))

        return () => observer.disconnect()
    }, [])

    return (
        <main
            ref={containerRef}
            className={`h-[100dvh] overflow-y-scroll scroll-smooth overscroll-contain ${isDesktop ? "snap-y snap-proximity" : ""}`}
        >
            <BackToTopButton targetRef={containerRef} />
            <Head>
                <title>Elliot Chin — Portfolio</title>
                <meta name="description" content="Hey — I’m Elliot. I like making things that feel good to use." />
            </Head>

            <HeroSection containerRef={containerRef} />

            <AboutIntroSection />
            

        </main>
    )
}
