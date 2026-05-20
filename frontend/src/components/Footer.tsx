import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">⬢</div>
              <span className="text-xl font-bold">GEO TECH</span>
            </div>
            <p className="text-gray-400 text-sm">Professional Geotechnical Engineering SaaS Platform</p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white">Calculators</Link></li>
              <li><Link to="/" className="hover:text-white">Database</Link></li>
              <li><Link to="/" className="hover:text-white">Lab Management</Link></li>
              <li><Link to="/" className="hover:text-white">Reports</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/" className="hover:text-white">Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white">Privacy</Link></li>
              <li><Link to="/" className="hover:text-white">Terms</Link></li>
              <li><Link to="/" className="hover:text-white">License</Link></li>
              <li><Link to="/" className="hover:text-white">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} GEO TECH. All rights reserved. | Website: geotech.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
