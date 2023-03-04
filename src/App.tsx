import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import RecruitmentListPage from './pages/RecruitmentListPage';

import { PortalModal } from '@/components';
import { Header } from '@/components/blocks';
import { LoadingDots } from '@/components/atoms';

const MainPage = lazy(() => import('@/pages/MainPage'));
const DetailPage = lazy(() => import('@/pages/DetailPage'));

export default function App() {
  return (
    <div id="App">
      <Header />
      <Suspense fallback={<LoadingDots />}>
        <Routes>
          <Route path="*" element={<div>404 Not Found</div>} />
          <Route path="/" element={<MainPage />} />
          <Route path="/projects/:id" element={<DetailPage />} />
          <Route path="/recruit" element={<RecruitmentListPage />} />
        </Routes>
        <PortalModal />
      </Suspense>
    </div>
  );
}
