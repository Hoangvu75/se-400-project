import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginPage } from '../../login/src/main';
import { RegisterPage } from '../../register/src/main';
import { LandingPage } from '../../landing-page/src/main';
import { Provider } from 'react-redux';
import { reduxStore } from '@react-monorepo/store';
import { JobPage } from '../../job-page/src/main';
import { JobDetailsPage } from '../../job-details-page/src/main';
import { SearchResultsPage } from '../../search-result-page/src/main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={reduxStore}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/job" element={<JobPage />} />
          <Route path="/job-details" element={<JobDetailsPage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
