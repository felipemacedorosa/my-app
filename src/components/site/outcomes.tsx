import { Section, Eyebrow, TwoTone } from '@/components/site/section'
import { Reveal, Stagger, LiftCard } from '@/components/site/reveal'
import { outcomes } from '@/content/site'

/**
 * The band the reference gives to social proof (a client logo wall).
 *
 * Snowfox has no published client logos — snowfox-ai.com names no clients — so
 * inventing a logo wall is off the table. The slot goes instead to the old
 * site's spine, More Results / More Efficiency / More Scalability, which is the
 * clearest statement of what is actually being sold.
 *
 * Centred heading, two-tone, as the reference does for every section head.
 *
 * The three cards are deliberately UNNUMBERED. They are parallel claims, not
 * a sequence — results, efficiency and scalability do not happen in an order
 * — so an "01 / 02 / 03" rail would assert a progression that isn't there and
 * read as filler. Numbering on this page is reserved for the engagement
 * stages, where the order is the actual content.
 */
export function Outcomes() {
  return (
    <Section id="outcomes" tone="canvas">
      <Reveal className="flex flex-col items-center text-center">
        <Eyebrow>What the work is for</Eyebrow>
        <TwoTone
          className="mt-5"
          lead="We are not selling AI."
          accent="We are selling the result."
        />
        <p className="text-ink-56 mt-6 max-w-[56ch] text-[17px] leading-[1.55]">
          Every engagement is tied to a number the business already tracks. If
          AI is not the right way to move it, we say so.
        </p>
      </Reveal>

      <Stagger className="mt-16 grid gap-4 md:grid-cols-3">
        {outcomes.map((outcome) => (
          <LiftCard key={outcome.title} className="card-light flex flex-col p-7">
            <h3 className="display-3 text-ink text-[26px]">{outcome.title}</h3>
            <p className="text-ink-56 mt-3 text-[15px] leading-[1.6]">
              {outcome.detail}
            </p>
          </LiftCard>
        ))}
      </Stagger>
    </Section>
  )
}
