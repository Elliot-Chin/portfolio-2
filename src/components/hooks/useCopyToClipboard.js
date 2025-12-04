// components/contact/hooks/useCopyToClipboard.js

/**
 * Robust copy that works on iOS/Android + desktop.
 * Returns a function: (text: string) => Promise<boolean>
 */
export function useCopyToClipboard() {
    async function copyToClipboard(text) {
        // Try async Clipboard API first (secure contexts only)
        try {
            if (navigator?.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text)
                return true
            }
        } catch { }

        // Fallback: temporary <textarea> + execCommand
        try {
            const ta = document.createElement("textarea")
            ta.value = text
            ta.setAttribute("readonly", "")
            ta.style.position = "absolute"
            ta.style.left = "-9999px"
            ta.style.fontSize = "12pt"
            document.body.appendChild(ta)

            const selection = document.getSelection()
            const savedRange = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null

            ta.select()
            ta.selectionStart = 0
            ta.selectionEnd = ta.value.length

            const ok = document.execCommand("copy")

            document.body.removeChild(ta)
            if (savedRange) {
                selection.removeAllRanges()
                selection.addRange(savedRange)
            }
            return ok
        } catch {
            return false
        }
    }

    return copyToClipboard
}
