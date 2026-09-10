import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'

const nav = [
  {
    section: 'Industries',
    items: [
      { link: '/services#finance', name: 'Finance' },
      { link: '/services#education', name: 'Education' },
      { link: '/services#health', name: 'Health' },
    ],
  },
  {
    section: 'Company',
    items: [
      { link: '/about', name: 'Who we are' },
      { link: '/projects', name: 'Our work' },
      { link: '/team', name: 'Our team' },
      { link: '/contact', name: 'Request a quote' },
    ],
  },
  {
    section: 'Legal',
    items: [
      { link: '/privacy', name: 'Privacy Policy' },
      { link: '/account/deletion', name: 'Delete your account' },
    ],
  },
  {
    section: 'Contact',
    items: [
      { link: '/contact', name: 'Start a conversation' },
      { link: '/contact#quote-form', name: 'Request a quote' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.24),transparent_28%),linear-gradient(180deg,#020817_0%,#0f172a_35%,#111827_100%)] text-slate-100">
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
                  <Link to={link} key={link}>
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center flex-col gap-4 border-t border-white/10 py-2 text-xs text-slate-300 md:flex-row justify-between">
          <div>© {new Date().getFullYear()} Oleq. All rights reserved.</div>
          <ThemeToggle />
          <div className="mono font-mono">
            BUILT &amp; OPERATED IN NAIROBI, KENYA
          </div>
        </div>
      </div>
    </footer>
  )
}
