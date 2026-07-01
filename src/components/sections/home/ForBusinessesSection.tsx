import React from 'react'
import Link from 'next/link'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Store, TrendingUp, Megaphone, ArrowRight } from 'lucide-react'

export default function ForBusinessesSection() {
  const models = [
    {
      icon: <Store size={24} />,
      title: 'Kiosk rental',
      headline: 'Turn unused space into a premium service',
      description:
        'You provide the space. VaultPrint supplies, installs, and maintains the kiosk at zero operational cost to you.',
      link: '/for-venues',
      action: 'Enquire about rental',
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Franchise',
      headline: 'Run your own VaultPrint business',
      description:
        'Own and operate VaultPrint kiosks in your city. Hardware, software, and support provided. Earn from day one.',
      link: '/franchise',
      action: 'Explore franchise',
    },
    {
      icon: <Megaphone size={24} />,
      title: 'Brand advertising',
      headline: 'Reach users at the moment of action',
      description:
        'Your brand appears on-screen during idle time and transaction flows — captive, engaged impressions.',
      link: '/advertising',
      action: 'Book ad space',
    },
  ]

  return (
    <section className="py-24 bg-cream-50 border-y border-cream-200">
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
              <div className="w-12 h-12 rounded-xl bg-navy-700 text-white flex items-center justify-center mb-6 shadow-lg shadow-navy-900/15">
                {model.icon}
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-600 mb-2">
                {model.title}
              </p>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{model.headline}</h3>
              <p className="text-navy-500 leading-relaxed mb-8 grow">{model.description}</p>
              <Link href={model.link} className="mt-auto block">
                <Button variant="secondary" className="w-full" rightIcon={<ArrowRight size={16} />}>
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
