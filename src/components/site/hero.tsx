import { m, useReducedMotion } from 'framer-motion'
import { approach, pillars, readinessDimensions } from '@/content/site'
import { DUR, EASE, RISE } from '@/lib/motion'

/**
 * Hero.
 *
 * Reference structure, followed closely: a small dark pill badge, then a very
 * large centred headline at weight 500 with -0.04em tracking, then exactly two
 * buttons, then a wide 16px-radius panel that bleeds past the fold.
 *
 * IMPORTANT — the panel is a DIAGRAM, not a product screenshot. Snowfox sells
 * consulting and bespoke implementation, not a SaaS product with a UI, so
 * mocking up an application here would be inventing a product that does not
 * exist. Every string inside it is real published Snowfox content (the
 * engagement stages, the five readiness dimensions, the three outcomes)
 * arranged to give the hero the same silhouette. Do not replace it with a
 * fabricated app screenshot.
 *
 * MOTION: the hero animates on mount, not on scroll — it is above the fold,
 * so a viewport trigger would either have already fired before first paint or
 * never fire at all. The five rows arrive in sequence at a slower cadence than
 * the rest of the page (HERO_STAGGER vs STAGGER); this is the one place where
 * the sequence itself is the effect, and the panel is the payoff, so it lands
 * last and travels furthest.
 */

/** Slower than the page's STAGGER — the hero has five rows, not twelve cards. */
const HERO_STAGGER = 0.09

/** Held back so the entrance starts after the header has begun dropping in. */
const HERO_DELAY = 0.12

