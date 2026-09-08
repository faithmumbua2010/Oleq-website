import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-[100] border-b border-border bg-background/90 backdrop-blur-[14px]">
      <nav className="container flex items-center justify-between px-5 py-4 sm:px-8">
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
            Work
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
        <Link
          to="/contact"
          className="rounded-full bg-primary px-3.5 py-2 text-xs font-bold text-primary-foreground no-underline lg:hidden"
        >
          Get a quote
        </Link>
      </nav>
    </header>
  )
}
