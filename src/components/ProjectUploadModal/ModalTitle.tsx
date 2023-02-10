import React from 'react';
import styled from 'styled-components';

export function ModalTitle() {
  return (
    <ModalTitleWrapper>
      <Title>프로젝트 공유</Title>
      <SubTitle>아래에 있는 양식에 따라 </SubTitle>
    </ModalTitleWrapper>
  );
}

const ModalTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-xlarge);
  color: var(--project-upload-modal-title-color);
`;

const SubTitle = styled.h2`
  font-weight: var(--base-text-weight-medium);
  font-size: var(--base-text-size-normal);
  color: var(--project-upload-modal-subtitle-color);

  &::after {
    content: '깃허브 링크를 등록해주세요 ❤️';
  }

  @media only screen and (max-width: 520px) {
    text-align: center;

    &::after {
      display: block;
    }
  }
`;
