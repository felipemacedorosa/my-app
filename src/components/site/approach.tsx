import { Section, Eyebrow, TwoTone, Lede } from '@/components/site/section'
import { approach, readinessDimensions } from '@/content/site'

/**
 * The dark band.
 *
 * The reference puts exactly one full-bleed near-black section roughly
 * two-thirds down the page, and gives it the argument the rest of the page is
 * building towards. Here that argument is the end-to-end claim: strategy and
 * implementation from the same team.
 *
 * Three things share the band because they are one story — the stages, the
 * disciplines those stages draw on, and the assessment that starts stage 01.
 * Splitting them into separate bands would mean two dark sections, and the
 * reference's rhythm depends on there being only one.
 */

/**
 * Disciplines Snowfox works across. Deliberately unordered and unranked — the
 * right fit depends on the problem, and presenting them as a sequence would
 * imply a default answer where there isn't one.
 */
const capabilities = [
  'Machine learning',
  'Data engineering',
  'Workflow automation',
  'System integrations',
  'Analytics',
  'Custom software',
  'Enterprise search / RAG',
  'AI agents',
]

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="label bg-dark-elev text-on-dark-56 inline-block rounded-[4px] px-2.5 py-1.5">
      {children}
    </span>
  )
}

export function Approach() {
  return (
    <Section id="approach" tone="dark">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <div className="lg:sticky lg:top-28">
          <Eyebrow dark>How we work</Eyebrow>
          <TwoTone
            dark
            className="mt-5 lg:!text-[3.25rem]"
            lead="Strategy through implementation,"
            accent="with the same team."
          />
          <Lede dark className="mt-6">
            Consultancies tend to stop at the recommendation. Development shops
            tend to start after it. The gap between those two is where most AI
            projects die.
          </Lede>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-primary-dark">
              Book an intro call
            </a>
            <a href="#cases" className="btn btn-outline-dark">
              See the work
            </a>
          </div>
        </div>

        {/* The six stages. Numbered, unlike everything else on the page,
            because order carries real information here: you cannot prioritize
            use cases before there is a strategy, and scaling is meaningless
            before something is integrated. */}
        <div className="card-dark overflow-hidden">
          <div className="border-on-dark-12 flex items-center justify-between border-b px-6 py-4">
            <Chip>Engagement</Chip>
            <span className="label text-on-dark-56">
              {approach.length} stages
            </span>
          </div>

          <ol>
            {approach.map((step, i) => (
              <li
                key={step.title}
                className="border-on-dark-12 grid grid-cols-[auto_1fr] gap-x-4 border-b px-6 py-5 last:border-b-0"
              >
                <span className="text-accent-hi font-mono text-[12px] tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="display-3 text-on-dark-hi text-[19px]">
                    {step.title}
                  </h3>
                  <p className="text-on-dark-56 mt-1.5 text-[14px] leading-[1.55]">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Two supporting cards. */}
      <div className="mt-4 grid gap-4 lg:mt-16 lg:grid-cols-2">
        <div className="card-dark p-7">
          <Chip>Assessment</Chip>
          <h3 className="display-3 text-on-dark-hi mt-5 text-[26px]">
            AI Readiness Assessment
          </h3>
          <p className="text-on-dark-56 mt-3 text-[15px] leading-[1.6]">
            Five dimensions, reviewed together. The output is a picture of gaps,
            risks and accelerants — not a score.
          </p>

          {/* Not numbered: the five are reviewed together, and numbering would
              imply a sequence the assessment does not have. */}
          <ul className="mt-6 space-y-2">
            {readinessDimensions.map((dimension) => (
              <li
                key={dimension.name}
                className="border-on-dark-12 bg-dark-elev/50 flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-[10px] border px-4 py-3"
              >
                <span className="text-on-dark-hi text-[14px] font-medium">
                  {dimension.name}
                </span>
                <span className="text-on-dark-56 text-[13px]">
                  {dimension.detail}
                </span>
              </li>
            ))}
          </ul>

          <a href="#contact" className="link-accent !text-accent-hi mt-6">
            Request the assessment <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="card-dark p-7">
          <Chip>Approach</Chip>
          <h3 className="display-3 text-on-dark-hi mt-5 text-[26px]">
            AI does not only mean generative AI
          </h3>
          <p className="text-on-dark-56 mt-3 text-[15px] leading-[1.6]">
            We pick the approach that fits the problem. Often that is several of
            these together.
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-2">
            {capabilities.map((capability) => (
              <li
                key={capability}
                className="border-on-dark-12 bg-dark-elev/50 text-on-dark rounded-[10px] border px-4 py-3 text-[13.5px]"
              >
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
