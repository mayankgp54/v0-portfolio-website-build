'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  end: number | string
  duration?: number
  suffix?: string
}

export function AnimatedCounter({ end, duration = 2000, suffix = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const isString = typeof end === 'string'

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible || isString) return

    let startTime: number
    const endNum = end as number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / duration
      const currentCount = Math.floor(endNum * progress)
      setCount(Math.min(currentCount, endNum))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration, isString])

  return (
    <div ref={ref}>
      {isString ? end : count}
      {suffix}
    </div>
  )
}
