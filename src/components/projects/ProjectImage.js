import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

export const ProjectImage = ({ alt, src, description, lg_size, maxH }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    const maxHClasses = maxH ?? "max-h-full"

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!isOpen) return

        const onKeyDown = (event) => {
            if (event.key === "Escape") setIsOpen(false)
        }

        const originalOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"
        window.addEventListener("keydown", onKeyDown)

        return () => {
            document.body.style.overflow = originalOverflow
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [isOpen])

    return (
        <>
            {mounted && isOpen && createPortal(
                <div
                    className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/48 px-4 py-6 backdrop-blur-xl"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="w-full max-w-5xl overflow-hidden rounded-[20px] border border-white/10 bg-[rgba(30,41,59,0.34)] shadow-[0_24px_80px_rgba(2,8,23,0.5)] backdrop-blur-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-center justify-between gap-4 border-b border-white/8 px-4 py-3 sm:px-6 sm:py-4">
                            <span className="font-raleway text-lg text-white sm:text-2xl lg:text-3xl">{alt}</span>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="font-spacemono text-xs uppercase tracking-[0.18em] text-slate-300 transition hover:text-amber-200"
                            >
                                Close
                            </button>
                        </div>
                        <div className="flex items-center justify-center px-4 py-4 sm:px-6 sm:py-6">
                            <img alt={alt} src={src} className={`max-w-full h-auto object-contain rounded-md ${maxHClasses}`} />
                        </div>
                        <div className="px-4 pb-4 sm:px-6 sm:pb-5">
                            <span className="block text-center font-montserrat text-[13px] italic text-white sm:text-sm lg:text-xl">
                                {description}
                            </span>
                        </div>
                    </div>
                </div>
            , document.body)}

            <div className={`mt-4 flex w-full min-w-0 flex-col gap-2 rounded-md sm:mt-5 ${lg_size ? `xl:${lg_size}` : "xl:w-1/3"}`}>
                <div className="w-full rounded-md flex items-center justify-center">
                    <img
                        alt={alt}
                        src={src}
                        onClick={() => setIsOpen(true)}
                        className={`w-full h-auto object-contain bg-transparent hover:cursor-zoom-in ${maxHClasses}`}
                    />
                </div>
                <span className="w-full text-center font-montserrat text-[13px] italic text-slate-950 dark:text-white sm:text-sm">
                    {description}
                </span>
            </div>
        </>
    )
}
