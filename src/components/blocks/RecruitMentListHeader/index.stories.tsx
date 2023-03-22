import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecruitmentListHeader } from './index';
import { IParams } from './index.types';

export default {
  title: 'blocks/RecruitmentListHeader',
  component: RecruitmentListHeader,
} as ComponentMeta<typeof RecruitmentListHeader>;

const Template: ComponentStory<typeof RecruitmentListHeader> = () => {
  const [params, setParams] = useState<IParams>({ ordering: 'created', search: '', page: 1 });
  return <RecruitmentListHeader ordering={params.ordering} setParams={setParams} />;
};

export const DefaultRecruitmentListHeader = Template.bind({});
