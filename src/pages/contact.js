import { ModelTextingAnimation } from "@/components/avatar/Model_TextingAnimation"
import { Button, Input, Textarea } from "@nextui-org/react"
import { useState } from "react"
import { ReactTyped } from "react-typed"
import { fetchEnvVars } from "@/utils/ServerFetchFunction"
import Image from "next/image"
import { Contacts, GitHub, LinkedIn, Mail } from "@mui/icons-material"
import { resumeLink } from "../../public/data/Links"



export default function Contact({ EMAIL_SVCID, EMAIL_TEMPID, EMAIL_PUBKEY }) {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [sent, setSent] = useState(false)

    const validateInputs = () => {
        if (name.trim() == "" || message.trim() == "")
            return false
        return true
    }

    const sendEmail = (e) => {
        e.preventDefault()

        if (validateInputs()) {
            emailjs.sendForm(EMAIL_SVCID, EMAIL_TEMPID, e.target, EMAIL_PUBKEY)
                .then((result) => {
                    console.log(result.text)
                }, (error) => {
                    console.log(error.text)
                })

            setSent(true)
            // reset the fields
            setEmail('')
            setName('')
            setMessage('')

            setTimeout(() => {
                setSent(false)
            }, 1000)
        }
    }

    const handleClick = (url) => {
        console.log()
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.click();
    };

    return (
        <main className="min-h-screen h-fit dark:bg-slate-800 bg-slate-300 border border-transparent flex flex-col items-center relative
        lg:h-fit">

            {/* <Nav currentPage={'Contact'} /> */}

            <div className="w-11/12 mx-auto justify-around relative mb-5 lg:hidden
							">
                <div className=" w-full h-96
							">
                    <div className="w-full h-full flex items-center justify-center">
                        <ModelTextingAnimation />
                    </div>
                </div>

                <div className="dark:text-white text-slate-950 mx-auto w-full text-center mt-10 mb-10 absolute top-1/3">

                    <ReactTyped
                        startWhenVisible
                        strings={["Contact"]}
                        typeSpeed={40}
                        className='dark:text-slate-300 text-warning-300 dark:border-0  px-2 rounded-md bg-slate-600 bg-opacity-20 glass-effect text-4xl font-bold capitalize font-montserrat
                                lg:text-7xl'
                        showCursor={false}
                    />
                </div>
            </div>

            <div className="w-11/12 text-center mx-auto mb-10 lg:hidden">
                {sent && <div className="w-full justify-center items-center flex flex-col">
                    <Image
                        src={'/animations/sentGif.gif'}
                        width={128}
                        height={128}
                        priority
                    />
                    <span className="dark:text-white text-slate-950 font-montserrat">Message submitted!</span>
                </div> || <form className="flex flex-col h-fit gap-3 fade-in" onSubmit={sendEmail}>
                        <Input
                            autoComplete="off"
                            name='name'
                            type='text'
                            label='NAME'
                            placeholder='John Doe'
                            color='primary'
                            variant='underlined'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            classNames={{
                                label: 'font-montserrat font-bold dark:force-white',
                                input: 'font-raleway dark:text-white text-black placeholder:dark:text-slate-300 placeholder:italic',
                                clearButton: 'dark:text-white text-slate-950',
                            }}
                        />
                        <Input
                            autoComplete="off"
                            name='email'
                            type='email'
                            label='EMAIL'
                            validate={true}
                            placeholder='John@Doe.com'
                            color='primary'
                            variant='underlined'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            classNames={{
                                label: 'font-montserrat font-bold dark:force-white ',
                                input: 'font-raleway dark:text-white text-slate-950 placeholder:dark:text-slate-300 placeholder:italic',
                                clearButton: 'dark:text-white text-slate-950'
                            }}
                        />
                        <Textarea
                            type='text'
                            name='message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            label='MESSAGE'
                            placeholder='Enter message here...'
                            color='primary'
                            variant='underlined'
                            classNames={{
                                label: 'font-montserrat font-bold dark:force-white',
                                input: 'font-raleway dark:text-white text-slate-950 placeholder:dark:text-slate-300 placeholder:italic',
                                clearButton: 'dark:text-white text-slate-950'
                            }}
                        />

                        <Button
                            size="md"
                            radius="lg"
                            variant="flat"
                            color='warning'
                            className={`font-oswald text-lg dark:text-white text-slate-950 mx-auto fade-in mt-5`}
                            type="submit"
                        >
                            Send
                        </Button>
                    </form>}
            </div>

            <div className="mt-24 mb-24 hidden lg:flex">
                <ReactTyped
                    startWhenVisible
                    strings={["Contact"]}
                    typeSpeed={40}
                    className='dark:text-slate-300 text-warning-600 dark:border-0  px-2 rounded-md text-4xl font-bold capitalize font-montserrat
                                lg:text-7xl'
                    showCursor={false}
                />
            </div>

            <div className="hidden lg:flex w-1/3 gap-5 items-center">

                <div className=" w-1/4 h-96
							">
                    <div className="w-full h-full flex items-center justify-center">
                        <ModelTextingAnimation />
                    </div>
                </div>


                <div className="w-11/12 text-center mx-auto mb-10
                            lg:w-2/3">
                    {sent && <div className="w-full justify-center items-center flex flex-col">
                        <Image
                            src={'/animations/sentGif.gif'}
                            width={128}
                            height={128}
                            priority
                        />
                        <span className="dark:text-white text-slate-950 font-montserrat">Message submitted!</span>
                    </div> ||
                        <form className="flex flex-col h-fit gap-3 fade-in" onSubmit={sendEmail}>
                            <div className="flex gap-10">
                                <div className="flex flex-col gap-3 w-11/12">
                                    <Input
                                        autoComplete="off"
                                        name='name'
                                        type='text'
                                        label='NAME'
                                        placeholder='John Doe'
                                        color='primary'
                                        variant='underlined'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        classNames={{
                                            label: 'font-montserrat font-bold dark:force-white',
                                            input: 'font-raleway dark:text-white text-black placeholder:dark:text-slate-300 placeholder:italic',
                                            clearButton: 'dark:text-white text-slate-950',
                                        }}
                                    />
                                    <Input
                                        autoComplete="off"
                                        name='email'
                                        type='email'
                                        label='EMAIL'
                                        validate={true}
                                        placeholder='John@Doe.com'
                                        color='primary'
                                        variant='underlined'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        classNames={{
                                            label: 'font-montserrat font-bold dark:force-white ',
                                            input: 'font-raleway dark:text-white text-slate-950 placeholder:dark:text-slate-300 placeholder:italic',
                                            clearButton: 'dark:text-white text-slate-950'
                                        }}
                                    />
                                    <Textarea
                                        type='text'
                                        name='message'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        label='MESSAGE'
                                        placeholder='Enter message here...'
                                        color='primary'
                                        variant='underlined'
                                        classNames={{
                                            label: 'font-montserrat font-bold dark:force-white',
                                            input: 'font-raleway dark:text-white text-slate-950 placeholder:dark:text-slate-300 placeholder:italic',
                                            clearButton: 'dark:text-white text-slate-950'
                                        }}
                                    />
                                </div>

                                <div className="flex flex-col gap-5 items-center">
                                    <Button isIconOnly className="bg-transparent" onClick={() => handleClick(eChin.linkedin)}><LinkedIn fontSize="large" /></Button>
                                    <Button isIconOnly className="bg-transparent" onClick={() => handleClick(githubLink)}><GitHub fontSize="large" /></Button>
                                    <Button isIconOnly className="bg-transparent" onClick={() => handleClick(emailLink)}><Mail fontSize="large" /></Button>
                                    <Button isIconOnly className="bg-transparent" onClick={() => handleClick(resumeLink)}><Contacts fontSize="large" /></Button>
                                </div>
                            </div>

                            <Button
                                size="md"
                                radius="lg"
                                variant="flat"
                                color='warning'
                                className={`font-oswald text-lg dark:text-white text-slate-950 mx-auto fade-in mt-5`}
                                type="submit"
                            >
                                Send
                            </Button>
                        </form>}
                </div>


            </div>

        </main>
    )
}

export async function getServerSideProps() {
    return fetchEnvVars(['EMAIL_SVCID', 'EMAIL_TEMPID', 'EMAIL_PUBKEY'])
}