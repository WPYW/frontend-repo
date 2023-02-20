import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import type { RootState } from '@/RTK/stores/store';

import { useProjectUpload } from '@/hooks/useProjectUpload';

import { ModalTitle } from './ModalTitle';
import { UploadForm } from './UploadForm';
import { ModalButton } from './ModalButton';

export function ProjectUploadModal() {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  const { projectUploadForm, setProjectUploadForm, uploadProject } = useProjectUpload();

  return (
    <ProjectUploadModalOverlay isOpen={isOpen}>
      <ProjectUploadModalWrapper>
        <ModalTitle />
        <UploadForm
          projectUploadForm={projectUploadForm}
          setProjectUploadForm={setProjectUploadForm}
        />
        <ModalButton projectUploadForm={projectUploadForm} uploadProject={uploadProject} />
      </ProjectUploadModalWrapper>
    </ProjectUploadModalOverlay>
  );
}

const ProjectUploadModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  background-color: rgba(183, 183, 183, 0.7);
  backdrop-filter: blur(10px);
`;

const ProjectUploadModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  position: relative;

  width: 600px;
  max-height: 100vh;

  padding: 40px;

  border-radius: 10px;

  background-color: var(--base-background-color);

  overflow: scroll;
`;
