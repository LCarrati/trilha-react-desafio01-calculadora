import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DisplayProvider } from './components/Reducer';


import GlobalStyles from './global';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <DisplayProvider>
      <App />
    </DisplayProvider>
  </React.StrictMode>
);