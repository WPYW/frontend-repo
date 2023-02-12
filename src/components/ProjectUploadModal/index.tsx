import React, { useState } from 'react';
import styled from 'styled-components';

import type { RootState } from '@/RTK/stores/store';
import { useSelector } from 'react-redux';

import { IProject } from './index.types';

import { UploadForm } from './UploadForm';
import { FormSubmitButton } from './FormSubmitButton';
import { ModalCloseButton } from './ModalCloseButton';
import { ModalTitle } from './ModalTitle';

export function ProjectUploadModal() {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  const [projectUploadForm, setProjectUploadForm] = useState<IProject>({
    projectTitle: '',
    projectDescription: '',
    projectLink: '',
    demoSiteLink: '',
    hashtagList: [],
    thumbnailList: [],
  });

  return (
    <ProjectUploadModalOverlay isOpen={isOpen}>
      <ProjectUploadModalWrapper>
        <ModalCloseButton />
        <ModalTitle />
        <UploadForm
          projectUploadForm={projectUploadForm}
          setProjectUploadForm={setProjectUploadForm}
        />
        <FormSubmitButton projectUploadForm={projectUploadForm} />
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

  backdrop-filter: blur(10px);
`;

const ProjectUploadModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  position: relative;

  padding: 32px;

  border: 0.5px solid;
  border-radius: 12px;

  background-color: var(--base-background-color);

  width: 600px;
  max-height: 80vh;

  overflow: scroll;
`;
