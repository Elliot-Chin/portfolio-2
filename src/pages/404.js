import Head from "next/head"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { ReactTyped } from "react-typed"
import { ArrowOutwardOutlined, ErrorOutlineOutlined } from "@mui/icons-material"
import { ModelMissingAnimation } from "@/components/avatar/Model_MissingAnimation"

export default function Custom404() {
    const containerRef = useRef(null)

    useEffect(() => {
        document.body.classList.add("home-grid-bg")
        return () => document.body.classList.remove("home-grid-bg")
    }, [])

    return (
        <>
            <Head>
                <title>404 - Contact Lost</title>
                <meta name="description" content="Page not found." />
            </Head>

            <main
                ref={containerRef}
                className="relative min-h-[100svh] bg-transparent text-slate-50 pb-10"
            >

                <section className="px-6 pb-10 pt-20 sm:px-10 sm:pt-24 lg:px-14">
                    <div className="mx-auto grid w-full max-w-[96rem] items-start gap-8 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-center lg:gap-10">
                        <div className="min-w-0">
                            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/18 bg-amber-300/10 px-4 py-2 font-spacemono text-[11px] font-bold uppercase tracking-[0.18em] text-amber-100">
                                <span className="h-2 w-2 rounded-full bg-amber-300" />
                                <span>Route_Failure_Detected</span>
                            </div>

                            <h1 className="mt-6 break-words font-montserrat text-[1.5rem] font-semibold tracking-tight text-blue-100 md:text-[4.8rem]">
                                404_SIGNAL_LOST
                            </h1>

                            <div className="mt-5 text-xs uppercase tracking-[0.16em] text-slate-400 sm:text-sm">
                                <span>SYSLOG: </span>
                                <ReactTyped
                                    strings={["Requested endpoint could not be resolved"]}
                                    typeSpeed={24}
                                    showCursor={false}
                                    startWhenVisible
                                    className="inline"
                                />
                                <span className="typewriter-cursor">_</span>
                            </div>

                            <p className="mt-6 max-w-3xl font-montserrat text-base leading-relaxed text-slate-100/88 sm:text-lg">
                                The requested page is not present in this network map. The destination may have been
                                moved, renamed, or never deployed at this route.
                            </p>

                            <div className="mt-8 grid gap-4 sm:max-w-[42rem] sm:grid-cols-2">
                                <div className="border border-slate-200/10 bg-slate-950/38 p-5 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                    <div className="flex items-center gap-3">
                                        <ErrorOutlineOutlined className="text-amber-300" sx={{ fontSize: 22 }} />
                                        <h2 className="font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                            Trace Result
                                        </h2>
                                    </div>
                                    <p className="mt-4 font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                        No matching resource returned by the current route table.
                                    </p>
                                </div>

                                <div className="border border-slate-200/10 bg-slate-950/38 p-5 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur-[2px]">
                                    <div className="font-spacemono text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                                        Recovery Options
                                    </div>
                                    <p className="mt-4 font-montserrat text-[1rem] leading-relaxed text-slate-300/88">
                                        Return to the portfolio root or pivot to projects, resume, or contact.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                <Link href="/" className="home-btn home-btn-primary w-full sm:w-auto">
                                    <span>Return_Home</span>
                                    <ArrowOutwardOutlined sx={{ fontSize: 17 }} />
                                </Link>
                                <Link href="/projects" className="home-btn home-btn-secondary w-full sm:w-auto">
                                    <span>Open_Projects</span>
                                </Link>
                                <Link href="/contact" className="home-btn home-btn-secondary w-full sm:w-auto">
                                    <span>Contact_Node</span>
                                </Link>
                            </div>
                        </div>

                        <div className="relative mx-auto h-[320px] w-full max-w-[38rem] overflow-hidden border border-slate-200/10 bg-slate-950/28 shadow-[0_18px_50px_rgba(2,8,23,0.28)] backdrop-blur-[2px] sm:h-[420px] lg:h-[520px]">
                            <div className="flex items-center justify-between border-b border-slate-200/8 bg-slate-900/78 px-5 py-3">
                                <div className="flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                                </div>
                                <div className="font-spacemono text-[11px] uppercase tracking-[0.22em] text-amber-100">
                                    Recovery_Session.exe
                                </div>
                            </div>

                            <div className="absolute inset-x-0 bottom-0 top-[49px]">
                                <ModelMissingAnimation cameraZ={4.1} fov={24} modelY={-1.35} modelScale={0.92} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
