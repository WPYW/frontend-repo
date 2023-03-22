import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Recruit } from './index';

import { RecruitModalHeader } from './RecruitModalHeader';
import { RecruitModalInputLabel } from './RecruitModalInputLabel';
import { RecruitModalForm } from './RecruitModalForm';
import { RecruitModalButton } from './RecruitModalButton';

export default {
  title: 'blocks/RecruitModal/RecruitModal',
  component: Recruit,
} as ComponentMeta<typeof Recruit>;

const Template: ComponentStory<typeof Recruit> = (args) => <Recruit {...args} />;

export const ProjectUploadModal = Template.bind({});
ProjectUploadModal.args = {
  children: (
    <>
      <RecruitModalHeader
        title="프로젝트 공유"
        description="아래에 있는 양식에 따라 모집 공고를 등록해주세요 ❤️"
      />

      <RecruitModalForm>
        <RecruitModalInputLabel label="모집 프로젝트명">
          <input placeholder="입력해주세요~!~!" style={{ all: 'unset' }}></input>{' '}
        </RecruitModalInputLabel>
        <RecruitModalInputLabel label="모집 프로젝트 간단 소개">
          <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>{' '}
        </RecruitModalInputLabel>
        <RecruitModalInputLabel label="오픈채팅 링크">
          <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>{' '}
        </RecruitModalInputLabel>
        <RecruitModalInputLabel label="Thumbnail 이미지 (최대 3개)">
          <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>{' '}
        </RecruitModalInputLabel>
        {/* <RecruitModalInputLabel label="데모사이트 링크" optional>
          <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>{' '}
        </RecruitModalInputLabel> */}
        <RecruitModalInputLabel label="해시태그 (최대 10개)" optional>
          <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>{' '}
        </RecruitModalInputLabel>
      </RecruitModalForm>

      <RecruitModalButton>모집 업로드</RecruitModalButton>
    </>
  ),
};
