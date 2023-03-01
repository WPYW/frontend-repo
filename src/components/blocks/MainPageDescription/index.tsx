import React from 'react';
import * as S from './index.styles';

import { BaseButton } from '@/components/atoms';
import { PageDescription } from '../PageDescription';

export function MainPageDescription() {
  return (
    <S.Wrapper>
      <S.SubWrapper>
        <PageDescription
          title="WHAT PROJECT YOU WANT?"
          description={`포트폴리오를 편하게 등록할 수 있는 사이트를 찾으시나요?\n프로젝트를 같이 진행하려는 팀원을 찾지 못해 고민중이신가요?\nWPYW가 당신의 고민을 해결해드립니다!`}
        />
        <BaseButton onClick={() => console.log('프로젝트 공유하기')}>프로젝트 공유하기</BaseButton>
      </S.SubWrapper>
    </S.Wrapper>
  );
}
