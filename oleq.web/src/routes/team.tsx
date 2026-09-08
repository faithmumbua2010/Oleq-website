import { Link, createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  Code2,
  Handshake,
  Layers3,
  LineChart,
  Palette,
  ShieldCheck,
} from 'lucide-react'

export const Route = createFileRoute('/team')({ component: Team })

const team = [
  {
    icon: Layers3,
    role: 'Leadership & strategy',
    detail:
      'Sets direction, builds strong partnerships and keeps delivery connected to the real goal.',
  },
  {
    icon: Code2,
    role: 'Engineering',
    detail:
      'Platform, integration and infrastructure specialists who make the hard parts dependable.',
  },
  {
    icon: Palette,
    role: 'Product & design',
    detail:
      'Researchers, product thinkers and designers who make complexity feel clear and useful.',
  },
  {
    icon: LineChart,
    role: 'Data & intelligence',
    detail:
      'Analysts and automation specialists turning operational data into next-step insight.',
  },
  {
    icon: ShieldCheck,
    role: 'Delivery & operations',
    detail:
      'Hands-on operators who help teams launch confidently and improve continuously.',
  },
  {
    icon: Handshake,
    role: 'Partnerships & client success',
    detail:
      'People who stay close to partner teams, needs and the work still ahead.',
  },
]

function Team() {
  return (
    <div>
      <section className="page-hero">
        <div className="mx-auto max-w-[1220px] px-5 sm:px-8">
          <p className="section-kicker">Our team</p>
          <h1 className="page-title max-w-3xl">
            Different disciplines. One shared standard for useful work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Oleq is powered by a wider team than a single technical lead: the
            people who define the opportunity, shape the experience, build the
            platform and help it keep getting better.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {team.map(({ icon: Icon, role, detail }, index) => (
            <article
              key={role}
              className="group relative overflow-hidden rounded-[1.4rem] border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-sky-950/10"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 transition group-hover:scale-125" />
              <div className="relative flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={24} />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  0{index + 1}
                </span>
              </div>
              <h2 className="relative mt-14 font-[Poppins,sans-serif] text-2xl font-semibold">
                {role}
              </h2>
              <p className="relative mt-3 leading-7 text-muted-foreground">
                {detail}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-border bg-card/50 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <p className="section-kicker justify-center">Work with us</p>
          <h2 className="section-title">
            Bring your specialists together with ours.
          </h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            We integrate with internal teams, lead a defined workstream or take
            ownership of an end-to-end platform effort.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground no-underline hover:bg-accent hover:text-accent-foreground"
          >
            Start a conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
