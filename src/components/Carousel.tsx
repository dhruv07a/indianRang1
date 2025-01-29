"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "../assets/css/Carousel.css"

interface CarouselSlide {
  id: number
  image: string
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ptTuVCfqCN6zlsF8m5DR5Gq5iZmTIm.png",
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ptTuVCfqCN6zlsF8m5DR5Gq5iZmTIm.png",
  },
  {
    id: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ptTuVCfqCN6zlsF8m5DR5Gq5iZmTIm.png",
  },
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000) // Auto-slide every 5 seconds
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
            }}
          >
            <img src={slide.image || "/placeholder.svg"} alt={`Slide ${slide.id}`} className="carousel-image" />
            {index === currentSlide && (
              <div className="carousel-overlay">
                <div className="carousel-text">
                  <h2>Silk Sarees</h2>
                  <h1>COLLECTION</h1>
                  <p>Exclusive Fashion Wear</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="carousel-button prev" onClick={prevSlide} aria-label="Previous slide">
        <ChevronLeft size={20} />
      </button>
      <button className="carousel-button next" onClick={nextSlide} aria-label="Next slide">
        <ChevronRight size={20} />
      </button>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

