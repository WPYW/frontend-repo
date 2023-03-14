import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Textarea = styled.textarea`
  all: unset;

  font-size: var(--base-text-size-medium);
  color: var(--comment-input-text-color);

  background-color: var(--comment-input-background-color);

  padding-top: 16px;
  padding-left: 16px;

  border-radius: 4px;

  &::placeholder {
    color: var(--comment-input-placeholder-text-color);
  }
`;

export const SubWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 8px;
`;

export const Caution = styled.p`
  font-size: var(--base-text-size-small);
  color: #ff0000;
`;

export const Length = styled.p`
  font-size: var(--base-text-size-small);
  color: #b1b1b1;
`;
