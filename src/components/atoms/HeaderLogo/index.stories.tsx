import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeaderLogo } from './index';

export default {
  title: 'atoms/HeaderLogo',
  component: HeaderLogo,
} as ComponentMeta<typeof HeaderLogo>;

const Template: ComponentStory<typeof HeaderLogo> = (args) => <HeaderLogo {...args} />;

export const HeaderLogoLight = Template.bind({});
HeaderLogoLight.args = {
  mode: 'light',
};

export const HeaderLogoDark = Template.bind({});
HeaderLogoDark.args = {
  mode: 'dark',
};
