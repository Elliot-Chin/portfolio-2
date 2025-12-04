// Animation variants (unchanged)
export const DURATION_MS = 600

export const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export const slideLeft = {
    hidden: { opacity: 0, x: -32, scale: 0.98 },
    show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export const slideRight = {
    hidden: { opacity: 0, x: 32, scale: 0.98 },
    show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export const slideUp = {
    hidden: { opacity: 0, y: 64, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -32, scale: 0.995, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
}

export const backBtnFade = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.45, ease: "easeOut" } },
}

export const subtleHover = { whileHover: { y: -6, scale: 1.01 }, whileTap: { scale: 0.995 } }
