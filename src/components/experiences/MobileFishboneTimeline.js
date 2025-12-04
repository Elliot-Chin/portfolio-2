import { motion } from "framer-motion"

export function MobileFishboneTimeline({ years, activeIndex, onJump }) {
    const lastIdx = years.length - 1
    const slots = [activeIndex - 1 >= 0 ? activeIndex - 1 : null, activeIndex, activeIndex + 1 <= lastIdx ? activeIndex + 1 : null]
    const viewW = 1000, R = 500, baseY = 710
    const curveD = `M 0 ${baseY} A ${R} ${R} 0 0 1 ${viewW} ${baseY}`
    const SLOTS = [0.2, 0.5, 0.8]
    const xAt = (t) => 10 + t * (990 - 10)
    const yInside = 168

    return (
        <aside className="fixed left-0 bottom-0 w-full h-[140px] z-20 pointer-events-none">
            <div className="relative w-full h-full"
                style={{
                    WebkitMaskImage: "linear-gradient(to top, transparent 0%, #000 18%, #000 100%)",
                    maskImage: "linear-gradient(to top, transparent 0%, #000 18%, #000 100%)",
                }}>
                <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 280" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <filter id="mobGlow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                        <linearGradient id="mobLight" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#fb7185" /><stop offset="100%" stopColor="#f43f5e" /></linearGradient>
                    </defs>

                    <path d={curveD} stroke="url(#mobLight)" strokeWidth="6" fill="none" filter="url(#mobGlow)" strokeLinecap="round" opacity="0.85" />
                    <motion.path d={curveD} stroke="#7f1d1d" strokeWidth="6" fill="none" strokeLinecap="round"
                        initial={false} animate={{ pathLength: activeIndex / Math.max(1, lastIdx) }}
                        style={{ pathLength: 1, strokeDasharray: "1 1", strokeDashoffset: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }} opacity="0.35" />

                    {slots.map((i, k) => {
                        const x = xAt(SLOTS[k])
                        const active = i === activeIndex
                        const year = i != null ? years[i] : ""
                        const size = active ? 120 : 50
                        const fill = active ? "#fde68a" : "#fecacaCC"
                        const weight = active ? 800 : 700
                        const opacity = i == null ? 0 : active ? 1 : 0.75
                        const pointer = i == null ? "none" : "auto"
                        return (
                            <motion.g key={k} initial={{ opacity }} animate={{ opacity }} transition={{ duration: 0.25 }}
                                className="pointer-events-auto cursor-pointer" style={{ pointerEvents: pointer }} onClick={() => i != null && onJump?.(i)}>
                                <text x={x} y={yInside} fill={fill} fontSize={size} fontWeight={weight}
                                    textAnchor="middle" alignmentBaseline="middle"
                                    style={{ letterSpacing: active ? 2 : 1.5, transition: "all 0.2s ease" }}>
                                    {year}
                                </text>
                            </motion.g>
                        )
                    })}
                </svg>
            </div>
        </aside>
    )
}
