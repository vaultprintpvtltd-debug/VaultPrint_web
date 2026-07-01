'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { Printer, Code2, CreditCard, Wrench, BookOpen, Video, ArrowUpCircle, Megaphone } from 'lucide-react'

const features = [
  {
    icon: <Printer size={24} />,
    title: 'VaultPrint-branded kiosk hardware',
    description: 'Physical kiosk machine, printer, and accessories — supplied and installed.',
  },
  {
    icon: <Code2 size={24} />,
    title: 'Full software platform license',
    description: 'Web app, admin dashboard, print agent, real-time monitoring — all included.',
  },
  {
    icon: <CreditCard size={24} />,
    title: 'Payment infrastructure',
    description: 'Razorpay integration, refund handling, transaction reporting — all managed.',
  },
  {
    icon: <Wrench size={24} />,
    title: 'Installation and onboarding',
    description: 'VaultPrint installs and configures everything. Operational within a day.',
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Operational SOPs',
    description: 'Step-by-step guides for paper restocking and daily checks.',
  },
  {
    icon: <Video size={24} />,
    title: 'Training',
    description: 'Remote onboarding session covering operations, admin dashboard, escalation.',
  },
  {
    icon: <ArrowUpCircle size={24} />,
    title: 'Ongoing software updates',
    description: 'All updates automatic — kiosk always runs latest version.',
  },
  {
    icon: <Megaphone size={24} />,
    title: 'Marketing support',
    description: 'VaultPrint branding assets, social templates, local marketing guidance.',
  },
]

export default function WhatYouGet() {
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
        <span className="pill mb-8 border-vault-deep text-vault-deep">What&apos;s included</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep mb-4">
          Everything you need to launch
        </h2>
        <p className="text-vault-deep/70 text-lg max-w-2xl">
          We provide the complete hardware and software stack. You just provide the location.
        </p>
      </motion.div>

      <motion.div 
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={itemVariants}
            className="group card p-6 flex flex-col gap-4 bg-white border border-vault-deep/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-vault-blue"
          >
            <div className="w-14 h-14 rounded-2xl bg-vault-mist text-vault-blue flex items-center justify-center ring-1 ring-vault-blue/10 group-hover:bg-vault-blue group-hover:text-white transition-colors duration-300 mb-2">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-display font-bold text-vault-deep mb-2 group-hover:text-vault-blue transition-colors">{feature.title}</h3>
              <p className="text-sm text-vault-deep/70 font-medium leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
