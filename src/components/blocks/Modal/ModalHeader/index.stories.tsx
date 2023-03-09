import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalHeader } from './index';

export default {
  title: 'blocks/Modal/ModalHeader',
  component: ModalHeader,
} as ComponentMeta<typeof ModalHeader>;

const Template: ComponentStory<typeof ModalHeader> = (args) => <ModalHeader {...args} />;

export const DefaultModalHeader = Template.bind({});
DefaultModalHeader.args = {
  title: '모달 타이틀',
  description: '모달 설명',
};
