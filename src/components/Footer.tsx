"use client"

import { useState } from "react"
import { Facebook, Instagram, Youtube, Send, Phone, Mail, MessageCircle } from "lucide-react"
import "../assets/css/Footer.css"

interface FooterLink {
  text: string
  href: string
}

interface SocialLink {
  icon: JSX.Element
  href: string
  label: string
}

const storeLinks: FooterLink[] = [
  { text: "About Us", href: "#" },
  { text: "Blog", href: "#" },
  { text: "Privacy Policy", href: "#" },
  { text: "Refund Policy", href: "#" },
  { text: "Terms of Service", href: "#" },
  { text: "Contact Us", href: "#" },
  { text: "Customization Charges", href: "#" },
  { text: "Payment Policy", href: "#" },
  { text: "Returns", href: "#" },
  { text: "Shipping", href: "#" },
  { text: "Terms & conditions", href: "#" },
]

const socialLinks: SocialLink[] = [
  { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
  { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
]

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>CONTACT US</h3>
          <div className="contact-info">
            <div className="contact-item">
              <Phone size={16} />
              <span>Call Us : +91 93303 32339</span>
            </div>
            <div className="contact-item">
              <MessageCircle size={16} />
              <span>Whats App: +91 93303 32339</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span>Email us : support@indianrang.com</span>
            </div>
          </div>
          <p className="business-info">Legal Business : DEEPJYOTI CREATION</p>
          <p className="business-hours">( 9AM - 6 PM | MON - SAT )</p>
        </div>

        <div className="footer-section">
          <h3>STORE POLICY</h3>
          <ul className="footer-links">
            {storeLinks.map((link) => (
              <li key={link.text}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>ABOUT INDIAN RANG</h3>
          <p className="about-text">
            "Welcome to IndianRang.com, your premier destination for exquisite sarees, luxurious silk sarees, trendy
            blouses, and a captivating collection of dresses. Explore our latest arrivals. Don't miss out on our
            exclusive sales, where you can indulge in the finest Indian fashion at unbeatable prices!"
          </p>
        </div>

        <div className="footer-section">
          <h3>EXCLUSIVE BENEFITS</h3>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email here"
                required
              />
              <button type="submit" aria-label="Subscribe">
                <Send size={16} />
              </button>
            </div>
          </form>
          <p className="benefits-text">Apply for our free membership to receive exclusive deals, news, and events.</p>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label} className="social-link">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025, Indianrang - Online fashion & lifestyle store</p>
      </div>
    </footer>
  )
}

