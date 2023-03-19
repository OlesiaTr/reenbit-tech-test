// Core
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Components
import { App } from 'components/App';
import { UserContextProvider } from 'context/userContext';

// Style
import './fonts.css';
import { GlobalStyle } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/reenbit-tech-test">
      <UserContextProvider>
        <App />
        <GlobalStyle />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
