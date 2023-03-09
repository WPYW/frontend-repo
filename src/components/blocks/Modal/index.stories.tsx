import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './index';

import { ModalHeader } from './ModalHeader';
import { ModalInputLabel } from './ModalInputLabel';
import { ModalForm } from './ModalForm';
import { ModalButton } from './ModalButton';

export default {
  title: 'blocks/Modal/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ProjectUploadModal = Template.bind({});
ProjectUploadModal.args = {
  children: (
    <>
      <ModalHeader
        title="프로젝트 공유"
        description="아래에 있는 양식에 따라 깃허브 링크를 등록해주세요 ❤️"
      />

      <ModalForm>
        <ModalInputLabel label="프로젝트명">
          <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>{' '}
        </ModalInputLabel>
        <ModalInputLabel label="프로젝트 간단 소개">
          <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>{' '}
        </ModalInputLabel>
        <ModalInputLabel label="프로젝트 깃허브 링크">
          <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>{' '}
        </ModalInputLabel>
        <ModalInputLabel label="Thumbnail 이미지 (최대 3개)">
          <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>{' '}
        </ModalInputLabel>
        <ModalInputLabel label="데모사이트 링크" optional>
          <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>{' '}
        </ModalInputLabel>
        <ModalInputLabel label="해시태그 (최대 10개)" optional>
          <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>{' '}
        </ModalInputLabel>
      </ModalForm>

      <ModalButton>업로드</ModalButton>
    </>
  ),
};
