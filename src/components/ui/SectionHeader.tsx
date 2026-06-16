import React from 'react'
import { Badge } from './Badge'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col gap-3 max-w-3xl ${
        align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
      } ${className}`}
    >
      {eyebrow && <Badge variant="primary">{eyebrow}</Badge>}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-slate-500 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
