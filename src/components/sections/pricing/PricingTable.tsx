import React from 'react'
import { Printer, Palette } from 'lucide-react'

interface Tier {
  type: string
  icon: React.ReactNode
  sides: string
  price: string
  unit: string
  featured?: boolean
}

export default function PricingTable() {
  const tiers: Tier[] = [
    {
      type: 'Black & White',
      icon: <Printer size={20} />,
      sides: 'Single-sided',
      price: '₹2.00',
      unit: 'per page',
      featured: true,
    },
    {
      type: 'Black & White',
      icon: <Printer size={20} />,
      sides: 'Double-sided',
      price: '₹1.50',
      unit: 'per side',
    },
    {
      type: 'Colour',
      icon: <Palette size={20} />,
      sides: 'Single-sided',
      price: '₹5.00',
      unit: 'per page',
    },
    {
      type: 'Colour',
      icon: <Palette size={20} />,
      sides: 'Double-sided',
      price: '₹4.00',
      unit: 'per side',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={
                'relative rounded-2xl p-6 flex flex-col transition-all duration-300 ' +
                (tier.featured
                  ? 'bg-linear-to-br from-navy-800 to-navy-950 text-white shadow-xl shadow-navy-950/20 ring-1 ring-white/10'
                  : 'bg-white ring-1 ring-navy-100 hover:ring-navy-300 hover:shadow-lg')
              }
            >
              {tier.featured && (
                <span className="absolute -top-2.5 right-4 rounded-full bg-teal-400 text-navy-950 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1">
                  Most popular
                </span>
              )}
              <div
                className={
                  'w-11 h-11 rounded-xl flex items-center justify-center mb-5 ' +
                  (tier.featured ? 'bg-white/10 text-teal-300' : 'bg-navy-50 text-navy-700 ring-1 ring-navy-100')
                }
              >
                {tier.icon}
              </div>
              <p className={'text-sm font-semibold ' + (tier.featured ? 'text-navy-100' : 'text-navy-700')}>
                {tier.type}
              </p>
              <p className={'text-xs mb-5 ' + (tier.featured ? 'text-navy-300' : 'text-navy-400')}>
                A4 · {tier.sides}
              </p>
              <div className="mt-auto">
                <span className="font-display text-4xl font-bold tracking-tight">{tier.price}</span>
                <span className={'ml-1.5 text-sm ' + (tier.featured ? 'text-navy-300' : 'text-navy-400')}>
                  {tier.unit}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-navy-500 max-w-2xl mx-auto">
          Prices shown are per page. Your total is calculated automatically based on your
          settings and shown on screen before you pay.
        </p>
        <p className="mt-3 text-center text-xs text-navy-400">
          A3 pricing and monthly subscription plans are planned for a later phase. Only the four
          A4 tiers above are live in v1.
        </p>
      </div>
    </section>
  )
}
