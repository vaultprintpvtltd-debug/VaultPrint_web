import React from 'react'
import { clsx } from 'clsx'

interface LogoProps {
  /** Height of the mark in px. Wordmark scales relative to it. */
  size?: number
  showWordmark?: boolean
  /** Render the wordmark in white (for dark/navy backgrounds). */
  inverted?: boolean
  className?: string
}

/**
 * VaultPrint brand logo — the kiosk mark from public/LOGO.svg, inlined so it
 * stays crisp at any size and needs no extra request, next to the wordmark.
 */
import Image from 'next/image'

export const LogoMark: React.FC<{ size?: number; className?: string }> = ({
  size = 40,
  className,
}) => (
  <Image
    src="/LOGO.svg"
    alt="VaultPrint"
    width={size}
    height={size * (66 / 65)}
    className={className}
    priority
  />
)

export const Logo: React.FC<LogoProps> = ({
  size = 40,
  showWordmark = true,
  inverted = false,
  className,
}) => (
  <span className={clsx('inline-flex items-center gap-2.5', className)}>
    <LogoMark size={size} className="shrink-0" />
    {showWordmark && (
      <span
        className={clsx(
          'font-display font-bold tracking-tight leading-none',
          inverted ? 'text-white' : 'text-navy-950'
        )}
        style={{ fontSize: size * 0.6 }}
      >
        Vault<span className={inverted ? 'text-teal-300' : 'text-navy-700'}>Print</span>
      </span>
    )}
  </span>
)
