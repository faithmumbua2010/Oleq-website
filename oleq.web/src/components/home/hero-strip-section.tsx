import React from 'react'

const options = [
  'Digital product strategy',
  'Engineering & integration',
  'Operations & support',
  'Built for real work',
]

const REPEATS = 6
const items = Array.from({ length: REPEATS }, () => options).flat()

export default function HeroStripSection() {
  return (
    <section className="overflow-hidden bg-background py-5 text-foreground">
      <style>{`
        @keyframes oleq-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div
        className="flex w-max"
        style={{
          animation: 'oleq-marquee 90s linear infinite',
          willChange: 'transform',
        }}
      >
        {[0, 1].map((setIndex) => (
          <div
            key={setIndex}
            aria-hidden={setIndex === 1}
            className="flex shrink-0 items-center gap-8 whitespace-nowrap pr-8 text-xs font-bold uppercase tracking-[.14em] sm:gap-12 sm:pr-12"
          >
            {items.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="flex items-center gap-8 sm:gap-12"
              >
                <span>{item}</span>
                <span className="h-1 w-1 rounded-full bg-primary" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
