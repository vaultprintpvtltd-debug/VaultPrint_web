import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CheckCircle2, XCircle, Minus } from 'lucide-react'

export default function ComparisonTableSection() {
  const features = [
    { name: 'Privacy & Security', vp: true, shop: false, home: true },
    { name: 'File Deletion After Print', vp: true, shop: false, home: true },
    { name: 'Zero Staff Interaction', vp: true, shop: false, home: true },
    { name: 'No Hardware Maintenance', vp: true, shop: true, home: false },
    { name: 'No Ink/Paper Refills', vp: true, shop: true, home: false },
    { name: '24/7 Availability', vp: true, shop: false, home: true },
    { name: 'Digital Payments (UPI)', vp: true, shop: 'partial', home: 'N/A' },
  ]

  const renderIcon = (status: boolean | string) => {
    if (status === true) return <CheckCircle2 className="text-emerald-500 mx-auto" size={24} />
    if (status === false) return <XCircle className="text-red-400 mx-auto" size={24} />
    if (status === 'partial') return <Minus className="text-amber-500 mx-auto" size={24} />
    return <span className="text-slate-400 text-sm font-medium">{status}</span>
  }

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Why VaultPrint stands out"
          align="center"
          className="mb-16"
        />

        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left text-slate-800 font-bold border-b-2 border-slate-100 min-w-[200px]">Feature</th>
                <th className="p-4 text-brand-navy font-black border-b-2 border-brand-navy text-lg bg-brand-light/30 rounded-t-xl">VaultPrint</th>
                <th className="p-4 text-slate-500 font-bold border-b-2 border-slate-100">Traditional Print Shop</th>
                <th className="p-4 text-slate-500 font-bold border-b-2 border-slate-100">Home Printer</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="group hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-left font-medium text-slate-700 border-b border-slate-100">
                    {feature.name}
                  </td>
                  <td className="p-4 bg-brand-light/30 border-b border-slate-100/50">
                    {renderIcon(feature.vp)}
                  </td>
                  <td className="p-4 border-b border-slate-100">
                    {renderIcon(feature.shop)}
                  </td>
                  <td className="p-4 border-b border-slate-100">
                    {renderIcon(feature.home)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
