import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Smartphone, Lock, ShieldCheck, Zap, Wallet, KeyRound } from 'lucide-react'

export default function WhyVaultPrintSection() {
  const features = [
    {
      icon: <Smartphone size={24} />,
      title: 'App-free, always',
      description: "No download, no account, no login. The entire experience runs in your phone's browser. Any device, any time."
    },
    {
      icon: <Lock size={24} />,
      title: 'Your file, your privacy',
      description: 'Your document is encrypted in transit, stored privately, and permanently deleted after your job completes. No staff member ever sees your file.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: '100% uptime',
      description: 'VaultPrint handles maintenance, ink refills, paper restocking, and hardware. The machine is always ready when you need it.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Instant, every time',
      description: 'No waiting for a shopkeeper. No queue. Scan to print in under 60 seconds.'
    },
    {
      icon: <Wallet size={24} />,
      title: 'Pay your way',
      description: 'UPI, credit card, debit card, or digital wallet. Powered by Razorpay. Every payment is secure and verifiable.'
    },
    {
      icon: <KeyRound size={24} />,
      title: 'OTP-protected release',
      description: 'A 6-digit one-time code is the key to your print. Only the person who paid can collect. No mix-ups, no theft.'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why VaultPrint"
          title="Built differently. Because printing should be private."
          align="center"
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <Card key={idx} hoverEffect className="group">
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-700 flex items-center justify-center mb-6 ring-1 ring-navy-100 group-hover:bg-navy-700 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
              <p className="text-navy-500 font-medium leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
