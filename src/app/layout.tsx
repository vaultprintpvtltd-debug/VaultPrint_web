import type { Metadata } from 'next'
import { Space_Grotesk, Manrope, Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import AnnouncementBanner from '@/components/layout/AnnouncementBanner'
import './globals.css'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vaultprintpvtltd.online'),
  title: {
    default: 'VaultPrint — Secure Self-Service Printing Kiosks in India',
    template: '%s | VaultPrint',
  },
  description:
    'Print from your phone in under 60 seconds. No app, no queue, no staff. VaultPrint kiosks across colleges, offices, and hostels in India.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(spaceGrotesk.variable, manrope.variable, "font-sans", geist.variable)}>
      <body className="font-sans antialiased bg-vault-frost text-vault-deep">
        <AnnouncementBanner />
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
