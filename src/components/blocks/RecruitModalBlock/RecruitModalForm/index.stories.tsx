import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecruitModalForm } from './index';
import { RecruitModalInputLabel } from '../RecruitModalInputLabel';
import { RecruitModalDropDown } from '../RecruitModalDropDown';
import { RecruitSubjectLabel } from '../RecruitSubjectLabel';
import RecruitListSubmit from '../RecruitInputTextForm';
import { RecruitModalCalender } from '../RecruitModalCalender';
import { action } from '@storybook/addon-actions';
import { RecruitModalButton } from '../RecruitModalButton';
import RecruitPasswordInput from '../RecruitPasswordInput';
export default {
  title: 'blocks/RecruitModal/RecruitModalForm',
  component: RecruitModalForm,
} as ComponentMeta<typeof RecruitModalForm>;

const Template: ComponentStory<typeof RecruitModalForm> = (args) => <RecruitModalForm {...args} />;

export const DefaultModalForm = Template.bind({});
DefaultModalForm.args = {
  children: (
    <>
      <RecruitSubjectLabel title="1. 모집 기본 정보 입력"></RecruitSubjectLabel>
      <RecruitModalDropDown placeholder="스터디/프로젝트 선택" options={['스터디', '프로젝트']} />
      <RecruitModalDropDown placeholder="모집인원" options={['1', '2', '3', '4']} />
      <RecruitModalDropDown placeholder="진행 방식" options={['online', 'offline']} />
      <RecruitModalCalender
        label=" 시작날짜 선택"
        selectedDate={null}
        onChange={action('onChange')}
      />
      <RecruitModalCalender
        label=" 마감날짜 선택"
        selectedDate={null}
        onChange={action('onChange')}
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
      <RecruitSubjectLabel title="2. 모집 정보 소개"></RecruitSubjectLabel>
      <RecruitListSubmit />
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
