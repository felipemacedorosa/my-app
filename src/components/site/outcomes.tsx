import { Section, Eyebrow, TwoTone } from '@/components/site/section'
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
 */
export function Outcomes() {
  return (
    <Section id="outcomes" tone="canvas">
      <div className="flex flex-col items-center text-center">
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
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {outcomes.map((outcome, i) => (
          <div key={outcome.title} className="card-light flex flex-col p-7">
            <span className="label text-ink-32">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="display-3 text-ink mt-5 text-[26px]">
              {outcome.title}
            </h3>
            <p className="text-ink-56 mt-3 text-[15px] leading-[1.6]">
              {outcome.detail}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
