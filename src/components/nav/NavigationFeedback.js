import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export function NavigationFeedback() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        let activeControl = null
        let arrow = null
        let previousBusy = null
        let timeout = null
        let pulseTimeout = null
        let pressed = null
        const clear = () => {
            window.clearTimeout(timeout)
            arrow?.removeAttribute("data-loading-arrow")
            if (activeControl) {
                activeControl.removeAttribute("data-navigation-pending")
                activeControl.removeAttribute("data-loading-fallback")
                if (previousBusy == null) activeControl.removeAttribute("aria-busy")
                else activeControl.setAttribute("aria-busy", previousBusy)
            }
            activeControl = null
            arrow = null
            setLoading(false)
        }
        const activate = control => {
            clear()
            activeControl = control
            previousBusy = control.getAttribute("aria-busy")
            control.setAttribute("aria-busy", "true")
            control.setAttribute("data-navigation-pending", "true")
            arrow = [...control.querySelectorAll("span")].find(node => /^[→↗↖←↓↑↘↙➜➔]+$/.test(node.textContent.trim()) && node.children.length === 0)
            if (arrow) arrow.setAttribute("data-loading-arrow", "true")
            else control.setAttribute("data-loading-fallback", "true")
        }
        const start = () => {
            if (!activeControl && pressed?.isConnected) activate(pressed)
            setLoading(true)
            window.clearTimeout(timeout)
            timeout = window.setTimeout(clear, 20000)
        }
        const click = event => {
            if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
            const control = event.target.closest?.("a,button,[role=button]")
            if (!control || control.disabled || control.getAttribute("aria-disabled") === "true") return
            pressed?.removeAttribute("data-click-feedback")
            window.clearTimeout(pulseTimeout)
            pressed = control
            control.setAttribute("data-click-feedback", "true")
            pulseTimeout = window.setTimeout(() => control.removeAttribute("data-click-feedback"), 550)
            if (control.tagName !== "A" || control.hasAttribute("download") || (control.target && control.target !== "_self")) return
            const url = new URL(control.href, window.location.href)
            if (url.origin !== window.location.origin || !/^https?:$/.test(url.protocol)) return
            if (url.pathname === window.location.pathname && url.search === window.location.search) return
            activate(control)
            start()
        }
        router.events.on("routeChangeStart", start)
        router.events.on("routeChangeComplete", clear)
        router.events.on("routeChangeError", clear)
        document.addEventListener("click", click, true)
        window.addEventListener("pageshow", clear)
        return () => {
            router.events.off("routeChangeStart", start)
            router.events.off("routeChangeComplete", clear)
            router.events.off("routeChangeError", clear)
            document.removeEventListener("click", click, true)
            window.removeEventListener("pageshow", clear)
            clear()
            window.clearTimeout(pulseTimeout)
            pressed?.removeAttribute("data-click-feedback")
        }
    }, [router.events])
    return <div className="navigation-announcement" role="status" aria-live="polite" aria-atomic="true">{loading ? "Loading page…" : ""}</div>
}
