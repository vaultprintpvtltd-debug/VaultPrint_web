import { GraduationCap, Briefcase, Building2 } from 'lucide-react'

const segments = [
  {
    title: 'College students 18–25',
    profile: 'Engineering, medical, and commerce students. High usage during exam season.',
    brands: 'Ed-tech, food delivery, clothing, coaching institutes',
    icon: <GraduationCap className="w-8 h-8 text-brand-blue" />,
  },
  {
    title: 'Govt office visitors 25–45',
    profile: 'Citizens visiting for documentation, licensing, certificates. Practical and value-oriented.',
    brands: 'Insurance, banking, legal services, government scheme apps',
    icon: <Building2 className="w-8 h-8 text-brand-blue" />,
  },
  {
    title: 'Co-working professionals 22–35',
    profile: 'Freelancers, startup founders, consultants. Tech-savvy, higher disposable income.',
    brands: 'SaaS tools, co-working memberships, fintech',
    icon: <Briefcase className="w-8 h-8 text-brand-blue" />,
  },
]

export default function AudienceSegments() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Audience Segments
          </h2>
          <p className="text-lg text-gray-600">
            Reach highly specific demographics based on the physical location of our kiosks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {segments.map((segment, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="h-32 bg-brand-navy flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:12px_12px]" />
                <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  {segment.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-brand-navy mb-4 text-center">{segment.title}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Profile</div>
                    <p className="text-gray-700">{segment.profile}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Sample Brands</div>
                    <p className="text-brand-blue font-medium">{segment.brands}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
