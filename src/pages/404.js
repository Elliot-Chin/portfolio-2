import { Nav } from "@/components/nav/Navbar";
import { ModelMissingAnimation } from "@/components/avatar/Model_MissingAnimation.js";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Custom404() {

    const router = useRouter()
    const errorMessage = "It looks like the page you're looking for doesn't exist 😱"

    return (
        <div>
            <main className="min-h-screen dark:bg-slate-800 bg-slate-300 border-4 border-transparent flex items-center flex-col relative lg:h-fit">
                <Nav currentPage={'404'} />


                <div className="w-11/12 mx-auto h-96">
                    <div className="w-full h-full flex items-center justify-center mx-auto">
                        <ModelMissingAnimation />
                    </div>

                    <div className="absolute top-[40%] bottom-[40%] left-[10%] right-[10%] text-center flex flex-col gap-5 glass-effect bg-opacity-20 rounded-md shadow-lg dark:bg-slate-950 bg-slate-400 px-3 pt-3
                                    lg:w-1/4 lg:mx-auto lg:h-fit lg:top-96">
                        <span className="font-montserrat text-xl dark:text-white">{errorMessage}</span>
                        <Button
                            size="md"
                            radius="lg"
                            variant="solid"
                            color='warning'
                            className={`font-oswald text-lg text-white mx-auto fade-in mb-5`}
                            onClick={() => router.push('/about')}
                        >
                            Home
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
}