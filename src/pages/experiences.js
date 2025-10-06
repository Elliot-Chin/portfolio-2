import { Model2 } from "@/components/avatar/Model_2";
import { Nav } from "@/components/nav/Navbar";
import React from "typewriter-effect"
import { ReactTyped } from "react-typed";
import { ExpCard } from "@/components/experience/ExpCard";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Loader } from "@/components/nav/Loader";
import { BackToTopButton } from "@/components/nav/BackTopTop";
import { experiences } from "../../public/data/Experiences";



export default function Experiences({ }) {

    const [loading, setLoading] = useState(false)
    const router = useRouter()

    return (
        <main className="min-h-screen h-fit dark:bg-slate-800 bg-slate-300 border border-transparent flex flex-col items-center
						lg:h-fit">

            {loading && <Loader pageName={'Resume'} />}

            <Nav currentPage={'Experiences'} />

            <BackToTopButton />

            {/* <div className="relative w-11/12 h-40 mx-auto overflow-hidden
                            lg:h-80">
                <div className="h-96 flex items-center justify-center mx-auto bg-transparent rounded-full w-full
                                lg:h-[200%] lg:w-1/2">
                    <Model2 />
                </div>
            </div> */}

            <div className="text-white rounded-lg w-11/12 absolute mx-auto top-52 items-center flex justify-center
                            lg:w-1/2 lg:bg-transparent lg:top-72">

                <ReactTyped
                    startWhenVisible
                    strings={["Experiences"]}
                    typeSpeed={40}
                    className='dark:text-slate-300 text-warning-600 dark:border-0  px-2 rounded-md text-4xl font-bold capitalize font-montserrat
                                lg:text-6xl'
                    showCursor={false}
                />
            </div>

            <div className="mt-10">
                <Button
                    size="lg"
                    radius="lg"
                    variant="flat"
                    color='success'
                    className={`font-oswald text-lg dark:text-white text-black mx-auto fade-in lg:text-3xl`}
                    onClick={() => { setLoading(true), router.push('/resume') }}
                >
                    Resume
                </Button>
            </div>

            <div className="mt-10 w-11/12 flex flex-col gap-3 fade-in
                            lg:w-1/2 lg:grid lg:grid-cols-2 lg:gap-x-3 mb-10 ">

                {experiences.experiences.map((experience, index) => (<ExpCard
                    key={index}
                    prop={{
                        ...experience
                    }}
                />))}
            </div>




        </main>
    )
}