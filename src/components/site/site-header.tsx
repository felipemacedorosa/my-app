import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import logo from '@/assets/brand/snowfox-logo-light-bg.png'

const nav = [
  { name: 'Services', href: '#services' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'How we work', href: '#approach' },
  { name: 'Success cases', href: '#cases' },
  { name: 'About', href: '#about' },
]

/**
 * Header.
 *
 * Follows the reference exactly in structure: mark on the left, nav as
 * low-contrast 14px pill links in the middle, and a two-button cluster on the
 * right where the outline button is the softer ask. It is transparent over the
 * hero and picks up a blur + hairline only once the page has scrolled, so the
 * hero reads as full-bleed.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-200',
        scrolled
          ? 'border-ink-12 bg-canvas-warm/85 border-b backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-6 px-6">
        <a href="#top" className="shrink-0" aria-label="Snowfox AI — home">
          <img
            src={logo}
            alt="Snowfox AI"
            width={3536}
            height={561}
            className="h-[22px] w-auto"
          />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="rounded-pill text-ink hover:bg-ink-12 block px-3 py-1.5 text-sm transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a href="#contact" className="btn btn-outline !px-3 !py-1.5 text-sm">
            Talk to a specialist
          </a>
          <a href="#contact" className="btn btn-primary !px-3 !py-1.5 text-sm">
            Book an intro call
          </a>
        </div>
      </div>
    </header>
  )
}
