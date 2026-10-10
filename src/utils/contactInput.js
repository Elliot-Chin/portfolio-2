import { MAX_MESSAGE } from "./contactConstants"

export const CONTACT_LIMITS = { name: 100, email: 254, message: MAX_MESSAGE }

export function sanitizeContactField(name, value) {
    if (!(name in CONTACT_LIMITS)) return ""
    let clean = String(value ?? "").normalize("NFC")
        .replace(/<[^>]*>/g, "")
        .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u202A-\u202E\u2066-\u2069]/g, "")
    if (name === "message") clean = clean.replace(/\r\n?/g, "\n")
    else clean = clean.replace(/[\r\n\t]/g, " ")
    if (name === "email") clean = clean.replace(/\s/g, "")
    return clean.slice(0, CONTACT_LIMITS[name])
}

export function sanitizeContactDraft(draft) {
    return Object.fromEntries(Object.keys(CONTACT_LIMITS).map(name => [name, sanitizeContactField(name, draft?.[name])]))
}
