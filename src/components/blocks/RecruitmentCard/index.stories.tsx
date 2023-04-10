import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecruitCard } from './index';

import TempImagePath1 from '@/assets/temp1.png';
import TempImagePath2 from '@/assets/temp2.jpg';
import TempImagePath3 from '@/assets/temp3.jpg';

export default {
  title: 'blocks/RecruitCard',
  component: RecruitCard,
} as ComponentMeta<typeof RecruitCard>;

const Template: ComponentStory<typeof RecruitCard> = (args) => <RecruitCard {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  recruits: {
    id: 'f2b0e579-a669-4cd8-9d13-5173d66671a7',
    password: '$2y$10$G3ULI99JX27ZtQrLYBSzout7vALMkXyzxRuEiEbIxEYS70tLb6cKe',
    created: '2023-03-02',

    title: '저희와 함께할 팀원들을 모집합니다!',
    description:
      '취준생들 위주로 함께 포트폴리오를 나갈 팀원들을 모집하고 있습니다. 현재 벡엔드 2명이 모집되어 있어 프론트, 백엔드 각각 1명 더 구해요!',
    contactInfo: 'https://open.kakao.com/o/s7V1ekF',
    recruitHashtag: ['프론트엔드', '백엔드', '모바일', '기타'],

    views: 11,
    recruitMember: 4,
    shut: false, // false: 프로젝트 마감 전, true: 프로젝트 마감 완료.
    deadline: 'D -Day 30',
  },
};

export const CardWithDescriptionOverlay = Template.bind({});
CardWithDescriptionOverlay.args = {
  recruits: {
    id: 'f2b0e579-a669-4cd8-9d13-5173d66671a7',
    password: '$2y$10$G3ULI99JX27ZtQrLYBSzout7vALMkXyzxRuEiEbIxEYS70tLb6cKe',
    created: '2023-03-02',

    title: '저희와 함께할 팀원들을 모집합니다!',
    description:
      '취준생들 위주로 함께 포트폴리오를 나갈 팀원들을 모집하고 있습니다. 현재 벡엔드 2명이 모집되어 있어 프론트, 백엔드 각각 1명 더 구해요!',
    contactInfo: 'https://open.kakao.com/o/s7V1ekF',
    recruitHashtag: ['프론트엔드', '백엔드', '모바일', '기타'],

    views: 11,
    recruitMember: 4,
    shut: false, // false: 프로젝트 마감 전, true: 프로젝트 마감 완료.
    deadline: 'D -Day 30',
  },
};
