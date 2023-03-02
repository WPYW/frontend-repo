import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageDescription } from './index';

export default {
  title: 'blocks/PageDescription',
  component: PageDescription,
} as ComponentMeta<typeof PageDescription>;

const Template: ComponentStory<typeof PageDescription> = (args) => <PageDescription {...args} />;

export const DefaultPageDescription = Template.bind({});
DefaultPageDescription.args = {
  title: '타이틀',
  description: '설명',
};

export const MainPageDescription = Template.bind({});
MainPageDescription.args = {
  title: 'WHAT PROJECT YOU WANT?',
  description:
    '포트폴리오를 편하게 등록할 수 있는 사이트를 찾으시나요?\n프로젝트를 같이 진행하려는 팀원을 찾지 못해 고민중이신가요?\nWPYW가 당신의 고민을 해결해드립니다!',
};
