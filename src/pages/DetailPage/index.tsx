import React from 'react';
import styled from 'styled-components';

import { ProjectDetail } from '@/components';

export function DetailPage() {
  return (
    <DetailPageWrapper>
      <ProjectDetail />
    </DetailPageWrapper>
  );
}

const DetailPageWrapper = styled.article``;
