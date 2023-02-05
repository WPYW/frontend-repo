import React, { useState } from 'react';

import { ProjectRegisterModal } from '@/components';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div id="App" className="App">
      <button onClick={() => setModalOpen((prev) => !prev)}>프로젝트 모달 버튼</button>
      {modalOpen && <ProjectRegisterModal />}
    </div>
  );
}
