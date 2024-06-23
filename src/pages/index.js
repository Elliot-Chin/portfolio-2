import Logo from "@/components/Logo";
import {  ContactSupportOutlined } from "@mui/icons-material";
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarMenuItem, NavbarItem, NavbarMenu, NavbarMenuToggle } from "@nextui-org/react";
import { useState } from "react";


export default function Home() {

	const [isMenuOpen, setMenuOpen] = useState(false)
	const [currentMenuItem, setCurrentMenuItem] = useState(0)

	const navBarItems = [
		{ display: 'About Me', href: '#' },
		{ display: 'Experience', href: '#' },
		{ display: 'Skills', href: '#' },
		{ display: 'Projects', href: '#' },
	]

	return (
		<main
			className="min-h-screen h-fit bg-black"
		>

			<div className="absolute w-full">
				<Navbar onMenuOpenChange={setMenuOpen} className="bg-slate-950">

					<NavbarContent>
						<NavbarMenuToggle
							className="sm:hidden text-white"
						/>
						<NavbarBrand>
							<Logo white />
						</NavbarBrand>
					</NavbarContent>

					<NavbarContent className="hidden sm:flex gap-16 font-montserrat" justify="center">
						<NavbarItem isActive={currentMenuItem == 0} className="w-24 flex justify-center">
							<Link size="lg" className={`${currentMenuItem == 0 ? "text-secondary-600" : "text-white"} text-xl`} href="#" onClick={() => setCurrentMenuItem(0)}>
								About Me
							</Link>
						</NavbarItem>

						<NavbarItem isActive={currentMenuItem == 1} className="w-24 flex justify-center">
							<Link size="lg" className={`${currentMenuItem == 1 ? "text-secondary-600" : "text-white"} text-xl`} href="#" onClick={() => setCurrentMenuItem(1)}>
								Experience
							</Link>
						</NavbarItem>

						<NavbarItem isActive={currentMenuItem == 2} className="w-24 flex justify-center">
							<Link size="lg" className={`${currentMenuItem == 2 ? "text-secondary-600" : "text-white"} text-xl`} href="#" onClick={() => setCurrentMenuItem(2)}>
								Skills
							</Link>
						</NavbarItem>

						<NavbarItem isActive={currentMenuItem == 3} className="w-24 flex justify-center">
							<Link size="lg" className={`${currentMenuItem == 3 ? "text-secondary-600" : "text-white"} text-xl`} href="#" onClick={() => setCurrentMenuItem(3)}>
								Projects
							</Link>
						</NavbarItem>
					</NavbarContent>

					<NavbarContent justify="end">
						<NavbarItem isActive={currentMenuItem == 4} className="w-24 flex justify-center">
							<Link size="lg" className={`${currentMenuItem == 4 ? "text-warning-600" : "text-white"} text-xl`} href="#" onClick={() => setCurrentMenuItem(4)}>
								<div className="flex gap-3">
									<ContactSupportOutlined fontSize="medium" />
									<span>Contact</span>
								</div>
							</Link>
						</NavbarItem>
					</NavbarContent>

					<NavbarMenu>
						{
							navBarItems.map((item, index) => (
								<NavbarMenuItem key={`${item}-${index}`}>
									<Link
										color="foreground"
										size="lg"
										href={item.href}
									>
										{item.display}
									</Link>
								</NavbarMenuItem>
							))}
					</NavbarMenu>

				</Navbar>
			</div>


		</main>
	)
}
