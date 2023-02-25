import styled from 'styled-components';

export const Wrapper = styled.button`
  all: unset;

  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-2xlarge);
  color: var(--main-color-orange);

  border: 4px solid;
  border-color: var(--main-color-orange);
  border-radius: 8px;

  padding: 8px 12px;

  cursor: pointer;

  &:hover {
    background-color: var(--main-color-orange);
    color: #ffffff;
  }
`;
