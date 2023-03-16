import React from 'react';
import * as S from './index.styles';
import { CommentProps } from './index.types';

export function Comment({ nickName, created, content }: CommentProps) {
  return (
    <S.Wrapper>
      <S.CommentHeader>
        <S.ProfileImageWrapper>
          <S.ProfileImage />
        </S.ProfileImageWrapper>
        <S.CommentHeaderSubWrapper>
          <S.NickName>{nickName}</S.NickName>
          <S.Created>{created}</S.Created>
        </S.CommentHeaderSubWrapper>
      </S.CommentHeader>
      <S.CommentBody>
        <S.CommentBodySubWrapper>
          <S.Content>{content}</S.Content>
        </S.CommentBodySubWrapper>
      </S.CommentBody>
    </S.Wrapper>
  );
}
