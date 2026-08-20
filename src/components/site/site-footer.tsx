import { Reveal } from '@/components/site/reveal'
import logo from '@/assets/brand/snowfox-logo-light-bg.png'

/**
 * Footer. Deliberately thin: no address, phone or email appears on
 * snowfox-ai.com, and none is invented here. Add them once they are confirmed.
 */
const columns = [
  {
    heading: 'Services',
    links: [
      { name: 'AI consulting', href: '#services' },
      { name: 'MLOps', href: '#services' },
      { name: 'MLaaS', href: '#services' },
      { name: 'Data-driven strategy', href: '#services' },
      { name: 'Data engineering', href: '#services' },
      { name: 'Big data consulting', href: '#services' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { name: 'Generative AI', href: '#solutions' },
      { name: 'Computer vision', href: '#solutions' },
      { name: 'Natural language processing', href: '#solutions' },
      { name: 'Agritech', href: '#solutions' },
      { name: 'segMENTOR', href: '#solutions' },
      { name: 'priceGURU', href: '#solutions' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { name: 'How we work', href: '#approach' },
      { name: 'Success cases', href: '#cases' },
      { name: 'Clients', href: '#clients' },
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '#contact' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-canvas-alt border-ink-12 border-t">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16">
        <Reveal className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <img
              src={logo}
              alt="Snowfox AI"
              width={3536}
              height={561}
              className="h-[22px] w-auto"
            />
            <p className="text-ink-56 mt-5 max-w-[34ch] text-[14px] leading-[1.6]">
              Data and artificial intelligence applied to real business
              problems. Working from Canada and Brazil, now expanding into the
              United States.
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <p className="label text-ink-32">{column.heading}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-ink-56 hover:text-ink text-[14px] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </Reveal>

        <div className="border-ink-12 mt-14 flex flex-wrap items-center justify-between gap-4 border-t pt-6">
          <p className="text-ink-32 text-[13px]">
            © {new Date().getFullYear()} Snowfox AI. All rights reserved.
          </p>
          <p className="label text-ink-32">AI and data, applied</p>
        </div>
      </div>
    </footer>
  )
}
