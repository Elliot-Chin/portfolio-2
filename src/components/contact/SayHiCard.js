// components/contact/SayHiCard.js
import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { ModelTextingAnimation } from "@/components/avatar/Model_TextingAnimation"

export function SayHiCard() {
    return (
        <div className="min-h-0 flex flex-col gap-4">
            <Card className="bg-transparent shadow-none border-none">
                <CardHeader className="justify-between py-3">
                    <div className="flex items-center gap-3">
                        <span className="text-4xl">📱</span>
                        <p className="font-semibold text-amber-50 leading-none text-3xl">Say Hi</p>
                    </div>
                </CardHeader>
                <CardBody className="grid place-items-center py-2">
                    <div className="w-full max-w-[520px] h-[260px] md:h-[60vh]">
                        <ModelTextingAnimation />
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
