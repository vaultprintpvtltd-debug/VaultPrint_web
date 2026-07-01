import React from 'react'
import Image from 'next/image'
import { QrCode, UploadCloud, CreditCard, Unlock } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

interface Step {
  number: number
  headline: string
  body: string
  image: string
  icon: React.ReactNode
  color: string
  bgColor: string
}

const steps: Step[] = [
  {
    number: 1,
    headline: 'Scan the unique QR code from the kiosk screen',
    body: 'Every VaultPrint kiosk displays a unique QR code. Open your phone camera and point it at the code. No scanning app needed. No login. No account. No personal information required. The QR is tied to the specific kiosk you\'re standing at.',
    image: '/images/step-1-scan.png',
    icon: <QrCode size={28} />,
    color: 'text-navy-700 border-navy-200',
    bgColor: 'bg-navy-50'
  },
  {
    number: 2,
    headline: 'Upload your document from anywhere on your phone',
    body: 'Select your PDF from phone storage, Google Drive, Dropbox, or any connected app. Your file is uploaded using an encrypted connection directly to a private server — never stored on a shared device or seen by any person. Page count is extracted automatically.',
    image: '/images/step-2-upload.png',
    icon: <UploadCloud size={28} />,
    color: 'text-navy-700 border-navy-200',
    bgColor: 'bg-navy-50'
  },
  {
    number: 3,
    headline: 'Choose your print settings and pay securely',
    body: 'Set your preferences: page range, B&W or colour, number of copies, single or double sided, and orientation. Price updates live as you change settings. Pay via UPI, card, or digital wallet through Razorpay. Payment is verified server-side before anything is printed.',
    image: '/images/step-3-pay.png',
    icon: <CreditCard size={28} />,
    color: 'text-navy-700 border-navy-200',
    bgColor: 'bg-navy-50'
  },
  {
    number: 4,
    headline: 'Enter your OTP at the kiosk and collect',
    body: 'After payment, a 6-digit one-time code appears on your phone. Walk to the kiosk and enter the code on the numpad. The kiosk verifies it, sends your document to the printer, and pages are ready within seconds. Your file is permanently deleted immediately after printing.',
    image: '/images/step-4-collect.png',
    icon: <Unlock size={28} />,
    color: 'text-navy-700 border-navy-200',
    bgColor: 'bg-navy-50'
  }
]

export default function HowItWorksExpanded() {
  return (
    <section className="py-24 bg-cream-50 border-y border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Step-by-step"
          title="The 60-Second Print Process"
          description="We've re-engineered printing to make it as simple as scanning a menu. Here is exactly what happens."
          align="center"
          className="mb-24"
        />

        <div className="space-y-32">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 1
            return (
              <div 
                key={step.number}
                className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                {/* Text Side */}
                <div className={`lg:col-span-5 flex flex-col justify-center ${isEven ? 'lg:order-last' : ''}`}>
                  {/* Step counter badge */}
                  <div className="inline-flex items-center gap-3 mb-6">
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-lg border ring-1 ring-navy-100 ${step.color} ${step.bgColor}`}>
                      {step.number}
                    </span>
                    <span className="text-sm font-semibold tracking-wider text-navy-400 uppercase">
                      Step {step.number}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-navy-950 mb-6 tracking-tight flex items-start gap-3.5">
                    <span className={`${step.color} mt-1`}>{step.icon}</span>
                    <span>{step.headline}</span>
                  </h3>

                  <p className="text-navy-500 font-medium leading-relaxed text-base sm:text-lg">
                    {step.body}
                  </p>
                </div>

                {/* Visual Side */}
                <div className="lg:col-span-7 relative">
                  {/* Decorative Background Blob */}
                  <div className="absolute -inset-4 rounded-3xl bg-teal-200/40 blur-xl opacity-70 -z-10" />

                  <div className="overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-lg group">
                    <Image
                      src={step.image}
                      alt={step.headline}
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={step.number === 1}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
