"use client"
import { Link } from "react-router-dom"
import { Star, StarHalf } from "lucide-react"
import "../assets/css/Product.css"

interface Product {
  id: string
  title: string
  image: string
  rating: number
  reviewCount: number
  price: number
  originalPrice: number
  discount?: number
}

interface ProductGridProps {
  title: string
  products: Product[]
}

// Sample product data
const products: Product[] = [
  {
    id: "1",
    title: "Latest Trend Yellow Silk Saree",
    image: "https://indianrang.com/cdn/shop/files/14_2.jpg?v=1712124412&width=535",
    rating: 4.5,
    reviewCount: 16,
    price: 5039,
    originalPrice: 14000,
    discount: 65,
  },
  {
    id: "2",
    title: "Organza Party Wear Latest Saree",
    image: "https://indianrang.com/cdn/shop/files/14_2.jpg?v=1712124412&width=535",
    rating: 4.0,
    reviewCount: 12,
    price: 1699,
    originalPrice: 4999,
    discount: 67,
  },
  {
    id: "3",
    title: "Lycra Saree Shapewear Petticoat For Women",
    image: "https://indianrang.com/cdn/shop/files/IndianRang_Pink_1.jpg?v=1727958042&width=535",
    rating: 4.0,
    reviewCount: 8,
    price: 749,
    originalPrice: 1499,
  },
  {
    id: "4",
    title: "Lycra Saree Shapewear Petticoat For Women",
    image: "https://indianrang.com/cdn/shop/files/IndianRang_Beige_1.jpg?v=1727957214&width=535",
    rating: 4.5,
    reviewCount: 49,
    price: 749,
    originalPrice: 1499,
  },
]

function ProductCard({ product }: { product: Product }) {
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="star filled" size={16} />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="star filled" size={16} />)
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="star" size={16} />)
    }

    return stars
  }

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString("en-IN")}`
  }

  return (
    <>
    <div className="product-card" >
      <div className="product-image-container">
        <img src={product.image || "/placeholder.svg"} alt={product.title} className="product-image" />
        {product.discount && <span className="discount-badge">-{product.discount}%</span>}
        {!product.discount && product.originalPrice > product.price && <span className="sale-badge">SALE</span>}
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-rating">
          <div className="stars">{renderStars(product.rating)}</div>
          <span className="review-count">({product.reviewCount})</span>
        </div>
        <div className="product-price">
          <span className="current-price">{formatPrice(product.price)}</span>
          {product.originalPrice > product.price && (
            <span className="original-price">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
      </div>
    </div>
    
    </>
  )
}

export default function Product({ title = "Trending Products" }: Partial<ProductGridProps>) {
  return (
    <section className="product-grid-section">
      <h2 className="product-grid-title">{title}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <Link to="/productDetail" ><ProductCard key={product.id} product={product} /></Link>
        ))}
      </div>
    </section>
    
  )
}

