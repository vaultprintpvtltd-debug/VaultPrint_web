'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { ShieldCheck, Zap, Receipt, Clock } from 'lucide-react'

export default function AboutValues() {
  const values = [
    {
      icon: <ShieldCheck size={24} />,
      title: 'Privacy first',
      statement:
        'Every design decision is evaluated against one question: does this protect the user’s document? If not, it doesn’t ship.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Zero friction',
      statement:
        'If it takes longer than 60 seconds, we haven’t done our job. Speed is a feature.',
    },
    {
      icon: <Receipt size={24} />,
      title: 'Transparent pricing',
      statement:
        'We show you the total before you pay. There is no other price.',
    },
    {
      icon: <Clock size={24} />,
      title: 'Always available',
      statement:
        'A kiosk that’s down is a broken promise. Uptime is an obligation, not a target.',
    },
  ]

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
        <span className="pill mb-8 border-vault-deep text-vault-deep">What we believe</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep mb-6">
          Four values, in everything we build
        </h2>
      </motion.div>

      <motion.div 
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {values.map((value, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="card p-7 hover:-translate-y-1 hover:shadow-xl hover:border-vault-blue transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-vault-frost text-vault-blue flex items-center justify-center mb-6 group-hover:bg-vault-blue group-hover:text-white transition-colors duration-300 shadow-sm border border-vault-deep/5">
              {value.icon}
            </div>
            <h3 className="text-xl font-display font-bold text-vault-deep mb-3 group-hover:text-vault-blue transition-colors">{value.title}</h3>
            <p className="text-vault-deep/70 leading-relaxed font-medium">{value.statement}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
