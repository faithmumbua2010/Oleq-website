import CtaButton from '../common/cta-button'
import { Link } from '@tanstack/react-router'

const landMask = [
  [8, 16],
  [6, 18],
  [5, 19],
  [4, 19],
  [3, 19],
  [3, 19],
  [3, 19],
  [3, 19],
  [3, 19],
  [2, 19],
  [2, 20],
  [3, 21],
  [4, 22],
  [5, 21],
  [6, 20],
  [7, 19],
  [8, 18],
  [8, 17],
  [8, 17],
  [9, 16],
  [9, 16],
  [9, 15],
  [10, 15],
  [10, 14],
  [10, 14],
  [10, 13],
  [10, 13],
  [10, 12],
  [10, 12],
  [11, 12],
]

const hubs = [
  { row: 9, col: 3 },
  { row: 10, col: 6 },
  { row: 10, col: 8 },
  { row: 10, col: 12 },
  { row: 14, col: 10 },
  { row: 12, col: 20 },
  { row: 13, col: 17 },
  { row: 14, col: 16 },
  { row: 15, col: 17 },
  { row: 18, col: 13 },
  { row: 23, col: 12 },
]

const cell = 20
const hq = { row: 13, col: 20 }
const pos = (row: number, col: number) => ({
  x: col * cell + 10,
  y: row * cell + 10,
})

function NetworkMap() {
  const hqPos = pos(hq.row, hq.col)
  return (
    <svg
      viewBox="0 0 520 600"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
    >
      {landMask.flatMap(([start, end], row) =>
        Array.from({ length: end - start + 1 }, (_, index) => {
          const point = pos(row, start + index)
          return (
            <circle
              key={`${row}-${point.x}`}
              cx={point.x}
              cy={point.y}
              r="2"
              className="fill-border"
            />
          )
        }),
      )}
      {hubs.map((hub, index) => {
        const point = pos(hub.row, hub.col)
        const middleX = (point.x + hqPos.x) / 2
        const middleY = (point.y + hqPos.y) / 2 - 22
        return (
          <path
            key={`line-${index}`}
            d={`M ${point.x} ${point.y} Q ${middleX} ${middleY} ${hqPos.x} ${hqPos.y}`}
            className="network-route fill-none stroke-accent opacity-55"
            strokeWidth="1.1"
            strokeDasharray="4 4"
          />
        )
      })}
      {hubs.map((hub, index) => {
        const point = pos(hub.row, hub.col)
        return (
          <circle
            key={`hub-${index}`}
            cx={point.x}
            cy={point.y}
            r="4.2"
            className="network-hub fill-primary"
          />
        )
      })}
      <circle
        cx={hqPos.x}
        cy={hqPos.y}
        r="6"
        className="network-hq fill-accent"
      />
      <text
        x={hqPos.x + 10}
        y={hqPos.y + 3}
        className="fill-muted-foreground font-mono text-[8.5px]"
      >
        NAIROBI · HQ
      </text>
    </svg>
  )
}

export default function HeroSection() {
  return (
    <section className="hero relative overflow-hidden">
      <div className="container wrap relative grid grid-cols-[1.05fr_.95fr] items-center gap-16 max-[960px]:grid-cols-1">
        <div>
          <div className="eyebrow mb-4.5 flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.14em] text-primary">
            <span className="h-px w-4.5 shrink-0 bg-primary"></span>
            Digital infrastructure — built &amp; operated in Africa
          </div>
          <h1 className="mb-6 font-[Poppins,sans-serif] text-[clamp(38px,4.6vw,62px)] font-semibold leading-[1.08] tracking-[-0.01em]">
            Building intelligent digital infrastructure
            <span className="mt-2 block text-primary">for Africa.</span>
          </h1>
          <p className="hero-sub mb-9.5 max-w-120 text-[18px] text-muted-foreground">
            Oleq designs, builds and operates the platforms that run insurance,
            education, property and payments — combining engineering, AI and
            data into systems that hold up at national scale.
          </p>
          <div className="hero-ctas mb-14 flex flex-wrap gap-4">
            <CtaButton href="/contact" name="Talk to Oleq" />

            <Link
              to="/services"
              className="btn inline-flex items-center gap-2.5 rounded-full border border-transparent px-6.5 py-3.5 font-['Poppins'] text-[15px] font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-muted-foreground"
            >
              Explore our solutions
            </Link>
          </div>
          <div className="hero-stats grid grid-cols-4 gap-9 border-t border-border pt-6.5 max-[680px]:grid-cols-2 max-[680px]:gap-6">
            <div className="hero-stat flex flex-col gap-1.5">
              <b className="font-[Poppins,sans-serif] text-[clamp(18px,1.8vw,26px)] font-semibold text-foreground">
                500K+
              </b>
              <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                MEMBERSHIPS
              </span>
            </div>
            <div className="hero-stat flex flex-col gap-1.5">
              <b className="font-[Poppins,sans-serif] text-[clamp(18px,1.8vw,26px)] font-semibold text-foreground">
                4.9M+
              </b>
              <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                LEARNERS
              </span>
            </div>
            <div className="hero-stat flex flex-col gap-1.5">
              <b className="font-[Poppins,sans-serif] text-[clamp(18px,1.8vw,26px)] font-semibold text-foreground">
                12
              </b>
              <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                COUNTRIES
              </span>
            </div>
            <div className="hero-stat flex flex-col gap-1.5">
              <b className="font-[Poppins,sans-serif] text-[clamp(18px,1.8vw,26px)] font-semibold text-foreground">
                12+ YRS
              </b>
              <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                IN PRODUCTION
              </span>
            </div>
          </div>
        </div>

        <div className="map-wrap relative max-w-xl">
          <div className="map-card rounded-[20px] border border-border bg-card p-5.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
            <div className="map-card-head mb-1.5 flex items-center justify-between px-1">
              <span className="mono font-mono">PAYMENT NETWORK — LIVE</span>
              <span className="live-tag flex items-center gap-1.5 font-mono text-[11.5px] text-accent">
                <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></span>
                NAIROBI HUB
              </span>
            </div>
            <NetworkMap />
          </div>
        </div>
      </div>
    </section>
  )
}
