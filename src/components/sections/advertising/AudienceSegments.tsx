import { SectionHeader } from '@/components/ui/SectionHeader'
import { GraduationCap, Briefcase, Building2 } from 'lucide-react'

const segments = [
  {
    title: 'College students 18–25',
    profile: 'Engineering, medical, and commerce students. High usage during exam season.',
    brands: 'Ed-tech, food delivery, clothing, coaching institutes',
    icon: <GraduationCap className="w-8 h-8" />,
  },
  {
    title: 'Govt office visitors 25–45',
    profile: 'Citizens visiting for documentation, licensing, certificates. Practical and value-oriented.',
    brands: 'Insurance, banking, legal services, government scheme apps',
    icon: <Building2 className="w-8 h-8" />,
  },
  {
    title: 'Co-working professionals 22–35',
    profile: 'Freelancers, startup founders, consultants. Tech-savvy, higher disposable income.',
    brands: 'SaaS tools, co-working memberships, fintech',
    icon: <Briefcase className="w-8 h-8" />,
  },
]

export default function AudienceSegments() {
  return (
    <section className="py-20 lg:py-32 bg-cream-50 border-y border-cream-200">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Audience Segments"
          title="Audience Segments"
          description="Reach highly specific demographics based on the physical location of our kiosks."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {segments.map((segment, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden border border-navy-100 shadow-sm shadow-navy-950/3 hover:shadow-xl hover:shadow-navy-950/6 hover:-translate-y-1 hover:border-navy-200 transition-all duration-300"
            >
              <div className="h-32 bg-linear-to-br from-navy-800 to-navy-950 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:12px_12px]" />
                <div className="relative z-10 w-16 h-16 rounded-full bg-white text-navy-700 flex items-center justify-center shadow-lg group-hover:text-navy-950 transition-colors">
                  {segment.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-navy-900 mb-4 text-center">{segment.title}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-semibold text-navy-400 uppercase tracking-wider mb-1">Profile</div>
                    <p className="text-navy-700">{segment.profile}</p>
                  </div>
                  <div className="pt-4 border-t border-navy-100">
                    <div className="text-xs font-semibold text-navy-400 uppercase tracking-wider mb-1">Sample Brands</div>
                    <p className="text-teal-600 font-medium">{segment.brands}</p>
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
