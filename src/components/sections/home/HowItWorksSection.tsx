'use client'

import React from 'react'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
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

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        className="flex flex-col items-center text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="pill mb-8 border-vault-deep text-vault-deep">How VaultPrint works</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep max-w-3xl mb-6">
          From QR scan to paper in your hand — in under 60 seconds.
        </h2>
        <p className="text-vault-deep/70 max-w-xl mx-auto text-lg">
          Fast. Secure. Completely contactless.
        </p>
      </motion.div>

      <motion.div 
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {steps.map((step, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="card p-8 relative flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-vault-frost text-vault-blue rounded-xl flex items-center justify-center mb-6 relative group-hover:bg-vault-blue group-hover:text-white transition-colors duration-300">
              {step.icon}
              <div className="absolute -top-3 -right-3 w-7 h-7 bg-vault-cyan text-white text-xs font-bold rounded-full flex items-center justify-center ring-4 ring-white shadow-sm">
                {idx + 1}
              </div>
            </div>
            <h3 className="text-xl font-display font-bold text-vault-deep mb-3">{step.title}</h3>
            <p className="text-vault-deep/70 text-sm font-medium leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="mt-16 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Link href="/for-venues">
          <button className="flex items-center gap-2 bg-vault-deep text-white px-8 py-4 rounded-xl font-semibold hover:bg-vault-navy transition-colors hover:scale-[1.02] active:scale-95 duration-200">
            See a kiosk near you <ArrowRight size={18} />
          </button>
        </Link>
      </motion.div>
    </section>
  )
}
