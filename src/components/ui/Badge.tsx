import React from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'inverted'
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  children,
  variant = 'primary',
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase',
          {
            'bg-navy-50 text-navy-700 ring-1 ring-inset ring-navy-100': variant === 'primary',
            'bg-cream-100 text-teal-600 ring-1 ring-inset ring-cream-300': variant === 'secondary',
            'bg-teal-100 text-teal-700 ring-1 ring-inset ring-teal-200': variant === 'accent',
            'border border-navy-200 text-navy-600 bg-transparent': variant === 'outline',
            'bg-white/10 text-white ring-1 ring-inset ring-white/15 backdrop-blur': variant === 'inverted',
          }
        ),
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
