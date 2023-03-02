import styled from 'styled-components';

import { ReactComponent as Icon } from '@/assets/search-icon.svg';

export const Wrapper = styled.form`
  display: flex;
  gap: 8px;

  width: 100%;

  border: 1px solid var(--search-bar-border-color);
  border-radius: 1rem;

  background-color: var(--search-bar-background-color);

  padding: 6px 12px 6px 8px;
`;

export const Input = styled.input`
  outline: none;
  border: none;

  width: 100%;

  font-size: var(--base-text-size-normal);
  color: var(--search-bar-text-color);

  background-color: transparent;
`;

export const InputIcon = styled(Icon)`
  /* fill: rgb(142, 142, 142); */
  max-width: 15px;
  max-height: 15px;
`;
