import React from 'react';
import reactDom from 'react-dom';

import { Recruit } from '../../blocks/RecruitModalBlock';
import { ModalButton } from '../../blocks/Modal/ModalButton';
import { RecruitModalForm } from '../../blocks/RecruitModalBlock/RecruitModalForm';
import { RecruitModalHeader } from '../../blocks/RecruitModalBlock/RecruitModalHeader';
import { RecruitModalInputLabel } from '../../blocks/RecruitModalBlock/RecruitModalInputLabel';
import { RecruitTextInput } from '../../blocks/RecruitModalBlock/RecruitTextInput';
import { RecruitHashtagInput } from '../../blocks/RecruitModalBlock/RecruitHashtagInput';
import { useRecruitUpload } from './useRecruitUpload';

import { useDispatch } from 'react-redux';
import { recruitModalClose } from '@/RTK/slices/recruitModalSlice';
import { RecruitModalFooter } from '../../blocks/RecruitModalBlock/RecruitModalFooter';

export function PortalRecruitModal() {
  const modalRoot = document.getElementById('modal-recruit');

  if (modalRoot !== null) return reactDom.createPortal(<RecruitModal />, modalRoot);

  return null;
}

export function RecruitModal() {
  const dispatch = useDispatch();

  const { setTitle, setDescription, setContactInfo, setHashtags, setPositions, uploadRecruit } =
    useRecruitUpload();

  const submitRecruit = async () => {
    try {
      await uploadRecruit();
      dispatch(recruitModalClose());
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: { message: string } | any) {
      // err 타입 지정 필요
      alert(err.message);
    }
  };

  const closeModal = () => dispatch(recruitModalClose());

  return (
    <Recruit>
      <RecruitModalHeader
        title="모집 글 올리기"
        description="아래에 있는 양식에 따라 오픈채팅 링크를 등록해주세요 ❤️"
      />

      <RecruitModalForm>
        <RecruitModalInputLabel label="모집 프로젝트명">
          <RecruitTextInput placeholder="예시 - What Project You Want" setTextInput={setTitle} />
        </RecruitModalInputLabel>
        <RecruitModalInputLabel label="모집 프로젝트 간단 소개">
          <RecruitTextInput
            placeholder="예시 - 포트폴리오 공유 계획"
            setTextInput={setDescription}
          />
        </RecruitModalInputLabel>
        <RecruitModalInputLabel label="오픈채팅 링크">
          <RecruitTextInput
            placeholder="예시 - https://open.kakao.com/o/hashurl"
            setTextInput={setContactInfo}
          />
        </RecruitModalInputLabel>
        {/* <ModalInputLabel label="Thumbnail 이미지 (최대 3개)">
          <ImageInput setImageInput={setImages} />
        </ModalInputLabel> */}
        {/* <ModalInputLabel label="오픈채팅 링크" optional>
          <TextInput placeholder="https://wpyw.io" setTextInput={setDemositeLink} />
        </ModalInputLabel> */}
        <RecruitModalInputLabel label="해시태그 (최대 10개)" optional>
          <RecruitHashtagInput placeholder="태그를 입력해주세요" setHashtagInput={setHashtags} />
        </RecruitModalInputLabel>
        <RecruitModalInputLabel label="기술 스택 (복수 선택 가능)" optional>
          {/* <HashtagInput placeholder="프론트엔드, 백엔드" setHashtagInput={setPositions} /> */}
        </RecruitModalInputLabel>

        <RecruitModalFooter>
          <ModalButton onClick={submitRecruit}>업로드</ModalButton>
          <ModalButton id="close" onClick={closeModal} style={{ width: '50%' }}>
            닫기
          </ModalButton>
        </RecruitModalFooter>
      </RecruitModalForm>
    </Recruit>
  );
}
