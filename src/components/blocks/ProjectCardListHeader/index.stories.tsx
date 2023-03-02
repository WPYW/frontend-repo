import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProjectCardListHeader } from './index';
import { IParams } from './index.types';

export default {
  title: 'blocks/ProjectCardListHeader',
  component: ProjectCardListHeader,
} as ComponentMeta<typeof ProjectCardListHeader>;

const Template: ComponentStory<typeof ProjectCardListHeader> = () => {
  const [params, setParams] = useState<IParams>({ ordering: 'created', search: '', page: 1 });
  return <ProjectCardListHeader ordering={params.ordering} setParams={setParams} />;
};

export const DefaultProjectCardListHeader = Template.bind({});
