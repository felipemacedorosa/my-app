import { useEffect } from 'react'
import Lenis from 'lenis'

/*
  Momentum scrolling.

  Native wheel scroll is a step function — each notch jumps the page a fixed
  distance with no interpolation. Lenis intercepts the wheel and drives the
  real scroll position toward the target on an exponential curve, which is
  what turns those steps into continuous movement.

  It drives the ACTUAL window scroll (not a transform on a wrapper), so
  everything that reads `window.scrollY` keeps working untouched: the
  header's scrolled state, framer-motion's `useScroll`, native anchor
  targeting, and the browser's own scroll restoration.
*/

/** Roughly how long the page keeps travelling after the wheel stops. */
const DURATION = 1.1

export function useSmoothScroll() {
  useEffect(() => {
    // Read once, imperatively, rather than through useReducedMotion: this
    // decides whether to construct Lenis at all, and a hook-driven value
    // would mean tearing the instance down and back up on every change.
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (query.matches) return

    const lenis = new Lenis({
      duration: DURATION,
      // Exponential ease-out. Same shape as the reveal curve in motion.ts —
      // the page decelerates the way its content arrives.
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Let Lenis own in-page #hash links. Without this the browser jumps
      // the anchor instantly and fights the interpolation mid-flight.
      anchors: { offset: -64 },
    })

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])
}
