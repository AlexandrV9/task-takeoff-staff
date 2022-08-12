import React from 'react';
import { IconType } from 'react-icons';

import StyledButton from './StyledButton';

interface ButtonProps {
  fill?: string,
  stroke?: string,
  text?: string,
  className?: string,
  Icon?: IconType,
}

const Button: React.FC<ButtonProps> = ({ 
  fill, 
  stroke, 
  text,
  className, 
  Icon 
}) => {
  return (
    <StyledButton className={className}>
      { Icon ? <Icon fill={fill} stroke={stroke} /> : text }
    </StyledButton>
  );
}

export default Button;
