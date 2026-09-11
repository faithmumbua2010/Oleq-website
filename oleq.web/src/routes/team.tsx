import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/team')({ component: Team })

const team = [
  { name: 'Ronald Mutuku', role: 'CEO' },
  { name: 'Oliver Sagala', role: 'Senior Developer' },
  { name: 'Antony', role: 'App Developer' },
  { name: 'Bilha', role: 'Frontend Developer' },
  { name: 'Fred', role: 'Project Manager' },
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
        <div className="mx-auto max-w-305 px-5 sm:px-8">
          <p className="section-kicker">Our people</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.35fr_.65fr] lg:items-end lg:gap-16">
            <div>
              <h1 className="page-title max-w-3xl">Meet the team.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                A multidisciplinary team of builders, problem-solvers and
                creatives working together to design and deliver dependable
                digital infrastructure for organisations doing meaningful work.
              </p>
            </div>
            <p className="border-l border-border pl-6 leading-7 text-muted-foreground">
              We bring together expertise across technology, product, design,
              operations and local context to build solutions that work in the
              real world.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-305 px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-muted/40">
          <div className="flex aspect-[16/7] min-h-64 items-center justify-center bg-muted">
            <img
              src="/team.jpg"
              alt="The Oleq team"
              className="h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = 'none'
                event.currentTarget.parentElement?.classList.add('photo-placeholder')
              }}
            />
            <div className="pointer-events-none absolute inset-0 grid place-items-center">
              <span className="rounded-full border border-border bg-background/80 px-5 py-2 text-sm font-semibold text-muted-foreground backdrop-blur">
                Add your team photo as public/team.jpg
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20 text-center sm:px-8 sm:pb-28">
        <p className="section-kicker justify-center">Our team</p>
        <h2 className="section-title mt-4">Driven by people, grounded in impact.</h2>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          At Oleq, our team combines technical expertise with a strong
          understanding of the organisations and communities we serve. We are
          engineers, designers, product thinkers and operators, united by a
          shared commitment to solving real problems through technology.
        </p>
      </section>

      <section className="mx-auto max-w-305 px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="rounded-3xl border border-border bg-muted/30 px-6 py-12 sm:px-10 sm:py-16">
          <div className="mb-12 flex items-center justify-between gap-6">
            <p className="section-kicker">Meet our team</p>
            <p className="hidden text-sm font-semibold text-primary sm:block">
              A diverse team, a bigger impact.
            </p>
          </div>

          <div className="grid gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map(({ name, role }) => (
              <article
                key={name}
                className="flex flex-col items-center border-border px-4 text-center lg:border-r lg:last:border-r-0"
              >
                <div className="grid size-24 place-items-center rounded-full border border-border bg-primary/10 font-[Poppins,sans-serif] text-2xl font-bold text-primary">
                  {initials(name)}
                </div>
                <h3 className="mt-5 font-[Poppins,sans-serif] text-base font-bold">
                  {name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-305 px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#071525_0%,#0b2a46_60%,#0369a1_140%)] px-7 py-12 text-white sm:px-12 sm:py-16">
          <div className="relative z-10 max-w-2xl">
            <p className="section-kicker text-sky-300">Work with us</p>
            <h2 className="mt-4 font-[Poppins,sans-serif] text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s build what&apos;s next, together.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              We&apos;re always open to working with passionate people, partners
              and organisations who care about creating meaningful impact
              through technology.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground no-underline hover:bg-accent hover:text-accent-foreground"
            >
              Get in touch <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
