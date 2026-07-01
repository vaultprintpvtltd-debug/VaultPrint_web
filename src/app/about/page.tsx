import type { Metadata } from 'next'
import AboutHero from '@/components/sections/about/AboutHero'
import AboutValues from '@/components/sections/about/AboutValues'
import AboutTeam from '@/components/sections/about/AboutTeam'
import ContactSection from '@/components/sections/about/ContactSection'

export const metadata: Metadata = {
  title: 'About VaultPrint — Built for Private, Self-Service Printing in India',
  description:
    'Learn about VaultPrint — why we built it, what we believe, and how to get in touch.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutValues />
      <AboutTeam />
      <ContactSection />
    </>
  )
}
