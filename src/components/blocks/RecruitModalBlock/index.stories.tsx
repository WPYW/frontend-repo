import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecruitModal } from './index';

import { RecruitModalDropDown } from './RecruitModalDropDown';
import { RecruitSubjectLabel } from './RecruitSubjectLabel';
import { RecruitModalInputLabel } from './RecruitModalInputLabel';
import { RecruitModalCalender } from './RecruitModalCalender';
import RecruitInputTextForm from './RecruitInputTextForm';
import RecruitPasswordInput from './RecruitPasswordInput';
import { RecruitModalButton } from './RecruitModalButton';
import { action } from '@storybook/addon-actions';

export default {
  title: 'blocks/RecruitModal',
  component: RecruitModal,
} as ComponentMeta<typeof RecruitModal>;

const Template: ComponentStory<typeof RecruitModal> = (args) => <RecruitModal {...args} />;

export const ProjectUploadModal = Template.bind({});
ProjectUploadModal.args = {
  children: (
    <>
      <RecruitSubjectLabel title="1. 모집 기본 정보 입력" />
      <RecruitModalDropDown
        placeholder="스터디/프로젝트 선택"
        options={['스터디', '프로젝트']}
        description="모집 구분"
      />
      <RecruitModalDropDown
        placeholder="모집 인원을 정해주세요."
        options={['1', '2', '3', '4']}
        description="모집인원"
      />
      <RecruitModalDropDown
        placeholder="진행 방식을 선택하세요."
        options={['online', 'offline']}
        description="진행 방식"
      />
      <RecruitModalInputLabel label="오픈채팅 링크">
        <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>
      </RecruitModalInputLabel>
      <RecruitModalInputLabel label="기술 스택(복수 선택 가능)" optional>
        <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>
      </RecruitModalInputLabel>
      <RecruitModalInputLabel label="모집 포지션(복수 선택 가능)" optional>
        <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>
      </RecruitModalInputLabel>
      <RecruitModalCalender
        label=" 마감날짜 선택"
        selectedDate={null}
        onChange={action('onChange')}
      />
      <RecruitSubjectLabel title="2. 모집 정보 소개"></RecruitSubjectLabel> <RecruitInputTextForm />
      <RecruitPasswordInput
        label={'정보 수정을 위한 비밀번호 입력'}
        onChange={(password: string) => {
          console.log('입력이 잘된다.');
        }}
      />
      <RecruitModalButton>취소</RecruitModalButton>
      <RecruitModalButton>글 등록</RecruitModalButton>
    </>
  ),
};
