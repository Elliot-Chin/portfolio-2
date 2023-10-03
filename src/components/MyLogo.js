import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Loader from "./Loader";



export default function MyLogo ({className, size, isMain}) {

    const router = useRouter()
    const [isLoading, setLoading] = useState(false)

    return (
        <>
            {isLoading && <Loader />}

            <div className={`fixed w-fit items-end justify-end right-0 px-10 py-5 hidden lg:block hover:cursor-pointer ${className}`}
                onClick={() => {if(!isMain) {setLoading(true), router.push('/')}}}>
                <Image src={'/logo.png'}
                    height={size}
                    width={size}
                />
            </div>
        </>
    )
}