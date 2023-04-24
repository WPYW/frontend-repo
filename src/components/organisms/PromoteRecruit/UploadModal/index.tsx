import React from 'react';

import { Modal } from '../../../blocks/Modal';
import { useRecruitUpload } from './useRecruitUpload';

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
import { ModalHeader } from '@/components/blocks/Modal/ModalHeader';
import { HashtagInput } from '@/components/blocks/Modal/HashtagInput';
import { RecruitTextInput } from '@/components/blocks/RecruitModalBlock/RecruitTextInput';

export function UploadModal() {
  const isOpen = useSelector((state: RootState) => state.recruitModal.isOpen);

  const dispatch = useDispatch();
  const {
    setTitle,
    setDescription,
    setCreated,
    setContactInfo,
    setRecruitMember,
    setHashtags,
    setRecruitType,
    uploadRecruit,
  } = useRecruitUpload();

  const submitRecruit = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await uploadRecruit();
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
          <ModalHeader
            title="모집 프로젝트 공유"
            description="아래에 있는 양식에 따라 오픈채팅 링크를 등록해주세요 ❤️"
          />
          <RecruitSubjectLabel title="1. 모집 기본 정보 입력" />
          <S.HeaderWrapper>
            {/* <S.HeaderDropdownsWrapper>
            </S.HeaderDropdownsWrapper> */}
            <S.HeaderInputsWrapper>
              <RecruitModalDropDown
                placeholder="모집 인원을 정해주세요."
                options={['1', '2', '3', '4']}
                description="모집인원"
                setDropdownInput={setRecruitMember}
              />
              <RecruitModalInputLabel label="오픈채팅 링크">
                <RecruitTextInput
                  placeholder="예시 - https://open.kakao.com/o/g6RJzZoc"
                  setTextInput={setContactInfo}
                />
              </RecruitModalInputLabel>
              <RecruitModalInputLabel label="기술 스택(복수 선택 가능)" optional>
                <HashtagInput placeholder="태그를 입력해주세요" setHashtagInput={setHashtags} />
              </RecruitModalInputLabel>
              <RecruitModalInputLabel label="모집 포지션(복수 선택 가능)" optional>
                <HashtagInput placeholder="태그를 입력해주세요" setHashtagInput={setRecruitType} />
              </RecruitModalInputLabel>
            </S.HeaderInputsWrapper>
          </S.HeaderWrapper>
          <S.BodyWrapper>
            <S.BodyInputsWrapper>
              <RecruitModalCalender
                label=" 마감날짜 선택"
                selectedDate={null}
                setDate={setCreated}
              />
            </S.BodyInputsWrapper>
          </S.BodyWrapper>
          <RecruitSubjectLabel title="2. 모집 정보 소개"></RecruitSubjectLabel>
          <S.FooterWrapper>
            {' '}
            <RecruitInputTextForm setTitle={setTitle} setDescription={setDescription} />
            <S.FooterInputsWrapper>
              <RecruitModalButton onClick={closeModal}>취소</RecruitModalButton>
              <RecruitModalButton onClick={submitRecruit}>글 등록</RecruitModalButton>
            </S.FooterInputsWrapper>
          </S.FooterWrapper>
        </S.SubWrapper>
      </S.Wrapper>
    </Modal>
  );
}
