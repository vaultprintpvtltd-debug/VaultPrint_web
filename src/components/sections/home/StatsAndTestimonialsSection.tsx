import React from 'react'
import { Star } from 'lucide-react'

export default function StatsAndTestimonialsSection() {
  const stats = [
    { value: '60s', label: 'Average end-to-end print time' },
    { value: '100%', label: 'Uptime SLA commitment' },
    { value: '0', label: 'App downloads required' },
    { value: '₹2', label: 'Starting price per page' },
  ]

  const testimonials = [
    {
      quote:
        'I needed to print my assignment at 11pm and VaultPrint was the only option. Took less than a minute. Couldn’t believe it was that easy.',
      author: 'Priya S.',
      role: 'Student, BIT Mesra',
    },
    {
      quote:
        'We installed VaultPrint in our office lobby and it’s been brilliant. Employees print documents without waiting for the admin.',
      author: 'Rahul M.',
      role: 'HR Manager',
    },
    {
      quote:
        'Living in a hostel means no access to a printer at odd hours. VaultPrint nearby changed everything for me during exam season.',
      author: 'Ananya K.',
      role: 'PG Resident',
    },
  ]

  return (
    <section className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-15 mask-[radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />
      <div className="absolute top-0 right-0 h-128 w-lg rounded-full bg-teal-500/10 blur-3xl -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-128 w-lg rounded-full bg-navy-500/20 blur-3xl -ml-32 -mb-32 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 pb-20 border-b border-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="font-display text-5xl sm:text-6xl font-bold text-teal-300 mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-navy-300 font-medium text-sm leading-snug max-w-48 mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Loved by students and teams</h2>
          <p className="text-navy-300 max-w-2xl mx-auto">
            Three people, three very different situations — one printer they can trust.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <figure
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-colors"
            >
              <div className="flex gap-1 mb-6" aria-hidden>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <blockquote className="text-navy-100 mb-8 leading-relaxed">
                &ldquo;{test.quote}&rdquo;
              </blockquote>
              <figcaption>
                <div className="font-bold text-white">{test.author}</div>
                <div className="text-navy-400 text-sm">{test.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="text-center text-navy-500 text-xs mt-10">
          Representative personas shown for launch — real customer stories coming soon.
        </p>
      </div>
    </section>
  )
}
