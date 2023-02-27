import React from 'react';
import { BaseDescription } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'atoms/BaseDescription',
  component: BaseDescription,
} as ComponentMeta<typeof BaseDescription>;

const Template: ComponentStory<typeof BaseDescription> = (args) => <BaseDescription {...args} />;

export const DefaultBaseDescription = Template.bind({});
DefaultBaseDescription.args = {
  children: 'Description',
};

export const MainPageDescription = Template.bind({});
MainPageDescription.args = {
  children:
    '포트폴리오를 편하게 등록할 수 있는 사이트를 찾으시나요?\n프로젝트를 같이 진행하려는 팀원을 찾지 못해 고민중이신가요?\nWPYW가 당신의 고민을 해결해드립니다!',
};
