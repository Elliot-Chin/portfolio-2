// components/contact/hooks/useDraft.js
import { useEffect, useState } from "react"

const DRAFT_KEY = "contact_draft_v1"

export function useDraft(initial = { name: "", email: "", message: "" }) {
    const [draft, setDraft] = useState(initial)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        try {
            const raw = localStorage.getItem(DRAFT_KEY)
            if (raw) {
                const saved = JSON.parse(raw)
                if (saved && typeof saved === "object") {
                    setDraft({
                        name: typeof saved.name === "string" ? saved.name : "",
                        email: typeof saved.email === "string" ? saved.email : "",
                        message: typeof saved.message === "string" ? saved.message : "",
                    })
                }
            }
        } catch { }
        setLoaded(true)
    }, [])

    useEffect(() => {
        if (!loaded) return
        try {
            localStorage.setItem(DRAFT_KEY, JSON.stringify(draft))
        } catch { }
    }, [draft, loaded])

    return [draft, setDraft]
}
