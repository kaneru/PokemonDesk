import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color?: 'yellow' | 'green';
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, isFullWidth, color = 'green', size = 'medium' }) => {
  return (
    <button type="button" className={cn(s.root, isFullWidth && s.fullWidth, s[color], s[size])} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
