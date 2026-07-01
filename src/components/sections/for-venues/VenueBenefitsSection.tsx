'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { Sparkles, Settings, Monitor, TrendingUp, Gift } from 'lucide-react'

const benefits = [
  {
    icon: <Sparkles size={24} />,
    title: 'Enhanced visitor experience',
    description: 'Students, residents, or guests get a premium facility usable at any hour.',
  },
  {
    icon: <Settings size={24} />,
    title: 'Zero operational effort',
    description: 'No ink to buy, no paper to load, no maintenance to schedule.',
  },
  {
    icon: <Monitor size={24} />,
    title: 'Modern, tech-forward image',
    description: 'A VaultPrint kiosk signals your venue takes visitor experience seriously.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Potential revenue share',
    description: 'Depending on footfall and contract terms, venue partners may receive a revenue share.',
  },
  {
    icon: <Gift size={24} />,
    title: 'Free to the venue',
    description: 'No cost to the hosting venue in the standard rental model.',
  },
]

export default function VenueBenefitsSection() {
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
        className="flex flex-col items-center text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="pill mb-8 border-vault-deep text-vault-deep">Why partner with us</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep mb-4">
          Benefits to your venue
        </h2>
        <p className="text-vault-deep/70 text-lg max-w-2xl">
          Everything you gain — with zero extra effort.
        </p>
      </motion.div>

      <motion.div 
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {benefits.map((b) => (
          <motion.div
            key={b.title}
            variants={itemVariants}
            className="group card p-8 flex flex-col gap-4 bg-white border border-vault-deep/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-vault-blue"
          >
            <div className="w-14 h-14 rounded-2xl bg-vault-mist text-vault-blue ring-1 ring-vault-blue/10 flex items-center justify-center group-hover:bg-vault-blue group-hover:text-white transition-colors duration-300 mb-2">
              {b.icon}
            </div>
            <h3 className="text-xl font-display font-bold text-vault-deep group-hover:text-vault-blue transition-colors">{b.title}</h3>
            <p className="text-vault-deep/70 font-medium leading-relaxed">{b.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
