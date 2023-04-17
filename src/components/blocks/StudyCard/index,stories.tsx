import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StudyCard } from './index';

export default {
  title: 'blocks/StudyCard',
  component: StudyCard,
} as ComponentMeta<typeof StudyCard>;

const Template: ComponentStory<typeof StudyCard> = (args) => <StudyCard {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  studys: {
    id: '1',
    password: '12341',
    studyTitle: 'PRP(for your portrait right protection)',
    contactInfo: '12414',
    studyDescription:
      '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요!',
    studyHashtag: ['React', 'TypeScript', '프론트엔드', 'AWS', 'Next'],
    views: 320,
    studyMember: 2,
    remote: false,
    created: '2023-04-12',
    deadline: 'D - 30',
  },
};

export const CardWithDescriptionOverlay = Template.bind({});
CardWithDescriptionOverlay.args = {
  studys: {
    id: '1',
    password: '12341',
    studyTitle: 'PRP(for your portrait right protection)',
    contactInfo: '12414',
    studyDescription:
      '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요!',
    studyHashtag: ['React', 'TypeScript', '프론트엔드', 'AWS', 'Next'],
    views: 320,
    studyMember: 2,
    remote: false,
    deadline: 'D - 30',
    created: '2023-02-14',
  },
};
