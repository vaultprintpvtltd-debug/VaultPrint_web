'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'

export default function PricingHero() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        className="card bg-white p-8 sm:p-12 lg:p-16 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-vault-cyan/10 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <span className="pill mb-8 border-vault-blue text-vault-blue">Transparent pricing</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-vault-deep leading-[1.05] text-balance mb-6"
            variants={itemVariants}
          >
            Simple, transparent pricing. <span className="text-vault-blue">No hidden fees.</span>
          </motion.h1>

          <motion.p 
            className="text-lg sm:text-xl text-vault-deep/70 leading-relaxed max-w-2xl mx-auto text-pretty"
            variants={itemVariants}
          >
            The price you see is the price you pay. No service charges, no convenience
            fees, no surprises.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
