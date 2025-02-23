import React, { useState, useEffect } from 'react';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Sample JSON data for blogs
    const blogData = [
      { id: 1, title: 'Top 10 Real Estate Investment Tips', author: 'John Doe', date: '2024-08-10', content: 'Discover the best strategies for investing in real estate and maximizing your returns.', image: 'b1.png' },
      { id: 2, title: 'How to Choose the Perfect Home', author: 'Jane Smith', date: '2024-07-25', content: 'A comprehensive guide to help you select your dream home with confidence.', image: 'b2.png' },
      { id: 3, title: 'Understanding Property Valuation', author: 'Michael Brown', date: '2024-07-05', content: 'Learn how property valuation works and how it affects your buying or selling decisions.', image: 'b3.png' }
    ];

    setBlogs(blogData);
  }, []);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-8">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-green-600 mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-4">By {blog.author} | {blog.date}</p>
                <p className="text-gray-700 mb-4">{blog.content}</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
