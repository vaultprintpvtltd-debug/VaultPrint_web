import React from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean
  glassmorphism?: boolean
}

export const Card: React.FC<CardProps> = ({
  className,
  children,
  hoverEffect = true,
  glassmorphism = false,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          'rounded-2xl border border-slate-100 p-6 bg-white shadow-sm transition-all duration-300',
          {
            'hover:shadow-md hover:-translate-y-1 hover:border-slate-200': hoverEffect,
            'backdrop-blur-md bg-white/70 border-white/20': glassmorphism,
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
