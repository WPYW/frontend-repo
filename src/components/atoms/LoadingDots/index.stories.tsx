import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoadingDots } from './index';

export default {
  title: 'atoms/LoadingDots',
  component: LoadingDots,
} as ComponentMeta<typeof LoadingDots>;

const Template: ComponentStory<typeof LoadingDots> = () => <LoadingDots />;

export const DefaultLoadingDots = Template.bind({});
