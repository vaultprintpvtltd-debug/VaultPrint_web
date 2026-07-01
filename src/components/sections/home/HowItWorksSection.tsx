import React from 'react'
import Link from 'next/link'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { ArrowRight, QrCode, UploadCloud, CreditCard, Unlock } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <QrCode size={24} />,
      title: 'Scan the QR code',
      description: 'Every VaultPrint kiosk shows a unique QR code. Scan with your phone camera — no app, no login, no account.'
    },
    {
      icon: <UploadCloud size={24} />,
      title: 'Upload your document',
      description: 'Select your PDF from your phone, Google Drive, or any file app. Encrypted immediately on upload. Never seen by any staff member.'
    },
    {
      icon: <CreditCard size={24} />,
      title: 'Choose settings and pay',
      description: 'Set B&W or colour, copies, page range, single or double sided. See the exact price before you pay via UPI, card, or wallet.'
    },
    {
      icon: <Unlock size={24} />,
      title: 'Enter OTP and collect',
      description: 'After payment, a 6-digit OTP appears on your phone. Enter it at the kiosk numpad and collect your printout. File is deleted automatically.'
    }
  ]

  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          eyebrow="How VaultPrint works"
          title="From QR scan to paper in your hand — in under 60 seconds."
          description="Fast. Secure. Completely contactless."
          align="center"
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col group">
              {/* Connector line for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-linear-to-r from-navy-200 to-transparent" />
              )}

              <div className="w-16 h-16 bg-navy-50 text-navy-700 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-sm ring-1 ring-navy-100 group-hover:bg-navy-700 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-400 text-navy-950 text-xs font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
              <p className="text-navy-500 font-medium leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/for-venues">
            <Button variant="primary" size="lg" rightIcon={<ArrowRight size={18} />}>
              See a kiosk near you
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
