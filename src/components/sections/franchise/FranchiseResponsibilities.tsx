import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CheckCircle2 } from 'lucide-react'

const responsibilities = [
  {
    title: 'Secure venue locations',
    detail: 'Identify and negotiate placement agreements in your territory.',
  },
  {
    title: 'Manage local relationships',
    detail: 'Be the face of VaultPrint in your city.',
  },
  {
    title: 'Paper restocking',
    detail: 'Load paper when low — guided by admin dashboard alerts. A4 from any stationery supplier.',
  },
  {
    title: 'Basic daily check',
    detail: 'Confirm kiosk is powered on and showing QR screen. Admin app shows live status remotely.',
  },
  {
    title: 'Local marketing',
    detail: 'Run local awareness campaigns — posters, social posts, word of mouth.',
  },
]

export default function FranchiseResponsibilities() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="Your role"
              title="Your Responsibilities"
              description="As a local franchise partner, you manage the on-ground operations while we handle the technology."
              align="left"
              className="mb-10"
            />
            
            <div className="space-y-6">
              {responsibilities.map((resp, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} className="text-teal-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-navy-900 mb-1">{resp.title}</h4>
                    <p className="text-navy-500 text-sm sm:text-base leading-relaxed">{resp.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-tr from-navy-700/10 to-teal-500/10 rounded-3xl transform rotate-3 scale-105" />
            <div className="bg-linear-to-br from-navy-800 to-navy-950 rounded-3xl p-10 sm:p-12 relative text-white shadow-2xl shadow-navy-950/30 ring-1 ring-white/10">
              <h3 className="text-2xl font-bold mb-4">You build the business. We build the tech.</h3>
              <p className="text-navy-200 leading-relaxed mb-8">
                Operating a VaultPrint kiosk network doesn't require a technical background. If you can change paper in a standard printer and build relationships in your local community, you have everything it takes to succeed.
              </p>
              <div className="flex items-center gap-3 text-sm font-semibold text-teal-300 uppercase tracking-wider">
                <span className="w-8 h-px bg-teal-300/50" />
                Zero Coding Required
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
