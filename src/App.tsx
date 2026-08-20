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
 */
export default function App() {
  return (
    <>
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
    </>
  )
}
