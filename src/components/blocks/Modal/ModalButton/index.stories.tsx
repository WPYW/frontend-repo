import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalButton } from './index';

export default {
  title: 'blocks/Modal/ModalButton',
  component: ModalButton,
} as ComponentMeta<typeof ModalButton>;

const Template: ComponentStory<typeof ModalButton> = (args) => <ModalButton {...args} />;

export const DefaultModalButton = Template.bind({});
DefaultModalButton.args = {
  children: '버튼',
};
