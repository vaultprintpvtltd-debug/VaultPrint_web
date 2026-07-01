'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const responsibilities = [
  {
    title: 'Secure venue locations',
    detail: 'Identify and negotiate placement agreements in your territory.',
  },
  {
    title: 'Manage local relationships',
    detail: 'Be the face of VaultPrint in your city.',
  },
  {
    title: 'Paper restocking',
    detail: 'Load paper when low — guided by admin dashboard alerts. A4 from any stationery supplier.',
  },
  {
    title: 'Basic daily check',
    detail: 'Confirm kiosk is powered on and showing QR screen. Admin app shows live status remotely.',
  },
  {
    title: 'Local marketing',
    detail: 'Run local awareness campaigns — posters, social posts, word of mouth.',
  },
]

export default function FranchiseResponsibilities() {
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
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="mb-10">
            <span className="pill mb-6 border-vault-deep text-vault-deep">Your role</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep mb-4">
              Your Responsibilities
            </h2>
            <p className="text-vault-deep/70 text-lg leading-relaxed max-w-md">
              As a local franchise partner, you manage the on-ground operations while we handle the technology.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {responsibilities.map((resp, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-vault-cyan/20 flex items-center justify-center shrink-0 mt-0.5 border border-vault-cyan/30">
                  <CheckCircle2 size={18} className="text-vault-cyan" />
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold text-vault-deep mb-1">{resp.title}</h4>
                  <p className="text-vault-deep/70 font-medium leading-relaxed">{resp.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-linear-to-tr from-vault-mist to-vault-cyan/20 rounded-3xl transform rotate-3 scale-[1.02] -z-10 blur-sm" />
          <div className="card bg-vault-deep rounded-3xl p-10 sm:p-12 relative text-white shadow-2xl border-none overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-vault-cyan/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            
            <h3 className="text-3xl font-display font-bold mb-6 relative z-10 leading-tight">You build the business. We build the tech.</h3>
            <p className="text-white/70 leading-relaxed mb-10 relative z-10 text-lg font-medium">
              Operating a VaultPrint kiosk network doesn&apos;t require a technical background. If you can change paper in a standard printer and build relationships in your local community, you have everything it takes to succeed.
            </p>
            <div className="flex items-center gap-4 text-sm font-bold text-vault-cyan uppercase tracking-wider relative z-10">
              <span className="w-12 h-px bg-vault-cyan/50" />
              Zero Coding Required
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
