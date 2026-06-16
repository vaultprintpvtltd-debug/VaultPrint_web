import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const vaultprintHandles = [
  'Kiosk hardware and printer',
  'Software platform and updates',
  'Maintenance, repairs, replacements',
  'Ink and paper restocking',
  'Remote 24/7 monitoring',
  'Customer support for all print issues',
  'Regular usage and revenue reporting',
]

const youProvide = [
  'A ~60cm × 60cm installation spot',
  'A standard power outlet nearby',
  'Internet connectivity (4G hotspot works)',
  'Permission to place the kiosk',
]

export default function ResponsibilitiesSplit() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Clear responsibilities"
          title="We handle everything. You provide the space."
          description="A transparent breakdown of what VaultPrint manages versus what your venue provides."
          align="center"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* VaultPrint Column */}
          <div className="bg-gradient-to-br from-brand-navy to-slate-800 rounded-3xl p-8 sm:p-10 text-white">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <CheckCircle2 size={20} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">VaultPrint handles</h3>
            </div>

            <ul className="space-y-4">
              {vaultprintHandles.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ArrowRight size={16} className="text-blue-400 mt-1 shrink-0" />
                  <span className="text-white/80 font-medium text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* You Provide Column */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center">
                <CheckCircle2 size={20} className="text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy">You provide</h3>
            </div>

            <ul className="space-y-4">
              {youProvide.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ArrowRight size={16} className="text-brand-blue mt-1 shrink-0" />
                  <span className="text-slate-600 font-medium text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-brand-navy font-bold text-lg">That&apos;s it.</p>
              <p className="text-slate-500 text-sm mt-1">No recurring fees. No hidden costs. No operational burden.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
