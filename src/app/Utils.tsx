"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Utils = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        }),
      {
        threshold: 0.25,
      }
    );
    document.querySelectorAll(".in-view").forEach((element) => {
      observer.observe(element);
    });
  }, [pathname]);

  return children;
};

export default Utils;
