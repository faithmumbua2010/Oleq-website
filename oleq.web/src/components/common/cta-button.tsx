import { Link } from '@tanstack/react-router'

interface Props {
  href: string
  name: string
}

export default function CtaButton({ href, name }: Props) {
  return (
    <Link
      to={href}
      className="btn inline-flex items-center gap-2.5 px-6.5 py-3.5 rounded-full font-['Poppins'] font-semibold text-[15px] cursor-pointer border border-transparent transition-all duration-300 whitespace-nowrap btn-primary bg-linear-to-r from-primary to-accent text-primary-foreground hover:-translate-y-0.5 hover:from-accent hover:to-primary"
    >
      {name}

      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
       strokeWidth="2"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </Link>
  )
}
