'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { GraduationCap, Landmark, Home, BookOpen, Users, ShoppingBag } from 'lucide-react'

const venues = [
  {
    icon: <GraduationCap size={28} />,
    venue: 'Engineering & Medical Colleges',
    tagline: 'For students who need to print at midnight',
    description: 'Assignment deadlines, lab files, exam forms — students need printing at all hours.',
  },
  {
    icon: <Landmark size={28} />,
    venue: 'Government Offices',
    tagline: 'For citizens who come in needing a printout',
    description: 'Visitors arrive needing to print forms on the spot. Remove the friction without hiring extra staff.',
  },
  {
    icon: <Home size={28} />,
    venue: 'Hostels & PGs',
    tagline: 'For residents with no printer nearby',
    description: 'A shared-living essential. Students print at odd hours without leaving the premises.',
  },
  {
    icon: <BookOpen size={28} />,
    venue: 'Public Libraries',
    tagline: 'For researchers and readers',
    description: 'A natural fit for a self-service printing terminal.',
  },
  {
    icon: <Users size={28} />,
    venue: 'Co-working Spaces',
    tagline: 'For teams who print occasionally',
    description: 'Members get occasional printing without the overhead of owning a printer.',
  },
  {
    icon: <ShoppingBag size={28} />,
    venue: 'Shopping Malls',
    tagline: 'For shoppers with urgent print needs',
    description: 'High footfall. Travellers, shoppers, and visitors print tickets, forms, and documents on the go.',
  }
]

export default function VenueTypeGrid() {
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
        <span className="pill mb-8 border-vault-deep text-vault-deep">Venue types</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep mb-4">
          Built for venues where people need to print
        </h2>
        <p className="text-vault-deep/70 text-lg max-w-2xl">
          From campuses to co-working spaces — VaultPrint fits any high-footfall location.
        </p>
      </motion.div>

      <motion.div 
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {venues.map((v) => (
          <motion.div
            key={v.venue}
            variants={itemVariants}
            className="group card p-8 flex flex-col gap-4 bg-white border border-vault-deep/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-vault-blue"
          >
            <div className="w-16 h-16 rounded-2xl bg-vault-mist text-vault-blue flex items-center justify-center ring-1 ring-vault-blue/10 group-hover:bg-vault-blue group-hover:text-white group-hover:scale-105 transition-all duration-300 mb-2">
              {v.icon}
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-vault-deep mb-1 group-hover:text-vault-blue transition-colors">{v.venue}</h3>
              <p className="text-sm font-bold text-vault-deep/50 uppercase tracking-wider mb-4">{v.tagline}</p>
              <p className="text-vault-deep/70 font-medium leading-relaxed">{v.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
