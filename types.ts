export type Category = 'All' | 'Maths' | 'English' | 'Admin' | 'Science' | 'History';

export interface AppLink {
  id: string;
  title: string;
  url: string;
  category: Category;
  description: string;
  icon: string; // Emoji or icon name
  image?: string; // Optional image URL
  color: string; // Tailwind color class base (e.g., 'blue', 'red')
}