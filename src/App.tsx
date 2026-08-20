import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { Outcomes } from '@/components/site/outcomes'
import { Services } from '@/components/site/services'
import { Solutions } from '@/components/site/solutions'
import { Approach } from '@/components/site/approach'
import { Cases } from '@/components/site/cases'
import { Testimonials } from '@/components/site/testimonials'
import { About } from '@/components/site/about'
import { Contact } from '@/components/site/contact'
import { SiteFooter } from '@/components/site/site-footer'
import { LazyMotion, domAnimation } from 'framer-motion'
import { useSmoothScroll } from '@/lib/use-smooth-scroll'

/**
 * Page order follows the argument the old site makes, tightened:
 * what you get (outcomes) → what we do (services, solutions) → how we do it
 * and where to start (the dark band) → proof (cases, clients) → who we are
 * (about) → the ask (contact).
 *
 * Background tones alternate warm → canvas → alt → canvas → DARK → canvas →
 * alt → canvas → warm. There are no rules between bands; the tone step is the
 * only separator, and the single dark band sits deliberately at ~two-thirds
 * depth. Changing a section's tone means re-checking that rhythm.
 *
 * Motion is layered on top of that rhythm rather than replacing it: momentum
 * scrolling is installed once here, and each band reveals its own contents on
 * entry (see components/site/reveal.tsx). Both stand down completely under
 * prefers-reduced-motion.
 *
 * LazyMotion + the `m` component keep framer-motion's full feature set out of
 * the bundle. `domAnimation` covers everything this page uses — variants,
 * viewport triggers and hover — but NOT layout animation or drag. `strict`
 * makes a stray `motion.*` import throw at runtime rather than silently
 * pulling the full library back in, which is the whole point of the split.
 */
export default function App() {
  useSmoothScroll()

  return (
    <LazyMotion features={domAnimation} strict>
      <SiteHeader />
      <main>
        <Hero />
        <Outcomes />
        <Services />
        <Solutions />
        <Approach />
        <Cases />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </LazyMotion>
  )
}
