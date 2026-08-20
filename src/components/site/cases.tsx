import { Section, Eyebrow, TwoTone, Lede } from '@/components/site/section'
import { cases } from '@/content/site'

/**
 * Published success cases, as cards.
 *
 * No figure appears here that snowfox-ai.com did not publish. Where the source
 * says "a significant increase in profit margin" and gives no number, this
 * says the same — putting a percentage on it would be inventing proof.
 */
export function Cases() {
  return (
    <Section id="cases" tone="canvas">
      <div className="max-w-3xl">
        <Eyebrow>Success cases</Eyebrow>
        <TwoTone className="mt-5" lead="Work already" accent="delivered." />
        <Lede className="mt-6 max-w-[58ch]">
          Named products and applied disciplines, in the sectors where Snowfox
          has shipped.
        </Lede>
      </div>

      {/* Masonry rather than a grid: seven cards into three columns would leave
          two dead slots on the last row. */}
      <div className="mt-16 columns-1 gap-4 md:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
        {cases.map((item) => (
          <article key={item.title} className="card-light p-7">
            <span className="rounded-pill border-ink-12 text-ink-56 label w-fit border px-2.5 py-1">
              {item.tag}
            </span>
            <h3 className="display-3 text-ink mt-5 text-[21px]">
              {item.title}
            </h3>
            <p className="text-ink-56 mt-3 text-[14.5px] leading-[1.6]">
              {item.detail}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
