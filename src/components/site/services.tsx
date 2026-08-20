import { Section, Eyebrow, TwoTone, Lede } from '@/components/site/section'
import { Reveal, Stagger, LiftCard } from '@/components/site/reveal'
import { pillars } from '@/content/site'

/**
 * Services — the reference's "Use cases" band: darker canvas step, left-aligned
 * heading, then a card grid where each card is a title, a one-line summary and
 * a dash-bulleted list.
 *
 * The six services are flattened into one grid rather than split into two
 * columns, but each card carries its pillar as a chip so the AI/data balance
 * stays legible. Order alternates AI, Data, AI, Data... so neither pillar
 * reads as the primary one and the other as an afterthought.
 */
const services = pillars.flatMap((pillar) =>
  pillar.services.map((service) => ({ ...service, pillar: pillar.label })),
)

/** Interleave the two pillars so the grid never shows one pillar as a block. */
const half = services.length / 2
const interleaved = Array.from({ length: services.length }, (_, i) =>
  i % 2 === 0 ? services[i / 2] : services[half + (i - 1) / 2],
)

export function Services() {
  return (
    <Section id="services" tone="alt">
      <Reveal className="max-w-3xl">
        <Eyebrow>Services</Eyebrow>
        <TwoTone
          className="mt-5"
          lead="Two disciplines,"
          accent="weighted equally."
        />
        <Lede className="mt-6 max-w-[58ch]">
          AI work is only as good as the data underneath it. Snowfox is built to
          do both — neither of these is the sidebar to the other.
        </Lede>
      </Reveal>

      <Stagger className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {interleaved.map((service) => (
          <LiftCard key={service.name} className="card-light flex flex-col p-7">
            <div className="flex items-center gap-2">
              <span className="bg-accent size-1.5 shrink-0 rounded-full" />
              <span className="label text-ink-32">{service.pillar}</span>
            </div>

            <h3 className="display-3 text-ink mt-5 text-[24px]">
              {service.name}
            </h3>
            <p className="text-ink-56 mt-3 text-[14.5px] leading-[1.6]">
              {service.summary}
            </p>

            <ul className="dash-list text-ink-56 mt-6 space-y-2.5 text-[13.5px] leading-[1.55]">
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </LiftCard>
        ))}
      </Stagger>
    </Section>
  )
}
