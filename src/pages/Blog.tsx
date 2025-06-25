import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Horse Health', 'Management Tips', 'BarnBoss Updates', 'Training', 'Nutrition'];

  const blogPosts = [
    {
      id: 1,
      title: '5 Early Warning Signs of Colic Every Horse Owner Should Know',
      excerpt: 'Colic is one of the most serious conditions affecting horses. Learn to identify the early warning signs that could save your horse\'s life.',
      author: 'BarnBoss Staff',
      date: '2025-01-15',
      readTime: '6 min read',
      category: 'Horse Health',
      image: 'https://images.pexels.com/photos/3662870/pexels-photo-3662870.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      id: 2,
      title: 'How to Optimize Your Stable Task Management for Maximum Efficiency',
      excerpt: 'Discover proven strategies to streamline your daily operations and boost productivity using modern task management techniques.',
      author: 'BarnBoss Staff',
      date: '2025-01-12',
      readTime: '8 min read',
      category: 'Management Tips',
      image: 'https://images.pexels.com/photos/3663912/pexels-photo-3663912.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 3,
      title: 'BarnBoss 2.1 Update: New AI Health Insights and Improved Billing',
      excerpt: 'Our latest update brings enhanced AI-powered health recommendations and streamlined billing features based on user feedback.',
      author: 'BarnBoss Staff',
      date: '2025-01-10',
      readTime: '4 min read',
      category: 'BarnBoss Updates',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 4,
      title: 'Understanding Laminitis: Causes, Prevention, and Treatment',
      excerpt: 'A comprehensive guide to one of the most common yet serious conditions affecting horses, with expert insights from veterinary specialists.',
      author: 'BarnBoss Staff',
      date: '2025-01-08',
      readTime: '10 min read',
      category: 'Horse Health',
      image: 'https://images.pexels.com/photos/3662826/pexels-photo-3662826.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 5,
      title: 'Building Trust: Best Practices for Owner-Stable Communication',
      excerpt: 'Learn how transparent communication and regular updates can strengthen relationships with horse owners and grow your business.',
      author: 'BarnBoss Staff',
      date: '2025-01-05',
      readTime: '7 min read',
      category: 'Management Tips',
      image: 'https://images.pexels.com/photos/3094334/pexels-photo-3094334.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 6,
      title: 'Winter Horse Care: Essential Tips for Cold Weather Management',
      excerpt: 'Prepare your horses for winter with this comprehensive guide covering nutrition, shelter, and health considerations for cold weather.',
      author: 'BarnBoss Staff',
      date: '2025-01-03',
      readTime: '9 min read',
      category: 'Horse Health',
      image: 'https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const getArticleLink = (id: number) => {
    const linkMap: { [key: number]: string } = {
      1: '/blog/colic-signs',
      2: '/blog/task-management',
      3: '/blog/barnboss-update',
      4: '/blog/laminitis-guide',
      5: '/blog/communication',
      6: '/blog/winter-care'
    };
    return linkMap[id] || '#';
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              BarnBoss{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-green-600">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert insights on horse health, stable management, and industry best practices 
              to help you provide the best care for your horses.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-amber-600 text-white'
                        : 'bg-white text-gray-600 border border-gray-300 hover:bg-amber-50 hover:border-amber-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-amber-600 to-green-600 rounded-2xl p-1">
              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Featured Article
                      </span>
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Link to="/blog/colic-signs" className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-200 font-medium flex items-center group w-fit">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="relative">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Link to={getArticleLink(post.id)} className="text-amber-600 hover:text-amber-700 font-medium flex items-center group/btn">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest equine insights, BarnBoss updates, and expert tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-amber-500"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-200 font-semibold">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>

      {/* Related Topics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Topics</h2>
            <p className="text-xl text-gray-600">Explore our most-read content categories</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Colic Prevention', count: '12 articles' },
              { name: 'Stable Management', count: '18 articles' },
              { name: 'Training Tips', count: '15 articles' },
              { name: 'Nutrition Guide', count: '9 articles' },
              { name: 'Hoof Care', count: '8 articles' },
              { name: 'Breeding Basics', count: '11 articles' },
              { name: 'Winter Care', count: '6 articles' },
              { name: 'First Aid', count: '14 articles' }
            ].map((topic, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center space-x-2">
                  <Tag className="h-4 w-4 text-amber-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">{topic.name}</h3>
                    <p className="text-sm text-gray-500">{topic.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Learn More and Manage Smarter
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Apply these insights to your own operation with BarnBoss's comprehensive management tools.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-200 font-semibold shadow-lg">
            Sign Up Free
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog;