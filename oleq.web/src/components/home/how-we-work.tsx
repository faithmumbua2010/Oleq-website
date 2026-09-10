import {
  TrendingUp,
  Globe2,
  BadgeCheck,
  Layers,
  CreditCard,
  Rocket,
  type LucideIcon,
} from 'lucide-react'

const reasons: { title: string; copy: string; icon: LucideIcon }[] = [
  {
    title: 'Proven at scale',
    copy: 'Technology already serving millions of users in production, not pilot.',
    icon: TrendingUp,
  },
  {
    title: 'African experience',
    copy: 'Platforms operating across multiple African markets and regulatory environments.',
    icon: Globe2,
  },
  {
    title: 'Industry expertise',
    copy: 'Deep, specific experience in insurance, education, property and payments.',
    icon: BadgeCheck,
  },
  {
    title: 'End-to-end capability',
    copy: 'Product, engineering, integrations, payments, AI, analytics and support — one organization.',
    icon: Layers,
  },
  {
    title: 'Payments expertise',
    copy: 'Real-world experience building payment platforms and gateway infrastructure that moves money daily.',
    icon: CreditCard,
  },
  {
    title: 'Built for growth',
    copy: 'Technology designed to scale as your users, transactions and markets grow.',
    icon: Rocket,
  },
]

export default function HowWeWork() {
  return (
    <section id="why-oleq" className="relative overflow-hidden bg-slate-100 dark:bg-slate-900/80">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            'radial-gradient(var(--border) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container relative">
        <div className="max-w-4xl">
          <p className="section-kicker">Why Oleq</p>
          <h2 className="section-title mt-4">
            Six reasons enterprises choose us
          </h2>
        </div>

        <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <article
                key={reason.title}
                className="group relative max-w-md cursor-pointer overflow-hidden rounded-2xl border border-border bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 dark:bg-black/20 dark:hover:bg-black/40"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover:scale-x-100" />

                <Icon
                  className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 text-primary opacity-[0.06] transition-transform duration-300 group-hover:scale-110 group-hover:opacity-[0.1]"
                  strokeWidth={1}
                />

                <div className="relative flex items-center justify-between">
                  <p className="font-mono text-xs font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    0{index + 1}
                  </p>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                </div>

                <h3 className="relative mt-4 font-[Poppins,sans-serif] text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-xl">
                  {reason.title}
                </h3>
                <p className="relative mt-2 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  {reason.copy}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}