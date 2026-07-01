import React from 'react'
import { ShieldCheck, Lock, Server, Clock, Key, Trash2 } from 'lucide-react'

interface ProtectionLayer {
  title: string
  description: string
  icon: React.ReactNode
}

const layers: ProtectionLayer[] = [
  {
    title: 'Encrypted upload',
    description: 'Files travel over end-to-end encrypted HTTPS connections — the same security standards used by financial institutions.',
    icon: <Lock className="text-teal-300" size={24} />
  },
  {
    title: 'Private storage',
    description: 'Uploaded files are saved in an isolated, private server bucket with no public-facing URL or external access.',
    icon: <Server className="text-teal-300" size={24} />
  },
  {
    title: 'Time-limited access',
    description: 'Kiosk hardware agents are only granted a 2-minute signed cryptographic link to access your file when you release it.',
    icon: <Clock className="text-teal-300" size={24} />
  },
  {
    title: 'OTP release',
    description: 'Your physical print job only starts when you stand at the kiosk and key in the 6-digit release OTP shown on your phone.',
    icon: <Key className="text-teal-300" size={24} />
  },
  {
    title: 'Auto-deletion',
    description: 'Files are permanently destroyed from our servers the second the printer outputs the pages (max 24-hour backup cache).',
    icon: <Trash2 className="text-teal-300" size={24} />
  }
]

export default function SecuritySection() {
  return (
    <section className="relative py-24 bg-linear-to-br from-navy-800 to-navy-950 text-white overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400/15 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-500/20 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Main Narrative Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-teal-300/30 bg-teal-400/10 text-teal-300 w-fit text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck size={14} />
              Bank-grade security
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Your file stays private. <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-300 to-teal-400">Always.</span>
            </h2>

            <p className="text-navy-200 text-base sm:text-lg leading-relaxed font-medium">
              VaultPrint was built with privacy as the first principle. Your document is encrypted in transit and stored in a private server bucket. It is accessible only via a time-limited signed link — no staff member, no shopkeeper, no third party can open it. The moment your print job completes, the file is permanently deleted.
            </p>

            <div className="hidden lg:block h-px bg-linear-to-r from-teal-300/30 to-transparent my-4" />
          </div>

          {/* Grid of Protection Layers */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {layers.map((layer, index) => {
              // Let auto-deletion span 2 cols on tablet/desktop if odd number, but we have 5, so let's make it look nice
              const isLast = index === layers.length - 1
              return (
                <div
                  key={layer.title}
                  className={`p-6 rounded-2xl border border-white/5 bg-white/2 backdrop-blur-sm transition-all duration-300 hover:bg-white/4 hover:border-white/10 ${
                    isLast ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-400/10 flex items-center justify-center mb-5 border border-teal-300/20">
                    {layer.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{layer.title}</h3>
                  <p className="text-navy-200 font-medium text-sm sm:text-base leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
