import React from 'react';
import styled from 'styled-components';

import { ProjectCardList } from '@/components';

export function MainPage() {
  return (
    <MainPageWrapper>
      <DescriptionWrapper>
        <DescribtionImageWrapper>
          <DescribtionImage src="/DescribtionImage.svg" alt="" />
        </DescribtionImageWrapper>
        <DescriptionSubWrapper>
          <DescribtionTitle>What Project You Want?</DescribtionTitle>
          <DescribtionSubTitle>
            프로젝트를 같이 진행하려는 팀원을 찾지 못해 고민중이신가요?
          </DescribtionSubTitle>
        </DescriptionSubWrapper>
      </DescriptionWrapper>
      <ProjectCardList />
    </MainPageWrapper>
  );
}

const MainPageWrapper = styled.div`
  border: 2px solid limegreen;

  display: flex;
  flex-direction: column;
`;

const DescriptionWrapper = styled.article`
  display: flex;
  justify-content: center;
  gap: 50px;

  padding: 60px;

  background-color: #fdc2be;

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const DescribtionImageWrapper = styled.div`
  width: 400px;
  height: 400px;
  object-fit: contain;

  @media only screen and (max-width: 900px) {
    width: 300px;
    height: 300px;
  }
`;

const DescribtionImage = styled.img`
  max-height: 100%;
`;

const DescriptionSubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  text-align: center;
`;

const DescribtionTitle = styled.h1`
  font-weight: var(--base-text-weight-extrabold);
  font-size: var(--base-text-size-3xlarge);

  text-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);

  color: #ffffff;
`;

const DescribtionSubTitle = styled.h2`
  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-large);

  white-space: pre-wrap;

  display: flex;
  flex-direction: column;

  color: #000000;

  &::before {
    content: '포트폴리오를 편하게 등록할 수 있는 사이트를 찾으시나요?';
  }

  &::after {
    content: 'WPYW가 당신의 고민을 해결해드립니다!';
  }
`;
