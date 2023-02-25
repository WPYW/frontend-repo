import React from 'react';
import BaseButton from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'atoms/BaseButton',
  component: BaseButton,
} as ComponentMeta<typeof BaseButton>;

const Template: ComponentStory<typeof BaseButton> = (args) => <BaseButton {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: '버튼',
};

export const ModalOpenButton = Template.bind({});
ModalOpenButton.args = {
  children: '프로젝트 공유하기',
  onClick: () => console.log('모달이 열렸습니다.'),
};

export const ModalCloseButton = Template.bind({});
ModalCloseButton.args = {
  children: '닫기',
  onClick: () => console.log('모달이 닫혔습니다.'),
};

export const ProjectUploadButton = Template.bind({});
ProjectUploadButton.args = {
  children: '업로드',
  onClick: () => console.log('프로젝트가 업로드됐습니다.'),
};
