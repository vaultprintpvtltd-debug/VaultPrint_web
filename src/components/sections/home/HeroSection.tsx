'use client'

import React from 'react'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight, QrCode, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react'
import Squares from '@/components/ui/Squares'

export default function HeroSection() {
  const trustBadges = [
    'App-free — works in any browser',
    'OTP-secured — only you collect',
    'Files deleted after printing',
    'Under 60 seconds end-to-end',
    'Supports UPI, cards and wallets',
    'Available 24 × 7',
  ]

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Squares 
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#BAE6FD" 
          hoverFillColor="#E0F2FE"
        />
      </div>
      
      {/* Gradient mask so the squares fade out at the bottom */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-vault-frost pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Header Section */}
        <motion.div 
        className="flex flex-col items-center text-center mb-16"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInUp}>
          <span className="pill mb-8 text-vault-blue border-vault-blue">Self-service · Secure · &lt; 60 seconds</span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-vault-deep leading-[1.05] text-balance max-w-4xl mb-6"
          variants={fadeInUp}
        >
          Print from your phone. <span className="text-vault-blue">No staff. No queue. No risk.</span>
        </motion.h1>

        <motion.p 
          className="text-vault-deep/70 max-w-2xl mx-auto text-lg sm:text-xl text-pretty"
          variants={fadeInUp}
        >
          VaultPrint kiosks let anyone print securely from their phone in under
          60 seconds — scan, upload, pay, collect. Zero app download. Zero account.
        </motion.p>
      </motion.div>

      {/* Grid Cards Section */}
      <div className="grid lg:grid-cols-2 gap-6 items-stretch">
        {/* Left Card - App Visual */}
        <motion.div 
          className="card bg-white p-6 sm:p-10 overflow-hidden relative min-h-[450px] flex items-center justify-center group"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-vault-mist/10" />
          <HeroVisual />
        </motion.div>

        {/* Right Card - Text Content */}
        <motion.div 
          className="card bg-white p-8 sm:p-10 flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="mb-6">
            <span className="pill border-vault-deep text-vault-deep">Security & Speed</span>
          </div>
          
          <h2 className="text-3xl font-display font-bold text-vault-deep mb-8">
            Why choose VaultPrint?
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
            {trustBadges.map((badge, idx) => (
              <motion.div 
                key={idx} 
                className="flex items-start gap-2.5 text-sm font-medium text-vault-deep/80"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <CheckCircle2 size={18} className="text-vault-blue shrink-0 mt-0.5" />
                <span>{badge}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <Link href="/how-it-works" className="w-full sm:w-auto">
               <button className="w-full flex items-center justify-center gap-2 bg-vault-blue text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-vault-indigo transition-colors hover:scale-[1.02] active:scale-95 duration-200">
                 Find a Kiosk <ArrowRight size={18} />
               </button>
            </Link>
            <Link href="/for-venues" className="w-full sm:w-auto">
               <button className="w-full flex items-center justify-center gap-2 bg-vault-frost text-vault-deep px-6 py-3.5 rounded-xl font-semibold hover:bg-vault-mist transition-colors hover:scale-[1.02] active:scale-95 duration-200">
                 Partner With Us
               </button>
            </Link>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:ml-auto scale-90 sm:scale-100 origin-center transition-transform duration-500 group-hover:scale-[1.02]">
      {/* Kiosk panel */}
      <div className="relative rounded-[2rem] bg-vault-deep p-6 sm:p-8 shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center justify-between text-white/70 text-xs font-medium mb-5">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-vault-cyan animate-pulse" /> Kiosk online
          </span>
          <span>VaultPrint · A4</span>
        </div>

        {/* Phone screen */}
        <div className="rounded-2xl bg-white p-5 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-vault-frost text-vault-blue flex items-center justify-center">
              <QrCode size={18} />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-vault-deep/60">Step 1 of 4</p>
              <p className="text-sm font-bold text-vault-deep">Scan &amp; upload</p>
            </div>
          </div>

          <div className="rounded-xl border border-dashed border-vault-mist bg-vault-frost p-4 text-center">
            <p className="text-sm font-semibold text-vault-deep">assignment-final.pdf</p>
            <p className="text-xs text-vault-deep/60 mt-0.5">12 pages · encrypted on upload</p>
          </div>

          <div className="mt-4 space-y-2.5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-vault-deep/70">Black &amp; White</span>
              <span className="font-semibold text-vault-deep/90">₹2.00 / page</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-vault-deep/70">2 copies · 24 pages</span>
              <span className="font-bold text-vault-deep">₹48.00</span>
            </div>
          </div>

          <button className="mt-4 w-full rounded-xl bg-vault-deep text-white text-sm font-semibold py-2.5">
            Pay ₹48.00
          </button>
        </div>

        {/* Paper tray hint */}
        <div className="mt-5 flex items-center gap-3 text-white/80">
          <div className="h-1.5 flex-1 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-2/3 rounded-full bg-vault-cyan" />
          </div>
          <span className="text-xs font-medium whitespace-nowrap">Printing…</span>
        </div>
      </div>

      {/* Floating chips */}
      <motion.div 
        className="absolute -left-3 sm:-left-6 top-16 rounded-2xl bg-white shadow-xl shadow-vault-deep/10 ring-1 ring-vault-mist px-4 py-3 flex items-center gap-2.5"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="w-9 h-9 rounded-xl bg-vault-frost text-vault-blue flex items-center justify-center">
          <ShieldCheck size={18} />
        </span>
        <div>
          <p className="text-xs font-bold text-vault-deep leading-tight">OTP-locked</p>
          <p className="text-[11px] text-vault-deep/60">only you collect</p>
        </div>
      </motion.div>

      <motion.div 
        className="absolute -right-2 sm:-right-5 bottom-20 rounded-2xl bg-white shadow-xl shadow-vault-deep/10 ring-1 ring-vault-mist px-4 py-3 flex items-center gap-2.5"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <span className="w-9 h-9 rounded-xl bg-vault-frost text-vault-blue flex items-center justify-center">
          <Clock size={18} />
        </span>
        <div>
          <p className="text-xs font-bold text-vault-deep leading-tight">&lt; 60 sec</p>
          <p className="text-[11px] text-vault-deep/60">scan to paper</p>
        </div>
      </motion.div>
    </div>
  )
}
