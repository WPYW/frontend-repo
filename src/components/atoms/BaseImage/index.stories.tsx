import React from 'react';
import { BaseImage } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BaseImageExPath from '@/assets/base-image-ex.jpg';

export default {
  title: 'atoms/BaseImage',
  component: BaseImage,
} as ComponentMeta<typeof BaseImage>;

const Template: ComponentStory<typeof BaseImage> = (args) => <BaseImage {...args} />;

export const DefaultBaseImage = Template.bind({});
DefaultBaseImage.args = {
  src: BaseImageExPath,
  alt: '이미지 alt',
};
