import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginPage } from '../../login/src/main';
import { RegisterPage } from '../../register/src/main';
import { LandingPage } from '../../landing-page/src/main';
import { Provider } from 'react-redux';
import { reduxStore } from '@react-monorepo/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={reduxStore}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </Provider>
);