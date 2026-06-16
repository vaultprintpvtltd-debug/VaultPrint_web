import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { MessageSquare, Wrench, Headphones } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Free consultation',
    description: 'We assess your venue\'s footfall, space, and connectivity. Proposal within 48 hours. No commitment required.',
    icon: <MessageSquare size={24} />,
    color: 'text-brand-blue border-brand-blue/20',
    bgColor: 'bg-blue-50',
  },
  {
    number: 2,
    title: 'Installation',
    description: 'VaultPrint handles everything — hardware delivery, kiosk setup, printer configuration, software deployment. Typically 2–3 hours on site.',
    icon: <Wrench size={24} />,
    color: 'text-emerald-600 border-emerald-200',
    bgColor: 'bg-emerald-50',
  },
  {
    number: 3,
    title: 'We run it',
    description: 'VaultPrint monitors the kiosk 24/7. We handle ink, paper, maintenance, updates, and customer support. You do nothing.',
    icon: <Headphones size={24} />,
    color: 'text-violet-600 border-violet-200',
    bgColor: 'bg-violet-50',
  }
]

export default function RentalModelSection() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The rental model"
          title="How the kiosk rental works"
          description="Three steps between you and a working kiosk."
          align="center"
          className="mb-20"
        />

        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Connector line */}
          <div className="hidden md:block absolute top-14 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-blue-200 via-emerald-200 to-violet-200" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center flex flex-col items-center">
              {/* Step Number Circle */}
              <div className={`w-14 h-14 rounded-2xl ${step.bgColor} ${step.color} border flex items-center justify-center mb-6 relative z-10 shadow-sm`}>
                {step.icon}
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-brand-navy text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
                  {step.number}
                </div>
              </div>

              <h3 className="text-xl font-bold text-brand-navy mb-3">
                Step {step.number} — {step.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed text-sm sm:text-base max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
