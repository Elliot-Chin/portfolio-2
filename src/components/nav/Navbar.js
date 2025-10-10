// components/nav/Navbar.jsx
import Link from "next/link"
import { useRouter } from "next/router"

function Navbar() {
  const router = useRouter()
  const links = [
    { href: "/", label: "Home" },
    { href: "/experiences", label: "Experiences" },
    { href: "/resume", label: "Resume" },     // ← added
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10 py-3">
      <ul className="flex justify-center gap-8 text-sm text-amber-200">
        {links.map(({ href, label }) => {
          const active = router.pathname === href
          return (
            <li key={href} className="relative">
              <Link
                href={href}
                className={`hover:text-amber-400 transition-colors ${
                  active ? "text-amber-400" : ""
                }`}
              >
                {label}
              </Link>
              {/* subtle active underline */}
              {active && (
                <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-6 bg-amber-400 rounded-full" />
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