export function Hero() {
  const stage = approach[0]
  const still = useReducedMotion()

  // One object drives all five rows. `custom` carries the travel distance so
  // the panel can move further than the text without a second variant.
  const row = {
    hidden: (rise: number = RISE) => ({ opacity: 0, y: rise }),
    shown: { opacity: 1, y: 0 },
  }

  const motionProps = still
    ? {}
    : {
        variants: {
          hidden: {},
          shown: {
            transition: {
              staggerChildren: HERO_STAGGER,
              delayChildren: HERO_DELAY,
            },
          },
        },
        initial: 'hidden' as const,
        animate: 'shown' as const,
      }

  const rowProps = still
    ? {}
    : {
        variants: row,
        transition: { duration: DUR.slow, ease: EASE },
      }

  return (
    <section id="top" className="bg-canvas-warm relative overflow-hidden">
      <m.div
        {...motionProps}
        className="mx-auto w-full max-w-[1200px] px-6 pt-32 pb-0 md:pt-40"
      >
        {/* Badge */}
        <m.div {...rowProps} className="flex justify-center">
          <a
            href="#assessment"
            className="rounded-pill bg-ink inline-flex items-center gap-2 py-1.5 pr-3 pl-1.5 text-[13px] text-white transition-opacity hover:opacity-90"
          >
            <span className="rounded-pill bg-accent px-2 py-0.5 text-[11px] font-medium tracking-wide">
              START HERE
            </span>
            <span className="text-white/80">AI Readiness Assessment</span>
            <span aria-hidden="true" className="text-white/50">
              →
            </span>
          </a>
        </m.div>

        {/* Headline. Single-colour, like the reference's H1 — the two-tone
            treatment is reserved for section headings further down. */}
        <m.h1
          {...rowProps}
          className="display text-ink mx-auto mt-8 max-w-[15ch] text-center text-[clamp(2.75rem,7.5vw,4.4rem)]"
        >
          Data and AI, applied to the business problem
        </m.h1>

        <m.p
          {...rowProps}
          className="text-ink-56 mx-auto mt-6 max-w-[52ch] text-center text-[17px] leading-[1.55]"
        >
          Snowfox is an AI and data consultancy. We work out where AI and data
          actually create value in your business, then build and run the thing
          that does it.
        </m.p>

        <m.div
          {...rowProps}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#contact" className="btn btn-primary">
            Book an intro call
          </a>
          <a href="#services" className="btn btn-outline">
            See what we do
          </a>
        </m.div>

        {/* Panel — bleeds below the fold. Travels twice the standard rise so
            it reads as arriving rather than settling. */}
        <m.div {...rowProps} custom={RISE * 2} className="mt-16 md:mt-20">
          <div className="border-ink-12 overflow-hidden rounded-t-[16px] border border-b-0 bg-white">
            {/* Chrome bar */}
            <div className="border-ink-12 flex items-center justify-between border-b px-4 py-2.5">
              <span className="label text-ink-32">
                Engagement — strategy through production
              </span>
              <span aria-hidden="true" className="flex gap-1.5">
                <span className="bg-ink-12 size-2 rounded-full" />
                <span className="bg-ink-12 size-2 rounded-full" />
                <span className="bg-accent/40 size-2 rounded-full" />
              </span>
            </div>

            <div className="grid lg:grid-cols-[236px_1fr_296px]">
              {/* Left rail — the six engagement stages. */}
              <div className="border-ink-12 bg-canvas-warm/60 border-b p-4 lg:border-r lg:border-b-0 lg:pb-14">
                <p className="label text-ink-32 px-2 pb-3">Stages</p>
                <ol className="space-y-0.5">
                  {approach.map((step, i) => (
                    <li key={step.title}>
                      <div
                        className={
                          i === 0
                            ? 'border-accent bg-accent/[0.07] flex items-baseline gap-2.5 rounded-[6px] border-l-2 px-2 py-1.5'
                            : 'flex items-baseline gap-2.5 rounded-[6px] border-l-2 border-transparent px-2 py-1.5'
                        }
                      >
                        <span
                          className={
                            i === 0
                              ? 'font-mono text-accent text-[11px] tabular-nums'
                              : 'font-mono text-ink-32 text-[11px] tabular-nums'
                          }
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={
                            i === 0
                              ? 'text-ink text-[13px] font-medium'
                              : 'text-ink-56 text-[13px]'
                          }
                        >
                          {step.title}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Centre — the first stage, expanded. */}
              <div className="border-ink-12 border-b p-6 lg:border-b-0 lg:pb-14 xl:border-r">
                <p className="label text-accent">Stage 01</p>
                <h2 className="display-3 text-ink mt-2 text-[22px]">
                  {stage.title}
                </h2>
                <p className="text-ink-56 mt-2 max-w-[46ch] text-[14px] leading-[1.55]">
                  {stage.detail}
                </p>

                <div className="border-ink-12 mt-6 border-t pt-5">
                  <p className="label text-ink-32">
                    AI readiness — five dimensions
                  </p>
                  <ul className="mt-3 space-y-2">
                    {readinessDimensions.map((dimension) => (
                      <li
                        key={dimension.name}
                        className="border-ink-12 flex flex-wrap items-baseline gap-x-3 gap-y-0.5 rounded-[8px] border px-3 py-2"
                      >
                        <span className="text-ink text-[13px] font-medium">
                          {dimension.name}
                        </span>
                        <span className="text-ink-32 text-[12px]">
                          {dimension.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right — the two pillars. Placed in the hero because "AI *and*
                  data" is the single fact most likely to be lost on a skim. */}
              <div className="bg-canvas-warm/60 p-6 lg:pb-14">
                <p className="label text-ink-32">Disciplines</p>
                <div className="mt-3 space-y-3">
                  {pillars.map((pillar) => (
                    <div
                      key={pillar.label}
                      className="border-ink-12 rounded-[10px] border bg-white p-3.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="bg-accent size-1.5 shrink-0 rounded-full" />
                        <p className="text-ink text-[14px] font-medium">
                          {pillar.label}
                        </p>
                      </div>
                      <ul className="dash-list text-ink-56 mt-2.5 space-y-1 text-[12.5px] leading-[1.5]">
                        {pillar.services.map((service) => (
                          <li key={service.name}>{service.name}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </m.div>
      </m.div>
    </section>
  )
}
