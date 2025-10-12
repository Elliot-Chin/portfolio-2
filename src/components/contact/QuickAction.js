// components/contact/QuickAction.js
import { Card, CardBody } from "@nextui-org/react"

export function QuickAction({ title, subtitle, icon, onPress, href, asEmail }) {
    const content = (
        <Card
            isPressable={!href}
            onPress={onPress}
            className="w-full h-full bg-transparent border border-amber-500/10 hover:border-amber-500/25 transition-colors"
        >
            <CardBody className="h-full flex flex-row gap-3 items-center">
                <div className="text-4xl shrink-0">{icon}</div>
                <div className="min-w-0 flex-1 w-0">
                    <p className="font-semibold text-amber-900 dark:text-amber-200 truncate">{title}</p>
                    <p className="text-sm text-amber-800/80 dark:text-amber-200/70 truncate">{subtitle}</p>
                </div>
            </CardBody>
        </Card>
    )

    if (href) {
        return (
            <a
                href={href}
                target={asEmail ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="block"
                style={{ WebkitTapHighlightColor: "transparent" }}
            >
                {content}
            </a>
        )
    }
    return content
}
