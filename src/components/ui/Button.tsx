import React from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'light' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={twMerge(
          clsx(
            // Base interactive styles with micro-animations
            'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]',
            
            // Variants
            {
              // Primary Navy/Blue gradient or solid
              'bg-brand-blue text-white hover:bg-blue-700 shadow-md shadow-brand-blue/10': variant === 'primary',
              // Secondary Outline
              'border border-slate-200 bg-transparent text-slate-700 hover:bg-slate-50 hover:border-slate-300': variant === 'secondary',
              // Light Blue
              'bg-brand-light text-brand-blue hover:bg-blue-100/80': variant === 'light',
              // Ghost
              'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900': variant === 'ghost',
              // Danger
              'bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-600/10': variant === 'danger',
            },
            
            // Sizes
            {
              'px-3 py-1.5 text-xs rounded-lg gap-1.5': size === 'sm',
              'px-5 py-2.5 text-sm rounded-xl gap-2': size === 'md',
              'px-7 py-3.5 text-base rounded-2xl gap-2.5': size === 'lg',
            },
            className
          )
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            {children}
          </>
        ) : (
          <>
            {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
