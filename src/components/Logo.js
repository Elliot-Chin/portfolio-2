import { Image } from "@nextui-org/react";




export default function Logo ({white}) {
    return (
        <Image
            src={white? "/logo_white.png" : "/logo.png"}
            height={32}
            width={32}
            />
    )
}