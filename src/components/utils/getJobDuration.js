export function getJobDuration(startDateStr) {
    const start = new Date(startDateStr)
    const now = new Date()
    const diffMs = now - start
    const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25)
    const years = Math.floor(diffYears)
    const remainder = diffYears - years

    if (years === 0) {
        if (remainder >= 0.4 && remainder < 0.6) return "half a year"
        if (remainder >= 0.6) return "almost a year"
        return `${Math.round(remainder * 12)} months`
    }

    if (remainder >= 0.4 && remainder < 0.6)
        return years === 1 ? "a year and a half" : `${years} and a half years`

    if (remainder >= 0.8) return `${years + 1} years`

    return years === 1 ? "a year" : `${years} years`
}
