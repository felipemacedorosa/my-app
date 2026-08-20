import { m, useReducedMotion, useScroll, useSpring } from 'framer-motion'

/**
 * Hairline progress bar along the bottom edge of the header.
 *
 * `scaleX` on a spring rather than a width on the raw scroll value: width
 * animates layout, scaleX animates on the compositor, and the spring keeps
 * the bar moving for a beat after the wheel stops so it agrees with the
 * page's own momentum instead of snapping ahead of it.
 *
 * It carries the accent because it is the one piece of chrome that reports
 * progress; the header is otherwise deliberately colourless.
 */
export function ScrollProgress() {
  const still = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const width = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 40,
    restDelta: 0.001,
  })

  // A progress bar with no motion is just a coloured line — drop it rather
  // than render a version that jumps.
  if (still) return null

  return (
    <m.div
      aria-hidden="true"
      style={{ scaleX: width }}
      className="bg-accent absolute inset-x-0 bottom-0 h-px origin-left"
    />
  )
}
