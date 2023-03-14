import React from 'react';
import * as S from './index.styles';
import { CommentCountProps } from './index.types';

export function CommentCount({ count }: CommentCountProps) {
  return <S.Wrapper>{`현재 ${count}개의 댓글이 있습니다`}</S.Wrapper>;
}
