import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useProjectDetail } from '@/hooks/useProjectDetail';

import { ProjectDetailHeader } from './ProjectDetailHeader';
import { ProjectDetailReadMe } from './ProjectDetailReadMe';
import { ProjectDetailComment } from './ProjectDetailComment';
import { LoadingDots } from '../LoadingDots';

export function ProjectDetail() {
  const params = useParams();

  const { projectDetail, readMe, isLoading, refetch } = useProjectDetail(params.id);

  if (isLoading)
    return (
      <LoadingDotsWrapper>
        <LoadingDots />
      </LoadingDotsWrapper>
    );

  return (
    <ProjectDetailWrapper>
      <ProjectDetailHeader {...projectDetail} refetch={refetch} />
      <ProjectDetailReadMe readMe={readMe} />
      <ProjectDetailComment {...projectDetail} refetch={refetch} />
    </ProjectDetailWrapper>
  );
}

const ProjectDetailWrapper = styled.div`
  padding: 80px;

  display: flex;
  flex-direction: column;
  gap: 60px;

  @media only screen and (max-width: 700px) {
    padding: 30px 20px 80px 20px;
    gap: 40px;
  }
`;

const LoadingDotsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 50vh;
`;
