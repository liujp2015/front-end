// src/app/_components/collapsible/details.tsx
"use client";
// ...
import { useMount } from "react-use";
import { FC, PropsWithChildren, useRef } from "react";

export const Details: FC<
  PropsWithChildren<{ defaultOpen?: boolean; summary: string }>
> = ({ defaultOpen = false, summary, children }) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <details open className=" border p-2 overflow-hidden" ref={detailsRef}>
      <summary className="cursor-pointer">{summary}</summary>
      <div className="px-2 py-3 overflow-hidden" ref={contentRef}>
        {children}
      </div>
    </details>
  );
};
