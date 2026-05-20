import { Link } from 'react-router-dom'
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline'

const Home = () => {
  const features = [
    { title: 'Bearing Capacity', description: 'Advanced foundation design calculations' },
    { title: 'Settlement Analysis', description: 'Precise settlement predictions' },
    { title: 'Pile Designer', description: 'Pile foundation optimization' },
    { title: 'Liquefaction Risk', description: 'Seismic risk assessment' },
    { title: 'Slope Stability', description: 'Comprehensive slope analysis' },
    { title: 'Lab Management', description: 'Complete laboratory information system' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Professional Geotechnical Engineering</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">Advanced online platform for geotechnical calculations, laboratory management, and engineering analysis</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="bg-white text-brand-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2">
              Explore Tools <ArrowRightIcon className="w-5 h-5" />
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
          <h2 className="text-4xl font-bold text-center mb-12">Powerful Engineering Tools</h2>
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

      {/* CTA Section */}
      <section className="bg-brand-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
          <p className="text-xl mb-8 text-blue-100">Join thousands of engineers using GEO TECH</p>
          <button className="bg-white text-brand-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
