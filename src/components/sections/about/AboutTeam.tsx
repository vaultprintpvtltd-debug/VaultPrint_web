'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { LogoMark } from '@/components/ui/Logo'

export default function AboutTeam() {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div 
        className="flex flex-col items-center text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="pill mb-8 border-vault-deep text-vault-deep">Who we are</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep mb-6">
          The team behind VaultPrint
        </h2>
      </motion.div>

      <motion.div 
        className="card p-8 sm:p-12 bg-vault-deep border-none overflow-hidden relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-vault-cyan/20 blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 text-center sm:text-left">
          <motion.div 
            className="shrink-0 w-20 h-20 rounded-2xl bg-white/10 ring-1 ring-white/20 flex items-center justify-center text-white backdrop-blur-md"
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <LogoMark size={44} />
          </motion.div>
          <p className="text-lg text-white/90 leading-relaxed text-pretty font-medium">
            VaultPrint is built by a small founding team from Jharkhand with backgrounds in
            technology, product, and operations. We&rsquo;re students and professionals who
            experienced the problem firsthand — and decided to solve it.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
