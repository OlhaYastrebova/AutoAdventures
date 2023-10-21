import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from './components/styles/index';
import { App } from './components/App/index';
import "./index.css";

const modalRoot = document.createElement('div');
modalRoot.id = 'modal-root';
document.body.appendChild(modalRoot);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyles} />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/AutoAdventures">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ThemeProvider>
  
);
