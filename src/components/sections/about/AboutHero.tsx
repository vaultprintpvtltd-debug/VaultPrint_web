import React from 'react'
import { Badge } from '@/components/ui/Badge'

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16 lg:pt-24 lg:pb-20">
      <div className="absolute inset-0 bg-grid mask-[radial-gradient(ellipse_60%_60%_at_50%_0%,#000_55%,transparent_100%)]" />
      <div className="absolute -top-24 right-1/4 h-96 w-lg rounded-full bg-navy-100/60 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Badge variant="primary" className="mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
          About VaultPrint
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-950 leading-[1.05] text-balance">
          Built because printing shouldn&rsquo;t require trust in a stranger.
        </h1>

        <div className="mt-8 space-y-5 text-lg text-navy-500 leading-relaxed text-pretty">
          <p>
            VaultPrint was born from a simple frustration: why do you have to hand your ID
            proof, bank statement, or assignment to someone you&rsquo;ve never met, on a device
            you have no control over, with no idea whether they&rsquo;ll keep a copy?
          </p>
          <p>
            We built VaultPrint to give people complete control over their documents — from
            the moment they select a file to the moment they collect a printout. No staff
            involvement. No shared devices. No data retention.
          </p>
          <p>
            We&rsquo;re starting in Jharkhand — building for colleges, hostels, and government
            offices where the need is most acute — and expanding across India as we grow.
          </p>
        </div>
      </div>
    </section>
  )
}
