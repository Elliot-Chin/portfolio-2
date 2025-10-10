import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

export function FishboneTimeline({ years, activeIndex, onJump }) {
    const svgRef = useRef(null)
    const pathRef = useRef(null)
    const [pl, setPl] = useState(1)

    useEffect(() => {
        const measure = () => { if (pathRef.current) setPl(pathRef.current.getTotalLength() || 1) }
        measure()
        const ro = new ResizeObserver(measure)
        if (svgRef.current) ro.observe(svgRef.current)
        return () => ro.disconnect()
    }, [])

    const lastIdx = years.length - 1
    const SLOTS = [0.22, 0.50, 0.78]
    const prevIdx = activeIndex - 1
    const nextIdx = activeIndex + 1
    const slotMap = [
        ...(prevIdx >= 0 ? [{ year: years[prevIdx], t: SLOTS[0], index: prevIdx }] : []),
        { year: years[activeIndex], t: SLOTS[1], index: activeIndex },
        ...(nextIdx <= lastIdx ? [{ year: years[nextIdx], t: SLOTS[2], index: nextIdx }] : []),
    ]

    const h = 500, yPad = 100, offset = 250
    const curveD = `M 34 ${yPad + offset} A 220 ${h / 2.6} 0 0 1 34 ${h - yPad + offset}`

    const pointAt = (t) => {
        const d = t * (pl || 1)
        if (pathRef.current && pl > 1) {
            const pt = pathRef.current.getPointAtLength(d)
            return { x: pt.x, y: pt.y }
        }
        return { x: 34, y: 10 + t * 980 }
    }

    return (
        <aside className="fixed left-0 top-0 h-screen w-[280px] z-20">
            <div className="relative h-full w-full pointer-events-none select-none"
                style={{
                    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%)",
                    maskImage: "linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%)",
                }}>
                <svg ref={svgRef} className="h-full w-full overflow-visible" viewBox="0 0 280 1000" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                        <linearGradient id="spineLight" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#fb7185" /><stop offset="100%" stopColor="#f43f5e" />
                        </linearGradient>
                    </defs>

                    <path ref={pathRef} d={curveD} stroke="url(#spineLight)" strokeWidth="6" fill="none" filter="url(#glow)" strokeLinecap="round" opacity="0.85" />
                    <motion.path d={curveD} stroke="#7f1d1d" strokeWidth="6" fill="none" strokeLinecap="round"
                        initial={false}
                        animate={{ strokeDasharray: `${(activeIndex / Math.max(1, lastIdx)) * (pl || 1)} ${pl || 1}` }}
                        transition={{ duration: 0.35, ease: "easeOut" }} opacity="0.55" />

                    {slotMap.map(({ year, t, index }) => {
                        const { x, y } = pointAt(t)
                        const active = index === activeIndex
                        const dotR = active ? 7.5 : 5
                        const dotFill = active ? "#fbbf24" : "#ef4444"
                        const barLen = 50
                        return (
                            <motion.g key={year} animate={{ x, y, opacity: 1 }} initial={{ x, y, opacity: 0.9 }} transition={{ type: "spring", stiffness: 320, damping: 28 }}>
                                <circle r={dotR} fill={dotFill} stroke="#7f1d1d" strokeWidth="2" />
                                <line x1="7" y1="0" x2={barLen} y2="0" stroke={active ? "#fbbf24" : "#ef4444"} strokeWidth={2.2} strokeLinecap="round" />
                                <text x={barLen + 10} y={2} fill={active ? "#fde68a" : "#fecacaCC"} fontSize="30" textAnchor="start" alignmentBaseline="middle" style={{ letterSpacing: 2, fontWeight: 700 }}>
                                    {year}
                                </text>
                                <g onClick={() => onJump?.(index)} className="cursor-pointer" transform="translate(0,-14)" style={{ pointerEvents: "auto" }}>
                                    <rect width={barLen + 60} height="28" fill="transparent" />
                                </g>
                            </motion.g>
                        )
                    })}
                </svg>
            </div>
        </aside>
    )
}
