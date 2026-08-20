import { Section, Eyebrow, TwoTone, Lede } from '@/components/site/section'
import { Reveal } from '@/components/site/reveal'
import { team } from '@/content/site'

/**
 * The company section.
 *
 * The pull quote is the closest thing Snowfox has to a stated philosophy on the
 * current site — "pragmatic and focused on results, avoiding the hype effect" —
 * so it is set as the largest type in the band rather than buried in a
 * paragraph. It is the one place the accent carries a full sentence.
 */
export function About() {
  return (
    <Section id="about" tone="canvas">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <Eyebrow>About Snowfox</Eyebrow>
          <TwoTone
            className="mt-5"
            lead="Technology transformation,"
            accent="made to pay."
          />
          <Lede className="mt-6">
            Snowfox AI builds data and artificial intelligence applications for
            companies that need the result more than they need the technology.
            We work end to end, and we stay until it runs.
          </Lede>

          <blockquote className="card-light mt-10 p-7">
            <p className="display-3 text-ink text-[22px] sm:text-[26px]">
              Our approach is pragmatic and focused on results,{' '}
              <span className="text-accent">
                avoiding the hype that surrounds new technology.
              </span>
            </p>
          </blockquote>
        </Reveal>

        {/* Held back a beat so the two columns read left-then-right rather
            than arriving as one block. */}
        <Reveal className="lg:pt-3" delay={0.12}>
          <div className="card-light overflow-hidden">
            <div className="border-ink-12 flex items-center justify-between border-b px-6 py-4">
              <span className="label text-ink-32">Leadership</span>
              <span className="label text-ink-32">{team.length}</span>
            </div>

            <p className="text-ink-56 border-ink-12 border-b px-6 py-5 text-[14.5px] leading-[1.6]">
              The team balances practical application with academic depth —
              enough of the first to ship, enough of the second to know what
              will hold.
            </p>

            <ul>
              {team.map((person) => (
                <li
                  key={person.name}
                  className="border-ink-12 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b px-6 py-4 last:border-b-0"
                >
                  <span className="text-ink text-[15px] font-medium">
                    {person.name}
                  </span>
                  <span className="text-ink-56 text-[13.5px]">
                    {person.role}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-ink-32 mt-5 text-[13px] leading-[1.55]">
            Operating from Canada and Brazil, now expanding into the United
            States.
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
