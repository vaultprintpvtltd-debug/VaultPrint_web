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
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50 py-24 sm:py-32">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden pointer-events-none opacity-40">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-light rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Badge variant="primary" className="mb-6">
              VaultPrint Franchise Opportunity
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-navy mb-8 leading-[1.1]">
              Run your own VaultPrint business.{' '}
              <span className="text-brand-blue block mt-2">We give you everything else.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mb-12">
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
                  className="w-full sm:w-auto bg-white"
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
