import Link from 'next/link'
import { ArrowRight, BarChart3 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-navy">
      {/* Background styling */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand-blue opacity-20 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-brand-blue font-medium text-sm mb-6 animate-fade-in-up">
            <BarChart3 size={16} />
            <span>Advertise on VaultPrint</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Reach 1,000+ daily users at the exact moment they're engaged.
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            VaultPrint kiosk screens sit in colleges, offices, and co-working spaces. Your brand appears when users are actively engaged &mdash; not scrolling past.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Link 
              href="#enquiry"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-brand-navy bg-white rounded-full hover:bg-gray-100 transition-all duration-200 w-full sm:w-auto"
            >
              Book Ad Space <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
