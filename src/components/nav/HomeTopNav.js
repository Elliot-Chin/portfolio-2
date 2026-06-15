"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import {
    AlternateEmailOutlined,
    AutorenewOutlined,
    GridViewOutlined,
    HomeOutlined,
    PsychologyAltOutlined,
} from "@mui/icons-material"

function isRouteActive(currentPath, href) {
    if (!href) return false
    if (href === "/") return currentPath === "/"
    return currentPath === href || currentPath.startsWith(`${href}/`)
}

function NavItem({ item, isActive, onHoverStart, onHoverEnd, onNavigateStart, itemRef }) {
    const className = `relative inline-flex h-14 items-center font-spacemono text-[12px] font-bold transition ${
        isActive ? "cursor-default !text-white" : "!text-white hover:!text-white"
    }`

    if (item.href) {
        if (isActive) {
            return (
                <span
                    ref={itemRef}
                    aria-current="page"
                    className={className}
                    style={{ color: "#ffffff" }}
                >
                    {item.label}
                </span>
            )
        }

        return (
            <a
                ref={itemRef}
                href={item.href}
                className={className}
                style={{ color: "#ffffff" }}
                onClick={(event) => onNavigateStart?.(event, item)}
                onMouseEnter={onHoverStart}
                onFocus={onHoverStart}
                onMouseLeave={onHoverEnd}
                onBlur={onHoverEnd}
            >
                {item.label}
            </a>
        )
    }

    return (
        <button
            ref={itemRef}
            type="button"
            onClick={item.onClick}
            onMouseEnter={onHoverStart}
            onFocus={onHoverStart}
            onMouseLeave={onHoverEnd}
            onBlur={onHoverEnd}
            className={className}
            style={{ color: "#ffffff" }}
        >
            {item.label}
        </button>
    )
}

function MobileNavItem({ item, isActive, onNavigateStart }) {
    const isLoading = item.isLoading
    const itemClassName = `relative flex min-h-[76px] flex-col items-center justify-center gap-2 px-2 py-3 transition ${
        isActive
            ? "bg-[rgba(251,146,60,0.14)] text-[rgb(251,146,60)]"
            : "text-white hover:bg-white/[0.04] hover:text-white"
    }`
    const Icon = item.Icon

    const iconNode = isLoading
        ? <AutorenewOutlined sx={{ fontSize: 26 }} className="animate-spin" />
        : <Icon sx={{ fontSize: 26 }} />

    if (isActive && !isLoading) {
        return (
            <span aria-current="page" className={itemClassName}>
                {iconNode}
                <span className="font-spacemono text-[11px] font-bold tracking-[-0.03em]">
                    {item.label}
                </span>
            </span>
        )
    }

    return (
        <a
            href={item.href}
            className={itemClassName}
            onClick={(event) => onNavigateStart(event, item)}
        >
            {iconNode}
            <span className="font-spacemono text-[11px] font-bold tracking-[-0.03em]">
                {item.label}
            </span>
        </a>
    )
}

