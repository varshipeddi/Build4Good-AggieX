import { useRef } from 'react'
import { gsap, MotionPathPlugin, useGSAP } from '../lib/gsap'

function PaperPlaneAnimation() {
  const containerRef = useRef(null)

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      if (prefersReduced) return

      const plane = containerRef.current.querySelector('.pp-plane')
      const message = containerRef.current.querySelector('.pp-message')
      const flightPath = containerRef.current.querySelector('#flight-path')

      if (!plane || !flightPath) return

      gsap.set(plane, {
        xPercent: -50,
        yPercent: -50,
        scale: 0.8,
        opacity: 0,
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      })

      tl.to(plane, {
        opacity: 1,
        scale: 1,
        duration: 0.08,
        ease: 'power2.out',
      })
        .to(
          plane,
          {
            motionPath: {
              path: flightPath,
              align: flightPath,
              alignOrigin: [0.5, 0.5],
              autoRotate: true,
            },
            duration: 0.7,
            ease: 'none',
          },
          0.04,
        )
        .fromTo(
          message,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.12,
            ease: 'power2.out',
          },
          0.3,
        )
        .to(
          message,
          { opacity: 0, y: -30, duration: 0.1, ease: 'power2.in' },
          0.65,
        )
        .to(
          plane,
          { scale: 0.5, opacity: 0, duration: 0.12, ease: 'power2.in' },
          0.72,
        )
    },
    { scope: containerRef },
  )

  return (
    <section className="pp-section" ref={containerRef}>
      <div className="pp-canvas">
        <svg
          className="pp-svg"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <path
            id="flight-path"
            d="M -80,500
               C 50,420 150,200 280,180
               C 410,160 350,400 500,350
               C 650,300 600,120 750,150
               C 900,180 850,380 1000,300
               C 1100,240 1150,200 1300,100"
            fill="none"
            stroke="none"
          />
        </svg>
        <img
          src="/assets/paper-plane.png"
          alt=""
          aria-hidden="true"
          className="pp-plane"
          width="120"
          height="100"
        />
        <div className="pp-message">
          <p className="pp-tag">Your applications</p>
          <h2 className="pp-headline">Taking Flight</h2>
        </div>
      </div>
    </section>
  )
}

export default PaperPlaneAnimation
