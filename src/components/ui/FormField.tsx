import React from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {
  label: string
  error?: string
  as?: 'input' | 'textarea' | 'select'
  options?: { value: string; label: string }[]
}

export const FormField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, FormFieldProps>(
  ({ className, label, error, as = 'input', options = [], id, ...props }, ref) => {
    const inputClasses = twMerge(
      clsx(
        'w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all duration-200 text-sm disabled:opacity-50 disabled:bg-slate-50',
        {
          'border-red-500 focus:ring-red-100 focus:border-red-500': !!error,
        }
      ),
      className
    )

    return (
      <div className="flex flex-col w-full gap-2">
        <label htmlFor={id} className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
          {label} {props.required && <span className="text-red-500">*</span>}
        </label>

        {as === 'textarea' && (
          <textarea
            id={id}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={inputClasses}
            rows={4}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        )}

        {as === 'select' && (
          <div className="relative">
            <select
              id={id}
              ref={ref as React.Ref<HTMLSelectElement>}
              className={twMerge(inputClasses, 'appearance-none pr-10')}
              {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
            >
              <option value="" disabled>Select an option</option>
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        )}

        {as === 'input' && (
          <input
            id={id}
            ref={ref as React.Ref<HTMLInputElement>}
            className={inputClasses}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}

        {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
      </div>
    )
  }
)

FormField.displayName = 'FormField'
