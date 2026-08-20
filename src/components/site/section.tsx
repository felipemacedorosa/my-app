import React from 'react'
import { cn } from '@/lib/utils'

/**
 * Page bands.
 *
 * The reference's rhythm is unusually large — 180px of vertical padding on a
 * desktop section, and no rules between bands. Separation is carried entirely
 * by background steps (canvas -> canvas-alt -> dark), which is why `Section`
 * takes a tone rather than a border.
 */
type Tone = 'canvas' | 'warm' | 'alt' | 'dark'

const toneBg: Record<Tone, string> = {
  canvas: 'bg-canvas text-ink',
  warm: 'bg-canvas-warm text-ink',
  alt: 'bg-canvas-alt text-ink',
  dark: 'bg-dark text-on-dark',
}

export function Section({
  id,
  tone = 'canvas',
  className,
  children,
}: {
  id?: string
  tone?: Tone
  className?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-20 py-24 md:py-32 lg:py-44',
        toneBg[tone],
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">{children}</div>
    </section>
  )
}

/**
 * Small mono label that sits above a heading. On the reference this is the
 * only place a monospace face appears on a light band, which is what keeps it
 * reading as a tag rather than as copy.
 */
export function Eyebrow({
  children,
  dark,
  className,
}: {
  children: React.ReactNode
  dark?: boolean
  className?: string
}) {
  return (
    <p
      className={cn(
        'label',
        dark ? 'text-on-dark-56' : 'text-ink-56',
        className,
      )}
    >
      {children}
    </p>
  )
}

/**
 * The signature headline: line one in ink, line two in the accent. The
 * reference uses it for every major section heading, and the accent appears
 * almost nowhere else — so the split is load-bearing, not decoration.
 *
 * `lead` and `accent` are separate props rather than a parsed string so the
 * line break stays intentional at every breakpoint.
 */
export function TwoTone({
  lead,
  accent,
  as: Tag = 'h2',
  dark,
  className,
}: {
  lead: string
  accent?: string
  as?: 'h1' | 'h2' | 'h3'
  dark?: boolean
  className?: string
}) {
  return (
    <Tag
      className={cn(
        'display-2 text-[clamp(2.5rem,6vw,4rem)]',
        dark ? 'text-on-dark-hi' : 'text-ink',
        className,
      )}
    >
      {lead}
      {accent ? (
        <>
          <br />
          <span className="text-accent">{accent}</span>
        </>
      ) : null}
    </Tag>
  )
}

/** Supporting paragraph under a heading. Always the 56% ink alpha. */
export function Lede({
  children,
  dark,
  className,
}: {
  children: React.ReactNode
  dark?: boolean
  className?: string
}) {
  return (
    <p
      className={cn(
        'max-w-xl text-[17px] leading-[1.55]',
        dark ? 'text-on-dark-56' : 'text-ink-56',
        className,
      )}
    >
      {children}
    </p>
  )
}
