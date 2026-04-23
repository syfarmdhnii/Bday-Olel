import React from 'react';

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <section className={`container mx-auto px-6 pb-12 ${className}`}>
      {children}
    </section>
  );
};

export default ContentSection;
