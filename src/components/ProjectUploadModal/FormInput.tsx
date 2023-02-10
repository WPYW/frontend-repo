import React from 'react';
import styled from 'styled-components';

import { IFormInput } from './index.types';

export function FormInput({ label, name, value, onChange, ...props }: IFormInput) {
  return (
    <div>
      <FormInputWrapper>
        <LabelWrapper>
          <Required required={props.required}>*</Required>
          <Label>{label}</Label>
        </LabelWrapper>
        <Input
          name={name}
          value={value}
          onChange={onChange}
          spellCheck={false}
          autoComplete="false"
          {...props}
        />
      </FormInputWrapper>
      {name === 'projectLink' ? (
        <InputDescription>* 예시에 맞지 않은 링크는 예고없이 삭제될 수 있습니다.</InputDescription>
      ) : null}
    </div>
  );
}

const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  &::after {
    content: '';
    display: block;

    width: 100%;
    height: 2px;

    background-color: var(--project-upload-modal-input-underline-color);
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  gap: 2px;
`;

const Required = styled.div<{ required: boolean | undefined }>`
  color: var(--project-upload-modal-input-required-color);

  visibility: ${(props) => (!props.required ? 'hidden' : '')};
`;

const Label = styled.label`
  font-size: var(--base-text-size-small);
  font-weight: var(--base-text-weight-medium);
  color: var(--project-upload-modal-input-label-text-color);
`;

const Input = styled.input`
  all: unset;
  font-size: var(--base-text-size-small);
  color: var(--project-upload-modal-input-text-color);

  padding: 8px 8px 8px 8px;
`;

const InputDescription = styled.div`
  font-size: var(--base-text-size-xsmall);
  font-weight: var(--base-text-weight-medium);
  color: var(--project-upload-modal-input-required-color);

  margin-top: 6px;
`;
