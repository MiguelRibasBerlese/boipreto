import type { ImgHTMLAttributes } from 'react';

interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt'> {
  /** Accessible description of the image — required to prevent a11y violations. */
  alt: string;
}

/**
 * Drop-in replacement for <img> that enforces:
 * - Mandatory `alt` text (TypeScript compile-time guarantee)
 * - `referrerPolicy="no-referrer"` for Google-hosted assets
 * - `loading="lazy"` by default to defer off-screen images
 *
 * Override `loading` explicitly when the image is above the fold (e.g. hero).
 */
export default function Image({ alt, loading = 'lazy', ...props }: ImageProps) {
  return (
    <img
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
