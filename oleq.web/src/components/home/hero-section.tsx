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
    <section className="hero pt-[168px] pb-[100px] max-[680px]:pt-[130px] max-[680px]:pb-[70px] overflow-hidden relative">
      <div className="wrap max-w-[1220px] mx-auto px-8 max-[680px]:px-5 hero-grid grid grid-cols-[1.05fr_.95fr] gap-16 items-center relative max-[960px]:grid-cols-1 max-[960px]:gap-14">
        <div>
          <div className="eyebrow font-mono text-[12.5px] tracking-[0.14em] uppercase text-primary flex items-center gap-2.5 mb-[18px]">
            <span className="w-[18px] h-px bg-primary shrink-0"></span>
            Digital infrastructure — built &amp; operated in Africa
          </div>
          <h1 className="font-[Poppins,sans-serif] font-semibold leading-[1.08] tracking-[-0.01em] text-[clamp(38px,4.6vw,62px)] mb-6">
            Building intelligent digital infrastructure
            <span className="accent text-primary">for Africa.</span>
          </h1>
          <p className="hero-sub text-[18px] text-muted-foreground max-w-[480px] mb-[38px]">
            Oleq designs, builds and operates the platforms that run insurance,
            education, property and payments — combining engineering, AI and
            data into systems that hold up at national scale.
          </p>
          <div className="hero-ctas flex flex-wrap gap-4 mb-14">
            <CtaButton href="/contact" name="Talk to Oleq" />

            <Link
              to="/services"
              className="btn inline-flex items-center gap-2.5 px-[26px] py-3.5 rounded-full font-['Poppins'] font-semibold text-[15px] cursor-pointer border border-transparent transition-all duration-300 whitespace-nowrap btn-ghost border-border text-foreground hover:border-muted-foreground hover:-translate-y-0.5"
            >
              Explore our solutions
            </Link>
          </div>
          <div className="hero-stats grid grid-cols-4 gap-9 border-t border-border pt-[26px] max-[680px]:grid-cols-2 max-[680px]:gap-6">
            <div className="hero-stat">
              <b>500K+</b>
              <span>MEMBERSHIPS</span>
            </div>
            <div className="hero-stat">
              <b>4.9M+</b>
              <span>LEARNERS</span>
            </div>
            <div className="hero-stat">
              <b>12</b>
              <span>COUNTRIES</span>
            </div>
            <div className="hero-stat">
              <b>12+ YRS</b>
              <span>IN PRODUCTION</span>
            </div>
          </div>
        </div>

        <div className="map-wrap relative">
          <div className="map-card bg-card border border-border rounded-[20px] p-[22px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
            <div className="map-card-head flex items-center justify-between mb-1.5 px-1">
              <span className="mono font-mono">PAYMENT NETWORK — LIVE</span>
              <span className="live-tag flex items-center gap-1.5 text-[11.5px] text-accent font-mono">
                <span className="live-dot w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
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
