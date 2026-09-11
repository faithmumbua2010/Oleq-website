import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/about')({ component: About })

function About() {
  return (
    <div>
      <section className="page-hero">
        <div className="container wrap relative">
          <div className="max-w-4xl">
            <p className="section-kicker">About Oleq</p>
            <h1 className="page-title">
              Technology that stays close to the people it serves.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              Oleq is an African technology company for organisations doing work
              that matters. We combine local context with clear product thinking
              and serious engineering.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container !py-20 sm:!py-28">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="section-kicker">Our point of view</p>
              <h2 className="section-title">
                Useful infrastructure should feel considered, reliable and alive.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-muted-foreground">
              <p>
                We believe digital systems should do more than launch well. They
                should support people at busy moments, bring confidence to decisions
                and make the next step easier.
              </p>
              <p>
                That is why we bring product, engineering, data and operations into
                the same room. It gives our partners one thoughtful team focused on
                what happens before, during and long after go-live.
              </p>
              <div className="grid gap-3 pt-3 sm:grid-cols-2">
                {[
                  'Context before assumptions',
                  'Clarity before complexity',
                  'Reliability before novelty',
                  'Progress after launch',
                ].map((item) => (
                  <p
                    key={item}
                    className="flex items-center gap-2 text-base font-semibold text-foreground"
                  >
                    <CheckCircle2 size={19} className="text-primary" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-muted/40 dark:bg-muted/10">
        <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,hsl(var(--border)/.35)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/.35)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

        <div className="container !py-20 sm:!py-24">
          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.14em] text-primary">
                Our mission
              </p>
              <h2 className="mt-4 max-w-xl font-[Poppins,sans-serif] text-3xl font-semibold leading-tight sm:text-4xl">
                Make important work easier to run, understand and grow.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
                We turn complex operational needs into dependable digital products
                that help organisations serve people better every day.
              </p>
            </div>
            <div className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <p className="text-sm font-bold uppercase tracking-[.14em] text-primary">
                Our vision
              </p>
              <h2 className="mt-4 max-w-xl font-[Poppins,sans-serif] text-3xl font-semibold leading-tight sm:text-4xl">
                A more connected, capable and confident Africa.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
                We imagine technology that strengthens local businesses and the
                communities, teams and customers around them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 dark:bg-slate-900/60">
        <div className="container !py-20 sm:!py-28">
          <p className="section-kicker">The Oleq approach</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              [
                '01',
                'Listen closely',
                'We begin with the work, people and constraints around the problem—not a preselected solution.',
              ],
              [
                '02',
                'Make the hard parts clear',
                'We reduce uncertainty with useful prototypes, technical decisions and a practical delivery plan.',
              ],
              [
                '03',
                'Build for the long run',
                'We launch, learn and improve alongside the teams who depend on the platform.',
              ],
            ].map(([number, title, copy]) => (
              <article
                key={number}
                className="rounded-2xl border border-border bg-background p-7"
              >
                <span className="font-mono text-sm text-primary">{number}</span>
                <h3 className="mt-8 font-[Poppins,sans-serif] text-2xl font-semibold">
                  {title}
                </h3>
                <p className="mt-4 leading-7 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container !py-20 sm:!py-28">
          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-border bg-card p-8 sm:flex-row sm:items-center sm:p-12">
            <div>
              <p className="section-kicker">The people behind Oleq</p>
              <h2 className="mt-3 font-[Poppins,sans-serif] text-3xl font-semibold tracking-tight">
                A multidisciplinary team, not a one-person story.
              </h2>
            </div>
            <Link
              to="/team"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground no-underline hover:bg-accent hover:text-accent-foreground"
            >
              Meet the team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
