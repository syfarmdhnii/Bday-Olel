import React from 'react';
import { cn } from '@/lib/utils';

interface DecorativeIconProps {
  icon: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  opacity?: number;
  rotation?: number;
  fill?: boolean;
  className?: string;
}

export const DecorativeIcon: React.FC<DecorativeIconProps> = ({
  icon,
  size = 'md',
  color = 'text-primary',
  opacity = 0.1,
  rotation = 0,
  fill = false,
  className,
}) => {
  const sizeMap = {
    sm: 'text-4xl',
    md: 'text-6xl',
    lg: 'text-[120px]',
    xl: 'text-[160px]',
  };

  return (
    <span
      className={cn(
        'material-symbols-outlined pointer-events-none select-none',
        sizeMap[size],
        color,
        className
      )}
      style={{
        opacity,
        transform: `rotate(${rotation}deg)`,
        fontVariationSettings: fill ? '"FILL" 1' : '"FILL" 0',
      }}
    >
      {icon}
    </span>
  );
};

export default DecorativeIcon;
