import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-[100] bg-background/80 backdrop-blur-[14px] border-b-2 border-border shadow-lg">
      <nav className=" py-6 px-8 max-[680px]:px-5 flex justify-between container">
        <Link
          to="/"
          className="logo flex items-center gap-[9px] font-['Poppins'] font-bold text-[21px] tracking-[-0.02em]"
        >
          <img
            src="/oleq-logo.png"
            alt="Oleq logo"
            className="oleq-logo max-w-10"
          />
          Oleq
        </Link>

        <div className="nav-links hidden min-[681px]:flex items-center gap-[34px]">
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
            to="/about"
            className="nav-link"
            activeProps={{ className: `nav-link is-active` }}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            activeProps={{ className: `nav-link is-active` }}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  )
}
