import React, { Suspense, lazy } from 'react';

import { Header, PortalModal } from '@/components';

import { Route, Routes } from 'react-router-dom';
import RecruitmentListPage from './pages/RecruitmentListPage';

const DetailPage = lazy(() => import('@/pages/DetailPage'));
const ProjectListPage = lazy(() => import('@/pages/ProjectListPage'));

export default function App() {
  return (
    <div id="App">
      <Header />
      <Suspense fallback={<div>로딩중</div>}>
        <Routes>
          <Route path="*" element={<div>404 Not Found</div>} />
          <Route path="/" element={<ProjectListPage />} />
          <Route path="/project/detail/:id" element={<DetailPage />} />
          <Route path="/recruit" element={<RecruitmentListPage />} />
        </Routes>
        <PortalModal />
      </Suspense>
    </div>
  );
}
