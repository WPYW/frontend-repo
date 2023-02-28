import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Carousel } from './index';

import TempImagePath1 from '@/assets/temp1.png';
import TempImagePath2 from '@/assets/temp2.jpg';
import TempImagePath3 from '@/assets/temp3.jpg';

export default {
  title: 'atoms/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

const imgUrlList = [TempImagePath1, TempImagePath2, TempImagePath3];

export const DefaultCarousel = Template.bind({});
DefaultCarousel.args = { imgUrlList: imgUrlList };
