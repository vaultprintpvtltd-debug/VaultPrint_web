import React from 'react'
import { Card } from '@/components/ui/Card'
import { Star } from 'lucide-react'

export default function StatsAndTestimonialsSection() {
  const stats = [
    { value: '50K+', label: 'Pages Printed' },
    { value: '10K+', label: 'Happy Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '< 60s', label: 'Average Time' },
  ]

  const testimonials = [
    {
      quote: "I used to dread taking my USB to the local shop. Now I just scan, pay with UPI, and get my print in seconds. It's brilliant.",
      author: 'Priya S.',
      role: 'University Student'
    },
    {
      quote: "Having a VaultPrint kiosk in our coworking space has been a game changer. Members love the privacy and speed.",
      author: 'Rahul M.',
      role: 'Coworking Space Manager'
    },
    {
      quote: "The interface is so clean. I didn't have to download anything, and the payment was instant. Why wasn't printing always this easy?",
      author: 'Anita K.',
      role: 'Freelancer'
    }
  ]

  return (
    <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-64 bg-brand-blue/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 p-64 bg-brand-light/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 pb-20 border-b border-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-brand-light mb-2">{stat.value}</div>
              <div className="text-slate-400 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Don't just take our word for it</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">See what our users have to say about the VaultPrint experience.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed">"{test.quote}"</p>
              <div>
                <div className="font-bold text-white">{test.author}</div>
                <div className="text-slate-500 text-sm">{test.role}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
