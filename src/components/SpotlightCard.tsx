// Inspired by React Bits Spotlight Card by David Haz: https://reactbits.dev/components/spotlight-card
// Local implementation with theme, pointer, keyboard, and reduced-motion support.
import { useEffect, useRef } from 'react';
import type { PropsWithChildren } from 'react';

export default function SpotlightCard({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const enabled = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    const reset = () => { delete element.dataset.spotlight; };
    const move = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      const bounds = element.getBoundingClientRect();
      element.style.setProperty('--spotlight-x', `${event.clientX - bounds.left}px`);
      element.style.setProperty('--spotlight-y', `${event.clientY - bounds.top}px`);
      element.dataset.spotlight = 'true';
    };
    const sync = () => {
      reset();
      element.removeEventListener('pointermove', move);
      if (enabled.matches) element.addEventListener('pointermove', move);
    };
    sync();
    enabled.addEventListener('change', sync);
    element.addEventListener('pointerleave', reset);
    element.addEventListener('pointercancel', reset);
    return () => {
      enabled.removeEventListener('change', sync);
      element.removeEventListener('pointermove', move);
      element.removeEventListener('pointerleave', reset);
      element.removeEventListener('pointercancel', reset);
    };
  }, []);

  return <div ref={ref} className="app-card spotlight-card">{children}</div>;
}
