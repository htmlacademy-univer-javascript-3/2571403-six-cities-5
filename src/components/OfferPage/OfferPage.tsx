import { useState } from 'react';
import {Link} from 'react-router-dom';
import { OfferDescription, OfferIdDescription } from '../../types/offerDescription.ts';
import { review } from '../../types/review.ts';
import ReviewForm from '../ReviewForm/ReviewForm.tsx';
import ReviewList from '../ReviewList/ReviewList.tsx';
import OfferList from '../OfferList/OfferList.tsx';
import Map from '../Map/Map.tsx';
import { CITY } from '../../mocks/city.ts';

function OfferPage({ offer, offerList, guestReview, city}: {offer:OfferIdDescription ; offerList:OfferDescription[]; guestReview:review[];city:string}):JSX.Element{
  const [selectedPoint, setSelectedPoint] = useState<OfferDescription | undefined>(undefined);
  const handleListItemHover = (listItemId: string) => {
    const currentPoint = offerList.find((o) => o.id.toString() === listItemId);
    setSelectedPoint(currentPoint);
  };
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <Link to = "/">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </Link>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((image) => (
                <div key={image} className="offer__image-wrapper">
                  <img className="offer__image" src={image} alt="Фото студии" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium ? (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              ) : null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button className={offer.isFavorite ? 'offer__bookmark-button offer__bookmark-button--active button' : 'offer__bookmark-button button'} type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{offer.isFavorite ? 'In bookmark' : 'To bookmark'}</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${(offer.rating / 5) * 100}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--entire">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--entire">
                  Max {offer.maxAdults} Adults
                </li>
                )

              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((ins) => (
                    <li key={ins} className="offer__inside-item">
                      {ins}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  <span className="offer__user-status">
                    {offer.host.isPro}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>

                </div>
              </div>
              <section className="offer__reviews reviews">
                <ReviewList guestReview = {guestReview}/>
                <ReviewForm
                  onAnswer={() => {
                    throw new Error('Function \'onAnswer\' isn\'t implemented.');
                  }}
                />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map
              city={CITY.filter((c) => c.title === city)[0]}
              selectedOffer={offerList.filter((i) => i.id === selectedPoint?.id)[0] }
              height={579}
              width={1144}
              offerList={offerList}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferList offer={offerList.filter((o) => o.id === offer.id)} onListItemHover={handleListItemHover} isMainPage = {false} city={city}/>
          </section>
        </div>
      </main>
    </div>
  );
}
export default OfferPage;
