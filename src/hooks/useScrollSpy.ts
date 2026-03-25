import { useState, useEffect } from "react";

/**
 * Custom hook to determine the currently active section based on scroll position.
 * @param sectionIds Array of section IDs to track (e.g. ['hero', 'about', ...])
 * @param offset Header offset or adjustment for trigger point
 */
export function useScrollSpy(sectionIds: string[], offset: number = 200) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);

        if (element && element.offsetTop <= scrollPosition) {
          if (activeSection !== id) setActiveSection(id);
          return;
        }
      }
      
      // Default to empty or first if at top
      if (window.scrollY < offset) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset, activeSection]);

  return activeSection;
}
