const reasons = [
  {
    title: 'Proven at scale',
    copy: 'Technology already serving millions of users in production, not pilot.',
  },
  {
    title: 'African experience',
    copy: 'Platforms operating across multiple African markets and regulatory environments.',
  },
  {
    title: 'Industry expertise',
    copy: 'Deep, specific experience in insurance, education, property and payments.',
  },
  {
    title: 'End-to-end capability',
    copy: 'Product, engineering, integrations, payments, AI, analytics and support — one organization.',
  },
  {
    title: 'Payments expertise',
    copy: 'Real-world experience building payment platforms and gateway infrastructure that moves money daily.',
  },
  {
    title: 'Built for growth',
    copy: 'Technology designed to scale as your users, transactions and markets grow.',
  },
]

export default function HowWeWork() {
  return (
    <section
      id="why-oleq"
      className="bg-slate-100 px-5 py-20 sm:px-8 sm:py-28 dark:bg-slate-900/80"
    >
      <div className="mx-auto max-w-305">
        <div className="max-w-4xl">
          <p className="section-kicker">Why Oleq</p>
          <h2 className="section-title mt-4">Six reasons enterprises choose us</h2>
        </div>

        <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-16">
          {reasons.map((reason, index) => (
            <article key={reason.title} className="max-w-md">
              <p className="font-mono text-xs font-bold text-muted-foreground">
                0{index + 1}
              </p>
              <h3 className="mt-4 font-[Poppins,sans-serif] text-lg font-semibold text-foreground sm:text-xl">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                {reason.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
