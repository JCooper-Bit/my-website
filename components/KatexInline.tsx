"use client";

import katex from "katex";
import "katex/dist/katex.min.css";
import React from "react";

type KatexInlineProps = React.HTMLAttributes<HTMLSpanElement> & {
  /** latex only preferred: "\\sqrt{x^2+y^2}" (but "$...$" also supported) */
  text: string;
};

function stripDelimiters(input: string) {
  // remove wrapping $...$ or $$...$$ if provided
  const trimmed = input.trim();

  if (
    (trimmed.startsWith("$$") && trimmed.endsWith("$$")) ||
    (trimmed.startsWith("$") && trimmed.endsWith("$"))
  ) {
    return trimmed.replace(/^\$\$?/, "").replace(/\$\$?$/, "").trim();
  }

  return trimmed;
}

export default function KatexInline({
  text,
  className,
  ...delegated
}: KatexInlineProps) {
  const latex = stripDelimiters(text);

  const html = React.useMemo(() => {
    try {
      return katex.renderToString(latex, {
        displayMode: false, // <- forces inline always
        throwOnError: false,
        strict: "ignore",
      });
    } catch {
      return latex;
    }
  }, [latex]);

  return (
    <span
      {...delegated}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
