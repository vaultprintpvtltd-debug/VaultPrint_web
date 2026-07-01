'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'

const stats = [
  {
    number: '900M+',
    context: 'Indians who use smartphones — your potential customer base',
  },
  {
    number: '₹0',
    context: 'Technical expertise required to operate a kiosk',
  },
  {
    number: '24/7',
    context: 'Revenue potential — kiosks earn even while you sleep',
  },
]

export default function OpportunityStats() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        className="card bg-vault-deep text-white relative overflow-hidden p-10 sm:p-14 lg:p-16 border-none"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid opacity-15 mask-[radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-vault-cyan/20 blur-3xl -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-vault-blue/20 blur-3xl -ml-32 -mb-32 pointer-events-none" />

        <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10 relative z-10">
          {stats.map((stat, i) => (
            <motion.div key={i} variants={itemVariants} className="flex flex-col gap-4 py-8 md:py-0 px-4">
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-vault-cyan tracking-tight drop-shadow-md">
                {stat.number}
              </div>
              <p className="text-white/80 font-medium text-lg leading-relaxed max-w-xs mx-auto">
                {stat.context}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
