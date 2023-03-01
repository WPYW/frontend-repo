import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProjectCardListHeader } from './index';
import { IParams } from './index.types';

export default {
  title: 'blocks/ProjectCardListHeader',
  component: ProjectCardListHeader,
} as ComponentMeta<typeof ProjectCardListHeader>;

const Template: ComponentStory<typeof ProjectCardListHeader> = (args) => {
  const [, setParams] = useState<IParams>({ ordering: 'created', search: '', page: 1 });
  return <ProjectCardListHeader {...args} setParams={setParams} />;
};

export const DefaultProjectCardListHeader = Template.bind({});
