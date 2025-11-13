
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: {
    name: string;
    imageUrl: string;
  };
  date: string;
  category: string;
  featured?: boolean;
}
