import React from 'react';
import styled from 'styled-components';
import SocialLinks from '../common/SocialLinks';
import Logo from '../common/Logo';
import Button from '../common/Button';
import Navigation from './Navigation';

const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${props => props.theme.colors.headerBackground};
  box-shadow: ${props => props.theme.shadows.small};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 2rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <TopBar>
        <SocialLinks />
        <Button>LOGIN</Button>
      </TopBar>
      <MainHeader>
        <Logo />
        <Navigation />
      </MainHeader>
    </HeaderContainer>
  );
};

export default Header;
