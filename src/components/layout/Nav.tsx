'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Printer } from 'lucide-react'
import { Button } from '../ui/Button'

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'For Venues', href: '/for-venues' },
    { name: 'Franchise', href: '/franchise' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About & Contact', href: '/about' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white transition-all group-hover:scale-105 shadow-md shadow-brand-blue/20">
              <Printer size={20} className="stroke-[2.5]" />
            </div>
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-brand-navy">
              Vault<span className="text-brand-blue">Print</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-brand-blue bg-brand-light/75 font-semibold'
                    : 'text-slate-600 hover:text-brand-navy hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block shrink-0">
            <Link href="/for-venues#enquiry">
              <Button size="md" variant="primary">
                Partner With Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-500 hover:text-brand-navy hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-100 bg-white absolute top-16 sm:top-20 left-0 w-full shadow-lg transition-all duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isActive(link.href)
                    ? 'text-brand-blue bg-brand-light'
                    : 'text-slate-700 hover:text-brand-navy hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Link href="/for-venues#enquiry" onClick={() => setIsOpen(false)}>
                <Button size="md" className="w-full" variant="primary">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
