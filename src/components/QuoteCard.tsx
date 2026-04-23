import React from 'react';
import { cn } from '@/lib/utils';

interface QuoteCardProps {
  quote: string;
  author?: string;
  authorImage?: string;
  className?: string;
  children?: React.ReactNode;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({
  quote,
  author,
  authorImage,
  className,
  children,
}) => {
  return (
    <div className={cn('bg-surface-container p-12 relative shadow-inner rounded-sm border-l-4 border-primary/20', className)}>
      <span className="material-symbols-outlined text-primary mb-6 text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>
        format_quote
      </span>

      <p className="font-body-standard text-body-standard text-on-surface-variant leading-relaxed">
        "{quote}"
      </p>

      {author && (
        <div className="mt-8 pt-8 border-t border-dashed border-primary/20 flex items-center gap-4">
          {authorImage && (
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/10">
              <img src={authorImage} alt={author} className="w-full h-full object-cover" />
            </div>
          )}
          <div>
            <p className="font-label-caps text-label-caps text-primary">Written By</p>
            <p className="font-body-romantic text-lg">{author}</p>
          </div>
        </div>
      )}

      {children}
    </div>
  );
};

export default QuoteCard;
