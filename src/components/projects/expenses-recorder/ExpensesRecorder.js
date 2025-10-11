import Navbar from "@/components/nav/Navbar"
import { BackToTopButton } from "@/components/nav/BackTopTop"
import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { useDesktop } from "@/components/hooks/useDesktop"

import DesktopLayout from "./DesktopLayout"
import MobileLayout from "./MobileLayout"
import { buildSections } from "./sectionData"
import { DURATION_MS, fadeIn, slideLeft, slideRight, slideUp, backBtnFade } from "./animations"

// Data deps kept here so relative imports remain identical to your original page file:
import { ECAvatarLink, exp } from "../../../../public/data/Projects"
import { linkedInLink } from "../../../../public/data/Links"
import { eChin } from "../../../../public/data/People"

export default function ExpensesRecorder() {
    const isDesktop = useDesktop()
    const [name, setName] = useState("Contributor")
    const [scrolledOnce, setScrolledOnce] = useState(false)
    const [progress, setProgress] = useState(0)
    const [active, setActive] = useState(0)
    const [isSwitching, setIsSwitching] = useState(false)

    const sections = useMemo(
        () =>
            buildSections({
                name,
                setName,
                exp,
                ECAvatarLink,
                linkedInLink,
                eChin,
            }),
        [name]
    )

    return (
        <main
            className="fixed inset-0 bg-gradient-to-b from-amber-50 via-amber-100 to-amber-200
            dark:from-amber-900/70 dark:via-amber-950/80 dark:to-black"
        >
            <Navbar pageName="Project - Expenses Recorder" />

            {/* Desktop progress bar */}
            {isDesktop && (
                <div className="fixed top-[56px] left-0 right-0 h-[3px] z-40">
                    <div className="w-[90vw] h-[3px] bg-transparent/20 dark:bg-white/10 backdrop-blur-sm" />
                    <motion.div
                        className="absolute top-0 left-0 h-[3px] bg-amber-600 dark:bg-amber-400"
                        style={{ width: `${Math.round(progress * 100)}%` }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            )}

            {/* Layouts */}
            {!isDesktop ? (
                <MobileLayout sections={sections} fadeIn={fadeIn} slideLeft={slideLeft} slideRight={slideRight} />
            ) : (
                <DesktopLayout
                    sections={sections}
                    active={active}
                    setActive={setActive}
                    progress={progress}
                    setProgress={setProgress}
                    scrolledOnce={scrolledOnce}
                    setScrolledOnce={setScrolledOnce}
                    isSwitching={isSwitching}
                    setIsSwitching={setIsSwitching}
                    DURATION_MS={DURATION_MS}
                    fadeIn={fadeIn}
                    slideUp={slideUp}
                    backBtnFade={backBtnFade}
                />
            )}

            <BackToTopButton />
        </main>
    )
}
