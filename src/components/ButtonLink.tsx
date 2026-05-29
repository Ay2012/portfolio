import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'quiet'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  variant?: ButtonVariant
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-navy-900 text-white shadow-sm hover:bg-slate-800 focus-visible:outline-navy-900',
  secondary:
    'border border-slate-300 bg-white text-slate-700 hover:border-brand-400 hover:text-brand-600',
  quiet:
    'border border-slate-700 bg-slate-800/50 text-slate-100 hover:border-brand-400 hover:text-brand-400',
}

export function ButtonLink({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}

