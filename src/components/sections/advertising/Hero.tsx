'use client'

import React from 'react'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight, BarChart3 } from 'lucide-react'

export default function Hero() {
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
        className="card bg-vault-deep p-8 sm:p-12 lg:p-16 relative overflow-hidden border-none text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute -top-24 left-0 right-0 mx-auto h-96 w-96 rounded-full bg-vault-cyan/20 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <span className="pill mb-8 border-vault-cyan text-vault-cyan bg-vault-cyan/10">
              <BarChart3 size={16} className="mr-2" />
              Advertise on VaultPrint
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.05] text-balance mb-6"
            variants={itemVariants}
          >
            Reach <span className="text-vault-cyan">1,000+</span> daily users at the exact moment they&rsquo;re engaged.
          </motion.h1>

          <motion.p 
            className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto text-pretty mb-10"
            variants={itemVariants}
          >
            VaultPrint kiosk screens sit in colleges, offices, and co-working spaces. Your brand appears when users are actively engaged &mdash; not scrolling past.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#enquiry" className="w-full sm:w-auto">
               <button className="w-full flex items-center justify-center gap-2 bg-vault-cyan text-vault-deep px-8 py-4 rounded-xl font-bold hover:bg-vault-skybright transition-colors hover:scale-[1.02] active:scale-95 duration-200">
                 Book Ad Space <ArrowRight size={20} />
               </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
