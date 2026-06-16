import React from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const trustBadges = [
    'App-free — works in any browser',
    'OTP-secured — only you collect your print',
    'Files deleted after printing',
    'Under 60 seconds end-to-end',
    'Supports UPI, cards and wallets',
    'Available 24 × 7',
  ]

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <Badge variant="primary" className="mb-6">
              Self-service · Secure · Under 60 seconds
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-navy leading-[1.1]">
              Print from your phone.<br />
              <span className="text-brand-blue">No staff. No queue. No risk.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-500 leading-relaxed max-w-xl">
              VaultPrint kiosks let anyone print securely from their phone in under 60 seconds — scan, upload, pay, collect. Zero app download. Zero account.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/how-it-works">
                <Button variant="primary" size="lg" className="w-full sm:w-auto" rightIcon={<ArrowRight size={18} />}>
                  Find a Kiosk
                </Button>
              </Link>
              <Link href="/for-venues">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Bring VaultPrint to Your Venue
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Visual Placeholder */}
          <div className="relative lg:ml-auto w-full max-w-lg lg:max-w-none aspect-[4/5] lg:aspect-square bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden flex items-center justify-center shadow-2xl shadow-brand-blue/5">
            {/* We will replace this with the generated WebP image later */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-light to-white opacity-50" />
            <div className="text-center p-8 relative z-10">
              <div className="w-20 h-20 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </div>
              <p className="text-slate-400 font-medium">Kiosk Visual Placeholder</p>
              <p className="text-xs text-slate-400 mt-2">(public/images/kiosk-hero.webp)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
