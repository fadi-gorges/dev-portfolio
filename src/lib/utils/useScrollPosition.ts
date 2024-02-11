import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const pathname = usePathname();

  const [scrollPosition, setScrollPosition] = useState({
    scrollY: 0,
    scrollX: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        scrollY: window.scrollY,
        scrollX: window.scrollX,
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setScrollPosition({
      scrollY: window.scrollY,
      scrollX: window.scrollX,
    });
  }, [pathname]);

  return scrollPosition;
};
