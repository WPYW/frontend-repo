import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecruitModalForm } from './index';
import { RecruitModalInputLabel } from '../RecruitModalInputLabel';
import { RecruitModalDropDown } from '../RecruitModalDropDown';
import { RecruitSubjectLabel } from '../RecruitSubjectLabel';
import RecruitInputTextForm from '../RecruitInputTextForm';
import { RecruitModalCalender } from '../RecruitModalCalender';
import { action } from '@storybook/addon-actions';
import { RecruitModalButton } from '../RecruitModalButton';
import RecruitPasswordInput from '../RecruitPasswordInput';
import * as S from './index.styles';

export default {
  title: 'blocks/RecruitModal/RecruitModalForm',
  component: RecruitModalForm,
} as ComponentMeta<typeof RecruitModalForm>;

const Template: ComponentStory<typeof RecruitModalForm> = (args) => <RecruitModalForm {...args} />;

export const DefaultModalForm = Template.bind({});
DefaultModalForm.args = {
  children: (
    <>
      <RecruitSubjectLabel title="1. 모집 기본 정보 입력" />
      <S.HeaderWrapper>
        <S.HeaderDropdownsWrapper>
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
        </S.HeaderDropdownsWrapper>
        <S.HeaderInputsWrapper>
          <RecruitModalInputLabel label="오픈채팅 링크">
            <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>
          </RecruitModalInputLabel>
          <RecruitModalInputLabel label="기술 스택(복수 선택 가능)" optional>
            <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>
          </RecruitModalInputLabel>
          <RecruitModalInputLabel label="모집 포지션(복수 선택 가능)" optional>
            <input placeholder="입력해주세요" style={{ all: 'unset' }}></input>
          </RecruitModalInputLabel>
        </S.HeaderInputsWrapper>
      </S.HeaderWrapper>
      <S.BodyWrapper>
        <S.BodyInputsWrapper>
          <RecruitModalCalender
            label=" 마감날짜 선택"
            selectedDate={null}
            onChange={action('onChange')}
          />
        </S.BodyInputsWrapper>
      </S.BodyWrapper>
      <RecruitSubjectLabel title="2. 모집 정보 소개"></RecruitSubjectLabel>
      <S.FooterWrapper>
        {' '}
        <RecruitInputTextForm />
        <S.FooterInputsWrapper>
          <RecruitModalButton>취소</RecruitModalButton>
          <RecruitModalButton>글 등록</RecruitModalButton>
        </S.FooterInputsWrapper>
      </S.FooterWrapper>
    </>
  ),
};
