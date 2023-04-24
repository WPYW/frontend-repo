import React from 'react';
import * as S from './index.styles';

import { Modal } from '../../../blocks/Modal';
import { ModalButton } from '../../../blocks/Modal/ModalButton';
import { ModalForm } from '../../../blocks/Modal/ModalForm';
import { ModalHeader } from '../../../blocks/Modal/ModalHeader';
import { ModalInputLabel } from '../../../blocks/Modal/ModalInputLabel';
import { TextInput } from '../../../blocks/Modal/TextInput';
import { HashtagInput } from '../../../blocks/Modal/HashtagInput';
import { ImageInput } from '../../../blocks/Modal/ImageInput';
import { useProjectUpload } from './useProjectUpload';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/stores/store';
import { uploadModalClose } from '@/stores/slices/uploadModalSlice';
import { ModalFooter } from '@/components/blocks/Modal/ModalFooter';

export function UploadModal() {
  const isOpen = useSelector((state: RootState) => state.uploadModal.isOpen);

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

  const submitProject = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      await uploadProject();
      dispatch(uploadModalClose());
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: { message: string } | any) {
      // err 타입 지정 필요
      alert(err.message);
    }
  };

  const closeModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(uploadModalClose());
  };

  return (
    <Modal isOpen={isOpen} modalCloseHandler={() => dispatch(uploadModalClose())}>
      <S.Wrapper>
        <S.SubWrapper>
          <ModalHeader
            title="프로젝트 공유"
            description="아래에 있는 양식에 따라 깃허브 링크를 등록해주세요 ❤️"
          />
          <ModalForm>
            <ModalInputLabel label="프로젝트명">
              <TextInput placeholder="예시 - What Project You Want" setTextInput={setTitle} />
            </ModalInputLabel>
            <ModalInputLabel label="프로젝트 간단 소개">
              <TextInput
                placeholder="예시 - IT 프로젝트 공유 사이트"
                setTextInput={setDescription}
              />
            </ModalInputLabel>
            <ModalInputLabel label="프로젝트 깃허브 링크">
              <TextInput
                placeholder="예시 - https://github.com/repoOwner/repoName"
                setTextInput={setGithubLink}
              />
            </ModalInputLabel>
            <ModalInputLabel label="Thumbnail 이미지 (최대 3개)">
              <ImageInput setImageInput={setImages} />
            </ModalInputLabel>
            <ModalInputLabel label="데모사이트 링크" optional>
              <TextInput placeholder="https://wpyw.io" setTextInput={setDemositeLink} />
            </ModalInputLabel>
            <ModalInputLabel label="해시태그 (최대 10개)" optional>
              <HashtagInput placeholder="태그를 입력해주세요" setHashtagInput={setHashtags} />
            </ModalInputLabel>

            <ModalFooter>
              <ModalButton onClick={submitProject}>업로드</ModalButton>
              <ModalButton id="close" onClick={closeModal} style={{ width: '50%' }}>
                닫기
              </ModalButton>
            </ModalFooter>
          </ModalForm>
        </S.SubWrapper>
      </S.Wrapper>
    </Modal>
  );
}
