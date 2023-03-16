import React from 'react';
import { IconWithCount } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactComponent as ViewsIcon } from '@/assets/views-icon.svg';
import { ReactComponent as LikesIcon } from '@/assets/likes-icon.svg';

export default {
  title: 'atoms/IconWithCount',
  component: IconWithCount,
} as ComponentMeta<typeof IconWithCount>;

const Template: ComponentStory<typeof IconWithCount> = (args) => <IconWithCount {...args} />;

export const ViewsIconWithCount = Template.bind({});
ViewsIconWithCount.args = {
  children: <ViewsIcon />,
  count: 320,
};

export const LikesIconWithCount = Template.bind({});
LikesIconWithCount.args = {
  children: <LikesIcon />,
  count: 25,
};
