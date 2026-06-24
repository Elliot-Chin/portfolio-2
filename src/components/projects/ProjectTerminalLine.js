import { AutoPanLabel } from "@/components/ui/AutoPanLabel"

export function ProjectTerminalLabel({ text, className = "" }) {
    return <AutoPanLabel text={text} className={className} />
}

export function ProjectTerminalCommand({ text, className = "" }) {
    return (
        <div className={`flex items-start gap-2 font-spacemono text-[12px] font-bold text-amber-300 sm:text-sm md:text-base ${className}`}>
            <span>{">> "}</span>
            <AutoPanLabel text={text} className="flex-1" />
        </div>
    )
}
