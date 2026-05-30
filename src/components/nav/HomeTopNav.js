import Link from "next/link"
import { LaptopChromebookOutlined } from "@mui/icons-material"

export function HomeTopNav({ containerRef }) {
    const scrollToSection = (index) => {
        const container = containerRef?.current
        if (!container) return
        const sections = Array.from(container.querySelectorAll("section[data-fade]"))
        const target = sections[index]
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <nav className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/6 bg-[#091528]/92 backdrop-blur-md">
            <div className="mx-auto flex h-14 w-full max-w-[96rem] items-center justify-between px-6 sm:px-10 lg:px-14">
                <button
                    type="button"
                    onClick={() => scrollToSection(0)}
                    className="font-spacemono text-[1.15rem] font-bold uppercase tracking-[-0.04em] text-blue-200"
                >
                    Elliot Chin
                </button>

                <div className="hidden items-center gap-8 lg:flex">
                    <button
                        type="button"
                        onClick={() => scrollToSection(0)}
                        className="font-spacemono text-[12px] font-bold text-slate-200/86 transition hover:text-cyan-200"
                    >
                        Portfolio
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollToSection(1)}
                        className="font-spacemono text-[12px] font-bold text-slate-200/86 transition hover:text-cyan-200"
                    >
                        Skills
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollToSection(2)}
                        className="font-spacemono text-[12px] font-bold text-slate-200/86 transition hover:text-cyan-200"
                    >
                        Research
                    </button>
                    <Link
                        href="/contact"
                        className="font-spacemono text-[12px] font-bold text-slate-200/86 transition hover:text-cyan-200"
                    >
                        Contact
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        aria-label="Console"
                        className="home-btn home-btn-secondary min-w-[112px] text-slate-200/94"
                    >
                        <LaptopChromebookOutlined style={{ fontSize: 17 }} />
                        <span>Console</span>
                    </button>
                    <Link
                        href="/resume"
                        className="home-btn home-btn-primary"
                    >
                        Resume
                    </Link>
                </div>
            </div>
        </nav>
    )
}
