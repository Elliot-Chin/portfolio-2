import { ApartmentOutlined, AssignmentOutlined, FaceRetouchingNaturalOutlined, ConnectWithoutContactOutlined, LightModeOutlined, DarkModeOutlined, DarkModeRounded, DarkModeTwoTone } from "@mui/icons-material"
import { Navbar, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarBrand, NavbarItem, Switch } from "@nextui-org/react"
import { Image } from "@nextui-org/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Loader } from "./Loader"
import { useTheme } from "@/utils/ThemeProvider"

export const Nav = ({ currentPage }) => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const [loading, setLoading] = useState({ status: false, pageName: '' })
    const router = useRouter()
    const theme = useTheme()

    const menuItems = [
        {
            icon: <FaceRetouchingNaturalOutlined htmlColor="dark:white" fontSize="lg" />,
            key: 'About Me',
            action: () => { router.push('/about') }
        },
        {
            icon: <ApartmentOutlined htmlColor="dark:white" fontSize="lg" />,
            key: 'Experiences',
            action: () => { router.push('/experiences') }
        },
        {
            icon: <AssignmentOutlined htmlColor="dark:white" fontSize="lg" />,
            key: 'Projects',
            action: () => { router.push('/projects') }
        },
        {
            icon: <ConnectWithoutContactOutlined htmlColor="dark:white" fontSize="lg" />,
            key: 'Contact',
            action: () => { router.push('/contact') }
        },
    ]

    const handleNavClick = (e) => {
        e.action()
        setLoading((prev) => ({ ...prev, status: true, pageName: e.key }))

        if (currentPage == e.key) {
            setTimeout(() => {
                setLoading((prev) => ({ ...prev, status: false }))
            }, 500)
        }
    }

    useEffect(() => {
        setLoading((prev) => ({ ...prev, status: false, pageName: currentPage }))
    }, [currentPage])

    return (
        <>
            {loading.status && <Loader pageName={loading.pageName} />}

            <Navbar className="bg-transparent dark:text-white text-black" onMenuOpenChange={setMenuOpen}>
                <NavbarContent className="flex flex-row lg:hidden">
                    <div className="w-full lg:hidden">
                        <NavbarBrand>
                            <Image src={"/icons/logo_black_transparent.png"} height={48} width={48} alt="logo" priority='true' className="dark:hidden" />
                            <Image src={"/icons/logo_transparent.png"} height={48} width={48} alt="logo" priority='true' className="dark:flex hidden" />
                            <span className="font-raleway">Elliot Chin | Portfolio</span>
                        </NavbarBrand>
                    </div>

                    <NavbarMenu className="bg-slate-600 bg-opacity-20 glass-effect gap-5 lg:hidden">
                        {menuItems?.map((entry, index) => (
                            <NavbarMenuItem className="transition duration-300 hover:cursor-pointer" key={`${entry.key}-${index}`} onClick={() => { handleNavClick(entry) }}>
                                <span className="text-3xl lg:text-5xl font-montserrat text-center px-2 rounded-lg">{entry.icon}</span>
                                <span className={`text-3xl lg:text-5xl font-montserrat dark:text-slate-200 text-slate-950`}>{entry.key}</span>
                            </NavbarMenuItem>
                        ))}
                    </NavbarMenu>

                    <div className="flex flex-col gap-2" >
                        <Switch
                            onClick={() => theme.toggleTheme()}
                            color="default"
                            endContent={<DarkModeOutlined />}
                            startContent={<LightModeOutlined />}
                            classNames={{
                                label: 'force-white',
                                wrapper: 'bg-slate-950'
                            }}
                        />
                    </div>

                    <NavbarMenuToggle aria-label={isMenuOpen ? 'Close' : 'Open'} />
                </NavbarContent>

                <NavbarContent className="hidden lg:flex" justify="center">
                    <NavbarBrand className="border-r pr-5 border-slate-600">
                    <Image src={"/icons/logo_black_transparent.png"} height={40} width={40} alt="logo" priority='true' className="dark:hidden" />
                            <Image src={"/icons/logo_transparent.png"} height={40} width={40} alt="logo" priority='true' className="dark:flex hidden" />
                        <span className="font-raleway">Elliot Chin | Portfolio</span>
                    </NavbarBrand>

                    {menuItems?.map((entry, index) => (
                        <NavbarItem className="transition duration-300 hover:cursor-pointer" key={`${entry.key}-${index}`} onClick={() => { handleNavClick(entry) }}>
                            <span className="text-2xl font-montserrat text-center px-2 rounded-lg dark:text-white text-black">{entry.icon}</span>
                            <span className={`text-2xl font-montserrat text-black dark:text-slate-200`}>{entry.key}</span>
                        </NavbarItem>
                    ))}

                    <div className="flex flex-col gap-2" >
                        <Switch
                            onClick={() => theme.toggleTheme()}
                            color="default"
                            isSelected={theme.theme == 'light'}
                            endContent={<DarkModeOutlined />}
                            startContent={<LightModeOutlined />}
                            classNames={{
                                label: 'force-white',
                                wrapper: 'bg-slate-950'
                            }}
                        />
                    </div>

                </NavbarContent>
            </Navbar>
        </>
    )
}
