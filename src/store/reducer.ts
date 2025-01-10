import {createReducer} from '@reduxjs/toolkit';
import { offer } from '../mocks/offers';
import {changeCityAction} from './cityAction.ts';
import { offerFillAction } from './cityAction.ts';

const initialCityState = {
  city:'Paris',
  offerlist: offer.filter((o) => o.city === 'Paris')[0],
};

const reducer = createReducer(initialCityState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      const city = action.payload;
      state.city = city.title;
    })
    .addCase(offerFillAction, (state,action) => {
      const cityOffer = action.payload;
      state.offerlist = cityOffer;
    });
});

export {reducer};