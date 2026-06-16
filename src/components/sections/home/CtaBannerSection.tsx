import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function CtaBannerSection() {
  return (
    <section className="py-24 bg-brand-navy border-t border-brand-navy/80 relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/20 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
          Ready to bring VaultPrint <br className="hidden sm:block" />
          to your venue?
        </h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
          Join universities, hostels, and coworking spaces across India offering secure, instant printing to their people.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/for-venues" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full" rightIcon={<ArrowRight size={18} />}>
              Get a Kiosk
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full bg-white/10 hover:bg-white/20 text-white border-none">
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
