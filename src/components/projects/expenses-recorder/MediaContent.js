import { motion } from "framer-motion"

export default function MediaContent({
    s,
    mediaOnLeft,
    keepImageFirst = false,
    fadeIn,
    slideLeft,
    slideRight,
}) {
    if (keepImageFirst) {
        // IMAGE → TEXT (for first page only)
        return (
            <>
                {/* MEDIA first */}
                <motion.div
                    className="flex items-center justify-center mb-10"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    variants={mediaOnLeft ? slideLeft : slideRight}
                >
                    <div className="w-[90vw] flex items-center justify-center">{s.media}</div>
                </motion.div>

                {/* TEXT second */}
                <motion.div
                    className="flex items-center justify-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    variants={mediaOnLeft ? slideRight : slideLeft}
                >
                    <div className="w-[90vw] max-w-3xl lg:max-w-2xl text-left">
                        {s.title && (
                            <motion.h2
                                className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-extrabold text-amber-700 dark:text-amber-400 font-rubikmono mb-4"
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45 }}
                            >
                                {s.title}
                            </motion.h2>
                        )}
                        {s.desc && <motion.div className="mb-6 text-raleway" variants={fadeIn}>{s.desc}</motion.div>}
                        {s.meta}
                    </div>
                </motion.div>
            </>
        )
    }

    // Default: TEXT → MEDIA (for all other pages)
    return (
        <>
            {/* TEXT first */}
            <motion.div
                className="flex items-center justify-center"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={mediaOnLeft ? slideRight : slideLeft}
            >
                <div className="w-[90vw] max-w-3xl lg:max-w-2xl text-left">
                    {s.title && (
                        <motion.h2
                            className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-extrabold text-amber-700 dark:text-amber-400 font-rubikmono mb-4"
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45 }}
                        >
                            {s.title}
                        </motion.h2>
                    )}
                    {s.desc && <motion.div className="mb-6 text-raleway" variants={fadeIn}>{s.desc}</motion.div>}
                    {s.meta}
                </div>
            </motion.div>

            {/* MEDIA second */}
            <motion.div
                className="flex items-center justify-center mt-10"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={mediaOnLeft ? slideLeft : slideRight}
            >
                <div className="w-[90vw] flex items-center justify-center">{s.media}</div>
            </motion.div>
        </>
    )
}
