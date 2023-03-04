import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainPage from './index';

import { Header } from '@/components/blocks';

export default {
  title: 'pages/MainPage',
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => (
  <>
    <Header />
    <MainPage />
  </>
);
export const DefaultMainPage = Template.bind({});
