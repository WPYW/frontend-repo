import styled from 'styled-components';
import { ButtonProps, DescriptionInputProps } from './index.types';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const SubjectInput = styled.input`
  padding: 10px;
  border: 1px solid #ff9b25;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const DescriptionInput = styled.textarea<DescriptionInputProps>`
  padding: 10px;
  border: 1px solid #ff9b25;
  border-radius: 5px;
  resize: none;
  min-height: 100px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
`;

export const FontWeightButton = styled.button.attrs(() => ({
  type: 'button',
}))<ButtonProps>`
  margin-right: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: ${({ fontWeight }) => fontWeight};

  &:hover {
    font-weight: bold;
  }
`;
export const TextAlignButton = styled.button.attrs(() => ({
  type: 'button',
}))<ButtonProps>`
  margin-right: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-align: ${({ textAlign }) => textAlign};
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: var(--main-color-blue);
  color: white;
  cursor: pointer;
`;

export const InputFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextAlignButtonGroup = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const SubmitButton = styled.button`
  margin-top: 16px;
  padding: 8px;
  background-color: #428bca;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3071a9;
  }
`;
