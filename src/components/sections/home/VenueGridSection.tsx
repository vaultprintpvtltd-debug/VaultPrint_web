import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GraduationCap, Building2, Coffee, Plane, Briefcase, ShoppingBag } from 'lucide-react'

export default function VenueGridSection() {
  const venues = [
    { name: 'University Campuses', icon: <GraduationCap size={28} /> },
    { name: 'Student Hostels', icon: <Building2 size={28} /> },
    { name: 'Coworking Spaces', icon: <Coffee size={28} /> },
    { name: 'Airports & Transit', icon: <Plane size={28} /> },
    { name: 'Corporate Offices', icon: <Briefcase size={28} /> },
    { name: 'Retail Malls', icon: <ShoppingBag size={28} /> },
  ]

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Where VaultPrint belongs"
          description="Designed to fit seamlessly into any high-traffic environment."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {venues.map((venue, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-center hover:border-brand-blue hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 mx-auto bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-light group-hover:text-brand-blue transition-colors duration-300">
                {venue.icon}
              </div>
              <h3 className="font-bold text-slate-800">{venue.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
