import React from 'react'

const stats = [
  {
    number: '900M+',
    context: 'Indians who use smartphones — your potential customer base',
  },
  {
    number: '₹0',
    context: 'Technical expertise required to operate a kiosk',
  },
  {
    number: '24/7',
    context: 'Revenue potential — kiosks earn even while you sleep',
  },
]

export default function OpportunityStats() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {stats.map((stat) => (
            <div key={stat.number} className="flex flex-col gap-3 py-8 md:py-0 px-4">
              <div className="text-5xl font-extrabold text-brand-blue">{stat.number}</div>
              <p className="text-slate-600 font-medium text-lg leading-relaxed max-w-xs mx-auto">
                {stat.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
