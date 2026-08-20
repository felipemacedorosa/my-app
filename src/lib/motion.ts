import type { Transition, Variants } from 'framer-motion'

/*
  Motion system.

  The visual system encodes type and colour once in index.css so sections
  cannot drift; motion is encoded here for the same reason. Every reveal on
  the page draws its easing, distance and duration from this file — if a
  section animates differently, that difference should be a deliberate prop,
  not a hand-tuned number copied into a component.

  Two rules the whole page follows:

  1. ONE easing curve. `EASE` is an expo-out — almost all of its travel
     happens in the first third, then it settles for a long time. That long
     settle is what reads as "smooth" rather than "fast"; mixing in a second
     curve makes the page feel assembled from parts.

  2. Elements RISE and FADE, they never scale, rotate or blur. The reference
     direction is a restrained editorial layout, and spinning cards in would
     fight it. Distance is small (RISE) precisely so the movement is felt
     more than seen.
*/

/** Expo-out. Fast departure, long settle — the page's only easing curve. */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

/**
 * Symmetric curve for state changes that reverse (hover, header chrome).
 * Reveals never use this — a reveal that eases in looks hesitant.
 */
export const EASE_SOFT: [number, number, number, number] = [0.65, 0, 0.35, 1]

export const DUR = {
  /** Hover and other reversible state. */
  fast: 0.35,
  /** The default reveal. */
  base: 0.8,
  /** Hero entrance and other large first-impression moves. */
  slow: 1.05,
} as const

/** Travel distance for a reveal, in px. Deliberately small. */
export const RISE = 20

/**
 * Delay between siblings in a stagger. At 0.07 a six-card grid finishes in
 * ~0.4s of stagger — quick enough that the last card is not still arriving
 * after the eye has moved on, slow enough to read as a sequence.
 */
export const STAGGER = 0.07

export const transition: Transition = { duration: DUR.base, ease: EASE }

/** The single reveal variant. `custom` overrides the rise distance. */
export const fadeUp: Variants = {
  hidden: (rise: number = RISE) => ({ opacity: 0, y: rise }),
  shown: { opacity: 1, y: 0, transition },
}

/**
 * Parent for a staggered group. Carries no visual change of its own — it
 * exists only to time its children, so it must not set opacity (that would
 * fade the whole group in as a block and defeat the stagger).
 */
export const stagger = (delayChildren = 0): Variants => ({
  hidden: {},
  shown: {
    transition: { staggerChildren: STAGGER, delayChildren },
  },
})

/**
 * Viewport trigger shared by every reveal.
 *
 * `once` matters more than it looks: re-animating on scroll-up makes a long
 * page feel busy and cheap, and doubles the compositing work on exactly the
 * scroll direction where the user is usually hunting for something specific.
 *
 * The negative bottom margin holds the trigger back until the element is
 * ~12% into the viewport, so the movement is visible rather than already
 * finished by the time it clears the fold.
 */
export const viewport = { once: true, margin: '0px 0px -12% 0px' } as const