export function HomeTopNav({
    brandLabel = "Elliot Chin",
    brandOnClick,
    brandHref = "/",
    centerItems,
    resumeHref = "/resume",
}) {
    const router = useRouter()
    const currentPath = router.asPath?.split("?")[0] ?? router.pathname

    const navRailRef = useRef(null)
    const navItemRefs = useRef({})
    const hoverResetTimerRef = useRef(null)

    const [hoveredLabel, setHoveredLabel] = useState(null)
    const [pendingLabel, setPendingLabel] = useState(null)
    const [underlineStyle, setUnderlineStyle] = useState({ opacity: 0, transform: "translateX(0px)", width: 0 })
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false)

    const items = useMemo(
        () => centerItems ?? [
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: "Resume", href: "/resume" },
            { label: "Contact", href: "/contact" },
        ],
        [centerItems]
    )

    const mobileItems = useMemo(
        () => [
            { label: "Home", href: "/", Icon: HomeOutlined },
            { label: "Projects", href: "/projects", Icon: GridViewOutlined },
            { label: "Resume", href: "/resume", Icon: PsychologyAltOutlined },
            { label: "Contact", href: "/contact", Icon: AlternateEmailOutlined },
        ],
        []
    )

    const activeItem = useMemo(
        () => items.find((item) => item.href && isRouteActive(currentPath, item.href)) ?? null,
        [currentPath, items]
    )
    const underlineTargetLabel = hoveredLabel ?? pendingLabel ?? activeItem?.label ?? null
    const isUnderlinePending = Boolean(pendingLabel)

    useEffect(() => {
        setPendingLabel(null)
    }, [currentPath])

    useEffect(() => {
        const rail = navRailRef.current
        const label = underlineTargetLabel
        if (!rail || !label) {
            setUnderlineStyle((current) => (current.opacity === 0 ? current : { ...current, opacity: 0 }))
            return
        }

        const target = navItemRefs.current[label]
        if (!target) {
            setUnderlineStyle((current) => (current.opacity === 0 ? current : { ...current, opacity: 0 }))
            return
        }

        const railRect = rail.getBoundingClientRect()
        const targetRect = target.getBoundingClientRect()
        const nextStyle = {
            opacity: 1,
            width: targetRect.width,
            transform: `translateX(${targetRect.left - railRect.left}px)`,
        }
        setUnderlineStyle((current) => {
            if (
                current.opacity === nextStyle.opacity &&
                current.width === nextStyle.width &&
                current.transform === nextStyle.transform
            ) {
                return current
            }
            return nextStyle
        })
    }, [underlineTargetLabel, items])

    useEffect(() => {
        return () => {
            if (hoverResetTimerRef.current) {
                window.clearTimeout(hoverResetTimerRef.current)
            }
        }
    }, [])

    useEffect(() => {
        const onResize = () => {
            const rail = navRailRef.current
            const label = hoveredLabel ?? activeItem?.label ?? null
            if (!rail || !label) return
            const target = navItemRefs.current[label]
            if (!target) return
            const railRect = rail.getBoundingClientRect()
            const targetRect = target.getBoundingClientRect()
            const nextStyle = {
                opacity: 1,
                width: targetRect.width,
                transform: `translateX(${targetRect.left - railRect.left}px)`,
            }
            setUnderlineStyle((current) => {
                if (
                    current.opacity === nextStyle.opacity &&
                    current.width === nextStyle.width &&
                    current.transform === nextStyle.transform
                ) {
                    return current
                }
                return nextStyle
            })
        }

        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [activeItem?.label, hoveredLabel])

    useEffect(() => {
        const scrollRoot = document.querySelector("main")
        if (!scrollRoot) return

        let lastScrollTop = scrollRoot.scrollTop
        let ticking = false

        const updateMobileNav = () => {
            const currentScrollTop = scrollRoot.scrollTop
            const maxScrollTop = scrollRoot.scrollHeight - scrollRoot.clientHeight
            const atTop = currentScrollTop <= 12
            const atBottom = maxScrollTop - currentScrollTop <= 12
            const scrollingDown = currentScrollTop > lastScrollTop
            const scrollDelta = Math.abs(currentScrollTop - lastScrollTop)

            if (atTop || atBottom) {
                setIsMobileNavVisible(true)
            } else if (scrollDelta > 8) {
                setIsMobileNavVisible(!scrollingDown)
            }

            lastScrollTop = currentScrollTop
            ticking = false
        }

        const onScroll = () => {
            if (ticking) return
            ticking = true
            window.requestAnimationFrame(updateMobileNav)
        }

        setIsMobileNavVisible(false)
        scrollRoot.addEventListener("scroll", onScroll, { passive: true })

        return () => {
            scrollRoot.removeEventListener("scroll", onScroll)
        }
    }, [currentPath])

    function startNavigation(href, label) {
        if (!href || isRouteActive(currentPath, href)) return

        if (hoverResetTimerRef.current) {
            window.clearTimeout(hoverResetTimerRef.current)
            hoverResetTimerRef.current = null
        }

        setHoveredLabel(null)
        setPendingLabel(label ?? null)
        setIsMobileNavVisible(true)
        router.push(href)
    }

    return (
        <>
            <nav className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/6 bg-[#091528]/92 backdrop-blur-md">
                <div className="mx-auto flex h-14 w-full max-w-[96rem] items-center justify-between gap-3 px-4 sm:px-10 lg:px-14">
                    {brandOnClick ? (
                        <button
                            type="button"
                            onClick={brandOnClick}
                            className="font-spacemono text-[0.92rem] font-bold uppercase tracking-[-0.04em] !text-white sm:text-[1.15rem]"
                            style={{ color: "#ffffff" }}
                        >
                            {brandLabel}
                        </button>
                    ) : (
                        <Link
                            href={brandHref}
                            className="font-spacemono text-[0.92rem] font-bold uppercase tracking-[-0.04em] !text-white sm:text-[1.15rem]"
                            style={{ color: "#ffffff" }}
                        >
                            {brandLabel}
                        </Link>
                    )}

                    <div
                        ref={navRailRef}
                        className="relative hidden items-center gap-8 lg:flex"
                        onMouseLeave={() => {
                            if (hoverResetTimerRef.current) window.clearTimeout(hoverResetTimerRef.current)
                            hoverResetTimerRef.current = window.setTimeout(() => {
                                setHoveredLabel(null)
                                hoverResetTimerRef.current = null
                            }, 120)
                        }}
                    >
                        {items.map((item) => (
                            <NavItem
                                key={item.label}
                                item={item}
                                isActive={Boolean(item.href && isRouteActive(currentPath, item.href))}
                                onNavigateStart={(event, navItem) => {
                                    event.preventDefault()
                                    startNavigation(navItem.href, navItem.label)
                                }}
                                onHoverStart={() => {
                                    if (hoverResetTimerRef.current) {
                                        window.clearTimeout(hoverResetTimerRef.current)
                                        hoverResetTimerRef.current = null
                                    }
                                    if (item.href && isRouteActive(currentPath, item.href)) return
                                    setHoveredLabel(item.label)
                                }}
                                onHoverEnd={() => {
                                    if (hoverResetTimerRef.current) window.clearTimeout(hoverResetTimerRef.current)
                                    hoverResetTimerRef.current = window.setTimeout(() => {
                                        setHoveredLabel(null)
                                        hoverResetTimerRef.current = null
                                    }, 120)
                                }}
                                itemRef={(node) => {
                                    if (node) navItemRefs.current[item.label] = node
                                }}
                            />
                        ))}
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute bottom-[0.7rem] left-0 h-px overflow-hidden transition-[transform,width,opacity] duration-300 ease-out"
                            style={underlineStyle}
                        >
                            <span
                                className={`absolute inset-0 bg-amber-200 ${isUnderlinePending ? "nav-underline-pending" : ""}`}
                            />
                        </span>
                    </div>

                    <div className="hidden items-center lg:flex">
                        <Link
                            href="/wtr/Elliot_Chin_Resume.pdf"
                            target="_blank"
                            className="home-btn home-btn-primary min-w-0 px-3 !text-white sm:w-[144px] sm:px-6"
                            style={{ color: "#ffffff" }}
                        >
                            Download
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 lg:hidden">
                <div
                    className={`pointer-events-auto absolute inset-x-0 bottom-0 transition-transform duration-300 ease-out ${
                        isMobileNavVisible ? "translate-y-0" : "translate-y-full"
                    }`}
                >
                    <nav
                        aria-label="Mobile navigation"
                        className="overflow-hidden border-t border-[#6d74ff]/35 bg-[#0b1526]/95 shadow-[0_-12px_40px_rgba(2,8,23,0.38)] backdrop-blur-xl"
                    >
                        <div className="grid grid-cols-4 border-t border-slate-200/6 bg-[linear-gradient(180deg,rgba(16,30,52,0.82)_0%,rgba(10,20,36,0.92)_100%)] pb-[env(safe-area-inset-bottom)]">
                            {mobileItems.map((item) => (
                            <MobileNavItem
                                key={item.label}
                                item={{ ...item, isLoading: pendingLabel === item.label }}
                                isActive={isRouteActive(currentPath, item.href) || pendingLabel === item.label}
                                onNavigateStart={(event, navItem) => {
                                    event.preventDefault()
                                    startNavigation(navItem.href, navItem.label)
                                }}
                            />
                        ))}
                        </div>
                    </nav>
                </div>

                {!isMobileNavVisible && (
                    <div className="pointer-events-auto absolute inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+0.6rem)] flex justify-center">
                        <button
                            type="button"
                            aria-label="Show navigation"
                            onClick={() => setIsMobileNavVisible(true)}
                            className="flex h-7 w-16 items-center justify-center rounded-full border border-[#6d74ff]/35 bg-[#0b1526]/92 shadow-[0_6px_20px_rgba(2,8,23,0.3)] backdrop-blur-xl"
                        >
                            <span className="h-1 w-8 rounded-full bg-slate-300/80" />
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}
