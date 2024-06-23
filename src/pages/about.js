import { Headshot } from "@/components/avatar/Headshot";
import { Model } from "@/components/avatar/Model";
import { SummaryCard } from "@/components/index/SummaryCard";
import { BackToTopButton } from "@/components/nav/BackTopTop";
import { Nav } from "@/components/nav/Navbar";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { Button } from "@nextui-org/react";
import { about_me } from "../../public/data/AboutMe";
import { emailLink, githubLink, linkedInLink } from "../../public/data/Links";
import { eChin } from "../../public/data/People";


export default function Home() {


	const handleClick = (url) => {
		console.log()
		const link = document.createElement('a');
		link.href = url;
		link.target = '_blank';
		link.rel = 'noopener noreferrer';
		link.click();
	};

	return (
		<main className="min-h-screen h-fit border border-transparent pb-5 bg-slate-300
						dark:bg-slate-800
						lg:h-fit">

			<Nav currentPage={'About Me'} />

			<div className="h-3/4 w-2/3 mx-auto justify-around hidden relative mb-10
							lg:pt-24 lg:flex">
				<div className=" w-1/4 rounded-full overflow-hidden bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg shadow-blue-500/50 border-blue-500
							">
					<div className="w-full h-full flex items-center justify-center">
						<Model />
					</div>
				</div>

				<div className="w-2/3">
					<div className="flex flex-col px-5 h-fit mt-0">
						<SummaryCard
							summary={about_me.summary}
						/>
					</div>

					<div className="flex gap-5 mt-7 items-center justify-center bottom-0">
						<Button isIconOnly className="bg-transparent" onClick={() => handleClick(eChin.linkedin)}><LinkedIn htmlColor="dark:white" fontSize="large" /></Button>
						<Button isIconOnly className="bg-transparent" onClick={() => handleClick(githubLink)}><GitHub htmlColor="dark:white" fontSize="large" /></Button>
						<Button isIconOnly className="bg-transparent" onClick={() => handleClick(emailLink)}><Mail htmlColor="dark:white" fontSize="large" /></Button>
					</div>
				</div>
			</div>

			<div className="px-2 lg:hidden fade-in h-60 overflow-hidden">
				<div className="w-full mx-auto rounded-lg overflow-hidden mt-5 h-96
							lg:hidden">
					<div className="w-full h-full flex items-center justify-center">
						<Headshot />
					</div>
				</div>
			</div>


			<div className="lg:hidden px-2 mx-auto fade-in">
				<div className="flex flex-col gap-5 h-fit">
					<SummaryCard
						title={"ABOUT ME"}
						summary={about_me.summary}
					/>
				</div>

				<div className="flex gap-5 mt-7 items-center justify-center bottom-0">
					<Button isIconOnly className="bg-transparent" onClick={() => handleClick(eChin.linkedin)}><LinkedIn fontSize="large" /></Button>
					<Button isIconOnly className="bg-transparent"onClick={() => handleClick(githubLink)}><GitHub fontSize="large" /></Button>
					<Button isIconOnly className="bg-transparent"onClick={() => handleClick(emailLink)}><Mail fontSize="large" /></Button>
				</div>
			</div>

			<BackToTopButton />
		</main>
	);
}
