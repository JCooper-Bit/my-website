

'use client';
// @ts-ignore
import renderMathInElement from 'katex/dist/contrib/auto-render.js';
import 'katex/dist/katex.min.css';
import { useEffect, useRef } from 'react';
//@ts-ignore
export default function KatexSpan({ text, ...delegated }) {
  const katexTextRef = useRef("");
  useEffect(() => {
    if (katexTextRef.current) {
      renderMathInElement(katexTextRef.current, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
        ],
      });
    }
  }, [text]);

  return (
    <div {...delegated}>
      {text}
    </div>
  );
}
