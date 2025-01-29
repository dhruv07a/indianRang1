import type React from "react"
import { useState } from "react"
import "../assets/css/ProductDetail.css"
import Search from "../assets/Images/searchIcon.svg"
import Navbar from "./Navbar"

interface ProductVariant {
  id: number
  imageUrl: string
  color: string
}

interface ProductSpecification {
  label: string
  value: string
}

interface Product {
  id: number
  title: string
  price: number
  originalPrice: number
  discount: number
  rating: number
  reviews: number
  images: string[]
  variants: ProductVariant[]
  specifications: ProductSpecification[]
  stockCount: number
}

const ProductDetail: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0)

  const product: Product = {
    id: 1,
    title: "Latest Trend Yellow Silk Saree",
    price: 5059,
    originalPrice: 7999,
    discount: 35,
    rating: 4,
    reviews: 42,
    images: [
      "https://indianrang.com/cdn/shop/files/14_1.jpg?v=1712124413&width=3840%22",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    variants: [
      { id: 1, imageUrl: "https://indianrang.com/cdn/shop/files/14_1.jpg?v=1712124413&width=3840%22", color: "Yellow" },
      { id: 2, imageUrl: "https://indianrang.com/cdn/shop/files/14_1.jpg?v=1712124413&width=3840%22", color: "Pink" },
      { id: 3, imageUrl: "https://indianrang.com/cdn/shop/files/14_1.jpg?v=1712124413&width=3840%22", color: "Orange" },
    ],
    specifications: [
      { label: "Fabric", value: "Silk" },
      { label: "Type", value: "Pashmina" },
      { label: "Color", value: "Yellow" },
      { label: "Length", value: "5.5 Meter Saree With 0.80 Meter Blouse" },
      { label: "Width", value: "42 inch" },
      { label: "Occasion", value: "Wedding" },
    ],
    stockCount: 8,
  }

  return (
    <div className="container">
      <header className="header">
       <Navbar/>
      </header>
      <main>
        <div className="main-image">
          <img src={product.images[selectedImage] || "/placeholder.svg"} alt={product.title} />
          <button className="wishlist-button">
            <img src={Search || "/placeholder.svg"} alt="Add to wishlist" />
          </button>
        </div>

        <div className="thumbnail-gallery">
          {product.images.map((image, index) => (
            <button
              key={index}
              className={`thumbnail ${selectedImage === index ? "active" : ""}`}
              onClick={() => setSelectedImage(index)}
            >
              <img src={image || "/placeholder.svg"} alt={`${product.title} view ${index + 1}`} />
            </button>
          ))}
        </div>

        <div className="product-info">
          <h1 className="title">{product.title}</h1>

          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={i < product.rating ? "gold" : "none"}
                stroke="gold"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <span>({product.reviews} Reviews)</span>
          </div>

          <div className="price-container">
            <span className="current-price">₹{product.price.toLocaleString()}</span>
            <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
            <span className="discount">{product.discount}% off</span>
          </div>

          <div className="variant-gallery">
            {product.variants.map((variant) => (
              <div key={variant.id} className="variant-thumbnail">
                <img src={variant.imageUrl || "/placeholder.svg"} alt={variant.color} />
              </div>
            ))}
          </div>

          <div className="buttons">
            <button className="add-to-cart">ADD TO CART</button>
            <button className="buy-now">BUY IT NOW</button>
          </div>

          <div className="features">
            <div className="feature">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <span>7 DAY EASY RETURNS</span>
            </div>
            <div className="feature">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>AUTHENTIC & QUALITY ASSURED</span>
            </div>
            <div className="feature">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>FREE SHIPPING ALL INDIA</span>
            </div>
          </div>

          {product.stockCount < 10 && (
            <div className="stock-warning">HURRY! ONLY {product.stockCount} ITEMS LEFT IN STOCK!</div>
          )}
        </div>

        <div className="specifications">
          <h2 className="spec-title">SPECIFICATIONS</h2>
          <div className="spec-grid">
            {product.specifications
              .reduce((rows: ProductSpecification[][], spec, index) => {
                if (index % 2 === 0) rows.push([])
                rows[rows.length - 1].push(spec)
                return rows
              }, [])
              .map((row, rowIndex) => (
                <div key={rowIndex} className="spec-row">
                  {row.map((spec: ProductSpecification, colIndex) => (
                    <div key={colIndex} className="spec-item">
                      <span className="spec-label">{spec.label}</span>
                      <span className="spec-value">{spec.value}</span>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>

        <div className="product-description">
          <p>
            Explore The Designs And Elegant Patterns That Fashionably Versatile For Many Occasions. The Saree Are
            Crafted From High Quality Materials And Are Extremely Comfortable To Wear. The Hottest Trend Of This Season,
            This Silk Saree Has A Glamorous Look. If You Go To The House On The Occasion Of Puja Or Any Other
            Celebration, Then This Saree Will Definitely Make You Stand Out In The Crowd. These Saree Are Easy To Carry
            And Handle And Are Suitable For All Season.
          </p>
          <button className="share-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
            Share
          </button>
        </div>
      </main>
    </div>
  )
}

export default ProductDetail

