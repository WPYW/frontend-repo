import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as CommenterImage } from '@/assets/commenter-image.svg';
import { BACKEND_API_URL } from '@/common/url';
import { useParams } from 'react-router-dom';
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from '@tanstack/react-query';

interface Comment {
  content: string;
  created: string;
  id: string;
  nickname: string;
}

interface IProjectDetail {
  projectTitle: string;
  githubLink: string;
  demositeLink: string;
  projectHashtags: string[];
  views: number;
  likes: number;
  comments: Comment[];
}

interface IProjectDetailComment {
  comments: Comment[];
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<IProjectDetail, unknown>>;
}

export function ProjectDetailComment({ comments, refetch }: IProjectDetailComment) {
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
        onClick={async () => {
          const form = new FormData();
          form.append('content', comment);
          await fetch(`${BACKEND_API_URL}/projects/${params.id}/comments/`, {
            method: 'POST',
            body: form,
          });
          setComment('');
          refetch();
        }}
      >
        댓글 등록
      </CommentButton>

      <CommentListWrapper>
        {comments.map((item, index) => (
          <Comment key={index}>
            <CommentHeaderWrapper>
              <CommenterImageWrapper>
                <CommenterImage style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </CommenterImageWrapper>
              <CommentHeaderSubWrapper>
                <CommenterName>{item.nickname}</CommenterName>
                <CommentCreated>{item.created}</CommentCreated>
              </CommentHeaderSubWrapper>
            </CommentHeaderWrapper>
            <CommentContent>{item.content}</CommentContent>
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
  all: unset;
  margin-top: 20px;

  align-self: end;

  border: 2px solid;
  border-color: var(--detailpage-button-border-color);
  border-radius: 8px;

  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-normal);
  color: var(--detailpage-button-text-color);

  padding: 8px 30px;

  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: var(--detailpage-button-text-color);
  }

  @media only screen and (max-width: 700px) {
    font-size: var(--base-text-size-small);
  }
`;

const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  padding-top: 30px;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  &::after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: #e1e1e1;
  }
`;

const CommentHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const CommenterImageWrapper = styled.div`
  width: 30px;
  height: 30px;
`;

const CommentHeaderSubWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommenterName = styled.div`
  color: var(--detailpage-commenter-name-text-color);
`;

const CommentCreated = styled.div`
  font-size: var(--base-text-size-small);
  color: var(--detailpage-commenter-created-text-color);
`;

const CommentContent = styled.div`
  font-size: var(--base-text-size-medium);
  color: var(--detailpage-commenter-content-text-color);

  @media only screen and (max-width: 700px) {
    font-size: var(--base-text-size-normal);
  }
`;
