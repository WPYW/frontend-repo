import React, { useState } from 'react';
import * as S from './index.styles';
import { CommentFormProps } from './index.types';

import { CommentCount } from './CommentCount';
import { CommentInput } from './CommentInput';
import { CommentButton } from './CommentButton';
import { Comment } from './Comment';

export function CommentForm({ comments, addComment }: CommentFormProps) {
  const [comment, setComment] = useState('');

  const addCommentHandler = () => {
    const form = new FormData();
    form.append('content', comment);
    addComment(form);
    setComment('');
  };

  return (
    <S.Wrapper>
      <CommentCount count={comments.length} />
      <CommentInput value={comment} onChange={(event) => setComment(event.target.value)} />
      <S.ButtonWrapper>
        <CommentButton onClick={addCommentHandler}>댓글 등록</CommentButton>
      </S.ButtonWrapper>
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </S.Wrapper>
  );
}
