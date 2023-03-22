import React from 'react';
import * as S from './index.styles';
import { RecruitTextInputProps } from './index.types';

export function RecruitTextInput({ setTextInput, ...rest }: RecruitTextInputProps) {
  const { value, setValue } = setTextInput;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <S.Wrapper value={value} onChange={onChange} {...rest} />;
}
