import React from 'react';
import { Wrapper } from './index.styles';
import { BaseButtonProps } from './index.types';

export function BaseButton({ children, ...rest }: BaseButtonProps) {
  return <Wrapper {...rest}>{children}</Wrapper>;
}
