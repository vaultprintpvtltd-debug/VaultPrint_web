'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { CheckCircle2, XCircle, Minus } from 'lucide-react'

export default function ComparisonTableSection() {
  const features = [
    { name: 'Privacy & security', vp: true, shop: false, home: true },
    { name: 'File deletion after print', vp: true, shop: false, home: true },
    { name: 'Zero staff interaction', vp: true, shop: false, home: true },
    { name: 'No hardware maintenance', vp: true, shop: true, home: false },
    { name: 'No ink / paper refills', vp: true, shop: true, home: false },
    { name: '24 / 7 availability', vp: true, shop: false, home: true },
    { name: 'Digital payments (UPI)', vp: true, shop: 'partial', home: 'N/A' },
  ]

  const renderIcon = (status: boolean | string) => {
    if (status === true) return <CheckCircle2 className="text-vault-blue mx-auto" size={24} />
    if (status === false) return <XCircle className="text-vault-deep/30 mx-auto" size={24} />
    if (status === 'partial') return <Minus className="text-vault-warning mx-auto" size={24} />
    return <span className="text-vault-deep/50 text-sm font-medium">{status}</span>
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05 }
    }
  }

  const rowVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  }

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div 
        className="flex flex-col items-center text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="pill mb-8 border-vault-deep text-vault-deep">Comparison</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep max-w-3xl mb-6">
          Why VaultPrint stands out
        </h2>
        <p className="text-vault-deep/70 text-lg max-w-2xl">
          Self-service printing vs. traditional print shops and home printers.
        </p>
      </motion.div>

      <motion.div 
        className="card bg-white p-2 sm:p-6 overflow-x-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <table className="w-full text-center border-collapse min-w-[600px]">
          <thead>
            <tr>
              <th className="p-4 sm:p-5 text-left text-vault-deep/70 font-bold text-sm uppercase tracking-wider">Feature</th>
              <th className="p-4 sm:p-5 text-vault-blue font-display font-bold text-lg">VaultPrint</th>
              <th className="p-4 sm:p-5 text-vault-deep/70 font-semibold text-sm">Traditional Shop</th>
              <th className="p-4 sm:p-5 text-vault-deep/70 font-semibold text-sm">Home Printer</th>
            </tr>
          </thead>
          <motion.tbody
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, idx) => (
              <motion.tr 
                key={idx} 
                variants={rowVariants}
                className="border-t border-vault-deep/5 hover:bg-vault-frost/50 transition-colors"
              >
                <td className="p-4 sm:p-5 text-left font-bold text-vault-deep">
                  {feature.name}
                </td>
                <td className="p-4 sm:p-5 bg-vault-frost/30 rounded-xl my-1">
                  {renderIcon(feature.vp)}
                </td>
                <td className="p-4 sm:p-5">
                  {renderIcon(feature.shop)}
                </td>
                <td className="p-4 sm:p-5">
                  {renderIcon(feature.home)}
                </td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </motion.div>
    </section>
  )
}
