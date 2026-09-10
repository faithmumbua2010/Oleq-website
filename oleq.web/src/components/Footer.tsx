import { Link } from '@tanstack/react-router'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const nav = [
  {
    section: 'Industries',
    items: [
      { link: '/#industries', name: 'InsurTech' },
      { link: '/#industries', name: 'EdTech' },
      { link: '/#industries', name: 'PropTech' },
      { link: '/#industries', name: 'Payments & FinTech' },
    ],
  },
  {
    section: 'Company',
    items: [
      { link: '/about', name: 'Who we are' },
      { link: '/projects', name: 'Our work' },
      { link: '/team', name: 'Our team' },
      { link: '/#why-oleq', name: 'Why Oleq' },
    ],
  },
  {
    section: 'Legal',
    items: [
      { link: '/privacy', name: 'Privacy Policy' },
      { link: '/account/deletion', name: 'Delete your account' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface-strong)] text-[var(--sea-ink)]">
      <div className="container px-8">
        <div className="grid grid-cols-[1.2fr_repeat(4,.85fr)] gap-9 py-4 pb-14 max-[960px]:grid-cols-2 max-[680px]:grid-cols-1">
          <div className="footer-brand">
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
            <p className="m-0">
              Intelligent digital infrastructure for insurance, education,
              property and payments — designed, built and operated across
              Africa.
            </p>
          </div>

          {nav.map(({ section, items }) => (
            <div className="space-y-2" key={section}>
              <h5>{section}</h5>
              <div className="flex flex-col gap-1">
                {items.map(({ name, link }) => (
                  <Link to={link} key={`${section}-${name}`}>
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-2">
            <h5>Contact</h5>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:support@oleq.co"
                className="inline-flex items-center gap-2 no-underline"
              >
                <Mail size={16} />
                support@oleq.co
              </a>
              <a
                href="tel:+254728872056"
                className="inline-flex items-center gap-2 no-underline"
              >
                <Phone size={16} />
                +254 728 872 056
              </a>
              <a
                href="https://wa.me/254728872056"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 no-underline"
              >
                <MessageCircle size={16} />
                WhatsApp — @oleq
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col gap-4 border-t border-[var(--line)] py-2 text-xs text-[var(--sea-ink-soft)] md:flex-row justify-between">
          <div>© {new Date().getFullYear()} Oleq. All rights reserved.</div>
          <ThemeToggle />
          <div className="mono font-mono">BUILT &amp; OPERATED IN NAIROBI, KENYA</div>
        </div>
      </div>
    </footer>
  )
}
