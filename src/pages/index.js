import Head from "next/head"
import { useEffect, useRef } from "react"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import { HomeTopNav } from "@/components/nav/HomeTopNav"

import { useScrollProgress } from "@/components/hooks/useScrollProgress"
import { useScreenSnap } from "@/components/hooks/useScreenSnap"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutIntroSection } from "@/components/sections/AboutIntroSection"

export default function Home() {
    const containerRef = useRef(null)

    useScrollProgress(containerRef)
    useScreenSnap(containerRef)

    useEffect(() => {
        document.body.classList.add("home-grid-bg")
        return () => document.body.classList.remove("home-grid-bg")
    }, [])

    return (
        <main
            ref={containerRef}
            className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth overscroll-contain"
        >
            <HomeTopNav containerRef={containerRef} />
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
