'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'

export default function AboutHero() {
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
        <div className="absolute top-0 right-0 p-40 bg-vault-mist/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <span className="pill mb-8 border-vault-blue text-vault-blue">About VaultPrint</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-vault-deep leading-[1.05] text-balance mb-10"
            variants={itemVariants}
          >
            Built because printing shouldn&rsquo;t require trust in a stranger.
          </motion.h1>

          <motion.div 
            className="space-y-6 text-lg text-vault-deep/70 leading-relaxed text-pretty text-left max-w-2xl mx-auto"
            variants={itemVariants}
          >
            <p>
              VaultPrint was born from a simple frustration: why do you have to hand your ID
              proof, bank statement, or assignment to someone you&rsquo;ve never met, on a device
              you have no control over, with no idea whether they&rsquo;ll keep a copy?
            </p>
            <p>
              We built VaultPrint to give people complete control over their documents — from
              the moment they select a file to the moment they collect a printout. No staff
              involvement. No shared devices. No data retention.
            </p>
            <p>
              We&rsquo;re starting in Jharkhand — building for colleges, hostels, and government
              offices where the need is most acute — and expanding across India as we grow.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
