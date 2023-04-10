import React from 'react';

import { Modal } from '../../../blocks/Modal';
import { useProjectUpload } from './useProjectUpload';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/stores/store';
import { recruituploadModalClose } from '@/stores/slices/recruitModalSlice';
import { RecruitSubjectLabel } from '@/components/blocks/RecruitModalBlock/RecruitSubjectLabel';
import { RecruitModalDropDown } from '@/components/blocks/RecruitModalBlock/RecruitModalDropDown';
import { RecruitModalInputLabel } from '@/components/blocks/RecruitModalBlock/RecruitModalInputLabel';
import { RecruitModalCalender } from '@/components/blocks/RecruitModalBlock/RecruitModalCalender';
import RecruitInputTextForm from '@/components/blocks/RecruitModalBlock/RecruitInputTextForm';
import { RecruitModalButton } from '@/components/blocks/RecruitModalBlock/RecruitModalButton';
import * as S from './index.styles';

export function UploadModal() {
  const isOpen = useSelector((state: RootState) => state.recruitModal.isOpen);

  const dispatch = useDispatch();
  const {
    setTitle,
    setDescription,
    setGithubLink,
    setDemositeLink,
    setHashtags,
    setImages,
    uploadProject,
  } = useProjectUpload();

  const submitProject = async () => {
    try {
      await uploadProject();
      dispatch(recruituploadModalClose());
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: { message: string } | any) {
      // err 타입 지정 필요
      alert(err.message);
    }
  };

  const closeModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(recruituploadModalClose());
  };

  return (
    <Modal isOpen={isOpen} modalCloseHandler={() => dispatch(recruituploadModalClose())}>
      <S.Wrapper>
        <S.SubWrapper>
          <RecruitSubjectLabel title="1. 모집 기본 정보 입력" />
          <S.HeaderWrapper>
            <S.HeaderDropdownsWrapper>
              <RecruitModalDropDown
                placeholder="스터디/프로젝트 선택"
                options={['스터디', '프로젝트']}
                description="모집 구분"
              />
              <RecruitModalDropDown
                placeholder="모집 인원을 정해주세요."
                options={['1', '2', '3', '4']}
                description="모집인원"
              />
              <RecruitModalDropDown
                placeholder="진행 방식을 선택하세요."
                options={['online', 'offline']}
                description="진행 방식"
              />
            </S.HeaderDropdownsWrapper>
            <S.HeaderInputsWrapper>
              <RecruitModalInputLabel label="오픈채팅 링크">
                <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>
              </RecruitModalInputLabel>
              <RecruitModalInputLabel label="기술 스택(복수 선택 가능)" optional>
                <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>
              </RecruitModalInputLabel>
              <RecruitModalInputLabel label="모집 포지션(복수 선택 가능)" optional>
                <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>
              </RecruitModalInputLabel>
            </S.HeaderInputsWrapper>
          </S.HeaderWrapper>
          <S.BodyWrapper>
            <S.BodyInputsWrapper>
              <RecruitModalCalender
                label=" 마감날짜 선택"
                selectedDate={null}
                onChange={function (date: Date | null): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </S.BodyInputsWrapper>
          </S.BodyWrapper>
          <RecruitSubjectLabel title="2. 모집 정보 소개"></RecruitSubjectLabel>
          <S.FooterWrapper>
            {' '}
            <RecruitInputTextForm />
            <S.FooterInputsWrapper>
              <RecruitModalButton onClick={closeModal}>취소</RecruitModalButton>
              <RecruitModalButton onClick={submitProject}>글 등록</RecruitModalButton>
            </S.FooterInputsWrapper>
          </S.FooterWrapper>
        </S.SubWrapper>
      </S.Wrapper>
    </Modal>
  );
}
