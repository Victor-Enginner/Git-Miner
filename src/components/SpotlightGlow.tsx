import type { MouseEvent } from 'react';

/** Guarda a posição do mouse em --mx/--my no card, para o SpotlightGlow seguir o cursor. */
export function onSpotlightMove(e: MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
}

/** Brilho que segue o cursor. Use dentro de um elemento `group relative` com onMouseMove={onSpotlightMove}. */
export function SpotlightGlow({ color = 'rgba(251,146,60,0.16)' }: { color?: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{ background: `radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), ${color}, transparent 70%)` }}
    />
  );
}
