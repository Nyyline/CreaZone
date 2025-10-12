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
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Shop Digital Products
          </h1>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-gray-800">
              <HiShoppingCart className="w-6 h-6" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                <p className="text-2xl font-bold text-blue-600 mb-4">{product.price}</p>
                <button 
                  onClick={addToCart}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Shop
