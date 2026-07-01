import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { XCircle, CheckCircle2 } from 'lucide-react'

export default function ProblemSection() {
  const comparisons = [
    {
      old: "Share your file with a shopkeeper you don't know",
      new: "OTP-locked release — only you can collect your print"
    },
    {
      old: "Wait in a queue for someone to print manually",
      new: "Under 60 seconds, start to finish, every time"
    },
    {
      old: "Limited shop hours — closed at night and weekends",
      new: "Available 24 hours, 7 days, 365 days"
    },
    {
      old: "No receipt, no transparency on pricing",
      new: "Live price shown before you pay — no surprises"
    },
    {
      old: "Install apps or carry USB drives",
      new: "Works in any phone browser — zero downloads"
    }
  ]

  return (
    <section className="py-20 bg-cream-50 border-y border-cream-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The old way of printing"
          title="You shouldn't have to hand your documents to a stranger."
          align="center"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Old Way Column */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-navy-100 shadow-sm">
            <h3 className="text-lg font-bold text-navy-900 mb-6 flex items-center gap-2.5 pb-4 border-b border-navy-100">
              <span className="bg-red-100 text-red-600 p-1.5 rounded-lg">
                <XCircle size={20} />
              </span>
              The Old Way
            </h3>
            <ul className="space-y-5">
              {comparisons.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <XCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
                  <span className="text-navy-600 font-medium leading-relaxed">{item.old}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* VaultPrint Way Column */}
          <div className="bg-linear-to-br from-navy-800 to-navy-950 rounded-2xl p-6 sm:p-8 shadow-xl shadow-navy-950/20 relative overflow-hidden ring-1 ring-white/10">
            <div className="absolute top-0 right-0 p-32 bg-teal-400/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2.5 pb-4 border-b border-white/10 relative z-10">
              <span className="bg-teal-400/20 text-teal-300 p-1.5 rounded-lg">
                <CheckCircle2 size={20} />
              </span>
              The VaultPrint Way
            </h3>
            <ul className="space-y-5 relative z-10">
              {comparisons.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <CheckCircle2 size={20} className="text-teal-300 shrink-0 mt-0.5" />
                  <span className="text-navy-100 font-medium leading-relaxed">{item.new}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
