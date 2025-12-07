import { AppLink } from './types';

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
    id: 'clause-explorer',
    title: 'Clause Explorer',
    url: 'https://clause-explorer.vercel.app/',
    category: 'English',
    description: 'Explore the structure of sentences by identifying main and subordinate clauses.',
    icon: '🔍',
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
    color: 'amber'
  },
  {
    id: 'rounding-rollercoaster',
    title: 'Rounding Rollercoaster',
    url: 'https://greattrog.github.io/Rounding-Rollercoaster/',
    category: 'Maths',
    description: 'Ride the highs and lows while learning how to round numbers correctly.',
    icon: '🎢',
    color: 'purple'
  },
  {
    id: 'factor-bugs',
    title: 'Factor Bugs',
    url: 'https://greattrog.github.io/Factor-Bugs/',
    category: 'Maths',
    description: 'Catch the bugs by finding the factors! A creepy-crawly maths game.',
    icon: '🐞',
    color: 'green'
  },
  {
    id: 'fraction-addition',
    title: 'Fraction Action',
    url: 'https://fraction-addition-and-subtraction.vercel.app/',
    category: 'Maths',
    description: 'Master addition and subtraction of fractions with this helpful tool.',
    icon: '🍰',
    color: 'cyan'
  },
  {
    id: 'ddc-suggester',
    title: 'Librarian DDC Helper',
    url: 'https://greattrog.github.io/Primary-School-Librarian-DDC-Suggester/',
    category: 'Admin',
    description: 'A handy tool for the library to help suggest Dewey Decimal Classifications.',
    icon: '📚',
    color: 'slate'
  }
];

export const CATEGORIES: { label: string; value: import('./types').Category; color: string }[] = [
  { label: 'All Apps', value: 'All', color: 'indigo' },
  { label: 'Maths Magic', value: 'Maths', color: 'blue' },
  { label: 'English Epic', value: 'English', color: 'red' },
  { label: 'Tools', value: 'Admin', color: 'slate' },
];