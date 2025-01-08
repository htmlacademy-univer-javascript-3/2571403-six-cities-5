import { Review } from '../types.ts/review';

export const AVATAR_URL = 'https://i.pravatar.cc/128';


export const reviews: Review[] = [
  {
    authorAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    authorName: 'Jon Snow',
    rating: 4.5,
    review: 'Good',
  },
  {
    authorAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    authorName: 'Nevil Dolgopups',
    rating: 4.3,
    review: 'normalin',
  },
  {
    authorAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    authorName: 'Morphling',
    rating: 3.8,
    review: 'Cool',
  },
  {
    authorAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    authorName: 'Saluki',
    rating: 2.2,
    review: 'Not Cool',
  },
];
