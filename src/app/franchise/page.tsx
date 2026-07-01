import React from 'react'
import Link from 'next/link'
import { ArrowRight, FileDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import OpportunityStats from '@/components/sections/franchise/OpportunityStats'
import WhatYouGet from '@/components/sections/franchise/WhatYouGet'
import FranchiseResponsibilities from '@/components/sections/franchise/FranchiseResponsibilities'
import RevenueModel from '@/components/sections/franchise/RevenueModel'
import FranchiseApplicationForm from '@/components/sections/franchise/FranchiseApplicationForm'

export const metadata = {
  title: 'Franchise Opportunity — VaultPrint',
  description: 'Run your own VaultPrint business. Own and operate VaultPrint kiosks in your city with full operational support from day one.',
}

export default function FranchisePage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-grid mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
        <div className="absolute -top-32 right-0 h-128 w-lg rounded-full bg-teal-200/40 blur-3xl pointer-events-none" />
        <div className="absolute top-24 -left-24 h-96 w-96 rounded-full bg-navy-100/60 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Badge variant="primary" className="mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              VaultPrint Franchise Opportunity
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-950 mb-8 leading-[1.05] text-balance">
              Run your own VaultPrint business.{' '}
              <span className="text-navy-700 block mt-2">We give you everything else.</span>
            </h1>

            <p className="text-lg sm:text-xl text-navy-500 font-medium leading-relaxed max-w-3xl mb-12 text-pretty">
              Own and operate VaultPrint kiosks in your city. Hardware, software, and full operational support provided. Earn per-print revenue from day one. No technical expertise required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <Link href="#application">
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight size={18} />}
                  className="w-full sm:w-auto"
                >
                  Apply for a Franchise
                </Button>
              </Link>
              {/* Fallback to mailto if no brochure is ready yet */}
              <Link href="mailto:hello@vaultprintpvtltd.online?subject=Franchise%20Brochure%20Request">
                <Button
                  variant="secondary"
                  size="lg"
                  leftIcon={<FileDown size={18} />}
                  className="w-full sm:w-auto"
                >
                  Download Franchise Brochure
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Stats */}
      <OpportunityStats />

      {/* What You Get */}
      <WhatYouGet />

      {/* Your Responsibilities */}
      <FranchiseResponsibilities />

      {/* Revenue Model */}
      <RevenueModel />

      {/* Application Form */}
      <FranchiseApplicationForm />
    </>
  )
}
