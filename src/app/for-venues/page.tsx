import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import VenueTypeGrid from '@/components/sections/for-venues/VenueTypeGrid'
import RentalModelSection from '@/components/sections/for-venues/RentalModelSection'
import ResponsibilitiesSplit from '@/components/sections/for-venues/ResponsibilitiesSplit'
import VenueBenefitsSection from '@/components/sections/for-venues/VenueBenefitsSection'
import VenueEnquiryForm from '@/components/sections/for-venues/VenueEnquiryForm'

export const metadata = {
  title: 'For Venues — Host a VaultPrint Kiosk',
  description: 'Turn unused space into a premium service for your visitors. VaultPrint supplies, installs, and maintains a fully automated printing kiosk at your venue — at zero cost.',
}

export default function ForVenuesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-slate-900 to-slate-950 py-24 sm:py-32 text-white">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Side */}
            <div className="flex flex-col gap-6">
              <Badge variant="accent" className="w-fit bg-white/10 border-white/20 text-blue-300">
                For colleges, offices, hostels & co-working spaces
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Turn unused space into a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  premium service
                </span>{' '}
                for your visitors.
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-xl">
                VaultPrint supplies, installs, and maintains a fully automated printing kiosk at your venue — at zero operational cost to you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link href="#enquiry">
                  <Button
                    variant="primary"
                    size="lg"
                    rightIcon={<ArrowRight size={18} />}
                    className="w-full sm:w-auto bg-white text-brand-navy hover:bg-slate-100"
                  >
                    Get a Free Consultation
                  </Button>
                </Link>
                <Link href="#how-rental-works">
                  <Button
                    variant="ghost"
                    size="lg"
                    rightIcon={<ArrowDown size={18} />}
                    className="w-full sm:w-auto text-slate-300 hover:text-white hover:bg-white/10"
                  >
                    See how it works first
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 blur-xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src="/images/kiosk-hero.png"
                  alt="VaultPrint kiosk in a venue"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Type Grid */}
      <VenueTypeGrid />

      {/* Rental Model — 3 Steps */}
      <div id="how-rental-works" className="scroll-mt-20">
        <RentalModelSection />
      </div>

      {/* Responsibilities Split */}
      <ResponsibilitiesSplit />

      {/* Benefits */}
      <VenueBenefitsSection />

      {/* Enquiry Form */}
      <VenueEnquiryForm />
    </>
  )
}
