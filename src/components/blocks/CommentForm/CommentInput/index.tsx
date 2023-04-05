import React from 'react';
import * as S from './index.styles';
import { CommentInputProps } from './index.types';

export function CommentInput({ value, onChange }: CommentInputProps) {
  return (
    <S.Wrapper>
      <S.Textarea
        value={value}
        onChange={onChange}
        placeholder="최대 100글자 입력 가능"
        maxLength={100}
        spellCheck={false}
      />
      <S.SubWrapper>
        <S.Caution>* 프로젝트와 관련없는 댓글은 삭제될 수 있습니다</S.Caution>
        <S.Length>{`${value.length}/100`}</S.Length>
      </S.SubWrapper>
    </S.Wrapper>
  );
}
