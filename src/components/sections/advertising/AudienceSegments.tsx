'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { GraduationCap, Briefcase, Building2 } from 'lucide-react'

const segments = [
  {
    title: 'College students 18–25',
    profile: 'Engineering, medical, and commerce students. High usage during exam season.',
    brands: 'Ed-tech, food delivery, clothing, coaching institutes',
    icon: <GraduationCap className="w-8 h-8" />,
  },
  {
    title: 'Govt office visitors 25–45',
    profile: 'Citizens visiting for documentation, licensing, certificates. Practical and value-oriented.',
    brands: 'Insurance, banking, legal services, government scheme apps',
    icon: <Building2 className="w-8 h-8" />,
  },
  {
    title: 'Co-working professionals 22–35',
    profile: 'Freelancers, startup founders, consultants. Tech-savvy, higher disposable income.',
    brands: 'SaaS tools, co-working memberships, fintech',
    icon: <Briefcase className="w-8 h-8" />,
  },
]

export default function AudienceSegments() {
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
        <span className="pill mb-8 border-vault-deep text-vault-deep">Audience Segments</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep mb-4">
          Audience Segments
        </h2>
        <p className="text-vault-deep/70 text-lg max-w-2xl">
          Reach highly specific demographics based on the physical location of our kiosks.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {segments.map((segment, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="group card overflow-hidden bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <div className="h-32 bg-vault-deep flex items-center justify-center relative overflow-hidden group-hover:bg-vault-navy transition-colors duration-500">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:12px_12px]" />
              <motion.div 
                className="relative z-10 w-16 h-16 rounded-2xl bg-white text-vault-blue flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {segment.icon}
              </motion.div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-display font-bold text-vault-deep mb-6 text-center">{segment.title}</h3>
              <div className="space-y-5">
                <div>
                  <div className="text-xs font-bold text-vault-deep/40 uppercase tracking-wider mb-2">Profile</div>
                  <p className="text-vault-deep/80 font-medium">{segment.profile}</p>
                </div>
                <div className="pt-5 border-t border-vault-deep/5">
                  <div className="text-xs font-bold text-vault-deep/40 uppercase tracking-wider mb-2">Sample Brands</div>
                  <p className="text-vault-cyan font-bold">{segment.brands}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
