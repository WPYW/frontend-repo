import React from 'react';
import { BaseTitle } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'atoms/BaseTitle',
  component: BaseTitle,
} as ComponentMeta<typeof BaseTitle>;

const Template: ComponentStory<typeof BaseTitle> = (args) => <BaseTitle {...args} />;

export const DefaultBaseTitle = Template.bind({});
DefaultBaseTitle.args = {
  children: '타이틀',
};

export const MainPageDescriptionTitle = Template.bind({});
MainPageDescriptionTitle.args = {
  children: 'WHAT PROJECT YOU WANT?',
};
