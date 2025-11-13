
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PostCard } from './components/PostCard';
import { Footer } from './components/Footer';
import { BLOG_POSTS } from './constants';
import { BlogPost } from './types';

const App: React.FC = () => {
  const featuredPosts = BLOG_POSTS.filter(post => post.featured);
  const regularPosts = BLOG_POSTS.filter(post => !post.featured);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Featured Posts Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Featured Insights</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {featuredPosts.map((post: BlogPost) => (
                <PostCard key={post.id} post={post} isFeatured={true} />
              ))}
            </div>
          </section>

          {/* Latest Posts Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Latest Comparisons</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post: BlogPost) => (
                <PostCard key={post.id} post={post} isFeatured={false} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
