'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { MessageSquare, Wrench, Headphones } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Free consultation',
    description: 'We assess your venue\'s footfall, space, and connectivity. Proposal within 48 hours. No commitment required.',
    icon: <MessageSquare size={24} />,
  },
  {
    number: 2,
    title: 'Installation',
    description: 'VaultPrint handles everything — hardware delivery, kiosk setup, printer configuration, software deployment. Typically 2–3 hours on site.',
    icon: <Wrench size={24} />,
  },
  {
    number: 3,
    title: 'We run it',
    description: 'VaultPrint monitors the kiosk 24/7. We handle ink, paper, maintenance, updates, and customer support. You do nothing.',
    icon: <Headphones size={24} />,
  }
]

export default function RentalModelSection() {
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
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        className="flex flex-col items-center text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="pill mb-8 border-vault-deep text-vault-deep">The rental model</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep mb-4">
          How the kiosk rental works
        </h2>
        <p className="text-vault-deep/70 text-lg max-w-2xl">
          Three steps between you and a working kiosk.
        </p>
      </motion.div>

      <motion.div 
        className="relative grid md:grid-cols-3 gap-8 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Connector line */}
        <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-0.5 bg-linear-to-r from-vault-mist via-vault-blue/30 to-vault-mist" />

        {steps.map((step) => (
          <motion.div key={step.number} variants={itemVariants} className="group relative text-center flex flex-col items-center card p-8 bg-white border border-vault-deep/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-vault-blue">
            {/* Step Number Circle */}
            <div className="w-16 h-16 rounded-2xl bg-vault-frost text-vault-blue ring-1 ring-vault-blue/10 flex items-center justify-center mb-8 relative z-10 shadow-sm group-hover:bg-vault-blue group-hover:text-white transition-colors duration-300">
              {step.icon}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-vault-deep text-vault-cyan text-sm font-bold rounded-xl flex items-center justify-center border-2 border-white shadow-md">
                {step.number}
              </div>
            </div>

            <h3 className="text-xl font-display font-bold text-vault-deep mb-4 group-hover:text-vault-blue transition-colors">
              {step.title}
            </h3>
            <p className="text-vault-deep/70 font-medium leading-relaxed max-w-sm">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
