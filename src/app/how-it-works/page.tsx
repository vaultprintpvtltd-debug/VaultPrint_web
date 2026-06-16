import React from 'react'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import HowItWorksExpanded from '@/components/sections/how-it-works/HowItWorksExpanded'
import SecuritySection from '@/components/sections/how-it-works/SecuritySection'
import FaqSection from '@/components/sections/how-it-works/FaqSection'

export const metadata = {
  title: 'How It Works — VaultPrint',
  description: 'Understand the simple 4-step print process of VaultPrint. Scan, upload, pay, and collect in 60 seconds with bank-grade security.',
}

export default function HowItWorksPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white py-20 sm:py-32">
        {/* Subtle background blob */}
        <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-brand-light/40 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            <Badge variant="primary" className="mb-6">
              From phone to paper
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-navy mb-6 leading-tight">
              How VaultPrint works — from QR scan to print in hand.
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mb-10">
              A full walkthrough of the VaultPrint experience. No app. No account. No staff. Just secure, high-speed self-service printing on demand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <Link href="/for-venues">
                <Button 
                  variant="primary" 
                  size="lg" 
                  leftIcon={<MapPin size={18} />}
                  rightIcon={<ArrowRight size={18} />}
                  className="w-full sm:w-auto"
                >
                  Find a kiosk near you
                </Button>
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* 4 Steps Section */}
      <HowItWorksExpanded />

      {/* Security Callout Section */}
      <SecuritySection />

      {/* FAQ Accordion Section */}
      <FaqSection />
    </>
  )
}
