export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to <span className="text-primary">My Blog</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover insightful articles, tutorials, and stories about web development, technology, and more.
        </p>
      </section>

      {/* Blog Posts Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for blog posts */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-r from-primary to-primary-dark"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Coming Soon</h3>
              <p className="text-gray-600 mb-4">Blog posts will appear here once published.</p>
              <span className="text-primary font-medium">Read more →</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}