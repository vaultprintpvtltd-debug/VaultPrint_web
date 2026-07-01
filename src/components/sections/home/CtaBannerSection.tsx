'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CtaBannerSection() {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="card bg-white p-8 sm:p-12 lg:p-16 overflow-hidden relative border-none">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="pill mb-8 border-vault-deep text-vault-deep">Get Started</span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-display font-bold text-vault-deep mb-6 leading-[1.1]">
              Ready to bring VaultPrint to your venue?
            </h2>
            
            <p className="text-lg text-vault-deep/70 mb-10 max-w-lg">
              Whether you&rsquo;re a college administrator, entrepreneur, or brand — there&rsquo;s a
              VaultPrint model for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/for-venues#enquiry" className="w-full sm:w-auto">
                <button className="w-full flex justify-center items-center gap-2 bg-vault-blue text-white px-6 py-4 rounded-xl font-bold hover:bg-vault-indigo transition-colors hover:scale-[1.02] active:scale-95 duration-200">
                  Partner With Us <ArrowRight size={20} />
                </button>
              </Link>
              <Link href="/about#contact" className="w-full sm:w-auto">
                <button className="w-full flex justify-center items-center gap-2 bg-vault-frost text-vault-deep px-6 py-4 rounded-xl font-bold hover:bg-vault-mist transition-colors hover:scale-[1.02] active:scale-95 duration-200">
                  Contact Our Team
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Visual block */}
          <motion.div 
            className="relative h-full min-h-[300px] rounded-3xl bg-vault-deep p-8 flex flex-col justify-center overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Background decorative waves/graph simulation */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,_white_1px,_transparent_0)]" style={{ backgroundSize: '32px 32px' }} />
            <div className="absolute right-0 top-0 w-1/2 h-full bg-linear-to-l from-vault-cyan/20 to-transparent pointer-events-none" />
            
            <div className="relative z-10 text-center text-white mb-8">
              <h3 className="text-xl font-bold mb-2">
                Join the print revolution.
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center relative z-10">
              <motion.div 
                className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl flex items-center gap-3"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="bg-white/20 text-white p-2 rounded-lg"><Sparkles size={24} /></div>
                <div className="text-left">
                  <div className="font-bold text-white">Scale quickly</div>
                </div>
              </motion.div>
              <motion.div 
                className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl flex items-center gap-3"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                 <div className="bg-white/20 text-white p-2 rounded-lg"><Sparkles size={24} /></div>
                 <div className="text-left">
                   <div className="font-bold text-white">Passive income</div>
                 </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
