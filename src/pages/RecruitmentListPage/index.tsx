import React from 'react';
import styled from 'styled-components';

import { RecruitmentListPageDescription, RecruitmentList } from '@/components';

export default function RecruitmentListPage() {
  // fetch('/recurit/1', { method: 'post' })
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  return (
    <RecruitmentListPageWrapper>
      <RecruitmentListPageDescription />
      <RecruitmentList />
    </RecruitmentListPageWrapper>
  );
}

const RecruitmentListPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
