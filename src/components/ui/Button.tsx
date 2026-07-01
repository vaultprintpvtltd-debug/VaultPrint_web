import React from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'light' | 'teal' | 'white' | 'ghost' | 'danger'
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
            'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-700/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]',

            // Variants
            {
              // Primary — solid navy
              'bg-navy-700 text-white hover:bg-navy-800 shadow-lg shadow-navy-900/15': variant === 'primary',
              // Secondary — outline
              'border border-navy-200 bg-white text-navy-800 hover:bg-navy-50 hover:border-navy-300': variant === 'secondary',
              // Light — soft navy tint
              'bg-navy-50 text-navy-700 hover:bg-navy-100': variant === 'light',
              // Teal — accent
              'bg-teal-400 text-navy-950 hover:bg-teal-500 hover:text-white shadow-lg shadow-teal-500/20': variant === 'teal',
              // White — for use on dark/navy sections
              'bg-white text-navy-800 hover:bg-cream-100 shadow-lg shadow-navy-950/20': variant === 'white',
              // Ghost
              'bg-transparent text-navy-600 hover:bg-navy-50 hover:text-navy-900': variant === 'ghost',
              // Danger
              'bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-600/10': variant === 'danger',
            },

            // Sizes
            {
              'px-3.5 py-2 text-xs rounded-lg gap-1.5': size === 'sm',
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
