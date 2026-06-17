import { MonitorPlay, QrCode, Smartphone, Receipt } from 'lucide-react'

const formats = [
  {
    title: 'On-screen display ads',
    description: 'Full-screen brand creative during kiosk idle time. 10–15 second rotation.',
    bestFor: 'Brand awareness, product launches',
    icon: <MonitorPlay className="w-8 h-8 text-brand-blue" />,
  },
  {
    title: 'QR-based promotions',
    description: 'QR code with your offer on the print confirmation screen — highest-attention moment.',
    bestFor: 'Offers, downloads, sign-ups',
    icon: <QrCode className="w-8 h-8 text-brand-blue" />,
  },
  {
    title: 'Branded OTP screen',
    description: 'Your brand message and logo on the OTP delivery screen — shown to every paying user.',
    bestFor: 'Brand recall, local offers',
    icon: <Smartphone className="w-8 h-8 text-brand-blue" />,
  },
  {
    title: 'Print receipt branding',
    description: 'Your logo and a short message on the digital receipt sent after print completion.',
    bestFor: 'Brand affinity, loyalty offers',
    icon: <Receipt className="w-8 h-8 text-brand-blue" />,
  },
]

export default function AdFormats() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Ad Formats that Deliver
          </h2>
          <p className="text-lg text-gray-600">
            Choose from multiple high-impact placements integrated seamlessly into the user journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {formats.map((format, i) => (
            <div 
              key={i} 
              className="group flex flex-col sm:flex-row gap-6 p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-blue/20 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-blue/10 transition-transform duration-300">
                {format.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">{format.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{format.description}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-lg text-sm text-gray-600 font-medium border border-gray-100">
                  <span className="text-gray-400">Best for:</span> {format.bestFor}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
