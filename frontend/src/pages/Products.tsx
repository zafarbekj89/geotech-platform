const Products = () => {
  const products = [
    { id: 1, name: 'Bearing Capacity Calculator', price: '$29', category: 'Tools' },
    { id: 2, name: 'Settlement Analysis Pro', price: '$49', category: 'Tools' },
    { id: 3, name: 'Soil Database License', price: '$99', category: 'Database' },
    { id: 4, name: 'Lab Management System', price: '$199', category: 'Lab' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Products & Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-6 hover:shadow-lg transition">
            <span className="text-sm text-brand-primary font-bold">{product.category}</span>
            <h3 className="text-xl font-bold mt-2 mb-4">{product.name}</h3>
            <p className="text-3xl font-bold text-brand-primary mb-4">{product.price}</p>
            <button className="w-full bg-brand-primary text-white py-2 rounded-lg hover:bg-blue-900 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
