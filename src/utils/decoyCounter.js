// Server-only counter using the portfolio's existing Redis REST connection.
export async function recordDecoyHit({ increment = true } = {}) {
    const redisUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
    const redisToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN
    if (!redisUrl || !redisToken) return null
    const key = "visitor-count:decoy-hits"
    const command = increment ? "incr" : "get"
    try {
        const response = await fetch(`${redisUrl.replace(/\/$/, "")}/${command}/${encodeURIComponent(key)}`, {
            method: "POST",
            headers: { Authorization: `Bearer ${redisToken}` },
            cache: "no-store",
            signal: AbortSignal.timeout(3000),
        })
        if (!response.ok) return null
        const data = await response.json()
        if (data.error || data.result == null) return null
        const count = Number(data.result)
        return Number.isSafeInteger(count) && count >= 0 ? count : null
    } catch {
        // Redis downtime must not prevent the decoy from rendering.
        return null
    }
}
