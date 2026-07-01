import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GraduationCap, Building2, Coffee, Plane, Briefcase, ShoppingBag } from 'lucide-react'

export default function VenueGridSection() {
  const venues = [
    { name: 'University campuses', icon: <GraduationCap size={26} /> },
    { name: 'Student hostels & PGs', icon: <Building2 size={26} /> },
    { name: 'Coworking spaces', icon: <Coffee size={26} /> },
    { name: 'Railway & bus stands', icon: <Plane size={26} /> },
    { name: 'Government offices', icon: <Briefcase size={26} /> },
    { name: 'Shopping malls', icon: <ShoppingBag size={26} /> },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Where VaultPrint belongs"
          description="Built for high-footfall locations where people need to print on the go."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {venues.map((venue, idx) => (
            <div
              key={idx}
              className="bg-white border border-navy-100 rounded-2xl p-6 sm:p-8 text-center hover:border-navy-300 hover:shadow-xl hover:shadow-navy-950/5 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 mx-auto bg-navy-50 text-navy-500 rounded-xl flex items-center justify-center mb-4 ring-1 ring-navy-100 group-hover:bg-navy-700 group-hover:text-white transition-colors duration-300">
                {venue.icon}
              </div>
              <h3 className="font-bold text-navy-900">{venue.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
