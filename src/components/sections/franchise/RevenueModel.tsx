import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TrendingUp } from 'lucide-react'

export default function RevenueModel() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-light text-brand-blue mb-8">
          <TrendingUp size={32} />
        </div>
        
        <SectionHeader
          title="How you earn"
          description="As a VaultPrint franchise partner, you earn a share of every print job completed on your kiosks. The more kiosks you operate and the higher the footfall, the greater your monthly revenue. Partners with kiosks in high-footfall college locations typically see consistent daily usage from the first week of installation."
          align="center"
        />

        <div className="mt-12 p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm text-left relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-brand-blue" />
          <h4 className="text-lg font-bold text-brand-navy mb-2 flex items-center gap-2">
            <span className="text-xl">🔒</span> Confidential Revenue Split
          </h4>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Specific revenue splits and margin calculations are disclosed during the franchise consultation call. We ensure our partners receive a highly competitive share that makes the unit economics incredibly attractive.
          </p>
        </div>
      </div>
    </section>
  )
}
