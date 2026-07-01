'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { Clock, ShieldBan, Users, Target, MapPin } from 'lucide-react'

const reasons = [
  {
    title: 'Captive audience',
    description: 'Users interact with the kiosk for 30 to 90 seconds — far longer than a typical digital ad view',
    icon: <Clock className="w-6 h-6" />,
  },
  {
    title: 'No ad blockers',
    description: 'Physical screen displays cannot be blocked or skipped',
    icon: <ShieldBan className="w-6 h-6" />,
  },
  {
    title: 'Known demographics',
    description: 'College students 18–25, government office visitors 25–45, co-working professionals 22–35',
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'High-intent context',
    description: 'People printing are completing important tasks — receptive to relevant offers',
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: 'Hyper-local targeting',
    description: 'Target specific locations: a college in Ranchi, an office in Bengaluru, a hostel in Pune',
    icon: <MapPin className="w-6 h-6" />,
  },
]

export default function WhyItWorks() {
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
        <span className="pill mb-8 border-vault-deep text-vault-deep">Why It Works</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep mb-4">
          Why Kiosk Advertising Works
        </h2>
        <p className="text-vault-deep/70 text-lg max-w-2xl">
          VaultPrint provides an unmatched opportunity to capture attention when it matters most.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="card p-8 flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-vault-blue border border-vault-deep/5 bg-white"
          >
            <div className="w-14 h-14 rounded-2xl bg-vault-frost text-vault-blue flex items-center justify-center mb-6 ring-1 ring-vault-blue/10 group-hover:bg-vault-blue group-hover:text-white transition-colors duration-300">
              {reason.icon}
            </div>
            <h3 className="text-xl font-display font-bold text-vault-deep mb-3 group-hover:text-vault-blue transition-colors">{reason.title}</h3>
            <p className="text-vault-deep/70 font-medium leading-relaxed">{reason.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
