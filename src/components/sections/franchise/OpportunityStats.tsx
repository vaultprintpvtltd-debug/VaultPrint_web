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
    <section className="py-24 bg-linear-to-br from-navy-800 to-navy-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-15 mask-[radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />
      <div className="absolute top-0 right-0 h-128 w-lg rounded-full bg-teal-500/10 blur-3xl -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-128 w-lg rounded-full bg-navy-500/20 blur-3xl -ml-32 -mb-32 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat) => (
            <div key={stat.number} className="flex flex-col gap-3 py-8 md:py-0 px-4">
              <div className="font-display text-5xl sm:text-6xl font-bold text-teal-300 tracking-tight">{stat.number}</div>
              <p className="text-navy-200 font-medium text-lg leading-relaxed max-w-xs mx-auto">
                {stat.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
