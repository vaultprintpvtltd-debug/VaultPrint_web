import Hero from '@/components/sections/advertising/Hero'
import WhyItWorks from '@/components/sections/advertising/WhyItWorks'
import AdFormats from '@/components/sections/advertising/AdFormats'
import AudienceSegments from '@/components/sections/advertising/AudienceSegments'
import CampaignEnquiryForm from '@/components/sections/advertising/CampaignEnquiryForm'

export const metadata = {
  title: 'Advertise on VaultPrint | Reach 1,000+ Daily Users',
  description: 'VaultPrint kiosk screens sit in colleges, offices, and co-working spaces. Reach highly engaged users with on-screen ads and QR promotions.',
}

export default function AdvertisingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <WhyItWorks />
      <AdFormats />
      <AudienceSegments />
      <CampaignEnquiryForm />
    </main>
  )
}
