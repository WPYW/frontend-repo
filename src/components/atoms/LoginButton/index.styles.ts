import styled from 'styled-components';

export const Wrapper = styled.button`
  text-decoration: none;

  font-weight: 500;
  font-size: 1.3rem;

  margin-left: 8px;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(234, 234, 236);

  border-radius: 20px;
  width: auto;
  text-align: center;
  cursor: pointer;
  outline: none;
  white-space: nowrap;
  transition: all 0.2s ease-in-out 0s;

  &:hover {
    background-color: rgb(246, 246, 248);
    color: rgb(0, 0, 0);
    border: 1px solid rgb(234, 234, 236);
  }
`;
