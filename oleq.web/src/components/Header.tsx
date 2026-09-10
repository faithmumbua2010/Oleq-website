import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky inset-x-0 top-0 z-100 border-b border-border bg-background/90 backdrop-blur-[14px]">
      <nav className="max-w-[1920px] mx-auto flex items-center justify-between px-5 py-4 sm:px-8">
        <Link
          to="/"
          className="logo flex items-center gap-2.25 font-['Poppins'] font-bold text-[21px] tracking-[-0.02em]"
        >
          <img
            src="/oleq-logo.png"
            alt="Oleq logo"
            className="oleq-logo max-w-10"
          />
          Oleq
        </Link>

        <div className="nav-links hidden items-center gap-7 lg:flex">
          <Link
            to="/"
            className="nav-link"
            activeProps={{ className: `nav-link is-active` }}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="nav-link"
            activeProps={{ className: `nav-link is-active` }}
          >
            Services
          </Link>
          <Link
            to="/projects"
            className="nav-link"
            activeProps={{ className: `nav-link is-active` }}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeProps={{ className: `nav-link is-active` }}
          >
            About Us
          </Link>
          <Link
            to="/team"
            className="nav-link"
            activeProps={{ className: `nav-link is-active` }}
          >
            Team
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground no-underline transition hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
            activeProps={{ className: `nav-link is-active` }}
          >
            Request a quote
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground lg:hidden"
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background px-5 py-4 lg:hidden sm:px-8"
        >
          <div className="flex flex-col gap-1">
            <Link to="/" onClick={closeMenu} className="nav-link px-2 py-3">
              Home
            </Link>
            <Link
              to="/services"
              onClick={closeMenu}
              className="nav-link px-2 py-3"
            >
              Services
            </Link>
            <Link
              to="/projects"
              onClick={closeMenu}
              className="nav-link px-2 py-3"
            >
              Projects
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="nav-link px-2 py-3"
            >
              About Us
            </Link>
            <Link to="/team" onClick={closeMenu} className="nav-link px-2 py-3">
              Team
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-primary px-4 py-3 text-center text-sm font-bold text-primary-foreground no-underline"
            >
              Request a quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
