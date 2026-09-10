import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/team')({ component: Team })

const team = [
  {
    name: 'Ronald Mutuku',
    role: 'CEO',
    detail:
      'Sets the direction for Oleq and keeps every engagement tied to real client outcomes.',
  },
  {
    name: 'Oliver Sagala',
    role: 'Senior Developer',
    detail:
      'Leads architecture and the trickier engineering problems across the platform.',
  },
  {
    name: 'Antony',
    role: 'App Developer',
    detail: 'Builds and maintains the mobile and application layer end to end.',
  },
  {
    name: 'Bilha',
    role: 'Frontend Developer',
    detail:
      'Shapes the interfaces clients and users actually touch — clean and responsive.',
  },
  {
    name: 'Fred',
    role: 'Project Manager',
    detail:
      'Keeps timelines honest and communication clear across every project.',
  },
]

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function Team() {
  return (
    <div>
      <section className="page-hero">
        <div className="mx-auto max-w-[1220px] px-5 sm:px-8">
          <p className="section-kicker">Our team</p>
          <h1 className="page-title max-w-3xl">The people behind Oleq.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            A hands-on team spanning leadership, engineering, product and
            delivery — each person carrying real ownership, not just a job
            title, so the work stays accountable from the first idea to what
            ships.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 pt-8 sm:px-8 sm:py-28 sm:pt-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map(({ name, role, detail }) => (
            <article
              key={name}
              className="overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-950/10"
            >
              <div className="grid aspect-square place-items-center bg-[linear-gradient(160deg,#0b1f35_0%,#0369a1_120%)] text-3xl font-bold text-white">
                {initials(name)}
              </div>
              <div className="p-5">
                <h2 className="font-[Poppins,sans-serif] text-base font-bold">
                  {name}
                </h2>
                <p className="mt-0.5 text-sm font-bold text-primary">{role}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {detail}
                </p>
              </div>
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
