import Link from "next/link"
import { LaptopChromebookOutlined } from "@mui/icons-material"

function NavItem({ item }) {
    if (item.href) {
        return (
            <Link
                href={item.href}
                className="font-spacemono text-[12px] font-bold text-slate-200/86 transition hover:text-cyan-200"
            >
                {item.label}
            </Link>
        )
    }

    return (
        <button
            type="button"
            onClick={item.onClick}
            className="font-spacemono text-[12px] font-bold text-slate-200/86 transition hover:text-cyan-200"
        >
            {item.label}
        </button>
    )
}

export function HomeTopNav({
    containerRef,
    brandLabel = "Elliot Chin",
    brandOnClick,
    brandHref = "/",
    centerItems,
    resumeHref = "/resume",
}) {
    const items = centerItems ?? [
        { label: "Portfolio", href: "/" },
        { label: "Skills", href: "/resume" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
    ]

    return (
        <nav className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/6 bg-[#091528]/92 backdrop-blur-md">
            <div className="mx-auto flex h-14 w-full max-w-[96rem] items-center justify-between px-6 sm:px-10 lg:px-14">
                {brandOnClick ? (
                    <button
                        type="button"
                        onClick={brandOnClick}
                        className="font-spacemono text-[1.15rem] font-bold uppercase tracking-[-0.04em] text-blue-200"
                    >
                        {brandLabel}
                    </button>
                ) : (
                    <Link
                        href={brandHref}
                        className="font-spacemono text-[1.15rem] font-bold uppercase tracking-[-0.04em] text-blue-200"
                    >
                        {brandLabel}
                    </Link>
                )}

                <div className="hidden items-center gap-8 lg:flex">
                    {items.map((item) => (
                        <NavItem key={item.label} item={item} />
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        aria-label="Console"
                        className="home-btn home-btn-secondary w-[144px] text-slate-200/94"
                    >
                        <LaptopChromebookOutlined style={{ fontSize: 17 }} />
                        <span>Console</span>
                    </button>
                    <Link
                        href={resumeHref}
                        className="home-btn home-btn-primary w-[144px]"
                    >
                        Resume
                    </Link>
                </div>
            </div>
        </nav>
    )
}
