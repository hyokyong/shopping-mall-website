import { ReactNode } from 'react';

interface ButtonPropsType {
  type: 'primary' | 'secondary';
  size: 'l' | 'm' | 's';
  isDisabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

interface ButtonStylePropsType {
  $type: 'primary' | 'secondary';
  $size: 'l' | 'm' | 's';
}

export type { ButtonPropsType, ButtonStylePropsType };
