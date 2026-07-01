'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { MonitorPlay, QrCode, Smartphone, Receipt } from 'lucide-react'

const formats = [
  {
    title: 'On-screen display ads',
    description: 'Full-screen brand creative during kiosk idle time. 10–15 second rotation.',
    bestFor: 'Brand awareness, product launches',
    icon: <MonitorPlay className="w-8 h-8" />,
  },
  {
    title: 'QR-based promotions',
    description: 'QR code with your offer on the print confirmation screen — highest-attention moment.',
    bestFor: 'Offers, downloads, sign-ups',
    icon: <QrCode className="w-8 h-8" />,
  },
  {
    title: 'Branded OTP screen',
    description: 'Your brand message and logo on the OTP delivery screen — shown to every paying user.',
    bestFor: 'Brand recall, local offers',
    icon: <Smartphone className="w-8 h-8" />,
  },
  {
    title: 'Print receipt branding',
    description: 'Your logo and a short message on the digital receipt sent after print completion.',
    bestFor: 'Brand affinity, loyalty offers',
    icon: <Receipt className="w-8 h-8" />,
  },
]

export default function AdFormats() {
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
        <span className="pill mb-8 border-vault-deep text-vault-deep">Ad Formats</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep mb-4">
          Ad Formats that Deliver
        </h2>
        <p className="text-vault-deep/70 text-lg max-w-2xl">
          Choose from multiple high-impact placements integrated seamlessly into the user journey.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {formats.map((format, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="group card p-8 flex flex-col sm:flex-row gap-6 bg-white border border-vault-deep/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-vault-blue"
          >
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-vault-mist text-vault-blue flex items-center justify-center ring-1 ring-vault-blue/10 group-hover:bg-vault-blue group-hover:text-white transition-colors duration-300">
              {format.icon}
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-vault-deep mb-3 group-hover:text-vault-blue transition-colors">{format.title}</h3>
              <p className="text-vault-deep/70 font-medium mb-6 leading-relaxed">{format.description}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-vault-mist/50 rounded-lg text-sm text-vault-deep/80 font-bold border border-vault-deep/5">
                <span className="text-vault-deep/50">Best for:</span> {format.bestFor}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
