'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export const AnnouncementBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isDismissed = localStorage.getItem('vp_banner_dismissed')
    if (!isDismissed) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    localStorage.setItem('vp_banner_dismissed', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="relative w-full bg-brand-navy text-white text-xs sm:text-sm font-medium py-2.5 px-8 flex items-center justify-center text-center transition-all duration-300 z-50">
      <Link href="/how-it-works" className="hover:underline flex items-center justify-center gap-1.5 leading-snug">
        <span>Now available across Jharkhand campuses — Find a kiosk near you</span>
        <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
      </Link>
      <button
        onClick={handleDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white transition-colors"
        aria-label="Dismiss banner"
      >
        <X size={16} />
      </button>
    </div>
  )
}
