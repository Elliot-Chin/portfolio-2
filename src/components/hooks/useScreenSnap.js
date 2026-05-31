import { useEffect } from "react"

const WHEEL_THRESHOLD = 36
const TOUCH_THRESHOLD = 56
const WHEEL_RESET_MS = 140
const KEY_TARGETS = new Set(["ArrowDown", "PageDown", " ", "Spacebar", "ArrowUp", "PageUp"])
const INTERACTIVE_TAGS = new Set(["INPUT", "TEXTAREA", "SELECT", "BUTTON"])

const isInteractiveTarget = (target) => {
    if (!(target instanceof HTMLElement)) return false
    return INTERACTIVE_TAGS.has(target.tagName) || target.isContentEditable
}

export function useScreenSnap(containerRef, { enabled = true, selector = "section.snap-start" } = {}) {
    useEffect(() => {
        const el = containerRef.current
        if (!enabled || !el) return

        const state = {
            isAnimating: false,
            wheelDelta: 0,
            wheelResetTimer: 0,
            touchStartY: null,
            touchStartedInsideInteractive: false,
            fallbackTimer: 0,
            settleTimer: 0,
        }

        const getSections = () => Array.from(el.querySelectorAll(selector)).filter((section) => section instanceof HTMLElement)

        const getNearestIndex = (sections) => {
            const top = el.scrollTop
            let nearestIndex = 0
            let nearestDistance = Number.POSITIVE_INFINITY

            sections.forEach((section, index) => {
                const distance = Math.abs(section.offsetTop - top)
                if (distance < nearestDistance) {
                    nearestDistance = distance
                    nearestIndex = index
                }
            })

            return nearestIndex
        }

        const cleanupAnimation = () => {
            state.isAnimating = false
            state.wheelDelta = 0
            el.classList.remove("snap-none")
            window.clearTimeout(state.wheelResetTimer)
            window.clearTimeout(state.fallbackTimer)
            window.clearTimeout(state.settleTimer)
        }

        const finishWhenSettled = (targetTop) => {
            window.clearTimeout(state.fallbackTimer)
            window.clearTimeout(state.settleTimer)

            state.fallbackTimer = window.setTimeout(cleanupAnimation, 700)

            const check = () => {
                const distance = Math.abs(el.scrollTop - targetTop)
                if (distance <= 2) {
                    cleanupAnimation()
                    return
                }
                state.settleTimer = window.setTimeout(check, 50)
            }

            check()
        }

        const snapByDirection = (direction) => {
            const sections = getSections()
            if (sections.length < 2 || state.isAnimating) return

            const currentIndex = getNearestIndex(sections)
            const nextIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction))
            if (nextIndex === currentIndex) return

            const target = sections[nextIndex]
            state.isAnimating = true
            state.wheelDelta = 0
            el.classList.add("snap-none")
            el.scrollTo({ top: target.offsetTop, behavior: "smooth" })
            finishWhenSettled(target.offsetTop)
        }

        const onWheel = (event) => {
            if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return

            const sections = getSections()
            if (sections.length < 2) return

            event.preventDefault()

            if (state.isAnimating) {
                return
            }

            state.wheelDelta += event.deltaY
            window.clearTimeout(state.wheelResetTimer)
            state.wheelResetTimer = window.setTimeout(() => {
                state.wheelDelta = 0
            }, WHEEL_RESET_MS)

            if (Math.abs(state.wheelDelta) < WHEEL_THRESHOLD) return

            const direction = state.wheelDelta > 0 ? 1 : -1
            snapByDirection(direction)
        }

        const onKeyDown = (event) => {
            if (!KEY_TARGETS.has(event.key) || isInteractiveTarget(event.target)) return
            if (state.isAnimating) {
                event.preventDefault()
                return
            }

            const direction = event.key === "ArrowUp" || event.key === "PageUp" ? -1 : 1
            event.preventDefault()
            snapByDirection(direction)
        }

        const onTouchStart = (event) => {
            const touch = event.touches[0]
            state.touchStartY = touch?.clientY ?? null
            state.touchStartedInsideInteractive = isInteractiveTarget(event.target)
        }

        const onTouchEnd = (event) => {
            if (state.isAnimating || state.touchStartedInsideInteractive || state.touchStartY == null) {
                state.touchStartY = null
                state.touchStartedInsideInteractive = false
                return
            }

            const touch = event.changedTouches[0]
            const deltaY = state.touchStartY - (touch?.clientY ?? state.touchStartY)
            state.touchStartY = null
            state.touchStartedInsideInteractive = false

            if (Math.abs(deltaY) < TOUCH_THRESHOLD) return
            snapByDirection(deltaY > 0 ? 1 : -1)
        }

        const onTouchCancel = () => {
            state.touchStartY = null
            state.touchStartedInsideInteractive = false
        }

        el.addEventListener("wheel", onWheel, { passive: false })
        window.addEventListener("keydown", onKeyDown)
        el.addEventListener("touchstart", onTouchStart, { passive: true })
        el.addEventListener("touchend", onTouchEnd, { passive: true })
        el.addEventListener("touchcancel", onTouchCancel, { passive: true })

        return () => {
            window.clearTimeout(state.wheelResetTimer)
            window.clearTimeout(state.fallbackTimer)
            window.clearTimeout(state.settleTimer)
            el.classList.remove("snap-none")
            el.removeEventListener("wheel", onWheel)
            window.removeEventListener("keydown", onKeyDown)
            el.removeEventListener("touchstart", onTouchStart)
            el.removeEventListener("touchend", onTouchEnd)
            el.removeEventListener("touchcancel", onTouchCancel)
        }
    }, [containerRef, enabled, selector])
}
