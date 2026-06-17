import { Clock, ShieldBan, Users, Target, MapPin } from 'lucide-react'

const reasons = [
  {
    title: 'Captive audience',
    description: 'Users interact with the kiosk for 30 to 90 seconds — far longer than a typical digital ad view',
    icon: <Clock className="w-6 h-6 text-brand-blue" />,
  },
  {
    title: 'No ad blockers',
    description: 'Physical screen displays cannot be blocked or skipped',
    icon: <ShieldBan className="w-6 h-6 text-brand-blue" />,
  },
  {
    title: 'Known demographics',
    description: 'College students 18–25, government office visitors 25–45, co-working professionals 22–35',
    icon: <Users className="w-6 h-6 text-brand-blue" />,
  },
  {
    title: 'High-intent context',
    description: 'People printing are completing important tasks — receptive to relevant offers',
    icon: <Target className="w-6 h-6 text-brand-blue" />,
  },
  {
    title: 'Hyper-local targeting',
    description: 'Target specific locations: a college in Ranchi, an office in Bengaluru, a hostel in Pune',
    icon: <MapPin className="w-6 h-6 text-brand-blue" />,
  },
]

export default function WhyItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Why Kiosk Advertising Works
          </h2>
          <p className="text-lg text-gray-600">
            VaultPrint provides an unmatched opportunity to capture attention when it matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
