import { AppLink, Category } from './types';

export const APPS: AppLink[] = [
  {
    id: 'capital-crusaders',
    title: 'Capital Crusaders',
    url: 'https://greattrog.github.io/Capital_Crusaders/',
    category: 'English',
    description: 'Join the crusade to master capital letters! A fun adventure for improving punctuation.',
    icon: '🏰',
    color: 'red'
  },
  {
    id: 'grammar-explorer',
    title: 'Grammar Explorer',
    url: 'https://grammar-explorer-6n6pejk2v-james-mansells-projects.vercel.app/',
    category: 'English',
    description: 'Master sentence structure, word classes, and punctuation in this comprehensive grammar guide.',
    icon: '🔍',
    color: 'red'
  },
  {
    id: 'grammar-stars',
    title: 'Grammar Stars',
    url: 'https://grammar-stars.vercel.app/',
    category: 'English',
    description: 'A 10-minute daily grammar boost to help you master key concepts.',
    icon: '⭐',
    color: 'red'
  },
  {
    id: 'write-together',
    title: 'WriteTogether',
    url: 'https://write-together-web.vercel.app/',
    category: 'English',
    description: 'Collaborative writing tools and activities to help students build better sentences together.',
    icon: '✍️',
    color: 'red'
  },
  {
    id: 'ks2-maths',
    title: 'KS2 Arithmetic Practice',
    url: 'https://greattrog.github.io/ks2-maths-sats-arithmetic-practice/',
    category: 'Maths',
    description: 'Get ready for SATs with these rapid-fire arithmetic challenges.',
    icon: '➗',
    color: 'blue'
  },
  {
    id: 'roman-numerals',
    title: 'Roman Numeral Workshop',
    url: 'https://greattrog.github.io/Roman-Numeral-Workshop/',
    category: 'Maths',
    description: 'Travel back to ancient Rome and master the art of Roman Numerals.',
    icon: '🏛️',
    color: 'blue'
  },
  {
    id: 'rounding-rollercoaster',
    title: 'Rounding Rollercoaster',
    url: 'https://greattrog.github.io/Rounding-Rollercoaster/',
    category: 'Maths',
    description: 'Ride the highs and lows while learning how to round numbers correctly.',
    icon: '🎢',
    color: 'blue'
  },
  {
    id: 'factor-bugs',
    title: 'Factor Bugs',
    url: 'https://greattrog.github.io/Factor-Bugs/',
    category: 'Maths',
    description: 'Catch the bugs by finding the factors! A creepy-crawly maths game.',
    icon: '🐞',
    color: 'blue'
  },
  {
    id: 'fraction-addition',
    title: 'Fraction Action',
    url: 'https://fraction-addition-and-subtraction.vercel.app/',
    category: 'Maths',
    description: 'Master addition and subtraction of fractions with this helpful tool.',
    icon: '🍰',
    color: 'blue'
  },
  {
    id: 'ratio-explorer',
    title: 'Ratio Explorer',
    url: 'https://ratio-explorer.vercel.app/',
    category: 'Maths',
    description: 'Explore and understand ratios through interactive visualisations and practice.',
    icon: '⚖️',
    color: 'blue'
  },
  {
    id: 'fairground-ticket-machine',
    title: 'Fairground Ticket Machine',
    url: 'https://fairground-ticket-machine.vercel.app/',
    category: 'Maths',
    description: 'Master money and change with this fairground-themed arithmetic challenge.',
    icon: '🎟️',
    color: 'blue'
  },
  {
    id: 'ddc-suggester',
    title: 'Librarian DDC Helper',
    url: 'https://greattrog.github.io/Primary-School-Librarian-DDC-Suggester/',
    category: 'Admin',
    description: 'A handy tool for the library to help suggest Dewey Decimal Classifications.',
    icon: '📚',
    color: 'orange'
  },
  {
    id: 'voltage-voyager',
    title: 'Voltage Voyager',
    url: 'https://voltage-voyager.vercel.app/',
    category: 'Science',
    description: 'Embark on an interactive journey to master the principles of electricity and circuits.',
    icon: '⚡',
    color: 'green'
  }
];

export const CATEGORIES: { label: string; value: Category; color: string }[] = [
  { label: 'All Apps', value: 'All', color: 'indigo' },
  { label: 'Maths Magic', value: 'Maths', color: 'blue' },
  { label: 'English Epic', value: 'English', color: 'red' },
  { label: 'Science Spark', value: 'Science', color: 'green' },
  { label: 'Tools', value: 'Admin', color: 'orange' },
];