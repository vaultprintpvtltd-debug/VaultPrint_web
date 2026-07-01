'use client'

import React from 'react'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { Store, TrendingUp, Megaphone, ArrowRight } from 'lucide-react'

export default function ForBusinessesSection() {
  const models = [
    {
      icon: <Store size={24} />,
      title: 'Kiosk rental',
      headline: 'Turn unused space into a premium service',
      description:
        'You provide the space. VaultPrint supplies, installs, and maintains the kiosk at zero operational cost to you.',
      link: '/for-venues',
      action: 'Enquire about rental',
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Franchise',
      headline: 'Run your own VaultPrint business',
      description:
        'Own and operate VaultPrint kiosks in your city. Hardware, software, and support provided. Earn from day one.',
      link: '/franchise',
      action: 'Explore franchise',
    },
    {
      icon: <Megaphone size={24} />,
      title: 'Brand advertising',
      headline: 'Reach users at the moment of action',
      description:
        'Your brand appears on-screen during idle time and transaction flows — captive, engaged impressions.',
      link: '/advertising',
      action: 'Book ad space',
    },
  ]

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
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
        <span className="pill mb-8 border-vault-deep text-vault-deep">For businesses</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep max-w-3xl mb-4">
          Own the kiosk. Or just benefit from one.
        </h2>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-3 gap-6 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {models.map((model, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="card p-8 flex flex-col h-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-vault-frost text-vault-blue flex items-center justify-center mb-6 group-hover:bg-vault-blue group-hover:text-white transition-colors duration-300">
              {model.icon}
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-vault-cyan mb-3">
              {model.title}
            </p>
            <h3 className="text-2xl font-display font-bold text-vault-deep mb-4 leading-tight">{model.headline}</h3>
            <p className="text-vault-deep/70 font-medium leading-relaxed mb-8 grow">{model.description}</p>
            
            <Link href={model.link} className="mt-auto block">
              <button className="w-full flex justify-center items-center gap-2 bg-vault-frost text-vault-deep px-5 py-3 rounded-xl text-sm font-semibold hover:bg-vault-mist transition-colors">
                {model.action} <ArrowRight size={16} />
              </button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
