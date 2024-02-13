import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const pathname = usePathname();

  const [scrollPosition, setScrollPosition] = useState({
    scrollY: 0,
    scrollX: 0,
    scrollYProgress: 0,
    scrollXProgress: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        scrollY: window.scrollY,
        scrollX: window.scrollX,
        scrollYProgress:
          window.scrollY / (document.body.scrollHeight - window.innerHeight),
        scrollXProgress:
          window.scrollX / (document.body.scrollWidth - window.innerWidth),
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
      scrollYProgress: 0,
      scrollXProgress: 0,
    });
  }, [pathname]);

  return scrollPosition;
};
