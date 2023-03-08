import React from 'react';
import * as S from './index.styles';
import { TextInputProps } from './index.types';

export function TextInput({ setTextInput, ...rest }: TextInputProps) {
  const { value, setValue } = setTextInput;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <S.Wrapper value={value} onChange={onChange} {...rest} />;
}
