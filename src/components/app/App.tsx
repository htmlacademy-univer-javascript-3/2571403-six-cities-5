import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AutorizationStatus } from './const';
import LoginPage from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/notFound';
import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import PrivateRoute from '../private-route/PrivateRoute';
import { HelmetProvider } from 'react-helmet-async';

import { offers } from '../../mocks/offers';


type AppScreenProps = {
    offerCount: number;
}


function App({offerCount,}: AppScreenProps):JSX.Element {

  return(
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main offerCount={offerCount} offers = {offers} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                autorizationStatus={AutorizationStatus.Auth}
              >
                <Favorites offers={offers} />
              </PrivateRoute>
            }
          />
          <Route
            path='*'
            element={<NotFound/>}
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
