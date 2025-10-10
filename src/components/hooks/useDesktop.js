import { useEffect, useState } from "react"

// treat desktop as xl (≥1280px) + fine pointer (keeps iPad as mobile/tablet)
export function useDesktop() {
    const [isDesktop, setDesktop] = useState(false)
    useEffect(() => {
        const mqXL = window.matchMedia("(min-width: 1280px)")
        const mqFine = window.matchMedia("(pointer: fine)")
        const update = () => setDesktop(mqXL.matches && mqFine.matches)
        update()
        mqXL.addEventListener?.("change", update)
        mqFine.addEventListener?.("change", update)
        return () => {
            mqXL.removeEventListener?.("change", update)
            mqFine.removeEventListener?.("change", update)
        }
    }, [])
    return isDesktop
}
