import { useState } from "react"

export function SkillInfoCard({ skill, onClosed }) {
    const [isClosing, setIsClosing] = useState(false)
    const handleClose = () => {
        setIsClosing(true)
        setTimeout(() => onClosed(), 180) // match CSS duration
    }
    return (
        <div
            className={`glass absolute inset-x-0 top-0 max-w-[90%]
                  rounded-xl p-3 !shadow-none w-full mx-auto !text-black
                  ${isClosing ? "animate-skill-out" : "animate-skill-in"}`}
        >
            <div className="flex items-start justify-between gap-3">
                <div>
                    <div className="font-semibold flex gap-3 items-center text-white text-2xl">
                        <img src={skill.src} height={20} width={20} alt={skill.name} />
                        {skill.name}
                    </div>
                    <p className="text-sm opacity-80">{skill.desc}</p>
                </div>
                <button
                    type="button"
                    className="shrink-0 rounded-md px-2 py-1 hover:bg-black/5"
                    onClick={handleClose}
                    aria-label="Close"
                >
                    ✕
                </button>
            </div>
        </div>
    )
}
