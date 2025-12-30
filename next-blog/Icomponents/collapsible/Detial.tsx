// src/app/_components/collapsible/details.tsx
"use client";
// ...
import { useMount } from "react-use";
import { FC, PropsWithChildren, useRef } from "react";

export const Details: FC<
  PropsWithChildren<{ defaultOpen?: boolean; summary: string }>
> = ({}) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  return <details className="" ref={detailsRef}></details>;
};
