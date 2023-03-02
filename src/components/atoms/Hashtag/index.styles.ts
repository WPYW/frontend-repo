import styled from 'styled-components';

export const Wrapper = styled.div`
  width: fit-content;

  padding: 5px 7px;

  font-size: var(--base-text-size-xsmall);
  color: #ff9b25;

  background-color: #fff4e6;

  border: 1px solid #fff4e6;
  border-radius: 8px;

  white-space: nowrap;

  cursor: pointer;

  transition: all 0.2s ease-in-out 0s;

  &:hover {
    border: 1px solid #ff8f00;
    box-shadow: rgb(255 143 0 / 40%) 0px 0px 0px 3px;
  }
`;
