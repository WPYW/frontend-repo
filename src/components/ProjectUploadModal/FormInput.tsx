import React from 'react';
import styled from 'styled-components';

import { IFormInput } from './index.types';

export function FormInput({ label, name, value, onChange, ...props }: IFormInput) {
  return (
    <FormInputWrapper>
      <Label>{label}</Label>
      <Input name={name} value={value} onChange={onChange} {...props} />
    </FormInputWrapper>
  );
}

const FormInputWrapper = styled.div`
  border: 2px solid limegreen;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  border: 2px solid limegreen;

  font-size: var(--base-text-size-small);
`;

const Input = styled.input`
  border: 2px solid limegreen;

  border-radius: 8px;

  padding: 8px 8px 8px 8px;

  outline: none;

  background: transparent;

  font-size: var(--base-text-size-normal);
  color: var(--base-text-color);
`;
