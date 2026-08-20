import React from 'react'
import { m, useReducedMotion } from 'framer-motion'
import { DUR, EASE, RISE, fadeUp, stagger, viewport } from '@/lib/motion'

/*
  Scroll reveals.

  Three primitives cover the whole page: `Reveal` for a single element,
  `Stagger` + `StaggerItem` for a group that should arrive in sequence.

  Why these are components rather than a hook: the animated node must BE the
  semantic element, not a wrapper around it. Two of the card grids use CSS
  multi-column (`columns-3` + `break-inside-avoid`), and an extra div between
  the column container and the card breaks the column flow. So `as` picks the
  tag and the motion lands directly on it.

  ACCESSIBILITY: every primitive drops to a plain element when the user has
  prefers-reduced-motion set — not a faster animation, no animation. Content
  is rendered in its final state on first paint.
*/

/** Tags a reveal is allowed to render as. Extend when a section needs one. */
const TAGS = {
  div: m.div,
  section: m.section,
  article: m.article,
  li: m.li,
  ol: m.ol,
  ul: m.ul,
  figure: m.figure,
  blockquote: m.blockquote,
  span: m.span,
  p: m.p,
} as const

type Tag = keyof typeof TAGS

type RevealProps = {
  children: React.ReactNode
  className?: string
  as?: Tag
  /** Seconds to wait after the element enters the viewport. */
  delay?: number
  /** Override the travel distance. 0 fades in place. */
  rise?: number
}

export function Reveal({
  children,
  className,
  as = 'div',
  delay = 0,
  rise = RISE,
}: RevealProps) {
  const still = useReducedMotion()
  const Tag = TAGS[as]
  const Plain = as

  if (still) return <Plain className={className}>{children}</Plain>

  return (
    <Tag
      className={className}
      custom={rise}
      variants={fadeUp}
      initial="hidden"
      whileInView="shown"
      viewport={viewport}
      transition={{ duration: DUR.base, ease: EASE, delay }}
    >
      {children}
    </Tag>
  )
}

/**
 * Container for a sequence. Children must be `StaggerItem` — the timing lives
 * on the parent, so a plain child will simply appear with no animation.
 */
export function Stagger({
  children,
  className,
  as = 'div',
  delay = 0,
}: Omit<RevealProps, 'rise'>) {
  const still = useReducedMotion()
  const Tag = TAGS[as]
  const Plain = as

  if (still) return <Plain className={className}>{children}</Plain>

  return (
    <Tag
      className={className}
      variants={stagger(delay)}
      initial="hidden"
      whileInView="shown"
      viewport={viewport}
    >
      {children}
    </Tag>
  )
}

export function StaggerItem({
  children,
  className,
  as = 'div',
  rise = RISE,
}: Omit<RevealProps, 'delay'>) {
  const still = useReducedMotion()
  const Tag = TAGS[as]
  const Plain = as

  if (still) return <Plain className={className}>{children}</Plain>

  return (
    <Tag className={className} custom={rise} variants={fadeUp}>
      {children}
    </Tag>
  )
}

/**
 * A card that lifts a little under the pointer.
 *
 * Reveal and hover share one node and both drive `y`. That is safe because
 * framer-motion ranks `whileHover` above an inherited variant, so the hover
 * wins while the pointer is down and the card returns to the variant's
 * resting state on exit — no second wrapper, which matters for the two grids
 * built on CSS multi-column, where an extra div between the column box and
 * the card breaks the column flow.
 *
 * Intended as a `Stagger` child: it inherits the parent's timing and so
 * declares no viewport trigger of its own.
 *
 * `whileHover` is pointer-only by design — it is decoration, and there is
 * nothing here to activate by keyboard.
 */
export function LiftCard({
  children,
  className,
  as = 'article',
  rise = RISE,
}: Omit<RevealProps, 'delay'>) {
  const still = useReducedMotion()
  const Tag = TAGS[as]
  const Plain = as

  if (still) return <Plain className={className}>{children}</Plain>

  return (
    <Tag
      className={className}
      custom={rise}
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: DUR.fast, ease: EASE }}
    >
      {children}
    </Tag>
  )
}
