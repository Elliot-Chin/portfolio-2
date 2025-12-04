// components/contact/ContactHeaderMobile.js
import { motion } from "framer-motion"
import { ReactTyped } from "react-typed"

export function ContactHeaderMobile() {
    return (
        <section className="pt-12 pb-10 text-center">
            <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.35 }}>
                <ReactTyped
                    strings={["Let’s build something together."]}
                    typeSpeed={35}
                    showCursor={false}
                    className="text-2xl font-extrabold tracking-tight text-amber-100"
                />
                <p className="mt-1 text-xs text-amber-50/90">
                    Email, GitHub, LinkedIn — or send a quick note.
                </p>
            </motion.div>
        </section>
    )
}
