import styled from 'styled-components';

export const Wrapper = styled.div`
  width: fit-content;

  padding: 5px 7px;

  font-size: var(--base-text-size-xsmall);
  color: rgb(109, 85, 255);

  background-color: rgb(241, 238, 252);

  border: 1px solid rgb(241, 238, 252);
  border-radius: 8px;

  white-space: nowrap;

  cursor: pointer;

  transition: all 0.2s ease-in-out 0s;

  &:hover {
    border: 1px solid rgb(255, 116, 156);
    box-shadow: rgb(255 137 171 / 40%) 0px 0px 0px 3px;
  }
`;
