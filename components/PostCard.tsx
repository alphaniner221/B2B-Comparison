
import React from 'react';
import { BlogPost } from '../types';

interface PostCardProps {
  post: BlogPost;
  isFeatured: boolean;
}

export const PostCard: React.FC<PostCardProps> = ({ post, isFeatured }) => {
  if (isFeatured) {
    return (
      <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
        <div className="lg:flex">
          <div className="lg:w-1/2">
            <img className="h-64 w-full object-cover lg:h-full transition-transform duration-300 group-hover:scale-105" src={post.imageUrl} alt={post.title} />
          </div>
          <div className="p-6 lg:p-8 flex flex-col justify-between lg:w-1/2">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{post.category}</p>
              <h3 className="mt-2 text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                <a href="#">{post.title}</a>
              </h3>
              <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt={post.author.name} />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime={post.date}>{post.date}</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white cursor-pointer">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" src={post.imageUrl} alt={post.title} />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-blue-600">
            {post.category}
          </p>
          <a href="#" className="mt-2 block">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{post.title}</h3>
            <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt={post.author.name} />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={post.date}>{post.date}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
