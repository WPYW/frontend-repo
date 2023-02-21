import React from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { modalOpen } from '@/RTK/slices/modalSlice';

import { ReactComponent as DescriptionImage } from '@/assets/projectlist-page-description-image.svg';

export function ProjectListPageDescription() {
  const dispatch = useDispatch();

  const onModalOpenHandler = () => {
    dispatch(modalOpen());
  };

  return (
    <DescriptionWrapper>
      <DescriptionImageWrapper>
        <DescriptionImage style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
      </DescriptionImageWrapper>
      <DescriptionTitleWrapper>
        <DescriptionTitle>What Project You Want?</DescriptionTitle>
        <DescriptionSubTitle>
          프로젝트를 같이 진행하려는 팀원을 찾지 못해 고민중이신가요?
        </DescriptionSubTitle>
        <ModalButton onClick={onModalOpenHandler}>프로젝트 공유</ModalButton>
      </DescriptionTitleWrapper>
    </DescriptionWrapper>
  );
}

const DescriptionWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 60px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const DescriptionImageWrapper = styled.div`
  @media only screen and (max-width: 1200px) {
    width: 300px;
    height: 300px;
  }
`;

const DescriptionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  text-align: center;
`;

const DescriptionTitle = styled.h1`
  font-weight: var(--base-text-weight-2extrabold);
  font-size: var(--base-text-size-3xlarge);
  color: var(--mainpage-title-text-color);
`;

const DescriptionSubTitle = styled.h2`
  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-large);
  color: var(--mainpage-subtitle-text-color);

  display: flex;
  flex-direction: column;
  gap: 10px;

  &::before {
    content: '포트폴리오를 편하게 등록할 수 있는 사이트를 찾으시나요?';
  }

  &::after {
    content: 'WPYW가 당신의 고민을 해결해드립니다!';
  }
`;

const ModalButton = styled.button`
  all: unset;

  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-large);
  color: var(--mainpage-modal-button-text-color);

  border: 4px solid;
  border-color: var(--mainpage-modal-button-border-color);
  border-radius: 8px;

  padding: 12px 0px;

  cursor: pointer;
`;
