import Loader from "@/components/Loader";
import NavMenu from "@/components/NavMenu";
import { useState } from "react";







export default function MissingPage () {

    const [isLoading,setLoading] = useState(false)

    return (

        <div className="flex flex-col items-center justify-center h-screen">
            {isLoading && <Loader />}

            <div className="h-fit w-5/6 mx-auto flex flex-col items-center justify-center rounded-md bg-slate-600 bg-opacity-30 glass-effect glass-shadow\
                            lg:w-1/4">
                <div className="p-3 border-b-2 w-11/12 mx-auto items-center flex flex-col">
                    <h1 className="text-5xl font-lato text-yellow-400">404</h1>
                </div>

                <div className="p-3">
                    <img
                        src={'https://www.programmics.co.in/assets/images/mobileappdevelopement.gif'}
                        height={512}
                        width={512}
                        />
                </div>

                <div className="p-3 flex flex-col items-center justify-center gap-5 text-center font-inclusive-sans text-xl">
                <p>Oops, the page you're trying to reach is currently under a little sprucing up or it might have taken a different path.</p>
                </div>
            </div>

            <div className="w-11/12 mt-10 mb-16
                            lg:flex lg:w-fit">
                <div name='nav-wrapper' className="
                lg:w-fit lg:right-0">
                    <NavMenu about experience projects skills contact setLoading={setLoading}/>
                </div>
            </div>
        </div>
    )
}