import React from 'react';
import styled from 'styled-components';

import { ProjectUploadForm } from './ProjectUploadForm';

const ProjectUploadFormWrapper = styled.article`
  border: 2px solid limegreen;
`;

export function ProjectUploadModal() {
  return (
    <ProjectUploadFormWrapper>
      <ProjectUploadForm />
    </ProjectUploadFormWrapper>
  );
}
