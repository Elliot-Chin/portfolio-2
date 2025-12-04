// components/contact/Toast.js
import { Button } from "@nextui-org/react"

export function Toast({ kind = "success", text = "", onClose }) {
    const color =
        kind === "success" ? "bg-emerald-500" : kind === "error" ? "bg-rose-500" : "bg-slate-600"

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60]">
            <div className={`text-white px-4 py-2 rounded-xl shadow-lg ${color}`}>
                <div className="flex items-center gap-3">
                    {kind === "success" ? "✅" : kind === "error" ? "⚠️" : "ℹ️"}
                    <span className="font-medium">{text}</span>
                    <Button
                        size="sm"
                        className="ml-2 bg-white/15 text-white"
                        onPress={onClose}
                        radius="md"
                        variant="flat"
                    >
                        Close
                    </Button>
                </div>
            </div>
        </div>
    )
}
