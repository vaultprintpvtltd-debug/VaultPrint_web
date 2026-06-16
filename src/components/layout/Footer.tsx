import React from 'react'
import Link from 'next/link'
import { Printer, Linkedin, Instagram, Twitter } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-brand-blue flex items-center justify-center text-white transition-all shadow-md shadow-brand-blue/20">
                <Printer size={18} className="stroke-[2.5]" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Vault<span className="text-brand-blue">Print</span>
              </span>
            </Link>
            <p className="text-slate-200 text-sm font-semibold">
              Secure printing, everywhere.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              VaultPrint self-service kiosks bring fast, app-free, and secure cloud printing to high-footfall venues like colleges, hostels, PG residences, and government offices.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Twitter/X">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 — Product */}
          <div className="space-y-4">
            <h3 className="text-white text-xs font-semibold tracking-wider uppercase">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="/for-venues" className="hover:text-white transition-colors">For Venues</Link>
              </li>
              <li>
                <Link href="/franchise" className="hover:text-white transition-colors">Franchise</Link>
              </li>
              <li>
                <Link href="/advertising" className="hover:text-white transition-colors">Advertising</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div className="space-y-4">
            <h3 className="text-white text-xs font-semibold tracking-wider uppercase">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/about#contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <span className="flex items-center gap-1.5 text-slate-600 cursor-not-allowed">
                  Blog <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded-full">Soon</span>
                </span>
              </li>
              <li>
                <span className="flex items-center gap-1.5 text-slate-600 cursor-not-allowed">
                  Careers <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded-full">Soon</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4 — Legal */}
          <div className="space-y-4">
            <h3 className="text-white text-xs font-semibold tracking-wider uppercase">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} VaultPrint Pvt Ltd. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-slate-500">
            <span>CIN: U72900JH2026PTC012345</span>
            <span className="hidden md:inline">·</span>
            <span>GSTIN: 20AAACV1234A1Z1</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
