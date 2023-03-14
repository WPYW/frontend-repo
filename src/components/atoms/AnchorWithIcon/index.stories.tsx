import React from 'react';
import { AnchorWithIcon } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactComponent as GitHubLogo } from '@/assets/github-mark.svg';
import { ReactComponent as DemoSiteIcon } from '@/assets/demosite-icon.svg';

export default {
  title: 'atoms/AnchorWithIcon',
  component: AnchorWithIcon,
} as ComponentMeta<typeof AnchorWithIcon>;

const Template: ComponentStory<typeof AnchorWithIcon> = (args) => <AnchorWithIcon {...args} />;

export const ButtonWithGithubLogo = Template.bind({});
ButtonWithGithubLogo.args = {
  children: <GitHubLogo style={{ width: '100%', height: '100%', objectFit: 'cover' }} />,
  href: 'https://google.com',
};

export const ButtonWithDemoSiteIcon = Template.bind({});
ButtonWithDemoSiteIcon.args = {
  children: <DemoSiteIcon style={{ width: '100%', height: '100%', objectFit: 'cover' }} />,
  href: 'https://google.com',
};
