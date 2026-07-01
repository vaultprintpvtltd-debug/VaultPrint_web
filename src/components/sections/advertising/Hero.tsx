import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ArrowRight, BarChart3 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-linear-to-br from-navy-800 to-navy-950">
      {/* Decorative background */}
      <div className="absolute inset-0 z-0 bg-grid opacity-15 mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="absolute -top-24 left-0 right-0 mx-auto h-96 w-96 rounded-full bg-teal-500/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-128 w-lg rounded-full bg-navy-500/20 blur-3xl -mr-32 -mb-32 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="inverted" className="mb-6 animate-fade-in-up">
            <BarChart3 size={14} />
            <span>Advertise on VaultPrint</span>
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] text-balance mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Reach{' '}
            <span className="font-display text-teal-300">1,000+</span>{' '}
            daily users at the exact moment they&rsquo;re engaged.
          </h1>

          <p className="text-xl text-navy-200 mb-10 leading-relaxed text-pretty animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            VaultPrint kiosk screens sit in colleges, offices, and co-working spaces. Your brand appears when users are actively engaged &mdash; not scrolling past.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Link href="#enquiry" className="w-full sm:w-auto">
              <Button variant="white" size="lg" className="w-full" rightIcon={<ArrowRight size={18} />}>
                Book Ad Space
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
