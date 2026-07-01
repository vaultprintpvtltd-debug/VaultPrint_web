import React from 'react'
import { Badge } from '@/components/ui/Badge'

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16 lg:pt-24 lg:pb-20">
      <div className="absolute inset-0 bg-grid mask-[radial-gradient(ellipse_60%_60%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-lg rounded-full bg-teal-200/40 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <Badge variant="primary" className="mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
          Transparent pricing
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-950 leading-[1.05] text-balance">
          Simple, transparent pricing. <span className="text-navy-700">No hidden fees.</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-navy-500 leading-relaxed max-w-2xl mx-auto text-pretty">
          The price you see is the price you pay. No service charges, no convenience
          fees, no surprises.
        </p>
      </div>
    </section>
  )
}
