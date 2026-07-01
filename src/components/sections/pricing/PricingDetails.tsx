import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Check, X } from 'lucide-react'

export default function PricingDetails() {
  const included = [
    'Per-page price exactly as shown',
    'Live price shown before payment',
    'Digital payment confirmation',
    'Full refund if the print fails',
  ]

  const notCharged = [
    'No service fee',
    'No platform convenience charge',
    'No GST added on top for end users',
    'No cancellation fee if a job fails',
  ]

  const example = [
    ['Document', '12-page PDF'],
    ['Page range', 'All 12 pages'],
    ['Print type', 'Black & White'],
    ['Sides', 'Single-sided'],
    ['Copies', '2'],
    ['Price per page', '₹2.00'],
    ['Total pages', '12 × 2 = 24 pages'],
  ]

  return (
    <section className="py-24 bg-cream-50 border-y border-cream-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="No hidden fees. Ever."
          description="What you're charged for — and everything you're not."
          align="center"
          className="mb-14"
        />

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Included */}
          <div className="bg-white rounded-2xl p-8 ring-1 ring-navy-100 shadow-sm">
            <h3 className="text-lg font-bold text-navy-900 mb-6">What&rsquo;s included</h3>
            <ul className="space-y-4">
              {included.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="text-navy-600 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not charged */}
          <div className="bg-white rounded-2xl p-8 ring-1 ring-navy-100 shadow-sm">
            <h3 className="text-lg font-bold text-navy-900 mb-6">What&rsquo;s not charged</h3>
            <ul className="space-y-4">
              {notCharged.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-navy-100 text-navy-500 flex items-center justify-center">
                    <X size={13} strokeWidth={3} />
                  </span>
                  <span className="text-navy-600 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing example — receipt style */}
        <div className="max-w-md mx-auto bg-linear-to-br from-navy-800 to-navy-950 rounded-2xl p-8 shadow-xl shadow-navy-950/20 ring-1 ring-white/10 text-white">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-300 mb-4">
            Worked example
          </p>
          <dl className="space-y-2.5">
            {example.map(([label, value], idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <dt className="text-navy-300">{label}</dt>
                <dd className="font-medium text-navy-100">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between">
            <span className="text-sm font-semibold text-white">Total amount</span>
            <span className="font-display text-3xl font-bold text-teal-300">₹48.00</span>
          </div>
        </div>
      </div>
    </section>
  )
}
