import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: string;
  tactile?: boolean;
  label?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  tactile = true,
  label,
  className,
  ...props
}) => {
  const baseClasses = 'font-label-caps text-label-caps rounded-lg transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 uppercase';

  const variantClasses = {
    primary: 'bg-primary-container text-on-primary hover:bg-primary active:-rotate-1',
    secondary: 'bg-surface-container-high text-primary border-2 border-primary hover:bg-surface-container-highest',
    outline: 'border-2 border-primary text-primary hover:bg-primary/5',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-8 py-4 text-sm',
    lg: 'px-16 py-6 text-base',
  };

  const tactileClasses = tactile ? 'button-tactile shadow-[8px_8px_0px_0px_rgba(139,0,0,0.2)] active:translate-y-1 active:shadow-none' : '';

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        tactileClasses,
        className
      )}
      aria-label={label}
      {...props}
    >
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
