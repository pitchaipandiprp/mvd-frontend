import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Checks whether a DOM element has been hydrated by React so we never mutate
 * className on unhydrated SSR nodes inside Suspense boundaries.
 */
function isHydratedElement(el: Element): boolean {
  return Object.keys(el).some(
    (key) => key.startsWith("__reactFiber$") || key.startsWith("__reactProps$")
  );
}

/**
 * Triggers `.revealed` class on `.reveal`, `.reveal-left`, `.reveal-right`
 * elements as they enter the viewport on scroll or route change.
 */
export function useScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let rafId = 0;
    let attempts = 0;
    const MAX_HYDRATION_WAIT_FRAMES = 60;

    const checkVisible = () => {
      const elements = Array.from(
        document.querySelectorAll(".reveal, .reveal-left, .reveal-right")
      );
      const windowBottom = window.scrollY + window.innerHeight;
      let hasUnhydratedVisible = false;

      elements.forEach((el) => {
        if (el.classList.contains("revealed")) return;

        const rect = el.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        if (elementTop < windowBottom - 45) {
          if (isHydratedElement(el)) {
            el.classList.add("revealed");
          } else {
            hasUnhydratedVisible = true;
          }
        }
      });

      if (hasUnhydratedVisible && attempts < MAX_HYDRATION_WAIT_FRAMES) {
        attempts += 1;
        rafId = window.requestAnimationFrame(checkVisible);
      }
    };

    checkVisible();
    window.addEventListener("scroll", checkVisible, { passive: true });
    window.addEventListener("resize", checkVisible, { passive: true });

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", checkVisible);
      window.removeEventListener("resize", checkVisible);
    };
  }, [pathname]);
}
