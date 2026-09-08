import React from 'react'
import CtaButton from '../common/cta-button'
import { Button } from '../ui/button'
import { Link } from '@tanstack/react-router'

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
            <CtaButton href="/#contact" name="Talk to Oleq" />

            <a
              href="services.html#industries"
              className="btn inline-flex items-center gap-2.5 px-[26px] py-3.5 rounded-full font-['Poppins'] font-semibold text-[15px] cursor-pointer border border-transparent transition-all duration-300 whitespace-nowrap btn-ghost border-border text-foreground hover:border-muted-foreground hover:-translate-y-0.5"
            >
              Explore our solutions
            </a>
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
            <svg
              id="network-svg"
              viewBox="0 0 520 600"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </div>
        </div>
      </div>
    </section>
  )
}
