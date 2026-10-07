import { useEffect } from "react"

export function useHomeGridPage(containerRef, { observeFades = true } = {}) {
    useEffect(() => {
        document.body.classList.add("home-grid-bg")
        return () => document.body.classList.remove("home-grid-bg")
    }, [])

    useEffect(() => {
        const root = containerRef.current
        if (!root) return
        const scrollToHash = (hash, smooth) => {
            let id
            try { id = decodeURIComponent(hash.slice(1)) } catch { return false }
            const target = document.getElementById(id)
            if (!target || !root.contains(target)) return false
            const header = document.querySelector('nav[aria-label="Main navigation"]')
            const offset = (header?.getBoundingClientRect().height || 0) + 16
            const top = root.scrollTop + target.getBoundingClientRect().top - root.getBoundingClientRect().top - offset
            root.scrollTo({ top: Math.max(0, top), behavior: smooth && !window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "smooth" : "instant" })
            return true
        }
        const onClick = event => {
            if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
            const link = event.target.closest?.("a[href]")
            if (!link || link.target || link.hasAttribute("download")) return
            const url = new URL(link.href, window.location.href)
            if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || url.search !== window.location.search || !url.hash) return
            if (!scrollToHash(url.hash, true)) return
            event.preventDefault()
            window.history.replaceState(window.history.state, "", url.href)
        }
        const onHashChange = () => scrollToHash(window.location.hash, false)
        root.addEventListener("click", onClick)
        window.addEventListener("hashchange", onHashChange)
        const frame = window.requestAnimationFrame(onHashChange)
        return () => {
            root.removeEventListener("click", onClick)
            window.removeEventListener("hashchange", onHashChange)
            window.cancelAnimationFrame(frame)
        }
    }, [containerRef])

    useEffect(() => {
        if (!observeFades) return

        const root = containerRef.current
        if (!root) return

        const nodes = Array.from(root.querySelectorAll("[data-fade]"))
        if (!nodes.length) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return
                    entry.target.classList.add("!translate-y-0", "!opacity-100")
                    observer.unobserve(entry.target)
                })
            },
            {
                root,
                threshold: 0.14,
                rootMargin: "0px 0px -8% 0px",
            }
        )

        nodes.forEach((node) => observer.observe(node))

        return () => observer.disconnect()
    }, [containerRef, observeFades])
}
