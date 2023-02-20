import React from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { modalClose } from '@/RTK/slices/modalSlice';

interface IProjectUploadForm {
  projectTitle: string;
  projectDescription: string;
  githubLink: string;
  demositeLink: string;
  projectHashtag: string[];
  previewImages: File[];
}

interface IModalbutton {
  projectUploadForm: IProjectUploadForm;
  uploadProject: (projectUploadForm: IProjectUploadForm) => Promise<void>;
}

export function ModalButton({ projectUploadForm, uploadProject }: IModalbutton) {
  const dispatch = useDispatch();

  const onSubmitHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      await uploadProject(projectUploadForm);
      dispatch(modalClose());
    } catch (err) {
      alert(err);
    }
  };

  const onCloseHandler = () => dispatch(modalClose());

  return (
    <ModalButtonWrapper>
      <UploadButton type="button" onClick={onSubmitHandler}>
        업로드
      </UploadButton>
      <CloseButton type="button" onClick={onCloseHandler}>
        닫기
      </CloseButton>
    </ModalButtonWrapper>
  );
}

const ModalButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledButton = styled.button`
  all: unset;

  font-weight: var(--base-text-weight-extrabold);
  font-size: var(--base-text-size-medium);
  color: var(--project-upload-modal-button-text-color);

  border: 2px solid;
  border-color: var(--project-upload-modal-button-border-color);
  border-radius: 8px;

  padding: 10px 30px;

  cursor: pointer;
`;

const UploadButton = styled(StyledButton)`
  background-color: var(--main-color-orange);
  color: #ffffff;
`;

const CloseButton = styled(StyledButton)``;
