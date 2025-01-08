import { Offers } from '../types.ts/offer';


export const offers: Offers = [
  {
    id: 1,
    previewImg: 'img/apartment-01.jpg',
    isPremium: true,
    price: 120,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    rating: 4.9,
  },
  {
    id: 2,
    previewImg: 'img/apartment-02.jpg',
    isPremium: false,
    price: 80,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    rating: 4.3,
  },
  {
    id: 3,
    previewImg: 'img/apartment-03.jpg',
    isPremium: true,
    price: 250,
    title: 'Beautiful House',
    type: 'house',
    rating: 4.5,
  },
  {
    id: 4,
    previewImg: 'img/room.jpg',
    isPremium: false,
    price: 35,
    title: 'Room in the hotel',
    type: 'hotel',
    rating: 3.8,
  },
];


