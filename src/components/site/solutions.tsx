import { Section, Eyebrow, TwoTone, Lede } from '@/components/site/section'
import { Reveal, Stagger, LiftCard } from '@/components/site/reveal'
import { solutions } from '@/content/site'

/**
 * Applied solutions.
 *
 * segMENTOR and priceGURU are named Snowfox products rather than practice
 * areas, so they keep their © and take the accent chip. That is the only
 * difference in treatment: a product earns a different weight from a
 * discipline, not a different card.
 */
export function Solutions() {
  return (
    <Section id="solutions" tone="canvas">
      <Reveal className="max-w-3xl">
        <Eyebrow>Solutions</Eyebrow>
        <TwoTone
          className="mt-5"
          lead="What the work looks like"
          accent="in practice."
        />
        <Lede className="mt-6 max-w-[58ch]">
          Four applied disciplines and two products, each built for a problem a
          business already has.
        </Lede>
      </Reveal>

      <Stagger className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution) => {
          const isProduct = Boolean(solution.tag)
          return (
            <LiftCard
              key={solution.name}
              className="card-light flex flex-col p-7"
            >
              <span
                className={
                  isProduct
                    ? 'rounded-pill bg-accent/10 text-accent label w-fit px-2.5 py-1'
                    : 'rounded-pill bg-ink-12 text-ink-56 label w-fit px-2.5 py-1'
                }
              >
                {isProduct ? 'Snowfox product' : 'Discipline'}
              </span>

              {/* Not uppercased anywhere: segMENTOR and priceGURU are wordmarks
                  and text-transform would flatten them to SEGMENTOR. */}
              <h3 className="display-3 text-ink mt-5 flex items-baseline gap-1 text-[24px]">
                <span>{solution.name}</span>
                {solution.tag ? (
                  <span className="text-accent align-super text-[11px]">
                    {solution.tag}
                  </span>
                ) : null}
              </h3>

              <p className="text-ink-56 mt-3 text-[14.5px] leading-[1.6]">
                {solution.summary}
              </p>
            </LiftCard>
          )
        })}
      </Stagger>
    </Section>
  )
}
