import React from 'react'
import Link from 'next/link'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Store, TrendingUp, Megaphone } from 'lucide-react'

export default function ForBusinessesSection() {
  const models = [
    {
      icon: <Store size={24} className="text-brand-blue" />,
      title: 'Venue Partner',
      description: 'Host a kiosk in your campus, hostel, or office. Zero investment required. We handle everything, and you get a modern amenity for your people.',
      link: '/for-venues',
      action: 'Learn More'
    },
    {
      icon: <TrendingUp size={24} className="text-brand-blue" />,
      title: 'Franchisee',
      description: 'Own and operate VaultPrint kiosks in your city. High ROI, completely automated operations, and comprehensive support from our team.',
      link: '/franchise',
      action: 'View Franchise Details'
    },
    {
      icon: <Megaphone size={24} className="text-brand-blue" />,
      title: 'Advertiser',
      description: 'Reach a highly engaged, captive audience of students and professionals. Run video ads on the 10-inch kiosk screens across our network.',
      link: '/advertising',
      action: 'Explore Advertising'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          eyebrow="For businesses"
          title="Own the kiosk. Or just benefit from one."
          align="center"
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, idx) => (
            <Card key={idx} className="flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center mb-6">
                {model.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{model.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8 flex-grow">{model.description}</p>
              <Link href={model.link} className="mt-auto block">
                <Button variant="secondary" className="w-full">
                  {model.action}
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
