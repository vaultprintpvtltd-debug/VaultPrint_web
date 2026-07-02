'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Logo } from '../ui/Logo'
import CardNav, { CardNavItem } from '../ui/CardNav'

export default function Nav() {
  const router = useRouter()

  const navItems: CardNavItem[] = [
    {
      label: 'Discover',
      bgColor: '#F1F5F9b3', // vault-frost (transparent)
      textColor: '#060010', // vault-deep
      links: [
        { label: 'How It Works', href: '/how-it-works', ariaLabel: 'Learn how VaultPrint works' },
        { label: 'Pricing', href: '/pricing', ariaLabel: 'View pricing' },
      ],
    },
    {
      label: 'Business',
      bgColor: '#EFF6FFb3', // light blue (transparent)
      textColor: '#060010',
      links: [
        { label: 'For Venues', href: '/for-venues', ariaLabel: 'Solutions for venues' },
        { label: 'Franchise', href: '/franchise', ariaLabel: 'Franchise opportunities' },
        { label: 'Advertising', href: '/advertising', ariaLabel: 'Advertising options' },
      ],
    },
    {
      label: 'Company',
      bgColor: '#0EA5E9b3', // vault-blue (transparent)
      textColor: '#FFFFFF',
      links: [
        { label: 'About & Contact', href: '/about', ariaLabel: 'About us and contact information' },
      ],
    },
  ]

  const logoNode = (
    <Link
      href="/"
      className="flex items-center gap-2 group shrink-0 transition-transform hover:-translate-y-0.5"
      aria-label="VaultPrint home"
    >
      <Logo size={28} />
    </Link>
  )

  return (
    <div className="w-full relative z-50">
      <CardNav
        logo={logoNode}
        items={navItems}
        menuColor="#060010"
        buttonBgColor="#060010"
        buttonTextColor="#ffffff"
        ctaText="Partner With Us"
        onCtaClick={() => router.push('/for-venues#enquiry')}
      />
    </div>
  )
}
