import { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

interface LazyLoadProps {
  children: ReactNode;
  animation?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'fadeSlideUp';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function LazyLoad({
  children,
  animation = 'fadeSlideUp',
  delay = 0,
  duration = 700,
  className = '',
}: LazyLoadProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all';
    const durationClass = `duration-${duration}`;

    if (!isInView) {
      switch (animation) {
        case 'fade':
          return `${baseClasses} opacity-0`;
        case 'slideUp':
          return `${baseClasses} opacity-100 translate-y-12`;
        case 'slideLeft':
          return `${baseClasses} opacity-100 translate-x-12`;
        case 'slideRight':
          return `${baseClasses} opacity-100 -translate-x-12`;
        case 'scale':
          return `${baseClasses} opacity-0 scale-95`;
        case 'fadeSlideUp':
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    }

    return `${baseClasses} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
