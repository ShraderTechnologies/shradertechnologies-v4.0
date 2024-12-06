/**
 * Animation Constants
 *
 * Defines animation variants for menu transitions and interactions.
 *
 * Animations:
 * - menuSlide: Slides menu in/out from right edge
 * - slide: Staggered slide animation for menu items
 * - scale: Scale animation for opening/closing elements
 *
 * Features:
 * - Smooth easing curves using cubic bezier
 * - Configurable durations and delays
 * - Support for staggered animations
 * - Consistent animation timing
 *
 * Motion animation variants
 * {menuSlide, slide, scale}
 *
 * Assested by Gihub Copilot AI / Jury
 */

export const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: { x: 80 },
  enter: (i) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};
