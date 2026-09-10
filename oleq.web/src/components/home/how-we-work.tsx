import { useState } from 'react'
import {
  BadgeCheck,
  Building2,
  CreditCard,
  GraduationCap,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Proven at scale',
    copy: 'Technology already serving millions of users in production, not pilot.',
  },
  {
    icon: Building2,
    title: 'African experience',
    copy: 'Platforms operating across multiple African markets and regulatory environments.',
  },
  {
    icon: ShieldCheck,
    title: 'Industry expertise',
    copy: 'Deep, specific experience in insurance, education, property and payments.',
  },
  {
    icon: TrendingUp,
    title: 'End-to-end capability',
    copy: 'Product, engineering, integrations, payments, AI, analytics and support — one organization.',
  },
  {
    icon: CreditCard,
    title: 'Payments expertise',
    copy: 'Real-world experience building payment platforms and gateway infrastructure that moves money daily.',
  },
  {
    icon: GraduationCap,
    title: 'Built for growth',
    copy: 'Technology designed to scale as your users, transactions and markets grow.',
  },
]

export default function HowWeWork() {
  const [active, setActive] = useState(0)

  return (
    <section
      id="why-oleq"
      className="bg-slate-50 px-5 py-20 sm:px-8 sm:py-28 dark:bg-slate-900/70"
    >
      <div className="mx-auto max-w-305">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Why Oleq</p>
          <h2 className="section-title mt-3">Why enterprises choose Oleq.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            We do more than build software. We bring proven production experience,
            African market knowledge and the engineering depth to take complex
            systems from idea to dependable operation.
          </p>
        </div>

        <div className="mt-14">
          <div className="grid max-w-305 gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-16">
            <div className="max-w-sm">
              <p className="section-kicker">The Oleq difference</p>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                The work behind a reliable platform matters just as much as what
                people see on the screen. That is where our experience shows.
              </p>
              <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs font-bold uppercase tracking-[.12em]">
                <span className="rounded-full bg-primary/10 px-3 py-2 text-primary">
                  Scale
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-2 text-primary">
                  Africa
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-2 text-primary">
                  Reliability
                </span>
              </div>
            </div>

            <div className="relative min-h-130 sm:min-h-155">
              <div className="relative ml-auto min-h-130 max-w-3xl sm:min-h-155">
                {reasons.map((reason, index) => {
                  const CardIcon = reason.icon
                  const isActive = index === active
                  const distance =
                    (active - index + reasons.length) % reasons.length

                  return (
                    <button
                      key={reason.title}
                      type="button"
                      onClick={() => setActive(index)}
                      className={`absolute left-0 right-0 mx-auto flex min-h-52 max-w-xl items-start gap-5 rounded-2xl border bg-card px-5 pb-10 pt-8 text-left text-foreground shadow-xl shadow-foreground/5 transition-all duration-500 ease-out sm:min-h-64 sm:px-8 ${
                        isActive
                          ? 'z-20 border-primary/50 shadow-2xl shadow-primary/10'
                          : 'border-border hover:border-primary/40'
                      }`}
                      style={{
                        top: `${(reasons.length - 1 - distance) * 52}px`,
                        zIndex: reasons.length - distance,
                        transform: `translateX(${distance * 13}px) scale(${isActive ? 1.06 : 1 - distance * 0.018})`,
                        opacity: Math.max(0.45, 1 - distance * 0.08),
                      }}
                      aria-pressed={isActive}
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary sm:h-14 sm:w-14">
                        <CardIcon size={24} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-xs font-bold text-muted-foreground">
                          0{index + 1}
                        </span>
                        <span className="block font-[Poppins,sans-serif] text-lg font-semibold sm:text-xl">
                          {reason.title}
                        </span>
                        <span className="mt-1 block text-sm leading-6 text-muted-foreground">
                          {reason.copy}
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
