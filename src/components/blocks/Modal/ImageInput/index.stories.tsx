import React from 'react';
import { ImageInput } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'blocks/Modal/ImageInput',
  component: ImageInput,
} as ComponentMeta<typeof ImageInput>;

const Template: ComponentStory<typeof ImageInput> = (args) => <ImageInput {...args} />;

export const DefaultImageInput = Template.bind({});
