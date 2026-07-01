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
          'rounded-2xl border border-navy-100 p-6 bg-white shadow-sm shadow-navy-950/3 transition-all duration-300',
          {
            'hover:shadow-xl hover:shadow-navy-950/6 hover:-translate-y-1 hover:border-navy-200': hoverEffect,
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
