import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95',
        secondary: 'bg-white text-green-700 border-2 border-green-200 hover:bg-green-50 hover:border-green-300 hover:scale-105 active:scale-95',
        ghost: 'text-green-700 hover:bg-green-50 hover:text-green-800',
        outline: 'border border-green-300 bg-transparent text-green-700 hover:bg-green-50 hover:border-green-400',
        destructive: 'bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl',
        success: 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg hover:shadow-xl',
        warning: 'bg-amber-500 text-white hover:bg-amber-600 shadow-lg hover:shadow-xl',
      },
      size: {
        sm: 'h-9 px-4 text-xs',
        default: 'h-11 px-6 py-2',
        lg: 'h-12 px-8 text-base',
        xl: 'h-14 px-10 text-lg',
        icon: 'h-10 w-10',
      },
      rounded: {
        default: 'rounded-2xl',
        full: 'rounded-full',
        lg: 'rounded-lg',
        none: 'rounded-none',
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      rounded: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    rounded,
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props 
  }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
        )}
        {!loading && leftIcon && leftIcon}
        {children}
        {!loading && rightIcon && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
