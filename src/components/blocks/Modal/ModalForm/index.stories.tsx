import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalForm } from './index';
import { ModalInputLabel } from '../ModalInputLabel';

export default {
  title: 'blocks/Modal/ModalForm',
  component: ModalForm,
} as ComponentMeta<typeof ModalForm>;

const Template: ComponentStory<typeof ModalForm> = (args) => <ModalForm {...args} />;

export const DefaultModalForm = Template.bind({});
DefaultModalForm.args = {
  children: (
    <>
      <ModalInputLabel label="프로젝트명">
        <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>
      </ModalInputLabel>

      <ModalInputLabel label="프로젝트 간단 소개">
        <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>
      </ModalInputLabel>

      <ModalInputLabel label="프로젝트 깃허브 링크">
        <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>
      </ModalInputLabel>

      <ModalInputLabel label="Thumbnail 이미지 (최대 3개)">
        <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>
      </ModalInputLabel>

      <ModalInputLabel label="데모사이트 링크" optional>
        <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>
      </ModalInputLabel>

      <ModalInputLabel label="해시태그 (최대 10개)" optional>
        <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>
      </ModalInputLabel>
    </>
  ),
};
