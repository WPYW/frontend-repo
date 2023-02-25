import React, { Suspense, lazy } from 'react';

import { PortalModal } from '@/components';
import { Header } from '@/components/blocks';

import { Route, Routes } from 'react-router-dom';

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
          <Route path="/projects/:id" element={<DetailPage />} />
        </Routes>
        <PortalModal />
      </Suspense>
    </div>
  );
}
