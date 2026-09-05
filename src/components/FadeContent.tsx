// Inspired by React Bits Fade Content by David Haz: https://reactbits.dev/animations/fade-content
// Local dependency-free implementation using Intersection Observer and CSS.
import { useEffect, useRef } from 'react';
import type { HTMLAttributes } from 'react';

export default function FadeContent({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !('IntersectionObserver' in window)) return;

    let revealed = false;
    const reveal = () => {
      revealed = true;
      element.dataset.visible = 'true';
      observer.disconnect();
    };
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) reveal();
    }, { threshold: 0 });
    const onMotionChange = () => {
      if (motion.matches) reveal();
    };
    const onFocus = () => {
      element.dataset.immediate = 'true';
      reveal();
    };

    // Visible by default; only hide when observation is available.
    element.dataset.visible = 'false';
    observer.observe(element);
    element.addEventListener('focusin', onFocus);
    motion.addEventListener('change', onMotionChange);
    if (element.contains(document.activeElement)) onFocus();

    return () => {
      observer.disconnect();
      element.removeEventListener('focusin', onFocus);
      motion.removeEventListener('change', onMotionChange);
      if (!revealed) delete element.dataset.visible;
    };
  }, []);

  return <div ref={ref} className={`fade-content ${className}`} {...props}>{children}</div>;
}
