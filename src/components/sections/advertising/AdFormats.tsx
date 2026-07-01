import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { MonitorPlay, QrCode, Smartphone, Receipt } from 'lucide-react'

const formats = [
  {
    title: 'On-screen display ads',
    description: 'Full-screen brand creative during kiosk idle time. 10–15 second rotation.',
    bestFor: 'Brand awareness, product launches',
    icon: <MonitorPlay className="w-8 h-8" />,
  },
  {
    title: 'QR-based promotions',
    description: 'QR code with your offer on the print confirmation screen — highest-attention moment.',
    bestFor: 'Offers, downloads, sign-ups',
    icon: <QrCode className="w-8 h-8" />,
  },
  {
    title: 'Branded OTP screen',
    description: 'Your brand message and logo on the OTP delivery screen — shown to every paying user.',
    bestFor: 'Brand recall, local offers',
    icon: <Smartphone className="w-8 h-8" />,
  },
  {
    title: 'Print receipt branding',
    description: 'Your logo and a short message on the digital receipt sent after print completion.',
    bestFor: 'Brand affinity, loyalty offers',
    icon: <Receipt className="w-8 h-8" />,
  },
]

export default function AdFormats() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Ad Formats"
          title="Ad Formats that Deliver"
          description="Choose from multiple high-impact placements integrated seamlessly into the user journey."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {formats.map((format, i) => (
            <Card key={i} hoverEffect className="group flex flex-col sm:flex-row gap-6 p-8">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-navy-50 text-navy-700 flex items-center justify-center ring-1 ring-navy-100 group-hover:bg-navy-700 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                {format.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{format.title}</h3>
                <p className="text-navy-500 font-medium mb-4 leading-relaxed">{format.description}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-50 rounded-lg text-sm text-navy-700 font-medium ring-1 ring-navy-100">
                  <span className="text-navy-400">Best for:</span> {format.bestFor}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
