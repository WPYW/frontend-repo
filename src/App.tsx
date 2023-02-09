import React, { useEffect } from 'react';

import { Header, ProjectDetail } from '@/components';

import { Route, Routes } from 'react-router-dom';
import { MainPage } from '@/pages';

export default function App() {
  useEffect(() => {
    const colorMode = window.localStorage.getItem('color_mode') || 'dark';
    window.document.body.classList.add(colorMode);
  }, []);

  return (
    <div id="App">
      <Header />
      <Routes>
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/" element={<MainPage />} />
        <Route path="/project/detail/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}
