import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  padding: 8px 16px;
  background-color: ${props => props.primary ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.primary ? props.theme.colors.lightText : props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.small};
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.small};
  cursor: pointer;
  transition: ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.primary ? '#0055b3' : 'rgba(0, 102, 204, 0.1)'};
  }
`;

const Button = ({ children, primary, onClick, ...props }) => {
  return (
    <ButtonContainer primary={primary} onClick={onClick} {...props}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
