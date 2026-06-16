import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Sparkles, Settings, Monitor, TrendingUp, Gift } from 'lucide-react'

const benefits = [
  {
    icon: <Sparkles size={24} />,
    title: 'Enhanced visitor experience',
    description: 'Students, residents, or guests get a premium facility usable at any hour.',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
  },
  {
    icon: <Settings size={24} />,
    title: 'Zero operational effort',
    description: 'No ink to buy, no paper to load, no maintenance to schedule.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: <Monitor size={24} />,
    title: 'Modern, tech-forward image',
    description: 'A VaultPrint kiosk signals your venue takes visitor experience seriously.',
    color: 'text-brand-blue',
    bgColor: 'bg-blue-50',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Potential revenue share',
    description: 'Depending on footfall and contract terms, venue partners may receive a revenue share.',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
  },
  {
    icon: <Gift size={24} />,
    title: 'Free to the venue',
    description: 'No cost to the hosting venue in the standard rental model.',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
  },
]

export default function VenueBenefitsSection() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why partner with us"
          title="Benefits to your venue"
          description="Everything you gain — with zero extra effort."
          align="center"
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b) => (
            <Card key={b.title} hoverEffect className="flex flex-col gap-4">
              <div className={`w-12 h-12 rounded-xl ${b.bgColor} ${b.color} flex items-center justify-center`}>
                {b.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-navy">{b.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{b.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
