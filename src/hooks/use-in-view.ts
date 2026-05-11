"use client";

import { useEffect, useState, type RefObject } from "react";

type Options = {
  threshold?: number;
  once?: boolean;
};

export function useInView(
  ref: RefObject<Element | null>,
  { threshold = 0.1, once = false }: Options = {},
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold, once]);

  return inView;
}
