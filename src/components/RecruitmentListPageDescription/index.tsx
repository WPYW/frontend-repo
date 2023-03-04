import React from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { modalOpen } from '@/RTK/slices/modalSlice';

export function RecruitmentListPageDescription() {
  const dispatch = useDispatch();

  const onModalOpenHandler = () => {
    dispatch(modalOpen());
  };

  return (
    <DescriptionWrapper>
      <DescriptionImageWrapper></DescriptionImageWrapper>
      <DescriptionTitleWrapper>
        <DescriptionTitle>What Project You Want?</DescriptionTitle>
        <DescriptionSubTitle>
          포트폴리오를 편하게 등록할 수 있는 사이트를 찾으시나요? <br />
          프로젝트를 같이 진행하려는 팀원을 찾지 못해 고민중이신가요? <br />
          WPYW가 당신의 고민을 해결해드립니다!
        </DescriptionSubTitle>
        <ModalButton onClick={onModalOpenHandler}>모집하기</ModalButton>
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

    padding: 15px;
  }
`;

const DescriptionImageWrapper = styled.div`
  max-width: 400px;
  max-height: 400px;
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

  @media only screen and (max-width: 600px) {
    font-size: var(--base-text-size-large);
  }
`;

const DescriptionSubTitle = styled.p`
  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-large);
  color: var(--mainpage-subtitle-text-color);

  line-height: 1.5;

  @media only screen and (max-width: 600px) {
    font-size: var(--base-text-size-xsmall);
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

  @media only screen and (max-width: 600px) {
    font-size: var(--base-text-size-normal);
  }

  &:hover {
    color: #ffffff;
    background-color: var(--detailpage-button-text-color);
  }
`;
