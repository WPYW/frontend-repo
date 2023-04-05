import React, { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { Header } from '@/components/blocks';
import { LoadingDots } from '@/components/atoms';
import { DetailModal as PromoteProjectDetailModal } from '@/components/organisms/PromoteProject';

const LoginPage = lazy(() => import('@/pages/LoginPage'));
const MainPage = lazy(() => import('@/pages/MainPage'));

export default function App() {
  const location = useLocation();

  const background = location.state && location.state.background;

  const state = location.state as { backgroundLocation?: Location };

  return (
    <div id="App">
      <Header />
      <Suspense fallback={<LoadingDots />}>
        <Routes location={location}>
          <Route path="*" element={<div>404 Not Found</div>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MainPage />}>
            {background && <Route path="/projects/:id" element={<PromoteProjectDetailModal />} />}
          </Route>
        </Routes>
        {state?.backgroundLocation && (
          <Routes>
            <Route path="/projects/:id" element={<PromoteProjectDetailModal />} />
          </Routes>
        )}
      </Suspense>
    </div>
  );
}
