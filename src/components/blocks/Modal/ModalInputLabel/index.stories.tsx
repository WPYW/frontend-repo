import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalInputLabel } from './index';

export default {
  title: 'blocks/Modal/ModalInputLabel',
  component: ModalInputLabel,
} as ComponentMeta<typeof ModalInputLabel>;

const Template: ComponentStory<typeof ModalInputLabel> = (args) => <ModalInputLabel {...args} />;

export const DefaultModalInputLabel = Template.bind({});
DefaultModalInputLabel.args = {
  label: '라벨',
  children: <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>,
};

export const ModalInputLabelWithOptional = Template.bind({});
ModalInputLabelWithOptional.args = {
  label: '라벨',
  optional: true,
  children: <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>,
};

export const ModalInputLabelWithCaution = Template.bind({});
ModalInputLabelWithCaution.args = {
  label: '라벨',
  caution: '주의 문구',
  children: <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>,
};

export const ModalInputLabelWith_풀옵션 = Template.bind({});
ModalInputLabelWith_풀옵션.args = {
  label: '라벨',
  optional: true,
  caution: '주의 문구',
  children: <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>,
};
