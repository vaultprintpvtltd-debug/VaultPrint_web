import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ShieldCheck, Zap, Receipt, Clock } from 'lucide-react'

export default function AboutValues() {
  const values = [
    {
      icon: <ShieldCheck size={24} />,
      title: 'Privacy first',
      statement:
        'Every design decision is evaluated against one question: does this protect the user’s document? If not, it doesn’t ship.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Zero friction',
      statement:
        'If it takes longer than 60 seconds, we haven’t done our job. Speed is a feature.',
    },
    {
      icon: <Receipt size={24} />,
      title: 'Transparent pricing',
      statement:
        'We show you the total before you pay. There is no other price.',
    },
    {
      icon: <Clock size={24} />,
      title: 'Always available',
      statement:
        'A kiosk that’s down is a broken promise. Uptime is an obligation, not a target.',
    },
  ]

  return (
    <section className="py-24 bg-cream-50 border-y border-cream-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What we believe"
          title="Four values, in everything we build"
          align="center"
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-7 ring-1 ring-navy-100 shadow-sm hover:shadow-xl hover:shadow-navy-950/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-700 flex items-center justify-center mb-5 ring-1 ring-navy-100 group-hover:bg-navy-700 group-hover:text-white transition-colors">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">{value.title}</h3>
              <p className="text-navy-500 leading-relaxed text-sm">{value.statement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
