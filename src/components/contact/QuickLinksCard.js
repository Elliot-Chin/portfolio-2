// components/contact/QuickLinksCard.js
import { Card, CardBody, Button, Tooltip } from "@nextui-org/react"
import * as Links from "../../../public/data/Links"
import { QuickAction } from "./QuickAction"

const linkedinUrl = Links.linkedInLink
const githubUrl = Links.githubLink
const resumeUrl = Links.resumeLink
const emailDisplay = "ychin@unb.ca"
const emailHref = `mailto:${emailDisplay}`

export function QuickLinksCard({ onCopy }) {
    return (
        <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/10">
            <CardBody className="min-h-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <QuickAction title="Email" subtitle={emailDisplay} icon="✉️" href={emailHref} asEmail />
                    <QuickAction title="LinkedIn" subtitle="Let’s connect" icon="💼" href={linkedinUrl} />
                    <QuickAction title="GitHub" subtitle="See my code" icon="💻" href={githubUrl} />
                    <QuickAction title="Resume" subtitle="View PDF" icon="📄" href={resumeUrl} />
                </div>

                <div className="mt-4 rounded-xl border border-white/10 p-3 flex items-center gap-3">
                    <div className="text-2xl">⏱️</div>
                    <div className="flex-1">
                        <p className="font-semibold text-amber-50 leading-none">
                            Email Address - Typically respond within same day!
                        </p>
                    </div>
                    <Tooltip content="Copy email">
                        <Button variant="flat" onPress={onCopy} className="bg-white/10 text-amber-50">
                            Copy
                        </Button>
                    </Tooltip>
                </div>
            </CardBody>
        </Card>
    )
}
