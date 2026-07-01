import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function CtaBannerSection() {
  return (
    <section className="py-24 bg-linear-to-br from-navy-800 to-navy-950 relative overflow-hidden">
      {/* Abstract background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-linear-to-l from-teal-400/15 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.1] text-balance">
          Ready to bring VaultPrint to your venue?
        </h2>
        <p className="text-lg text-navy-200 mb-10 max-w-2xl mx-auto text-pretty">
          Whether you&rsquo;re a college administrator, entrepreneur, or brand — there&rsquo;s a
          VaultPrint model for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/for-venues#enquiry" className="w-full sm:w-auto">
            <Button variant="white" size="lg" className="w-full" rightIcon={<ArrowRight size={18} />}>
              Partner With Us
            </Button>
          </Link>
          <Link href="/about#contact" className="w-full sm:w-auto">
            <Button
              variant="ghost"
              size="lg"
              className="w-full text-white bg-white/10 hover:bg-white/20 hover:text-white"
            >
              Contact Our Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
