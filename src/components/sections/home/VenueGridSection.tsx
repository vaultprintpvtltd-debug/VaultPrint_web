'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { GraduationCap, Building2, Coffee, Plane, Briefcase, ShoppingBag } from 'lucide-react'

export default function VenueGridSection() {
  const venues = [
    { name: 'University campuses', icon: <GraduationCap size={26} /> },
    { name: 'Student hostels & PGs', icon: <Building2 size={26} /> },
    { name: 'Coworking spaces', icon: <Coffee size={26} /> },
    { name: 'Railway & bus stands', icon: <Plane size={26} /> },
    { name: 'Government offices', icon: <Briefcase size={26} /> },
    { name: 'Shopping malls', icon: <ShoppingBag size={26} /> },
  ]

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
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
        <span className="pill mb-8 border-vault-deep text-vault-deep">Locations</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep max-w-3xl mb-4">
          Where VaultPrint belongs
        </h2>
        <p className="text-vault-deep/70 text-lg max-w-2xl">
          Built for high-footfall locations where people need to print on the go.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {venues.map((venue, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="card p-6 sm:p-8 text-center hover:border-vault-blue transition-all duration-300 group cursor-pointer"
          >
            <div className="w-16 h-16 mx-auto bg-vault-frost text-vault-blue rounded-2xl flex items-center justify-center mb-5 group-hover:bg-vault-blue group-hover:text-white group-hover:-translate-y-1 transition-all duration-300 shadow-sm border border-vault-deep/5">
              {venue.icon}
            </div>
            <h3 className="font-bold text-vault-deep text-lg group-hover:text-vault-blue transition-colors">{venue.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
