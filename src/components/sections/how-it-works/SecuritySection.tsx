'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { ShieldCheck, Lock, Server, Clock, Key, Trash2 } from 'lucide-react'

interface ProtectionLayer {
  title: string
  description: string
  icon: React.ReactNode
}

const layers: ProtectionLayer[] = [
  {
    title: 'Encrypted upload',
    description: 'Files travel over end-to-end encrypted HTTPS connections — the same security standards used by financial institutions.',
    icon: <Lock className="text-vault-cyan" size={24} />
  },
  {
    title: 'Private storage',
    description: 'Uploaded files are saved in an isolated, private server bucket with no public-facing URL or external access.',
    icon: <Server className="text-vault-cyan" size={24} />
  },
  {
    title: 'Time-limited access',
    description: 'Kiosk hardware agents are only granted a 2-minute signed cryptographic link to access your file when you release it.',
    icon: <Clock className="text-vault-cyan" size={24} />
  },
  {
    title: 'OTP release',
    description: 'Your physical print job only starts when you stand at the kiosk and key in the 6-digit release OTP shown on your phone.',
    icon: <Key className="text-vault-cyan" size={24} />
  },
  {
    title: 'Auto-deletion',
    description: 'Files are permanently destroyed from our servers the second the printer outputs the pages (max 24-hour backup cache).',
    icon: <Trash2 className="text-vault-cyan" size={24} />
  }
]

export default function SecuritySection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <section className="relative py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="card bg-vault-deep text-white overflow-hidden p-8 sm:p-12 lg:p-16 border-none"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-vault-cyan/20 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-vault-blue/20 rounded-full filter blur-3xl pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-16 items-center relative z-10">

          {/* Main Narrative Column */}
          <motion.div 
            className="lg:col-span-5 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-vault-cyan/30 bg-vault-cyan/10 text-vault-cyan w-fit text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <ShieldCheck size={16} />
              Bank-grade security
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-tight">
              Your file stays private. <span className="text-transparent bg-clip-text bg-linear-to-r from-vault-cyan to-vault-skybright">Always.</span>
            </h2>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed font-medium">
              VaultPrint was built with privacy as the first principle. Your document is encrypted in transit and stored in a private server bucket. It is accessible only via a time-limited signed link — no staff member, no shopkeeper, no third party can open it. The moment your print job completes, the file is permanently deleted.
            </p>
          </motion.div>

          {/* Grid of Protection Layers */}
          <motion.div 
            className="lg:col-span-7 grid sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {layers.map((layer, index) => {
              const isLast = index === layers.length - 1
              return (
                <motion.div
                  key={layer.title}
                  variants={itemVariants}
                  className={`p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 ${
                    isLast ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-vault-cyan/10 flex items-center justify-center mb-5 border border-vault-cyan/20 text-white">
                    {layer.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">{layer.title}</h3>
                  <p className="text-white/70 font-medium text-sm sm:text-base leading-relaxed">
                    {layer.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}
