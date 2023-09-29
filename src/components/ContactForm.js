import { useEffect } from "react"




export default function ContactForm ({EMAIL_SVCID, EMAIL_TEMPID, EMAIL_PUBKEY, sent, setSent}) {


    const sendEmail = (e) =>  {
        setSent(true)
        e.preventDefault()
        emailjs.sendForm(EMAIL_SVCID, EMAIL_TEMPID, e.target, EMAIL_PUBKEY)
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
        e.target.reset()
    }

    useEffect(() => {
        if(sent) {
        var img = document.getElementById('gif')
        var src = img.src
        img.src = ''
        img.src = src
        }
    }, [sent])

    return (
        <div className='pr-5 w-full flex flex-col gap-5 items-center
                        lg:justify-start lg: lg:h-full lg:items-start'>
            <div name='page-title' className="pr-5 pt-3">  
                <h1 className="font-lato text-5xl text-[#940650]
                                lg:text-7xl">
                    Contact
                </h1>
            </div>

            {sent && <div className="w-1/2 items">
                <img id='gif' src='/sent.gif' />
            </div>}

            <div className="w-3/4
                            lg:w-full">
                {!sent &&  <form onSubmit={sendEmail} className="flex flex-col font-inclusive-sans gap-5 w-full items-center">
                    <input type="text" className="px-2 py-1 border border-slate-500 rounded-md outline-none w-full" autoComplete="off" name="name" placeholder="Name" required />
                    <input type="email" name="email" className="px-2 py-1 border border-slate-500 rounded-md outline-none w-full" autoComplete="off" placeholder="Email" required />
                    <textarea name="message" placeholder="Your Message" className="border px-2 py-1 border-slate-500 outline-none h-36 rounded-md w-full scrollbar-thin scrollbar-thumb-white" required></textarea>
                    <input type="submit" value="Send" className="px-2 py-1 rounded-md w-1/4 border font-roboto-condensed transition-all duration-300
                                                                hover:cursor-pointer hover:border-slate-500" />
                </form>} 
            </div>
        </div>
    )
}