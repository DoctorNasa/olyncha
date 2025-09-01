import React from 'react';

interface BadgeJPProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * BadgeJP Component
 * Renders the Japanese brand lockup: 緑風 / Midori-kaze
 */
const BadgeJP: React.FC<BadgeJPProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl'
  };

  const kanjiSize = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className={`font-serif ${kanjiSize[size]} leading-none`} style={{ fontWeight: 500 }}>
        緑風
      </span>
      <span className={`${sizeClasses[size]} opacity-70`} style={{ fontFamily: 'var(--font-serif)' }}>
        Midori-kaze
      </span>
    </div>
  );
};

export default BadgeJP;
