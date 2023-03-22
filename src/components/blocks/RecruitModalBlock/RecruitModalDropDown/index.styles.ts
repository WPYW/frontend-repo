import styled, { css } from 'styled-components';
import { DropdownButtonProps } from './index.types';
export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 30%;
`;

export const DropdownButton = styled.button<DropdownButtonProps>`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 5px;
  font-weight: bolder;
  color: #bcbcbc;
  border: none;
  border-bottom: 1px solid #ff9b25;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:after {
    content: '';
    display: inline-block;
    margin-left: 5px;
    margin-right: px;
    width: 0;
    height: 0;
    border-top: 5px solid #ff9b25;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
  }

  ${(props) =>
    props.isOpen &&
    css`
      &:after {
        border-top: none;
        border-bottom: 5px solid #ff9b25;
      }
    `}
`;

export const DropdownMenu = styled.div`
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  z-index: 1;
`;

export const DropdownMenuItem = styled.div`
  padding: 10px;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 5px;
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;
