import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CheckCircle2, XCircle, Minus } from 'lucide-react'

export default function ComparisonTableSection() {
  const features = [
    { name: 'Privacy & security', vp: true, shop: false, home: true },
    { name: 'File deletion after print', vp: true, shop: false, home: true },
    { name: 'Zero staff interaction', vp: true, shop: false, home: true },
    { name: 'No hardware maintenance', vp: true, shop: true, home: false },
    { name: 'No ink / paper refills', vp: true, shop: true, home: false },
    { name: '24 / 7 availability', vp: true, shop: false, home: true },
    { name: 'Digital payments (UPI)', vp: true, shop: 'partial', home: 'N/A' },
  ]

  const renderIcon = (status: boolean | string) => {
    if (status === true) return <CheckCircle2 className="text-teal-500 mx-auto" size={22} />
    if (status === false) return <XCircle className="text-red-400 mx-auto" size={22} />
    if (status === 'partial') return <Minus className="text-amber-500 mx-auto" size={22} />
    return <span className="text-navy-400 text-sm font-medium">{status}</span>
  }

  return (
    <section className="py-24 bg-cream-50 border-y border-cream-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why VaultPrint stands out"
          description="Self-service printing vs. traditional print shops and home printers."
          align="center"
          className="mb-16"
        />

        <div className="overflow-x-auto rounded-2xl ring-1 ring-navy-100 bg-white shadow-sm">
          <table className="w-full text-center border-collapse min-w-140">
            <thead>
              <tr>
                <th className="p-4 sm:p-5 text-left text-navy-900 font-bold text-sm">Feature</th>
                <th className="p-4 sm:p-5 text-white font-bold text-base bg-navy-800">VaultPrint</th>
                <th className="p-4 sm:p-5 text-navy-500 font-semibold text-sm">Traditional Shop</th>
                <th className="p-4 sm:p-5 text-navy-500 font-semibold text-sm">Home Printer</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="border-t border-navy-100">
                  <td className="p-4 sm:p-5 text-left font-medium text-navy-700">
                    {feature.name}
                  </td>
                  <td className="p-4 sm:p-5 bg-navy-50/70">
                    {renderIcon(feature.vp)}
                  </td>
                  <td className="p-4 sm:p-5">
                    {renderIcon(feature.shop)}
                  </td>
                  <td className="p-4 sm:p-5">
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
