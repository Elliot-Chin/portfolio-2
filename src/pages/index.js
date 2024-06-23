import { Model } from "@/components/avatar/Model";
import { Nav } from "@/components/nav/Navbar";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect"
import { Loader } from "@/components/nav/Loader";

export default function Home() {

	const router = useRouter()
	const [loading, setLoading] = useState(false)

	const typewriterStrings = ['Hey there!', 'Welcome to my portfolio!']

	useEffect(() => {
		setTimeout(() => {
			setLoading(true)
			router.push('/about')
		}, 8500)
	}, [])

	return (
		<main className="min-h-screen dark:bg-slate-800 bg-slate-300 border-4 border-transparent flex items-center flex-col relative lg:h-fit">
			<Nav currentPage={'/'} />

			{loading && <Loader pageName={'About Me'}/>}

			<div className="w-11/12 h-1/2 text-white text-center mt-5 top-[35%] left-0 right-0 mx-auto justify-center items-center flex float-up flex-col gap-20 fade-in lg:top-[20%] lg:w-full">
				<Typewriter
					options={{
						strings: [...typewriterStrings],
						autoStart: true,
						loop: false,
						delay: 75,
						cursor: '',
						wrapperClassName: 'font-spacemono text-2xl lg:text-3xl dark:text-white text-slate-950'
					}}
				/>
			</div>

			<div className="w-11/12 mx-auto h-96 lg:h-40%">
				<div className="w-full h-full flex items-center justify-center mx-auto">
					<Model />
				</div>
			</div>
		</main>

	);
}
