import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';


// eslint-disable-next-line react-refresh/only-export-components
const Setting = {
  OfferCount: 312,
} as const;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offerCount = {Setting.OfferCount}></App>
  </React.StrictMode>
);
