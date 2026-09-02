// src/components/common/Carousel.jsx
import { useEffect, useRef, useState } from 'react'

function Carousel({ children }) {
  const scrollRef = useRef(null)
  const [canScroll, setCanScroll] = useState(false)

  useEffect(() => {
    const checkOverflow = () => {
      const el = scrollRef.current
      if (!el) return
      setCanScroll(el.scrollWidth > el.clientWidth)
    }

    checkOverflow()
    window.addEventListener('resize', checkOverflow)
    return () => window.removeEventListener('resize', checkOverflow)
  }, [children])

  const scroll = (direction) => {
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative">
      {canScroll && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-kirscha-green-700 hover:bg-kirscha-green-900 transition text-kirscha-green-100 rounded-full w-10 h-10"
        >
          ‹
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {children}
      </div>

      {canScroll && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-kirscha-green-700 hover:bg-kirscha-green-900 transition text-kirscha-green-100 rounded-full w-10 h-10"
        >
          ›
        </button>
      )}
    </div>
  )
}

export default Carousel