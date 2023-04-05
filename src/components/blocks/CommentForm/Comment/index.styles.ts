import styled from 'styled-components';
import { ReactComponent as ProfileIcon } from '@/assets/commenter-image.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-bottom: 30px;
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentHeaderSubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ProfileImageWrapper = styled.div`
  width: 30px;
  height: 30px;

  margin-right: 10px;
`;

export const ProfileImage = styled(ProfileIcon)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NickName = styled.div`
  font-weight: var(--base-text-weight-medium);
  font-size: var(--base-text-size-normal);
  color: var(--comment-text-color);
`;

export const Created = styled.div`
  font-size: var(--base-text-size-xsmall);
  color: var(--created-text-color);
`;

export const CommentBody = styled.div`
  display: flex;
  padding-left: 30px;
`;

export const CommentBodySubWrapper = styled.div`
  background-color: rgb(240, 238, 255);

  padding: 8px 12px;
  border-radius: 12px;
`;

export const Content = styled.p`
  font-weight: var(--base-text-weight-medium);
  font-size: var(--base-text-size-normal);
  color: #000000;

  word-break: break-word;
  white-space: pre-line;
`;
