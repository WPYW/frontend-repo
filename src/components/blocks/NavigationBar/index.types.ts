import { Attributes, HTMLAttributes } from 'react';
export interface NavigationBarProps extends HTMLAttributes<Attributes> {
  navItemList: string[];
}
