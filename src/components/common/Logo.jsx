import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
`;

const Logo = () => {
  return (
    <LogoLink to="/">
      <LogoImage src="/src/assets/img/pc_logo.png" alt="Circle Chart Logo" />
    </LogoLink>
  );
};

export default Logo;