// components/NavBar.jsx
import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10 py-3">
            <ul className="flex justify-center gap-8 text-sm text-amber-200">
                <li><Link href="/" className="hover:text-amber-400">Home</Link></li>
                <li><Link href="/experiences" className="hover:text-amber-400">Experiences</Link></li>
                <li><Link href="/contact" className="hover:text-amber-400">Contact</Link></li>
            </ul>
        </nav>
    )
}
