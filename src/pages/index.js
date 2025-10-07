import Head from "next/head"
import { useRef, useState } from "react"
import { useRouter } from "next/router"
import { Loader } from "@/components/nav/Loader"
import { BackToTopButton } from "@/components/nav/BackTopTop"

import { useScrollProgress } from "@/components/hooks/useScrollProgress"
import { getJobDuration } from "@/components/utils/getJobDuration"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutIntroSection } from "@/components/sections/AboutIntroSection"
import { AboutDetailsSection } from "@/components/sections/AboutDetailsSection"

export default function Home() {
    const [pageLoading, setPageLoading] = useState(false)
    const [selectedPage, setSelectedPage] = useState("")
    const router = useRouter()
    const containerRef = useRef(null)

    useScrollProgress(containerRef)

    return (
        <main
            ref={containerRef}
            className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth overscroll-contain"
        >
            <BackToTopButton targetRef={containerRef} />
            <Head>
                <title>Elliot Chin — Portfolio</title>
                <meta name="description" content="Hey — I’m Elliot. I like making things that feel good to use." />
            </Head>

            {pageLoading && <Loader pageName={selectedPage} />}

            <HeroSection
                setSelectedPage={setSelectedPage}
                setPageLoading={setPageLoading}
                router={router}
                containerRef={containerRef}
            />

            <AboutIntroSection getJobDuration={getJobDuration} />

            <AboutDetailsSection />
        </main>
    )
}
