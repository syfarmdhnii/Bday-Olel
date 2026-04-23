import React from 'react';
import { cn } from '@/lib/utils';

interface WashiTapeProps {
  color?: 'secondary' | 'secondary-container' | 'tertiary-fixed' | 'primary';
  rotation?: number;
  width?: string;
  height?: string;
  className?: string;
}

export const WashiTape: React.FC<WashiTapeProps> = ({
  color = 'secondary',
  rotation = 2,
  width = 'w-24',
  height = 'h-6',
  className,
}) => {
  const colorMap = {
    secondary: 'bg-secondary/20',
    'secondary-container': 'bg-secondary-container/30',
    'tertiary-fixed': 'bg-tertiary-fixed/30',
    primary: 'bg-primary/10',
  };

  return (
    <div
      className={cn(
        'tape-strip',
        colorMap[color],
        width,
        height,
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    />
  );
};

export default WashiTape;
