"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

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

    const items = useMemo(
        () => centerItems ?? [
            { label: "Portfolio", href: "/" },
            { label: "Skills", href: "/resume" },
            { label: "Projects", href: "/projects" },
            { label: "Contact", href: "/contact" },
        ],
        [centerItems]
    )

    const activeItem = useMemo(
        () => items.find((item) => item.href && item.href === currentPath) ?? null,
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

    function startNavigation(href, label) {
        if (!href || href === currentPath) return

        if (hoverResetTimerRef.current) {
            window.clearTimeout(hoverResetTimerRef.current)
            hoverResetTimerRef.current = null
        }

        setHoveredLabel(null)
        setPendingLabel(label)
        router.push(href)
    }

    return (
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
                            isActive={Boolean(item.href && item.href === currentPath)}
                            onNavigateStart={(event, navItem) => {
                                event.preventDefault()
                                startNavigation(navItem.href, navItem.label)
                            }}
                            onHoverStart={() => {
                                if (hoverResetTimerRef.current) {
                                    window.clearTimeout(hoverResetTimerRef.current)
                                    hoverResetTimerRef.current = null
                                }
                                if (item.href && item.href === currentPath) return
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

                <div className="flex items-center">
                    <Link
                        href={resumeHref}
                        className="home-btn home-btn-primary min-w-0 px-3 !text-white sm:w-[144px] sm:px-6"
                        style={{ color: "#ffffff" }}
                        onClick={(event) => {
                            if (resumeHref === currentPath) {
                                event.preventDefault()
                                return
                            }
                            event.preventDefault()
                            startNavigation(resumeHref, "Resume")
                        }}
                    >
                        Resume
                    </Link>
                </div>
            </div>
        </nav>
    )
}
