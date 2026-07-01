'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Lock } from 'lucide-react'

export default function RevenueModel() {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <motion.div 
        className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-vault-mist text-vault-blue ring-1 ring-vault-blue/10 mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        <TrendingUp size={40} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep mb-6">
          How you earn
        </h2>
        <p className="text-vault-deep/70 text-lg leading-relaxed max-w-3xl mx-auto text-pretty">
          As a VaultPrint franchise partner, you earn a share of every print job completed on your kiosks. The more kiosks you operate and the higher the footfall, the greater your monthly revenue. Partners with kiosks in high-footfall college locations typically see consistent daily usage from the first week of installation.
        </p>
      </motion.div>

      <motion.div 
        className="mt-12 card bg-vault-deep p-8 sm:p-10 text-left border-none relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="absolute top-0 right-0 p-32 bg-vault-cyan/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
        <div className="absolute top-0 left-0 w-2 h-full bg-vault-cyan" />
        
        <h4 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-3 relative z-10">
          <Lock className="text-vault-cyan" size={24} /> Confidential Revenue Split
        </h4>
        <p className="text-white/70 text-base sm:text-lg leading-relaxed relative z-10">
          Specific revenue splits and margin calculations are disclosed during the franchise consultation call. We ensure our partners receive a highly competitive share that makes the unit economics incredibly attractive.
        </p>
      </motion.div>
    </section>
  )
}
