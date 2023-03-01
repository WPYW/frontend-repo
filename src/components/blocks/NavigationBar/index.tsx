import React, { useState } from 'react';
import * as S from './index.styles';
import { NavigationBarProps } from './index.types';

import { NavigationItem } from '@/components/atoms';

export function NavigationBar({ navItemList }: NavigationBarProps) {
  const [activatedItem, setActivatedItem] = useState('');

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) =>
    setActivatedItem((event.target as HTMLElement).innerHTML);

  return (
    <S.Wrapper>
      {navItemList.map((navigationItem, index) => (
        <NavigationItem
          key={index}
          clicked={activatedItem === navigationItem}
          onClick={onClickHandler}
        >
          {navigationItem}
        </NavigationItem>
      ))}
    </S.Wrapper>
  );
}
