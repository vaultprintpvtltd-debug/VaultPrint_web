'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { Star } from 'lucide-react'

export default function StatsAndTestimonialsSection() {
  const stats = [
    { value: '60s', label: 'Average end-to-end print time' },
    { value: '100%', label: 'Uptime SLA commitment' },
    { value: '0', label: 'App downloads required' },
    { value: '₹2', label: 'Starting price per page' },
  ]

  const testimonials = [
    {
      quote:
        'I needed to print my assignment at 11pm and VaultPrint was the only option. Took less than a minute. Couldn’t believe it was that easy.',
      author: 'Priya S.',
      role: 'Student, BIT Mesra',
    },
    {
      quote:
        'We installed VaultPrint in our office lobby and it’s been brilliant. Employees print documents without waiting for the admin.',
      author: 'Rahul M.',
      role: 'HR Manager',
    },
    {
      quote:
        'Living in a hostel means no access to a printer at odd hours. VaultPrint nearby changed everything for me during exam season.',
      author: 'Ananya K.',
      role: 'PG Resident',
    },
  ]

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Stats */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((stat, idx) => (
          <motion.div key={idx} variants={itemVariants} className="card bg-vault-blue p-8 flex flex-col items-center text-center justify-center border-none transition-transform hover:scale-105 duration-300">
            <div className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
              {stat.value}
            </div>
            <div className="text-white/80 font-medium text-sm max-w-40">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Testimonials */}
      <motion.div 
        className="flex flex-col items-center text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="pill mb-8 border-vault-deep text-vault-deep">Reviews</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep max-w-3xl mb-4">
          Loved by students and teams
        </h2>
        <p className="text-vault-deep/70 text-lg max-w-2xl">
          Three people, three very different situations — one printer they can trust.
        </p>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {testimonials.map((test, idx) => (
          <motion.figure
            key={idx}
            variants={itemVariants}
            className="card p-8 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <div className="flex gap-1 mb-6" aria-hidden>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} className="text-vault-warning fill-vault-warning" />
                ))}
              </div>
              <blockquote className="text-vault-deep/80 text-lg mb-8 leading-relaxed font-medium">
                &ldquo;{test.quote}&rdquo;
              </blockquote>
            </div>
            <figcaption>
              <div className="font-bold text-vault-deep">{test.author}</div>
              <div className="text-vault-deep/60 text-sm font-medium">{test.role}</div>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>

      <motion.p 
        className="text-center text-vault-deep/40 text-xs mt-12 font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        Representative personas shown for launch — real customer stories coming soon.
      </motion.p>
    </section>
  )
}
