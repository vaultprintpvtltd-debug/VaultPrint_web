'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { Printer, Palette } from 'lucide-react'

interface Tier {
  type: string
  icon: React.ReactNode
  sides: string
  price: string
  unit: string
  featured?: boolean
}

export default function PricingTable() {
  const tiers: Tier[] = [
    {
      type: 'Black & White',
      icon: <Printer size={20} />,
      sides: 'Single-sided',
      price: '₹2.00',
      unit: 'per page',
      featured: true,
    },
    {
      type: 'Black & White',
      icon: <Printer size={20} />,
      sides: 'Double-sided',
      price: '₹1.50',
      unit: 'per side',
    },
    {
      type: 'Colour',
      icon: <Palette size={20} />,
      sides: 'Single-sided',
      price: '₹5.00',
      unit: 'per page',
    },
    {
      type: 'Colour',
      icon: <Palette size={20} />,
      sides: 'Double-sided',
      price: '₹4.00',
      unit: 'per side',
    },
  ]

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <section className="py-10 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {tiers.map((tier, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
              tier.featured
                ? 'bg-vault-deep text-white shadow-xl hover:-translate-y-1'
                : 'bg-white border border-vault-deep/10 text-vault-deep hover:border-vault-blue hover:shadow-lg hover:-translate-y-1'
            }`}
          >
            {tier.featured && (
              <span className="absolute -top-3 right-6 rounded-full bg-vault-cyan text-vault-deep text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 shadow-md">
                Most popular
              </span>
            )}
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                tier.featured 
                  ? 'bg-white/10 text-vault-cyan backdrop-blur-sm' 
                  : 'bg-vault-frost text-vault-blue'
              }`}
            >
              {tier.icon}
            </div>
            <p className={`text-sm font-bold tracking-wide uppercase ${tier.featured ? 'text-white/80' : 'text-vault-deep/70'}`}>
              {tier.type}
            </p>
            <p className={`text-sm font-medium mb-8 ${tier.featured ? 'text-white/60' : 'text-vault-deep/50'}`}>
              A4 · {tier.sides}
            </p>
            <div className="mt-auto">
              <span className="font-display text-5xl font-bold tracking-tight">{tier.price}</span>
              <span className={`ml-2 text-sm font-medium ${tier.featured ? 'text-white/60' : 'text-vault-deep/50'}`}>
                {tier.unit}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-sm text-vault-deep/70 font-medium max-w-2xl mx-auto">
          Prices shown are per page. Your total is calculated automatically based on your
          settings and shown on screen before you pay.
        </p>
        <p className="mt-4 text-xs text-vault-deep/50 font-medium">
          A3 pricing and monthly subscription plans are planned for a later phase. Only the four
          A4 tiers above are live in v1.
        </p>
      </motion.div>
    </section>
  )
}
