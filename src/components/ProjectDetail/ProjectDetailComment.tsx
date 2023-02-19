import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as CommenterImage } from '@/assets/commenter-image.svg';
import { BACKEND_API_URL } from '@/common/url';
import { useParams } from 'react-router-dom';

interface Comment {
  content: string;
  created: string;
  id: string;
  nickname: string;
}

interface IProjectDetailComment {
  comments: Comment[];
}

export function ProjectDetailComment({ comments }: IProjectDetailComment) {
  const [comment, setComment] = useState('');

  const params = useParams();

  return (
    <ProjectCommentWrapper>
      <CommentCount>{`현재 ${comments.length}개의 댓글이 있습니다.`}</CommentCount>
      <CommentInput
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        placeholder="최대 100글자 입력 가능"
        maxLength={100}
        spellCheck={false}
      />
      <CommentLength>{`${comment.length}/100`}</CommentLength>
      <CommentButton
        onClick={() => {
          const form = new FormData();
          form.append('content', comment);
          fetch(`${BACKEND_API_URL}/projects/${params.id}/comments/`, {
            method: 'POST',
            body: form,
          });
          setComment('');
        }}
      >
        댓글 등록
      </CommentButton>

      <CommentListWrapper>
        {comments.map((item, index) => (
          <Comment key={index}>
            <CommenterImageWrapper>
              <CommenterImage style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </CommenterImageWrapper>
            <CommentSubWrapper>
              <div style={{ display: 'flex', gap: '10px' }}>
                <CommenterName>랜덤 사용자 이름</CommenterName>
                <CommentCreated>{item.created}</CommentCreated>
              </div>
              <CommentContent>{item.content}</CommentContent>
            </CommentSubWrapper>
          </Comment>
        ))}
      </CommentListWrapper>
    </ProjectCommentWrapper>
  );
}

const ProjectCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentCount = styled.div`
  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-medium);
  color: var(--detailpage-comment-count-text-color);

  margin-bottom: 20px;
`;

const CommentInput = styled.textarea`
  all: unset;

  vertical-align: top;

  color: var(--detailpage-comment-input-text-color);

  background-color: var(--detailpage-comment-input-background-color);

  padding-top: 16px;
  padding-left: 16px;

  border: 1px solid;
  border-color: var(--detailpage-comment-input-border-color);
  border-radius: 4px;

  &::placeholder {
    color: var(--detailpage-comment-input-placeholder-color);
  }
`;

const CommentLength = styled.div`
  align-self: end;

  color: var(--detailpage-comment-length-text-color);

  margin-top: 10px;
`;

const CommentButton = styled.button`
  margin-top: 20px;

  align-self: end;

  border: 2px solid;
  border-color: var(--detailpage-button-border-color);
  border-radius: 8px;

  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-normal);
  color: var(--detailpage-button-text-color);

  padding: 8px 30px;

  background: none;

  cursor: pointer;
`;

const CommentListWrapper = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Comment = styled.div`
  display: flex;
  gap: 20px;
`;

const CommentSubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CommenterImageWrapper = styled.div`
  width: 50px;
  height: 50px;
`;

const CommenterName = styled.div`
  color: var(--detailpage-commenter-name-text-color);
`;

const CommentContent = styled.div`
  color: var(--detailpage-commenter-content-text-color);
`;

const CommentCreated = styled.div`
  color: var(--detailpage-commenter-content-text-color);
`;
