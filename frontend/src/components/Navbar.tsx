import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold">⬢</div>
            <span className="text-xl font-bold text-brand-primary hidden md:inline">GEO TECH</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-primary transition">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-brand-primary transition">Products</Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-primary transition">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-primary transition">Contact</Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 text-brand-primary hover:bg-blue-50 rounded-lg transition">
              Login
            </button>
            <button className="px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-blue-900 transition">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block px-2 py-2 hover:bg-gray-100 rounded">Home</Link>
            <Link to="/products" className="block px-2 py-2 hover:bg-gray-100 rounded">Products</Link>
            <Link to="/about" className="block px-2 py-2 hover:bg-gray-100 rounded">About</Link>
            <Link to="/contact" className="block px-2 py-2 hover:bg-gray-100 rounded">Contact</Link>
            <button className="w-full mt-2 px-4 py-2 bg-brand-primary text-white rounded-lg">Sign Up</button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
