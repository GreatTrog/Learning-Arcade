export type Category = 'All' | 'Maths' | 'English' | 'Admin';

export interface AppLink {
  id: string;
  title: string;
  url: string;
  category: Category;
  description: string;
  icon: string; // Emoji or icon name
  color: string; // Tailwind color class base (e.g., 'blue', 'red')
}