import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecruitModalInputLabel } from './index';

export default {
  title: 'blocks/RecruitModal/RecruitModalInputLabel',
  component: RecruitModalInputLabel,
} as ComponentMeta<typeof RecruitModalInputLabel>;

const Template: ComponentStory<typeof RecruitModalInputLabel> = (args) => (
  <RecruitModalInputLabel {...args} />
);

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
