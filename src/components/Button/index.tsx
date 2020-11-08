import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isFullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, isFullWidth }) => {
  return (
    <button type="button" className={cn(s.root, isFullWidth && s.fullWidth)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
