import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Printer, Code2, CreditCard, Wrench, BookOpen, Video, ArrowUpCircle, Megaphone } from 'lucide-react'

const features = [
  {
    icon: <Printer size={24} />,
    title: 'VaultPrint-branded kiosk hardware',
    description: 'Physical kiosk machine, printer, and accessories — supplied and installed.',
    color: 'text-brand-blue',
    bgColor: 'bg-blue-50',
  },
  {
    icon: <Code2 size={24} />,
    title: 'Full software platform license',
    description: 'Web app, admin dashboard, print agent, real-time monitoring — all included.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
  {
    icon: <CreditCard size={24} />,
    title: 'Payment infrastructure',
    description: 'Razorpay integration, refund handling, transaction reporting — all managed.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: <Wrench size={24} />,
    title: 'Installation and onboarding',
    description: 'VaultPrint installs and configures everything. Operational within a day.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Operational SOPs',
    description: 'Step-by-step guides for paper restocking and daily checks.',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
  },
  {
    icon: <Video size={24} />,
    title: 'Training',
    description: 'Remote onboarding session covering operations, admin dashboard, escalation.',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
  },
  {
    icon: <ArrowUpCircle size={24} />,
    title: 'Ongoing software updates',
    description: 'All updates automatic — kiosk always runs latest version.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
  },
  {
    icon: <Megaphone size={24} />,
    title: 'Marketing support',
    description: 'VaultPrint branding assets, social templates, local marketing guidance.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
]

export default function WhatYouGet() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What's included"
          title="Everything you need to launch"
          description="We provide the complete hardware and software stack. You just provide the location."
          align="center"
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} hoverEffect className="flex flex-col gap-4">
              <div className={`w-12 h-12 rounded-xl ${feature.bgColor} ${feature.color} flex items-center justify-center`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-brand-navy mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
