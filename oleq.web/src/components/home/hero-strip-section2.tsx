import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { type EmblaOptionsType } from 'embla-carousel'
import AutoScroll from 'embla-carousel-auto-scroll'

const options = [
  'Digital product strategy',
  'Engineering & integration',
  'Operations & support',
  'Built for real work',
]

const REPEATS = 6
const items = Array.from({ length: REPEATS }, () => options).flat()

const OPTIONS: EmblaOptionsType = { loop: true, dragFree: true, align: 'start' }

export default function HeroStripSection2() {
  const [emblaRef] = useEmblaCarousel(OPTIONS, [
    AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 0.6 }),
  ])

  return (
    <section className="overflow-hidden bg-background py-5 text-foreground">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {items.map((item, index) => (
            <div
              className="embla__slide flex flex-[0_0_auto] shrink-0 items-center gap-8 whitespace-nowrap pr-8 text-xs font-bold uppercase tracking-[.14em] sm:gap-12 sm:pr-12"
              key={`${item}-${index}`}
            >
              <span>{item}</span>
              <span className="h-1 w-1 rounded-full bg-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
