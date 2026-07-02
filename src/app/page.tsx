import HeroSection from '@/components/sections/home/HeroSection'
import ProblemSection from '@/components/sections/home/ProblemSection'
import HowItWorksSection from '@/components/sections/home/HowItWorksSection'
import WhyVaultPrintSection from '@/components/sections/home/WhyVaultPrintSection'
import ComparisonTableSection from '@/components/sections/home/ComparisonTableSection'
import StatsAndTestimonialsSection from '@/components/sections/home/StatsAndTestimonialsSection'
import VenueGridSection from '@/components/sections/home/VenueGridSection'
import ForBusinessesSection from '@/components/sections/home/ForBusinessesSection'
import CtaBannerSection from '@/components/sections/home/CtaBannerSection'

export const metadata = {
  title: 'VaultPrint - Secure Self-Service Printing Kiosks in India',
  description: 'Print from your phone in under 60 seconds. No app, no queue, no staff.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <WhyVaultPrintSection />
      <ComparisonTableSection />
      <StatsAndTestimonialsSection />
      <VenueGridSection />
      <ForBusinessesSection />
      <CtaBannerSection />
    </>
  )
}
