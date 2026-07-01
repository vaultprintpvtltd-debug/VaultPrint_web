import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Clock, ShieldBan, Users, Target, MapPin } from 'lucide-react'

const reasons = [
  {
    title: 'Captive audience',
    description: 'Users interact with the kiosk for 30 to 90 seconds — far longer than a typical digital ad view',
    icon: <Clock className="w-6 h-6" />,
  },
  {
    title: 'No ad blockers',
    description: 'Physical screen displays cannot be blocked or skipped',
    icon: <ShieldBan className="w-6 h-6" />,
  },
  {
    title: 'Known demographics',
    description: 'College students 18–25, government office visitors 25–45, co-working professionals 22–35',
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'High-intent context',
    description: 'People printing are completing important tasks — receptive to relevant offers',
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: 'Hyper-local targeting',
    description: 'Target specific locations: a college in Ranchi, an office in Bengaluru, a hostel in Pune',
    icon: <MapPin className="w-6 h-6" />,
  },
]

export default function WhyItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-cream-50 border-y border-cream-200">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Why It Works"
          title="Why Kiosk Advertising Works"
          description="VaultPrint provides an unmatched opportunity to capture attention when it matters most."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, i) => (
            <Card key={i} hoverEffect className="group">
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-700 flex items-center justify-center mb-6 ring-1 ring-navy-100 group-hover:bg-navy-700 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{reason.title}</h3>
              <p className="text-navy-500 font-medium leading-relaxed">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
