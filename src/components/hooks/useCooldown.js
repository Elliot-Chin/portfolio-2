// components/contact/hooks/useCooldown.js
import { useEffect, useState } from "react"

const COOLDOWN_KEY = "contact_cooldown_until"
const COOLDOWN_SEC = 15

export function useCooldown(defaultSeconds = COOLDOWN_SEC) {
    const [until, setUntil] = useState(0)
    const [now, setNow] = useState(() => Date.now())

    useEffect(() => {
        try {
            const saved = Number(localStorage.getItem(COOLDOWN_KEY) || 0)
            if (saved > Date.now()) setUntil(saved)
        } catch { }
    }, [])

    useEffect(() => {
        const t = setInterval(() => setNow(Date.now()), 500)
        return () => clearInterval(t)
    }, [])

    const remaining = Math.max(0, Math.ceil((until - now) / 1000))
    const start = (seconds = defaultSeconds) => {
        const next = Date.now() + seconds * 1000
        try {
            localStorage.setItem(COOLDOWN_KEY, String(next))
        } catch { }
        setUntil(next)
    }

    return { remaining, start }
}
