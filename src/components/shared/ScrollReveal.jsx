import { useEffect, useRef, useState } from "react";

/**
 * Wraps children and fades/slides them into view the first time they
 * scroll into the viewport. Cheap, dependency-free (IntersectionObserver),
 * and only animates once so it doesn't jitter if the user scrolls up/down.
 *
 * Usage:
 *   <ScrollReveal><div>...</div></ScrollReveal>
 *   <ScrollReveal direction="left" delay={150}>...</ScrollReveal>
 */
export default function ScrollReveal({
  children,
  className = "",
  direction = "up", // "up" | "left" | "right" | "none"
  delay = 0,
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If the browser doesn't support it, just show the content.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform =
    direction === "up"
      ? "translate-y-8"
      : direction === "left"
      ? "-translate-x-8"
      : direction === "right"
      ? "translate-x-8"
      : "translate-y-0";

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${hiddenTransform}`
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
