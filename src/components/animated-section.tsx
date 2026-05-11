"use client";

import { useRef, type ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

type Props = {
  children: ReactNode;
  className?: string;
};

export function AnimatedSection({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.15, once: true });

  return (
    <div
      ref={ref}
      className={`${inView ? "animate-fade-in-up" : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}
