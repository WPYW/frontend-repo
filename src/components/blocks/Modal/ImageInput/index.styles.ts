import styled from 'styled-components';
import { ReactComponent as InputLabelImage } from '@/assets/image-input-button.svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InputWrapper = styled.label`
  cursor: pointer;
`;

export const Label = styled(InputLabelImage)`
  width: 100px;
  height: 100px;
  object-fit: cover;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 8px;
`;

export const Input = styled.input`
  display: none;
`;

export const Preview = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 8px;
`;
