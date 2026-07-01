'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
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

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
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
        <span className="pill mb-8 border-vault-deep text-vault-deep">Why VaultPrint</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep max-w-3xl mb-6">
          Built differently. Because printing should be private.
        </h2>
      </motion.div>

      <motion.div 
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className={`card p-8 flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              idx === 1 ? 'bg-vault-blue text-white' : 'bg-white text-vault-deep'
            }`}
          >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
              idx === 1 
                ? 'bg-white/20 text-white' 
                : 'bg-vault-frost text-vault-blue group-hover:bg-vault-blue group-hover:text-white'
            }`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
            <p className={`font-medium leading-relaxed ${idx === 1 ? 'text-white/80' : 'text-vault-deep/70'}`}>
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
