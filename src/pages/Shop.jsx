import { useState } from 'react'
import { HiShoppingCart } from 'react-icons/hi'

function Shop() {
  const [cartItems, setCartItems] = useState(0)

  // Sample products data
  const products = [
    {
      id: 1,
      name: "Digital Planner 2024",
      price: "$19.99",
      image: "https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=Digital+Planner",
      category: "Planners"
    },
    {
      id: 2,
      name: "Creative Calendar Template",
      price: "$14.99",
      image: "https://via.placeholder.com/300x200/10B981/FFFFFF?text=Calendar+Template",
      category: "Calendars"
    },
    {
      id: 3,
      name: "Abstract Art Collection",
      price: "$24.99",
      image: "https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Abstract+Art",
      category: "Art"
    },
    {
      id: 4,
      name: "Printable Stickers Pack",
      price: "$9.99",
      image: "https://via.placeholder.com/300x200/EF4444/FFFFFF?text=Stickers",
      category: "Printables"
    },
    {
      id: 5,
      name: "Business Card Template",
      price: "$12.99",
      image: "https://via.placeholder.com/300x200/8B5CF6/FFFFFF?text=Business+Card",
      category: "Templates"
    },
    {
      id: 6,
      name: "E-book: Creative Writing Guide",
      price: "$29.99",
      image: "https://via.placeholder.com/300x200/06B6D4/FFFFFF?text=E-book",
      category: "E-books"
    }
  ]

  const addToCart = () => {
    setCartItems(prev => prev + 1)
  }

  return (
    <main className="background">
      <section className="shop-section">
        <div>
          
        </div>

      </section>
    </main>
  )
}

export default Shop
