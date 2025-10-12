// components/contact/ContactHeaderDesktop.js
import { motion } from "framer-motion"
import { ReactTyped } from "react-typed"

export function ContactHeaderDesktop() {
    return (
        <section className="pt-16 pb-4 text-center">
            <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.35 }}>
                <ReactTyped
                    strings={["Let’s build something together."]}
                    typeSpeed={35}
                    showCursor={false}
                    className="text-3xl md:text-4xl font-extrabold tracking-tight text-amber-100"
                />
                <p className="mt-2 text-sm md:text-base text-amber-50/90">
                    Email, GitHub, LinkedIn — or send a quick note.
                </p>
            </motion.div>
        </section>
    )
}
