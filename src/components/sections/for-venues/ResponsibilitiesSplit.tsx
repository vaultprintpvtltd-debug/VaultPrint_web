'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const vaultprintHandles = [
  'Kiosk hardware and printer',
  'Software platform and updates',
  'Maintenance, repairs, replacements',
  'Ink and paper restocking',
  'Remote 24/7 monitoring',
  'Customer support for all print issues',
  'Regular usage and revenue reporting',
]

const youProvide = [
  'A ~60cm Ã— 60cm installation spot',
  'A standard power outlet nearby',
  'Internet connectivity (4G hotspot works)',
  'Permission to place the kiosk',
]

export default function ResponsibilitiesSplit() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
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
        <span className="pill mb-8 border-vault-deep text-vault-deep">Clear responsibilities</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep mb-4">
          We handle everything. You provide the space.
        </h2>
        <p className="text-vault-deep/70 text-lg max-w-2xl">
          A transparent breakdown of what VaultPrint manages versus what your venue provides.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* VaultPrint Column */}
        <motion.div 
          className="card bg-vault-deep rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden border-none"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 p-32 bg-vault-cyan/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-vault-cyan/10 flex items-center justify-center border border-vault-cyan/20 backdrop-blur-md">
              <CheckCircle2 size={24} className="text-vault-cyan" />
            </div>
            <h3 className="text-2xl font-display font-bold">VaultPrint handles</h3>
          </div>

          <motion.ul 
            className="space-y-4 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {vaultprintHandles.map((item) => (
              <motion.li key={item} variants={itemVariants} className="flex items-start gap-3">
                <ArrowRight size={18} className="text-vault-cyan mt-0.5 shrink-0" />
                <span className="text-white/80 font-medium text-sm sm:text-base">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* You Provide Column */}
        <motion.div 
          className="card bg-white border border-vault-deep/5 rounded-3xl p-8 sm:p-10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-vault-mist border border-vault-deep/10 flex items-center justify-center">
              <CheckCircle2 size={24} className="text-vault-blue" />
            </div>
            <h3 className="text-2xl font-display font-bold text-vault-deep">You provide</h3>
          </div>

          <motion.ul 
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {youProvide.map((item) => (
              <motion.li key={item} variants={itemVariants} className="flex items-start gap-3">
                <ArrowRight size={18} className="text-vault-blue mt-0.5 shrink-0" />
                <span className="text-vault-deep/80 font-medium text-sm sm:text-base">{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-10 pt-6 border-t border-vault-mist/50">
            <p className="text-vault-deep font-bold text-lg">That&apos;s it.</p>
            <p className="text-vault-deep/50 font-medium text-sm mt-1">No recurring fees. No hidden costs. No operational burden.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
