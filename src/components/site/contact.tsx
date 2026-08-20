import { Section, Eyebrow, TwoTone } from '@/components/site/section'
import { Reveal } from '@/components/site/reveal'

/**
 * Closing call to action — the reference's final band: one very large centred
 * heading, exactly two buttons, then a single smaller card underneath for the
 * softer ask.
 *
 * "Talk to a specialist" is the old site's own CTA and is kept as the secondary
 * action because it sets a lower bar than booking.
 *
 * NOTE: snowfox-ai.com publishes no email address, phone number or booking URL,
 * so every href below is an unrouted placeholder. Wire them to the real
 * scheduling link before this ships — do not invent contact details.
 */
export function Contact() {
  return (
    <Section id="contact" tone="warm">
      <Reveal className="flex flex-col items-center text-center">
        <Eyebrow>Next step</Eyebrow>
        <TwoTone
          className="mt-5"
          lead="Start with the problem,"
          accent="not the technology."
        />
        <p className="text-ink-56 mt-6 max-w-[58ch] text-[17px] leading-[1.55]">
          Tell us what is slow, expensive or invisible in your operation. If AI
          or better data is the right answer, we will show you where. If it is
          not, we will tell you that too.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="#contact" className="btn btn-primary">
            Book an intro call
          </a>
          <a href="#contact" className="btn btn-outline">
            Talk to a specialist
          </a>
        </div>
      </Reveal>

      <Reveal
        delay={0.1}
        className="card-light mx-auto mt-16 flex max-w-3xl flex-col items-start justify-between gap-5 p-7 sm:flex-row sm:items-center"
      >
        <div>
          <h3 className="display-3 text-ink text-[21px]">
            Not ready to scope a project?
          </h3>
          <p className="text-ink-56 mt-2 max-w-[46ch] text-[14.5px] leading-[1.6]">
            Start with the AI Readiness Assessment. Five dimensions, reviewed
            together, and an honest read on where you actually are.
          </p>
        </div>
        <a href="#approach" className="btn btn-outline shrink-0">
          See what it covers
        </a>
      </Reveal>
    </Section>
  )
}
