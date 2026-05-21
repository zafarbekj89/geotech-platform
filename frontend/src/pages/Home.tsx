import { Link } from 'react-router-dom'
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline'

const Home = () => {
  const features = [
    { title: 'Beautiful Website', description: 'Professional tanishtiruv sayti' },
    { title: 'E-Commerce', description: 'Complete shopping system' },
    { title: 'Multi-Language', description: 'UZ, EN, RU support' },
    { title: 'Payment System', description: 'Stripe, Click, Payme' },
    { title: 'User Accounts', description: 'Register, Login, Profile' },
    { title: 'Real-Time Tracking', description: 'Development progress dashboard' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">GEO TECH Platform</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">Professional Geotechnical Engineering Website</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="bg-white text-brand-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2">
              View Products <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-brand-primary transition">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mb-4">
                  <CheckIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Status */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Development Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border-2 border-green-500 rounded-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-2">✅ Frontend</h3>
              <p className="text-gray-600 mb-4">80% Complete</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="h-3 rounded-full bg-green-500" style={{ width: '80%' }} />
              </div>
            </div>
            <div className="p-8 border-2 border-yellow-500 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">⏳ Backend</h3>
              <p className="text-gray-600 mb-4">50% Complete</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="h-3 rounded-full bg-yellow-500" style={{ width: '50%' }} />
              </div>
            </div>
            <div className="p-8 border-2 border-blue-500 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">📊 Tracking</h3>
              <p className="text-gray-600 mb-4">Real-Time Updates</p>
              <Link to="/progress" className="text-blue-600 hover:text-blue-800 font-bold">
                View Progress →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Live Editor Studio</h2>
          <p className="text-xl text-gray-600 mb-8">Test and preview changes in real-time</p>
          <Link to="/studio" className="inline-block bg-brand-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-900 transition">
            Open Studio
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">Join our platform today</p>
          <button className="bg-white text-brand-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
