function About() {
  return (
    <main className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            About CreaZone
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              CreaZone is a creative playground for digital products, where creators can discover, 
              buy, and sell hand-crafted assets. We believe in empowering creators and providing 
              a platform that celebrates creativity and innovation.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              What We Offer
            </h2>
            <ul className="text-gray-600 space-y-2">
              <li>• Planners and Calendars</li>
              <li>• Digital Art and Printables</li>
              <li>• Templates and Design Assets</li>
              <li>• E-books and Educational Content</li>
              <li>• And much more!</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Whether you're looking to discover amazing digital products or share your own 
              creations with the world, CreaZone is the perfect place for you. Join our 
              growing community of creators and start your creative journey today.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
