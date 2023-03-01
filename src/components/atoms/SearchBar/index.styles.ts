import styled from 'styled-components';

import { ReactComponent as Icon } from '@/assets/search-icon.svg';

export const Wrapper = styled.form`
  display: flex;
  gap: 6px;

  height: fit-content;

  border: 1px solid rgb(245, 245, 247);
  border-radius: 1rem;

  background-color: rgb(245, 245, 247);

  padding: 6px 12px 6px 8px;
`;

export const Input = styled.input`
  outline: none;
  border: none;

  width: 100%;

  font-size: var(--base-text-size-normal);
  color: rgb(0, 0, 0);

  background-color: transparent;
`;

export const InputIcon = styled(Icon)`
  /* fill: rgb(142, 142, 142); */
  min-width: 15px;
  min-height: 15px;
`;
