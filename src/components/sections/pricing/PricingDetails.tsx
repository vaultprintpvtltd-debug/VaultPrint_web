'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { Check, X } from 'lucide-react'

export default function PricingDetails() {
  const included = [
    'Per-page price exactly as shown',
    'Live price shown before payment',
    'Digital payment confirmation',
    'Full refund if the print fails',
  ]

  const notCharged = [
    'No service fee',
    'No platform convenience charge',
    'No GST added on top for end users',
    'No cancellation fee if a job fails',
  ]

  const example = [
    ['Document', '12-page PDF'],
    ['Page range', 'All 12 pages'],
    ['Print type', 'Black & White'],
    ['Sides', 'Single-sided'],
    ['Copies', '2'],
    ['Price per page', '₹2.00'],
    ['Total pages', '12 × 2 = 24 pages'],
  ]

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div 
        className="flex flex-col items-center text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="pill mb-8 border-vault-deep text-vault-deep">No hidden fees</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep mb-4">
          No hidden fees. Ever.
        </h2>
        <p className="text-vault-deep/70 text-lg max-w-2xl mx-auto">
          What you&apos;re charged for - and everything you&apos;re not.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Included */}
        <motion.div 
          className="card p-8 bg-white border border-vault-deep/5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-display font-bold text-vault-deep mb-6">What&rsquo;s included</h3>
          <motion.ul 
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {included.map((item, idx) => (
              <motion.li key={idx} variants={itemVariants} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-vault-cyan/20 text-vault-cyan flex items-center justify-center border border-vault-cyan/30">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="text-vault-deep/80 font-medium">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Not charged */}
        <motion.div 
          className="card p-8 bg-white border border-vault-deep/5"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-display font-bold text-vault-deep mb-6">What&rsquo;s not charged</h3>
          <motion.ul 
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {notCharged.map((item, idx) => (
              <motion.li key={idx} variants={itemVariants} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-vault-deep/5 text-vault-deep/40 flex items-center justify-center border border-vault-deep/10">
                  <X size={14} strokeWidth={3} />
                </span>
                <span className="text-vault-deep/80 font-medium">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Pricing example — receipt style */}
      <motion.div 
        className="max-w-md mx-auto card bg-vault-deep p-8 text-white border-none"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-bold uppercase tracking-wide text-vault-cyan mb-5">
          Worked example
        </p>
        <dl className="space-y-3">
          {example.map(([label, value], idx) => (
            <div key={idx} className="flex items-center justify-between text-sm">
              <dt className="text-white/60 font-medium">{label}</dt>
              <dd className="font-bold text-white/90">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
          <span className="text-sm font-bold text-white">Total amount</span>
          <span className="font-display text-4xl font-bold text-vault-cyan">₹48.00</span>
        </div>
      </motion.div>
    </section>
  )
}
