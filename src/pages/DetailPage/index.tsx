import { ProjectDetail } from '@/components';
import React from 'react';
import styled from 'styled-components';

export function DetailPage() {
  return (
    <DetailPageWrapper>
      <ProjectDetail />
    </DetailPageWrapper>
  );
}

const DetailPageWrapper = styled.article``;
