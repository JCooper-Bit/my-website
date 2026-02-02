'use client';
import 'katex/dist/katex.min.css';
import katex from 'katex';
import { FC } from 'react';

interface KatexProps {
  text: string;
  className?: string;
}

// Inline component
// @ts-ignore
export default function KatexInline({ text, className }: KatexProps) {
  const html = katex.renderToString(text, { throwOnError: false });
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
