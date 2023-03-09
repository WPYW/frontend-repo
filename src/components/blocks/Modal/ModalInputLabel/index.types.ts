import { ReactNode } from 'react';
export interface ModalInputLabelProps {
  label: string;
  optional?: boolean;
  caution?: string;
  children: ReactNode;
}
