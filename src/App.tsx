import React, { useEffect, useState } from 'react';

import { ProjectUploadModal } from '@/components';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const colorMode = window.localStorage.getItem('color_mode') || 'dark';
    window.document.body.classList.add(colorMode);
  }, []);

  return (
    <div id="App" className="App" style={{ height: 3000 }}>
      <button
        onClick={() => setModalOpen((prev) => !prev)}
        style={{ position: 'relative', zIndex: 1000 }}
      >
        프로젝트 모달 버튼
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

      <ProjectUploadModal isOpen={modalOpen} />
    </div>
  );
}
