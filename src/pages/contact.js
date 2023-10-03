
import ContactForm from "@/components/ContactForm"
import Links from "@/components/Links"
import Loader from "@/components/Loader"
import MyLogo from "@/components/MyLogo"
import NavMenu from "@/components/NavMenu"
import { fetchEnvVars } from "@/utils/ServerFetchFunction"
import Image from "next/image"
import { useEffect, useState } from "react"


export default function Contact({EMAIL_SVCID, EMAIL_PUBKEY, EMAIL_TEMPID}) {

    const [isLoading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)

    useEffect(() => {
        if (sent) {
            setTimeout(() => {
                setSent(false)
            }, 3470)
        }
    }, [sent])

    return (
        <>
            <MyLogo size={150} />
            <div className="flex flex-col justify-center
                            lg:items-center lg:h-screen">
                {isLoading && <Loader />}

                <div className="lg:w-fit lg:p-10 lg:gap-10 lg:mx-auto lg:flex" >
                    <div className="justify-center items-center p-5 hidden
                                    lg:flex">
                        <div className="glow relative w-72 h-80 bg-[#940650] rounded-full flex items-center justify-center
                                        before:rounded-full
                                        lg:h-[35rem] lg:w-[19rem]"
                            style={{'--color': '#940650'}}>
                            <div className="relative w-[17.8rem] h-[19.8rem] rounded-full
                                            lg:h-[34.8rem] lg:w-[18.8rem]">
                                <Image
                                    src="/contact.jpeg"
                                    objectFit="cover"
                                    fill
                                    alt="Avatar Image"
                                    className='rounded-full overflow-hidden contact-bg-image'
                                />
                            </div>
                        </div>  
                    </div>

                    <div>
                        <div className="flex-col flex items-center p-5 bg-transparent 
                                        lg:flex-row lg:justify-center lg:mx-auto">
                            
                            <ContactForm EMAIL_SVCID={EMAIL_SVCID} EMAIL_PUBKEY={EMAIL_PUBKEY} EMAIL_TEMPID={EMAIL_TEMPID} sent={sent} setSent={setSent} />
                            <Links />
                        </div>

                        <div className="w-full lg:flex lg:justify-end lg:pr-10">
                            <div name='nav-wrapper' className="
                            lg:w-fit lg:right-0">
                                <NavMenu about experience projects skills setLoading={setLoading}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export async function getServerSideProps() {
    return fetchEnvVars(['EMAIL_SVCID', 'EMAIL_TEMPID', 'EMAIL_PUBKEY'])
}
