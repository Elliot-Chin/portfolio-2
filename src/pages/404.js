import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { ModelMissingAnimation } from "@/components/avatar/Model_MissingAnimation"
import { Button } from "@nextui-org/react"

export default function Custom404() {
    const router = useRouter()
    const [show, setShow] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 300)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <Head>
                <title>Lost? | Page Not Found</title>
            </Head>

            {/* Use 100svh to match the *visible* viewport on mobile (no rubber-band scroll) */}
            <div className="relative grid grid-rows-[auto,auto,auto] items-center justify-items-center h-[100svh] overflow-hidden text-center text-amber-950 dark:text-amber-100
        bg-gradient-to-br from-amber-100 via-orange-200 to-pink-200 dark:from-slate-900 dark:via-amber-900 dark:to-rose-900
        px-4"> {/* small side padding to prevent squeeze */}

                {/* Animated glow gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)] animate-pulse blur-3xl pointer-events-none" />

                {/* Row 1: Model (kept small on phones) */}
                <div className={`row-start-1 transition-opacity duration-700 ${show ? "opacity-100" : "opacity-0"}`}>
                    <div className="h-[22vh] w-[48vw] max-w-[260px] min-w-[180px] sm:h-[36vh] sm:w-[36vw] sm:max-w-[360px]">
                        {/* If your component supports size props, pass them here */}
                        <ModelMissingAnimation /* scale={1.2} cameraFov={28} cameraZ={3.1} */ />
                    </div>
                </div>

                {/* Row 2: Card */}
                <div className="relative z-10 row-start-2 backdrop-blur-xl bg-white/10 dark:bg-black/20 rounded-2xl shadow-xl
                        px-5 py-5 sm:px-8 sm:py-6 w-full max-w-md">
                    <h1 className="text-4xl sm:text-6xl font-bold mb-2">404</h1>
                    <p className="text-sm sm:text-lg opacity-90 mb-5 sm:mb-6">
                        Looks like this page wandered off somewhere unexpected.
                    </p>

                    <Button
                        color="warning"
                        size="lg"
                        radius="full"
                        className="font-semibold px-6 py-2 bg-gradient-to-r from-amber-500 to-pink-400 hover:from-amber-400 hover:to-pink-300 shadow-md"
                        onPress={() => router.push("/")}
                    >
                        Take me home
                    </Button>
                </div>

                {/* Row 3: Footer line (no absolute; respects grid height) */}
                <p className="row-start-3 z-10 text-[11px] sm:text-xs opacity-60 mt-3 sm:mt-4
                      pb-[max(env(safe-area-inset-bottom),0px)]">
                    Even the best explorers get lost sometimes.
                </p>
            </div>
        </>
    )
}
