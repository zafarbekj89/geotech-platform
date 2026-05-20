const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About GEO TECH</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-4">
          GEO TECH is a professional geotechnical engineering platform designed for engineers, laboratories, and companies.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our mission is to provide advanced engineering calculations, laboratory management, and knowledge base in one integrated platform.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Professional engineering calculators</li>
          <li>Comprehensive soil properties database</li>
          <li>Laboratory management system</li>
          <li>Advanced reporting tools</li>
          <li>Multi-language support</li>
          <li>Secure payment integration</li>
        </ul>
      </div>
    </div>
  )
}

export default About
