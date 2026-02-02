
'use client';
import 'katex/dist/katex.min.css';
import katex from 'katex';
import { FC } from 'react';
import KatexProps from "./KatexInline"
//@ts-ignore
export default function KatexSpan ({ text, className }: KatexProps)  {
  const html = katex.renderToString(text, { throwOnError: false, displayMode: true });
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
