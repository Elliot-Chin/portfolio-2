import { motion } from "framer-motion"

export default function NoMediaContent({ s, fadeIn }) {
    return (
        <motion.div
            className="w-[90vw] max-w-3xl text-left lg:text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={fadeIn}
        >
            {s.title && (
                <h2 className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-extrabold text-amber-700 dark:text-amber-400 font-rubikmono mb-4">
                    {s.title}
                </h2>
            )}
            {s.desc && <div className="mb-6 lg:mb-8">{s.desc}</div>}
            {s.media && <div className="flex items-center justify-center">{s.media}</div>}
            {s.meta && <div className="mt-6">{s.meta}</div>}
        </motion.div>
    )
}
