import { Link, createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  Bot,
  Cable,
  Layers3,
  Palette,
  ServerCog,
} from 'lucide-react'

export const Route = createFileRoute('/services')({ component: Services })

const services = [
  {
    icon: Palette,
    title: 'Product strategy & design',
    copy: 'We turn a complex need into a focused product direction, clear service journey and usable interface.',
  },
  {
    icon: Layers3,
    title: 'Platform engineering',
    copy: 'Web, mobile, payment and data systems designed to work together as your organisation grows.',
  },
  {
    icon: Cable,
    title: 'Integrations & payments',
    copy: 'Practical connections to the banks, mobile money, core systems and communication rails your work relies on.',
  },
  {
    icon: Bot,
    title: 'Data, AI & automation',
    copy: 'Useful intelligence and automation that removes friction from decisions and everyday operations.',
  },
  {
    icon: ServerCog,
    title: 'Operate & improve',
    copy: 'Reliable support, analytics and continuous improvement beyond the day your platform launches.',
  },
]

function Services() {
  return (
    <div>
      <section className="page-hero">
        <div className="mx-auto max-w-305 px-5 sm:px-8">
          <p className="section-kicker">What we do</p>
          <h1 className="page-title max-w-3xl">
            The skills to build it. The care to keep it working.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Oleq helps organisations create the digital infrastructure behind
            better finance, learning and health outcomes.
          </p>
        </div>
      </section>
      <section
        className="bg-white px-5 py-20 sm:px-8 sm:py-28 dark:bg-slate-950/80"
        id="delivery"
      >
        <div className="mx-auto max-w-305">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, copy }) => (
              <article
                key={title}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={24} />
                </span>
                <h2 className="mt-8 font-[Poppins,sans-serif] text-xl font-semibold">
                  {title}
                </h2>
                <p className="mt-3 leading-7 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-100 py-20 sm:py-28 dark:bg-slate-900/60">
        <div className="mx-auto max-w-305 px-5 sm:px-8">
          <p className="section-kicker">Where we focus</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {[
              [
                'finance',
                'Finance',
                'Payments, member services and financial operations that need confidence at every transaction.',
              ],
              [
                'education',
                'Education',
                'Connected learner experiences and practical tools for institutions serving more students, better.',
              ],
              [
                'health',
                'Health',
                'Digital care journeys and operational tools that help services stay coordinated and accessible.',
              ],
            ].map(([id, title, copy], index) => (
              <article
                key={id}
                id={id}
                className="rounded-2xl border border-border bg-background p-7"
              >
                <span className="font-mono text-xs text-primary">
                  0{index + 1}
                </span>
                <h2 className="mt-7 font-[Poppins,sans-serif] text-2xl font-semibold">
                  {title}
                </h2>
                <p className="mt-3 leading-7 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 px-5 py-20 text-center sm:px-8 sm:py-28 dark:bg-slate-950/70">
        <div className="mx-auto max-w-305">
          <p className="section-kicker justify-center">
            Start with the right question
          </p>
          <h2 className="section-title mx-auto max-w-2xl">
            Tell us where your organisation needs to move next.
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground no-underline hover:bg-accent hover:text-accent-foreground"
          >
            Request a quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
