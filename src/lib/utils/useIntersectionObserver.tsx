"use client";
import { useEffect } from "react";

export const useIntersectionObserver = () => {
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
  }, []);
};

export const UseIntersectionObserver = () => {
  useIntersectionObserver();

  return null;
};
