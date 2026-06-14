const redisUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
const redisToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN

const isRedisConfigured = Boolean(redisUrl && redisToken)

function normalizePageKey(value) {
    return String(value || "site")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9:_-]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 80) || "site"
}

async function runRedisCommand(command, key) {
    const target = `${redisUrl}/${command}/${encodeURIComponent(key)}`
    const response = await fetch(target, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${redisToken}`,
        },
        cache: "no-store",
    })

    if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Redis request failed (${response.status}): ${errorText}`)
    }

    const data = await response.json()
    return data?.result
}

export default async function handler(req, res) {
    if (req.method !== "GET" && req.method !== "POST") {
        res.setHeader("Allow", ["GET", "POST"])
        return res.status(405).json({ error: "Method not allowed" })
    }

    if (!isRedisConfigured) {
        return res.status(503).json({
            configured: false,
            error: "Redis environment variables are missing.",
        })
    }

    const page = normalizePageKey(req.query.page)
    const key = `visitor-count:${page}`

    try {
        const result = req.method === "POST"
            ? await runRedisCommand("incr", key)
            : await runRedisCommand("get", key)

        return res.status(200).json({
            configured: true,
            count: Number(result || 0),
            page,
        })
    } catch (error) {
        return res.status(500).json({
            configured: true,
            error: error.message || "Unable to read visitor count.",
        })
    }
}
