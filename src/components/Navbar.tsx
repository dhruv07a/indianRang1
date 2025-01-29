
import { useState, useEffect, useRef } from "react"
import { Search, User, ShoppingCart, Menu } from "lucide-react"
import "../assets/css/Navbar.css"
import Logo from '../assets/Images/Screenshot 2025-01-27 120600.png'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: "SAREE", href: "#" },
  { label: "SAREE SHAPEWEAR", href: "#" },
  { label: "TROUSERS", href: "#" },
  { label: "DRESS", href: "#" },
  { label: "WESTERN", href: "#" },
  { label: "LEHENGA CHOLI", href: "#" },
  { label: "READY TO WEAR", href: "#" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar" ref={navRef}>
      <div className="top-bar">
        <div className="menu-icon" onClick={toggleMenu}>
          <Menu size={24} />
        </div>
        <div className="icon-group left">
          <Search size={20} />
        </div>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="icon-group right">
          <User size={20} />
          <ShoppingCart size={20} />
        </div>
      </div>

      <div className={`navigation ${isMenuOpen ? "navigation-open" : ""}`}>
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="nav-item" onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </div>

      <div className={`overlay ${isMenuOpen ? "overlay-visible" : ""}`} onClick={() => setIsMenuOpen(false)} />
    </nav>
  )
}

