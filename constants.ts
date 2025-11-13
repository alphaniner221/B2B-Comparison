
import { BlogPost } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Top 10 CRM Software for Small Businesses in 2024',
    excerpt: 'Finding the right CRM can be a game-changer. We\'ve analyzed the top contenders to help you decide.',
    imageUrl: 'https://picsum.photos/seed/crm/800/600',
    author: {
      name: 'Jane Doe',
      imageUrl: 'https://picsum.photos/seed/jane/40/40',
    },
    date: 'October 26, 2023',
    category: 'Software',
    featured: true,
  },
  {
    id: 2,
    title: 'Salesforce vs. HubSpot: Which is the Ultimate Sales Platform?',
    excerpt: 'A deep dive into the features, pricing, and user experience of two of the biggest names in the sales software industry.',
    imageUrl: 'https://picsum.photos/seed/salesforce/800/600',
    author: {
      name: 'John Smith',
      imageUrl: 'https://picsum.photos/seed/john/40/40',
    },
    date: 'October 24, 2023',
    category: 'Comparison',
    featured: true,
  },
  {
    id: 3,
    title: 'The 5 Best Project Management Tools for Remote Teams',
    excerpt: 'Keep your projects on track and your team aligned, no matter where they are. Here are the top tools.',
    imageUrl: 'https://picsum.photos/seed/project/800/600',
    author: {
      name: 'Emily White',
      imageUrl: 'https://picsum.photos/seed/emily/40/40',
    },
    date: 'October 22, 2023',
    category: 'Productivity',
    featured: false,
  },
  {
    id: 4,
    title: 'Slack vs. Microsoft Teams: The Definitive B2B Communication Showdown',
    excerpt: 'Collaboration is key. We break down the pros and cons of Slack and Microsoft Teams to see which one reigns supreme.',
    imageUrl: 'https://picsum.photos/seed/slack/800/600',
    author: {
      name: 'Michael Brown',
      imageUrl: 'https://picsum.photos/seed/michael/40/40',
    },
    date: 'October 20, 2023',
    category: 'Comparison',
    featured: false,
  },
  {
    id: 5,
    title: 'Top 7 Accounting Software for Freelancers and Consultants',
    excerpt: 'Manage your finances like a pro with these powerful, user-friendly accounting tools designed for solo entrepreneurs.',
    imageUrl: 'https://picsum.photos/seed/accounting/800/600',
    author: {
      name: 'Jane Doe',
      imageUrl: 'https://picsum.photos/seed/jane/40/40',
    },
    date: 'October 18, 2023',
    category: 'Finance',
    featured: false,
  },
  {
    id: 6,
    title: 'Mailchimp vs. Constant Contact: An Email Marketing Duel',
    excerpt: 'Which email marketing platform offers the best features, deliverability, and value for your B2B marketing campaigns?',
    imageUrl: 'https://picsum.photos/seed/mailchimp/800/600',
    author: {
      name: 'Chris Green',
      imageUrl: 'https://picsum.photos/seed/chris/40/40',
    },
    date: 'October 15, 2023',
    category: 'Marketing',
    featured: false,
  },
];
