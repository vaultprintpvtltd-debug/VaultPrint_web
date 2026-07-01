import type { Metadata } from 'next'
import PricingHero from '@/components/sections/pricing/PricingHero'
import PricingTable from '@/components/sections/pricing/PricingTable'
import PricingDetails from '@/components/sections/pricing/PricingDetails'
import WaitlistForm from '@/components/sections/pricing/WaitlistForm'

export const metadata: Metadata = {
  title: 'Pricing — Transparent Per-Page Print Rates',
  description:
    'VaultPrint pricing starts at ₹2 per A4 page. No service charges, no hidden fees. The price you see is the price you pay.',
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingTable />
      <PricingDetails />
      <WaitlistForm />
    </>
  )
}
