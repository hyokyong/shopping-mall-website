import { PropsWithChildren } from 'react';
import * as Style from './buttonStyle';
import { ButtonPropsType } from './buttonType';

/** 공통 버튼 컴포넌트 */
function Button({
  type = 'primary',
  size = 'm',
  isDisabled = false,
  onClick,
  children,
}: PropsWithChildren<ButtonPropsType>) {
  return (
    <Style.Button $type={type} $size={size} disabled={isDisabled} onClick={onClick}>
      {children}
    </Style.Button>
  );
}

export default Button;
