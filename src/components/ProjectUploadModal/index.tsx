import React from 'react';
import styled from 'styled-components';

import { ProjectUploadForm } from './ProjectUploadForm';

interface ProjectUploadModalProps {
  isOpen: boolean;
}

interface ProjectUploadModalOverlayProps {
  isOpen: boolean;
}

export function ProjectUploadModal({ isOpen }: ProjectUploadModalProps) {
  return (
    <ProjectUploadModalOverlay isOpen={isOpen}>
      <ProjectUploadModalWrapper>
        <ProjectUploadForm />
      </ProjectUploadModalWrapper>
    </ProjectUploadModalOverlay>
  );
}

const ProjectUploadModalOverlay = styled.div<ProjectUploadModalOverlayProps>`
  border: 2px solid limegreen;

  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  padding: 32px;

  position: sticky;
  top: 0;

  height: 100vh;
`;

const ProjectUploadModalWrapper = styled.div`
  border: 2px solid limegreen;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  width: 500px;

  padding: 32px;
`;
