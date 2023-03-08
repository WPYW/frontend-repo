import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  all: unset;

  font-size: var(--base-text-size-medium);
  color: var(--base-input-text-color);

  padding-left: 4px;
  padding-top: 4px;
`;
