'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { XCircle, CheckCircle2 } from 'lucide-react'

export default function ProblemSection() {
  const comparisons = [
    {
      old: "Share your file with a shopkeeper you don't know",
      new: "OTP-locked release — only you can collect your print"
    },
    {
      old: "Wait in a queue for someone to print manually",
      new: "Under 60 seconds, start to finish, every time"
    },
    {
      old: "Limited shop hours — closed at night and weekends",
      new: "Available 24 hours, 7 days, 365 days"
    },
    {
      old: "No receipt, no transparency on pricing",
      new: "Live price shown before you pay — no surprises"
    },
    {
      old: "Install apps or carry USB drives",
      new: "Works in any phone browser — zero downloads"
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
    hidden: { opacity: 0, y: 20 },
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
        <span className="pill mb-8 border-vault-deep text-vault-deep">The old way of printing</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep max-w-3xl mb-6">
          You shouldn&apos;t have to hand your documents to a stranger.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Old Way Column */}
        <motion.div 
          className="card p-8 sm:p-10 border border-red-100"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 pb-6 border-b border-vault-mist/30 mb-6">
            <div className="bg-red-50 text-red-500 p-2 rounded-xl">
              <XCircle size={24} />
            </div>
            <h3 className="text-xl font-display font-bold text-vault-deep">
              The Old Way
            </h3>
          </div>
          
          <motion.ul 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {comparisons.map((item, idx) => (
              <motion.li key={idx} variants={itemVariants} className="flex gap-4 items-start group">
                <XCircle size={20} className="text-red-400 shrink-0 mt-0.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                <span className="text-vault-deep/70 font-medium leading-relaxed">{item.old}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* VaultPrint Way Column */}
        <motion.div 
          className="card p-8 sm:p-10 bg-vault-blue border border-vault-blue relative overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
          
          <div className="flex items-center gap-3 pb-6 border-b border-white/20 mb-6 relative z-10">
            <div className="bg-white/20 text-white p-2 rounded-xl backdrop-blur-sm">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-xl font-display font-bold text-white">
              The VaultPrint Way
            </h3>
          </div>
          
          <motion.ul 
            className="space-y-6 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {comparisons.map((item, idx) => (
              <motion.li key={idx} variants={itemVariants} className="flex gap-4 items-start group">
                <CheckCircle2 size={20} className="text-white shrink-0 mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span className="text-white/90 font-medium leading-relaxed">{item.new}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  )
}
