import React from 'react';
import styled from 'styled-components';

import { ProjectListPageDescription, ProjectList } from '@/components';

export default function ProjectListPage() {
  return (
    <ProjectListPageWrapper>
      <ProjectListPageDescription />
      <ProjectList />
    </ProjectListPageWrapper>
  );
}

const ProjectListPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
