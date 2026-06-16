'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

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

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          description="Have questions about security, payments, or formats? We've got you covered."
          align="center"
          className="mb-16"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? 'border-brand-blue/30 bg-white shadow-md shadow-brand-blue/5' 
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <button
                  className="w-full flex justify-between items-center text-left p-6 font-semibold text-brand-navy gap-4 focus:outline-none"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className={`shrink-0 transition-colors ${isOpen ? 'text-brand-blue' : 'text-slate-400'}`} />
                    <span className="text-base sm:text-lg">{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-brand-blue' : 'text-slate-400'
                    }`}
                    size={20}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0 text-slate-500 font-medium leading-relaxed text-sm sm:text-base border-t border-slate-50/50">
                    {faq.a}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
