// components/nav/Navbar.jsx
import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { Loader } from "./Loader"
import { Menu as MenuIcon, Close as CloseIcon, AccountTreeOutlined } from "@mui/icons-material"
import {
    ApartmentOutlined,
    ArticleOutlined,
    ContactSupportOutlined,
    HomeOutlined,
} from "@mui/icons-material"

export default function Navbar({ pageName = '' }) {
    const router = useRouter()
    const [selectedName, setSelectedName] = useState("")
    const [isLoading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    const links = [
        { href: "/", label: "Home", icon: <HomeOutlined fontSize="small" /> },
        { href: "/experiences", label: "Experiences", icon: <ApartmentOutlined fontSize="small" /> },
        { href: "/projects", label: "Projects", icon: <AccountTreeOutlined fontSize="small" /> },
        { href: "/resume", label: "Resume", icon: <ArticleOutlined fontSize="small" /> },
        { href: "/contact", label: "Contact", icon: <ContactSupportOutlined fontSize="small" /> },
    ]

    const isActive = (href) => router.pathname === href
    const currentPage = links.find((l) => isActive(l.href))

    // lock body scroll when menu is open
    useEffect(() => {
        if (open) document.body.classList.add("overflow-hidden")
        else document.body.classList.remove("overflow-hidden")
        return () => document.body.classList.remove("overflow-hidden")
    }, [open])

    // close menu on route change start
    useEffect(() => {
        const handleStart = () => setOpen(false)
        router.events.on("routeChangeStart", handleStart)
        return () => router.events.off("routeChangeStart", handleStart)
    }, [router.events])

    // stop loader on route complete/error
    useEffect(() => {
        const stop = () => setLoading(false)
        router.events.on("routeChangeComplete", stop)
        router.events.on("routeChangeError", stop)
        return () => {
            router.events.off("routeChangeComplete", stop)
            router.events.off("routeChangeError", stop)
        }
    }, [router.events])

    // close on ESC
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setOpen(false)
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [])

    const navOrNoop = useCallback(
        (href, label, e) => {
            if (isActive(href)) {
                e?.preventDefault()
                setOpen(false)
                return
            }
            setSelectedName(label)
            setLoading(true)
            setOpen(false)
        },
        [router.pathname]
    )

    return (
        <>
            {isLoading && <Loader pageName={selectedName} />}

            {/* Top bar */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
                <div className="mx-auto max-w-6xl px-4 h-14 flex items-center">
                    {/* MOBILE: current page title (left) */}
                    <div className="sm:hidden flex items-center gap-2 text-amber-200 font-raleway font-semibold tracking-wide">
                        {currentPage?.icon}
                        {currentPage?.label || pageName}
                    </div>

                    {/* Desktop links (center) — unchanged from your original desktop layout */}
                    <ul className="hidden sm:flex justify-center gap-8 w-full text-lg text-amber-200">
                        {links.map(({ href, label, icon }) => {
                            const active = isActive(href)
                            return (
                                <li key={href} className="relative">
                                    <Link
                                        href={href}
                                        aria-current={active ? "page" : undefined}
                                        aria-disabled={active ? "true" : undefined}
                                        onClick={(e) => navOrNoop(href, label, e)}
                                        className={`flex items-center gap-2 transition-colors ${active
                                            ? "text-amber-400 pointer-events-none cursor-default"
                                            : "hover:text-amber-400"
                                            }`}
                                    >
                                        {icon}
                                        {label}
                                    </Link>
                                    {active && (
                                        <span className="absolute -bottom-2 left-0 right-0 mx-auto h-[2px] w-full bg-amber-400 rounded-full" />
                                    )}
                                </li>
                            )
                        })}
                    </ul>

                    {/* Mobile hamburger (right) */}
                    <div className="sm:hidden ml-auto">
                        <button
                            aria-label={open ? "Close menu" : "Open menu"}
                            onClick={() => setOpen((v) => !v)}
                            className="p-2 rounded-xl text-amber-200 hover:text-amber-400 hover:bg-white/5 active:scale-95 transition"
                        >
                            {open ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile full-screen overlay menu (unchanged) */}
            <div
                className={`sm:hidden fixed inset-0 z-[49] transition-opacity duration-200 ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                    }`}
            >
                {/* background */}
                <div
                    onClick={() => setOpen(false)}
                    className="absolute inset-0 bg-black/70 backdrop-blur-md"
                />

                {/* panel */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-8 text-amber-100">
                    {links.map(({ href, label, icon }) => {
                        const active = isActive(href)
                        return (
                            <Link
                                key={href}
                                href={href}
                                aria-current={active ? "page" : undefined}
                                aria-disabled={active ? "true" : undefined}
                                onClick={(e) => navOrNoop(href, label, e)}
                                className={`w-full max-w-sm text-center py-4 rounded-2xl border text-lg font-medium tracking-wide flex items-center justify-center gap-3 transition
                  ${active
                                        ? "text-amber-400 border-amber-400/60 pointer-events-none cursor-default bg-white/5"
                                        : "bg-white/5 hover:bg-white/10 active:bg-white/15 border-white/10"
                                    }`}
                            >
                                {icon}
                                {label}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
