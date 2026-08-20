import { Section, Eyebrow, TwoTone } from '@/components/site/section'
import { testimonials } from '@/content/site'

/**
 * Client quotes, reproduced as published rather than rewritten — these are
 * attributed to named people, and editing someone's words for style would
 * misrepresent them however clumsy the original translation.
 *
 * snowfox-ai.com does not state which company each person works for, so no
 * affiliation and no avatar is shown. Inventing either is off-limits.
 */
export function Testimonials() {
  return (
    <Section id="clients" tone="alt">
      <div className="flex flex-col items-center text-center">
        <Eyebrow>In their words</Eyebrow>
        <TwoTone
          className="mt-5"
          lead="What clients say"
          accent="about the work."
        />
      </div>

      <div className="mt-16 columns-1 gap-4 md:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="card-light p-7"
          >
            <blockquote className="text-ink text-[15px] leading-[1.65]">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="border-ink-12 mt-6 flex items-baseline gap-2 border-t pt-4">
              <span className="text-ink text-[14px] font-medium">
                {testimonial.name}
              </span>
              <span className="text-ink-32 text-[13px]">
                {testimonial.role}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
