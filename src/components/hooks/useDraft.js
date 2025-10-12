// components/contact/hooks/useDraft.js
import { useEffect, useState } from "react"

const DRAFT_KEY = "contact_draft_v1"

export function useDraft(initial = { name: "", email: "", message: "" }) {
    const [draft, setDraft] = useState(initial)

    useEffect(() => {
        try {
            const raw = localStorage.getItem(DRAFT_KEY)
            if (raw) setDraft(JSON.parse(raw))
        } catch { }
    }, [])

    useEffect(() => {
        try {
            localStorage.setItem(DRAFT_KEY, JSON.stringify(draft))
        } catch { }
    }, [draft])

    return [draft, setDraft]
}
