"use client"

import { useEffect, useState } from "react"

function formatCount(count) {
    if (!Number.isFinite(count)) return "--"
    return new Intl.NumberFormat("en-US").format(count)
}

export function VisitorCount({
    pageKey,
    className = "",
    label = "Visitor count",
}) {
    const [count, setCount] = useState(null)
    const [isConfigured, setIsConfigured] = useState(true)

    useEffect(() => {
        let isActive = true

        const syncCount = async () => {
            try {
                const storageKey = `visitor-counted:${pageKey}`
                const hasCounted = window.localStorage.getItem(storageKey) === "1"
                const response = await fetch(`/api/visitors?page=${encodeURIComponent(pageKey)}`, {
                    method: hasCounted ? "GET" : "POST",
                })
                const data = await response.json()

                if (!isActive) return

                if (!response.ok || data?.configured === false) {
                    setIsConfigured(false)
                    return
                }

                setCount(Number(data.count || 0))
                setIsConfigured(true)

                if (!hasCounted) {
                    window.localStorage.setItem(storageKey, "1")
                }
            } catch {
                if (!isActive) return
                setIsConfigured(false)
            }
        }

        syncCount()

        return () => {
            isActive = false
        }
    }, [pageKey])

    return (
        <span className={className}>
            {label}:{" "}
            <span className="text-amber-100">
                {isConfigured ? formatCount(count) : "offline"}
            </span>
        </span>
    )
}
