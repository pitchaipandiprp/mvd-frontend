import { useEffect } from 'react';
import { usePathname } from "next/navigation";
/**
 * Triggers `.revealed` class on `.reveal`, `.reveal-left`, `.reveal-right`
 * elements as they enter the viewport on scroll or route change.
 */
export function useScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    );

    const checkVisible = () => {
      const windowBottom = window.scrollY + window.innerHeight;
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        if (elementTop < windowBottom - 45) {
          el.classList.add('revealed');
        }
      });
    };

    checkVisible();
    window.addEventListener('scroll', checkVisible, { passive: true });
    window.addEventListener('resize', checkVisible, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkVisible);
      window.removeEventListener('resize', checkVisible);
    };
  }, [pathname]);
}
