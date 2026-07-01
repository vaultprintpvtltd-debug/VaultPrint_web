'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  { 
    q: 'What file formats does VaultPrint support?', 
    a: 'PDF files only in v1. Word documents, images (JPG, PNG), and PowerPoint support is planned for future releases.' 
  },
  { 
    q: 'What if my OTP expires before I reach the kiosk?', 
    a: 'OTPs are valid for 15 minutes from the time of generation. If your OTP expires, don\'t worry — you can contact support within the app interface to trigger a quick refund or regenerate the code.' 
  },
  { 
    q: 'What if the print fails?', 
    a: 'In the rare event that the kiosk runs out of paper, loses power, or experiences a print jam, your job is automatically flagged and a full refund is initiated within 24 hours.' 
  },
  { 
    q: 'Can I print multiple copies?', 
    a: 'Yes — you can print up to 50 copies per print job. You can configure the number of copies, single or double sided printing, and color options in the customization step.' 
  },
  { 
    q: 'Is my payment information stored?', 
    a: 'No. VaultPrint processes all transactions through Razorpay, a highly secure, industry-leading payment gateway. We never see, process, or store your credit/debit card details, UPI credentials, or wallet info.' 
  },
  { 
    q: 'Can I print from a laptop or desktop?', 
    a: 'Yes! Scan the kiosk QR code with your phone browser, then you can copy/paste a download link or access cloud storage folders (like Google Drive or OneDrive) directly from the mobile page to upload the document.' 
  },
  { 
    q: 'What paper size is supported?', 
    a: 'We support standard A4 paper size only in v1. Support for other formats like A3 or glossy photo printing is in our roadmap.' 
  },
  { 
    q: 'Can I get a receipt?', 
    a: 'A digital payment confirmation is sent to your email if you provide it during checkout. In addition, Razorpay automatically sends a transaction receipt to your phone number and email.' 
  }
]

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div 
        className="flex flex-col items-center text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="pill mb-8 border-vault-deep text-vault-deep">FAQs</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-vault-deep/70 text-lg max-w-2xl">
          Have questions about security, payments, or formats? We&apos;ve got you covered.
        </p>
      </motion.div>

      <motion.div 
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {faqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`card overflow-hidden transition-all duration-300 border ${
                isOpen
                  ? 'border-vault-blue bg-white shadow-md'
                  : 'border-vault-deep/10 bg-white hover:border-vault-deep/30'
              }`}
            >
              <button
                className="w-full flex justify-between items-center text-left p-6 sm:p-8 font-bold text-vault-deep gap-4 focus:outline-none"
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="flex items-center gap-4">
                  <HelpCircle size={20} className={`shrink-0 transition-colors ${isOpen ? 'text-vault-blue' : 'text-vault-deep/40'}`} />
                  <span className="text-lg">{faq.q}</span>
                </span>
                <ChevronDown
                  className={`transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 text-vault-blue' : 'text-vault-deep/40'
                  }`}
                  size={20}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 text-vault-deep/70 font-medium leading-relaxed border-t border-vault-mist/30 mt-2">
                      <div className="pt-4">{faq.a}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
