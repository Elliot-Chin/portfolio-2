import { useEffect, useState } from "react"

// treat desktop as laptop-and-up (>=1024px) + fine pointer
export function useDesktop() {
    const [isDesktop, setDesktop] = useState(false)

    useEffect(() => {
        const mqDesktop = window.matchMedia("(min-width: 1024px)")
        const mqFine = window.matchMedia("(pointer: fine)")
        const update = () => setDesktop(mqDesktop.matches && mqFine.matches)

        update()
        mqDesktop.addEventListener?.("change", update)
        mqFine.addEventListener?.("change", update)

        return () => {
            mqDesktop.removeEventListener?.("change", update)
            mqFine.removeEventListener?.("change", update)
        }
    }, [])

    return isDesktop
}
