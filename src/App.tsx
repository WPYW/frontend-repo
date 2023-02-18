import React from 'react';

import { Header } from '@/components';

import { Route, Routes } from 'react-router-dom';
import { DetailPage, ProjectListPage } from '@/pages';

export default function App() {
  return (
    <div id="App">
      <Header />
      <Routes>
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/" element={<ProjectListPage />} />
        <Route path="/project/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}
