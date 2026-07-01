'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Logo } from '../ui/Logo'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'For Venues', href: '/for-venues' },
    { name: 'Franchise', href: '/franchise' },
    { name: 'Advertising', href: '/advertising' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About & Contact', href: '/about' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="absolute top-0 z-40 w-full pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group shrink-0 transition-transform hover:-translate-y-0.5"
            aria-label="VaultPrint home"
          >
            <Logo size={32} />
            <span className="font-display font-bold text-lg text-vault-deep tracking-tight">VaultPrint</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-vault-deep font-bold'
                    : 'text-vault-deep/70 hover:text-vault-deep'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block shrink-0">
            <Link href="/for-venues#enquiry">
              <button className="bg-vault-deep text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-vault-navy transition-colors">
                Partner With Us
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-vault-deep"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-vault-frost shadow-lg mt-4 z-50">
          <div className="px-4 py-6 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-base font-semibold transition-colors ${
                  isActive(link.href)
                    ? 'text-vault-deep'
                    : 'text-vault-deep/80 hover:text-vault-deep'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/for-venues#enquiry" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-vault-deep text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-vault-navy transition-colors">
                  Partner With Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
