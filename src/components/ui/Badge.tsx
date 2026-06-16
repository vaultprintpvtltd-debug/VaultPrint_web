import React from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline'
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
          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase',
          {
            'bg-brand-light text-brand-blue': variant === 'primary',
            'bg-slate-100 text-slate-700': variant === 'secondary',
            'bg-emerald-50 text-emerald-700 border border-emerald-200': variant === 'accent',
            'border border-slate-200 text-slate-600 bg-transparent': variant === 'outline',
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
