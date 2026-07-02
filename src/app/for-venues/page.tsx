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
  title: 'For Venues - Host a VaultPrint Kiosk',
  description: 'Turn unused space into a premium service for your visitors. VaultPrint supplies, installs, and maintains a fully automated printing kiosk at your venue — at zero cost.',
}

export default function ForVenuesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-white pt-14 pb-20 lg:pt-20 lg:pb-28">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-grid mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
        <div className="absolute -top-32 right-0 h-128 w-lg rounded-full bg-teal-200/40 blur-3xl pointer-events-none" />
        <div className="absolute top-24 -left-24 h-96 w-96 rounded-full bg-navy-100/60 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Side */}
            <div className="flex flex-col gap-6">
              <Badge variant="primary" className="w-fit">
                For colleges, offices, hostels & co-working spaces
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance text-navy-950">
                Turn unused space into a{' '}
                <span className="text-navy-700">
                  premium service
                </span>{' '}
                for your visitors.
              </h1>

              <p className="text-lg sm:text-xl text-navy-500 font-medium leading-relaxed max-w-xl text-pretty">
                VaultPrint supplies, installs, and maintains a fully automated printing kiosk at your venue — at zero operational cost to you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link href="#enquiry">
                  <Button
                    variant="primary"
                    size="lg"
                    rightIcon={<ArrowRight size={18} />}
                    className="w-full sm:w-auto"
                  >
                    Get a Free Consultation
                  </Button>
                </Link>
                <Link href="#how-rental-works">
                  <Button
                    variant="secondary"
                    size="lg"
                    rightIcon={<ArrowDown size={18} />}
                    className="w-full sm:w-auto"
                  >
                    See how it works first
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-6 rounded-3xl bg-linear-to-br from-teal-200/40 to-navy-100/40 blur-xl" />
              <div className="relative overflow-hidden rounded-3xl border border-navy-100 shadow-2xl shadow-navy-950/10 ring-1 ring-navy-100">
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
