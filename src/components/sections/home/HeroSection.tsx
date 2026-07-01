import React from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import {
  CheckCircle2,
  ArrowRight,
  QrCode,
  ShieldCheck,
  Clock,
  IndianRupee,
} from 'lucide-react'

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
    <section className="relative overflow-hidden bg-white pt-14 pb-20 lg:pt-20 lg:pb-28">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="absolute -top-32 right-0 h-128 w-lg rounded-full bg-teal-200/40 blur-3xl pointer-events-none" />
      <div className="absolute top-24 -left-24 h-96 w-96 rounded-full bg-navy-100/60 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <Badge variant="primary" className="mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              Self-service · Secure · Under 60 seconds
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-950 leading-[1.05] text-balance">
              Print from your phone.{' '}
              <span className="text-navy-700">No staff. No queue. No risk.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-navy-500 leading-relaxed max-w-xl text-pretty">
              VaultPrint kiosks let anyone print securely from their phone in under
              60 seconds — scan, upload, pay, collect. Zero app download. Zero account.
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
            <div className="mt-12 pt-8 border-t border-navy-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-navy-600 font-medium">
                    <CheckCircle2 size={16} className="text-teal-500 shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Visual — branded kiosk + phone mockup */}
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:ml-auto">
      {/* Kiosk panel */}
      <div className="relative rounded-[2rem] bg-linear-to-br from-navy-800 to-navy-950 p-6 sm:p-8 shadow-2xl shadow-navy-950/30 ring-1 ring-white/10">
        <div className="flex items-center justify-between text-white/70 text-xs font-medium mb-5">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" /> Kiosk online
          </span>
          <span>VaultPrint · A4</span>
        </div>

        {/* Phone screen */}
        <div className="rounded-2xl bg-white p-5 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-navy-50 text-navy-700 flex items-center justify-center">
              <QrCode size={18} />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">Step 1 of 4</p>
              <p className="text-sm font-bold text-navy-950">Scan &amp; upload</p>
            </div>
          </div>

          <div className="rounded-xl border border-dashed border-navy-200 bg-navy-50/50 p-4 text-center">
            <p className="text-sm font-semibold text-navy-800">assignment-final.pdf</p>
            <p className="text-xs text-navy-400 mt-0.5">12 pages · encrypted on upload</p>
          </div>

          <div className="mt-4 space-y-2.5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-navy-500">Black &amp; White · Single side</span>
              <span className="font-semibold text-navy-900">₹2.00 / page</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-navy-500">2 copies · 24 pages</span>
              <span className="font-bold text-navy-950">₹48.00</span>
            </div>
          </div>

          <button className="mt-4 w-full rounded-xl bg-navy-700 text-white text-sm font-semibold py-2.5">
            Pay ₹48.00
          </button>
        </div>

        {/* Paper tray hint */}
        <div className="mt-5 flex items-center gap-3 text-white/80">
          <div className="h-1.5 flex-1 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-2/3 rounded-full bg-teal-400" />
          </div>
          <span className="text-xs font-medium whitespace-nowrap">Printing…</span>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute -left-3 sm:-left-6 top-16 rounded-2xl bg-white shadow-xl shadow-navy-950/10 ring-1 ring-navy-100 px-4 py-3 flex items-center gap-2.5">
        <span className="w-9 h-9 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center">
          <ShieldCheck size={18} />
        </span>
        <div>
          <p className="text-xs font-bold text-navy-950 leading-tight">OTP-locked</p>
          <p className="text-[11px] text-navy-400">only you collect</p>
        </div>
      </div>

      <div className="absolute -right-2 sm:-right-5 bottom-20 rounded-2xl bg-white shadow-xl shadow-navy-950/10 ring-1 ring-navy-100 px-4 py-3 flex items-center gap-2.5">
        <span className="w-9 h-9 rounded-xl bg-navy-50 text-navy-700 flex items-center justify-center">
          <Clock size={18} />
        </span>
        <div>
          <p className="text-xs font-bold text-navy-950 leading-tight">&lt; 60 sec</p>
          <p className="text-[11px] text-navy-400">scan to paper</p>
        </div>
      </div>

      <div className="absolute -right-1 top-4 rounded-2xl bg-teal-400 text-navy-950 shadow-xl shadow-teal-500/30 px-3.5 py-2.5 flex items-center gap-1.5">
        <IndianRupee size={16} />
        <span className="text-sm font-bold">from ₹2/page</span>
      </div>
    </div>
  )
}
