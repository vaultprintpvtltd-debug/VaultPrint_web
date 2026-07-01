import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TrendingUp } from 'lucide-react'

export default function RevenueModel() {
  return (
    <section className="py-24 bg-cream-50 border-y border-cream-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-navy-50 text-navy-700 ring-1 ring-navy-100 mb-8">
          <TrendingUp size={32} />
        </div>

        <SectionHeader
          title="How you earn"
          description="As a VaultPrint franchise partner, you earn a share of every print job completed on your kiosks. The more kiosks you operate and the higher the footfall, the greater your monthly revenue. Partners with kiosks in high-footfall college locations typically see consistent daily usage from the first week of installation."
          align="center"
        />

        <div className="mt-12 p-6 sm:p-8 bg-white border border-navy-100 rounded-2xl shadow-sm shadow-navy-950/3 text-left relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-teal-400" />
          <h4 className="text-lg font-bold text-navy-900 mb-2 flex items-center gap-2">
            <span className="text-xl">🔒</span> Confidential Revenue Split
          </h4>
          <p className="text-navy-700 text-sm sm:text-base leading-relaxed">
            Specific revenue splits and margin calculations are disclosed during the franchise consultation call. We ensure our partners receive a highly competitive share that makes the unit economics incredibly attractive.
          </p>
        </div>
      </div>
    </section>
  )
}
