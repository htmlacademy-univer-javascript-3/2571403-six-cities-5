import { useState } from 'react';
import OfferCard from './offer-card';
import { Offers } from '../types.ts/offer';

type OffersListProps = {
  offers: Offers;
  type: 'Main' | 'Favorites';
};

function OffersList({ offers, type }: OffersListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setActiveOfferId(id);
  };

  const handleMouseLeave = () => {
    setActiveOfferId(null);
  };

  return (
    <div className={`offers-list ${type === 'Favorites' ? 'favorites__list' : 'cities__places-list'}`}>
      {offers.map((offer) => (
        <div
          key={offer.id}
          onMouseEnter={() => handleMouseEnter(offer.id)}
          onMouseLeave={handleMouseLeave}
        >
          <OfferCard offer={offer} type={type} />
        </div>
      ))}
    </div>
  );
}

export default OffersList;
