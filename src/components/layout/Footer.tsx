import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import DecryptedText from '../ui/DecryptedText'
import GlassIcons from '../ui/GlassIcons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialIcons = [
    { icon: <span className="font-bold">IG</span>, color: 'purple', label: 'Instagram', href: 'https://instagram.com', customClass: 'text-white' },
    { icon: <span className="font-bold">X</span>, color: 'blue', label: 'Twitter', href: 'https://twitter.com', customClass: 'text-white' },
    { icon: <span className="font-bold">IN</span>, color: 'indigo', label: 'LinkedIn', href: 'https://linkedin.com', customClass: 'text-white' },
  ]

  return (
    <footer className="w-full relative overflow-hidden text-white/90 px-4 py-4 md:px-8 md:py-8 font-sans">
      {/* Outer container with the rounded corner styling and dots */}
      <div className="relative w-full min-h-[400px] bg-[#0c0814] rounded-3xl overflow-hidden flex flex-col justify-between pt-10 pb-8 px-8 md:pt-16 md:pb-12 md:px-16 border border-white/5">
        
        {/* 4 Corner Dots */}
        <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-white/30" />
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/30" />
        <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-white/30 z-20" />
        <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-white/30 z-20" />

        {/* Top Content Row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative z-20">
          
          {/* Left: Contacts */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white">Contacts</h2>
            <a 
              href="mailto:hello@vaultprint.com" 
              className="inline-flex items-center text-vault-cyan hover:text-white transition-colors duration-300 font-medium text-sm md:text-base border-b border-vault-cyan/30 hover:border-white pb-0.5"
            >
              hello@vaultprint.com
              <ArrowUpRight size={16} className="ml-1" />
            </a>
          </div>

          {/* Right: Copyright & Links */}
          <div className="flex flex-col md:items-end space-y-8 md:space-y-16">
            <div className="text-white/40 text-sm">
              © {currentYear} VaultPrint Pvt Ltd
            </div>
            
            <div className="flex flex-wrap md:justify-end gap-x-6 gap-y-4 text-sm font-medium items-center">
              <div className="text-[10px] md:text-[12px]">
                <GlassIcons items={socialIcons} className="gap-[1.5em] py-0" />
              </div>
              
              <Link href="/for-venues" className="group flex items-center hover:text-vault-cyan transition-colors">
                For Venues <ArrowUpRight size={14} className="ml-0.5 opacity-70 group-hover:opacity-100" />
              </Link>
              <Link href="/privacy" className="group flex items-center hover:text-vault-cyan transition-colors">
                Privacy <ArrowUpRight size={14} className="ml-0.5 opacity-70 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Giant Text */}
        <div className="absolute -bottom-[5%] left-1/2 -translate-x-1/2 w-[95%] pointer-events-none select-none flex justify-center z-10">
          <DecryptedText
            text="vaultprint"
            speed={80}
            maxIterations={20}
            animateOn="view"
            className="font-display font-bold leading-none tracking-tighter text-white/5 whitespace-nowrap"
            encryptedClassName="font-display font-bold leading-none tracking-tighter text-white/5 whitespace-nowrap"
            style={{ fontSize: 'clamp(8rem, 24vw, 32rem)' }}
          />
        </div>
      </div>
    </footer>
  )
}
