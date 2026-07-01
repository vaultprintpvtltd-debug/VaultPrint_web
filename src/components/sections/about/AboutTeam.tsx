import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { LogoMark } from '@/components/ui/Logo'

export default function AboutTeam() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Who we are"
          title="The team behind VaultPrint"
          align="center"
          className="mb-14"
        />

        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-navy-800 to-navy-950 p-8 sm:p-12 ring-1 ring-white/10">
          <div className="absolute -bottom-24 -right-16 h-96 w-lg rounded-full bg-teal-500/15 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 text-center sm:text-left">
            <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/10 ring-1 ring-white/15 flex items-center justify-center">
              <LogoMark size={44} />
            </div>
            <p className="text-lg text-navy-100 leading-relaxed text-pretty">
              VaultPrint is built by a small founding team from Jharkhand with backgrounds in
              technology, product, and operations. We&rsquo;re students and professionals who
              experienced the problem firsthand — and decided to solve it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
