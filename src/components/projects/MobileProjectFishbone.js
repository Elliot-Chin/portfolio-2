import { motion } from "framer-motion"

export function MobileProjectFishbone({ titles = [], activeIndex = 0, onJump }) {
    const lastIdx = titles.length - 1
    const slots = [activeIndex - 1 >= 0 ? activeIndex - 1 : null, activeIndex, activeIndex + 1 <= lastIdx ? activeIndex + 1 : null]
    const viewW = 1000, R = 500, baseY = 710
    const curveD = `M 0 ${baseY} A ${R} ${R} 0 0 1 ${viewW} ${baseY}`
    const SLOTS = [0.2, 0.5, 0.8]
    const xAt = (t) => 10 + t * (990 - 10)
    const yInside = 168

    return (
        <aside className="fixed left-0 bottom-0 w-full h-[140px] z-20 pointer-events-none">
            <div
                className="relative w-full h-full"
                style={{
                    WebkitMaskImage: "linear-gradient(to top, transparent 0%, #000 18%, #000 100%)",
                    maskImage: "linear-gradient(to top, transparent 0%, #000 18%, #000 100%)",
                }}
            >
                <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 280" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <filter id="mobGlow">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                        </filter>
                        <linearGradient id="mobLight" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#fb7185" />
                            <stop offset="100%" stopColor="#f43f5e" />
                        </linearGradient>
                    </defs>

                    <path d={curveD} stroke="url(#mobLight)" strokeWidth="6" fill="none" filter="url(#mobGlow)" strokeLinecap="round" opacity="0.85" />
                    <motion.path
                        d={curveD}
                        stroke="#7f1d1d"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        initial={false}
                        animate={{ pathLength: activeIndex / Math.max(1, lastIdx) }}
                        style={{ pathLength: 1, strokeDasharray: "1 1", strokeDashoffset: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        opacity="0.35"
                    />

                    {slots.map((i, k) => {
                        const x = xAt(SLOTS[k])
                        const active = i === activeIndex
                        const label = i != null ? titles[i].split("—")[1] : ""
                        const size = active ? 40 : 10
                        const opacity = i == null ? 0 : active ? 1 : 0.75
                        const pointer = i == null ? "none" : "auto"

                        // HTML label box (centered at x, yInside)
                        const width = active ? 600 : 420
                        const height = size + 22
                        const xLeft = x - width / 2
                        const yTop = yInside - height / 2

                        return (
                            <motion.g
                                key={k}
                                initial={{ opacity }}
                                animate={{ opacity }}
                                transition={{ duration: 0.25 }}
                                className="pointer-events-auto cursor-pointer"
                                style={{ pointerEvents: pointer }}
                                onClick={() => i != null && onJump?.(i)}
                            >
                                <foreignObject x={xLeft} y={yTop} width={width} height={height}>
                                    <div
                                        xmlns="http://www.w3.org/1999/xhtml"
                                        className={`${active ? "font-extrabold" : "font-bold"} leading-none text-center`}
                                        style={{
                                            fontSize: size,
                                            letterSpacing: active ? 1.5 : 1,
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                        }}
                                        // if your title strings include an em dash and you only want the right side:
                                        // dangerouslySetInnerHTML={{ __html: (label || "").includes("—") ? label.split("—")[1] : label }}
                                        dangerouslySetInnerHTML={{ __html: String(label || "") }}
                                    />
                                </foreignObject>
                            </motion.g>
                        )
                    })}
                </svg>
            </div>
        </aside>
    )
}
