import React, { useEffect, useState } from 'react';
import { BACKEND_API_URL } from '@/common/url';
import * as S from './index.styles';
import { CardListProps } from './index.types';
import { RecruitCard } from '../RecruitmentCard';

export function RecruitCardList({ recruits }: CardListProps) {
  return (
    <S.Wrapper>
      {recruits.map((recruits, index) => (
        <RecruitCard key={index} recruits={recruits} />
      ))}
    </S.Wrapper>
  );
}

export default RecruitCardList;
