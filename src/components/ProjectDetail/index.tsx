import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useProjectDetail } from '@/hooks/useProjectDetail';

import { ProjectDetailHeader } from './ProjectDetailHeader';
import { ProjectDetailReadMe } from './ProjectDetailReadMe';
import { ProjectDetailComment } from './ProjectDetailComment';

export function ProjectDetail() {
  const params = useParams();

  const { projectDetail, readMe, isLoading } = useProjectDetail(params.id || '');

  if (isLoading) return <div>로딩중</div>;

  return (
    <ProjectDetailWrapper>
      <ProjectDetailHeader {...projectDetail} />
      <ProjectDetailReadMe readMe={readMe} />
      <ProjectDetailComment {...projectDetail} />
    </ProjectDetailWrapper>
  );
}

const ProjectDetailWrapper = styled.div`
  padding: 100px;

  display: flex;
  flex-direction: column;
  gap: 60px;
`;
