import React, { useEffect } from 'react';

import { ProjectCardList, ProjectUploadModal } from '@/components';

import { useDispatch } from 'react-redux';
import { modalOpen } from '@/RTK/slices/modalSlice';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const colorMode = window.localStorage.getItem('color_mode') || 'dark';
    window.document.body.classList.add(colorMode);
  }, []);

  return (
    <div id="App" className="App" style={{ height: 3000 }}>
      <button onClick={() => dispatch(modalOpen())} style={{ position: 'relative', zIndex: 1000 }}>
        모달 열기
      </button>
      <button
        onClick={() => {
          const colorMode = window.document.body.classList.item(0);
          if (colorMode === 'dark') {
            window.document.body.classList.replace('dark', 'light');
            window.localStorage.setItem('color_mode', 'light');
          }
          if (colorMode === 'light') {
            window.document.body.classList.replace('light', 'dark');
            window.localStorage.setItem('color_mode', 'dark');
          }
        }}
        style={{ position: 'relative', zIndex: 1000 }}
      >
        다크 모드 활성화
      </button>

      <ProjectCardList />

      <ProjectUploadModal />
    </div>
  );
}
