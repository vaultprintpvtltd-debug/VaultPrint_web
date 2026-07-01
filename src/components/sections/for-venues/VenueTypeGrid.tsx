import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { GraduationCap, Landmark, Home, BookOpen, Users, ShoppingBag } from 'lucide-react'

const venues = [
  {
    icon: <GraduationCap size={28} />,
    venue: 'Engineering & Medical Colleges',
    tagline: 'For students who need to print at midnight',
    description: 'Assignment deadlines, lab files, exam forms — students need printing at all hours.',
  },
  {
    icon: <Landmark size={28} />,
    venue: 'Government Offices',
    tagline: 'For citizens who come in needing a printout',
    description: 'Visitors arrive needing to print forms on the spot. Remove the friction without hiring extra staff.',
  },
  {
    icon: <Home size={28} />,
    venue: 'Hostels & PGs',
    tagline: 'For residents with no printer nearby',
    description: 'A shared-living essential. Students print at odd hours without leaving the premises.',
  },
  {
    icon: <BookOpen size={28} />,
    venue: 'Public Libraries',
    tagline: 'For researchers and readers',
    description: 'A natural fit for a self-service printing terminal.',
  },
  {
    icon: <Users size={28} />,
    venue: 'Co-working Spaces',
    tagline: 'For teams who print occasionally',
    description: 'Members get occasional printing without the overhead of owning a printer.',
  },
  {
    icon: <ShoppingBag size={28} />,
    venue: 'Shopping Malls',
    tagline: 'For shoppers with urgent print needs',
    description: 'High footfall. Travellers, shoppers, and visitors print tickets, forms, and documents on the go.',
  }
]

export default function VenueTypeGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Venue types"
          title="Built for venues where people need to print"
          description="From campuses to co-working spaces — VaultPrint fits any high-footfall location."
          align="center"
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((v) => (
            <Card key={v.venue} hoverEffect className="group flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-navy-50 text-navy-700 flex items-center justify-center ring-1 ring-navy-100 group-hover:bg-navy-700 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                {v.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-1">{v.venue}</h3>
                <p className="text-sm font-semibold text-navy-700 mb-2">{v.tagline}</p>
                <p className="text-sm text-navy-500 leading-relaxed">{v.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
