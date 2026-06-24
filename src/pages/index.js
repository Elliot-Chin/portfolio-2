import { useRef } from "react"
import { BackToTopButton } from "@/components/nav/BackTopTop"

import { useHomeGridPage } from "@/components/hooks/useHomeGridPage"
import { useScrollProgress } from "@/components/hooks/useScrollProgress"
import { useScreenSnap } from "@/components/hooks/useScreenSnap"
import { useDesktop } from "@/components/hooks/useDesktop"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutIntroSection } from "@/components/sections/AboutIntroSection"
import { SeoHead } from "@/components/seo/SeoHead"

export default function Home() {
    const containerRef = useRef(null)
    const isDesktop = useDesktop()

    useScrollProgress(containerRef)
    useScreenSnap(containerRef, { enabled: isDesktop })
    useHomeGridPage(containerRef)

    return (
        <main
            ref={containerRef}
            className={`h-[100dvh] overflow-y-scroll scroll-smooth overscroll-contain ${isDesktop ? "snap-y snap-proximity" : ""}`}
        >
            <BackToTopButton targetRef={containerRef} />
            <SeoHead
                title="Elliot Chin | OT Cybersecurity and Software Portfolio"
                description="Portfolio of Elliot Chin, featuring OT cybersecurity work, industrial protocol analysis, full-stack development, and applied AI research projects."
                path="/"
            />

            <HeroSection containerRef={containerRef} />

            <AboutIntroSection />
        </main>
    )
}
