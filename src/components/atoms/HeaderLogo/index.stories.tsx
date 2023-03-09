import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeaderLogo } from './index';

export default {
  title: 'atoms/HeaderLogo',
  component: HeaderLogo,
} as ComponentMeta<typeof HeaderLogo>;

const Template: ComponentStory<typeof HeaderLogo> = () => <HeaderLogo />;

export const DefaultHeaderLogo = Template.bind({});
