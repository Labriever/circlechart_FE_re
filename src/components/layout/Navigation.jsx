import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.li`
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
    transition: ${props => props.theme.transitions.medium};
  }
  
  &:hover:after, &.active:after {
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  transition: ${props => props.theme.transitions.fast};
  padding: 10px 0;
  display: inline-block;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 100;
  
  ${NavItem}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(5px);
  }
`;

const DropdownItem = styled.li`
  list-style: none;
`;

const DropdownLink = styled(Link)`
  display: block;
  padding: 8px 20px;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.small};
  transition: ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: ${props => props.theme.colors.primary};
  }
`;

const Navigation = () => {
  // 드롭다운 메뉴 데이터 정의
  const navItems = [
    {
      title: 'CHART',
      path: '/chart',
      dropdown: [
        { name: 'Global K-pop Chart', path: '/chart/global-kpop' },
        { name: 'Digital Chart', path: '/chart/digital' },
        { name: 'Streaming Chart', path: '/chart/streaming' },
        { name: 'Download Chart', path: '/chart/download' },
        { name: 'BGM Chart', path: '/chart/bgm' },
        { name: 'V Coloring Chart', path: '/chart/vcoloring' },
        { name: 'Album Chart', path: '/chart/album' },
        { name: 'Retail Album Chart', path: '/chart/retail-album' },
        { name: 'Singing Room Chart', path: '/chart/singing-room' },
        { name: 'Bell Chart', path: '/chart/bell' },
        { name: 'Ring Chart', path: '/chart/ring' },
        { name: 'Social Chart 2.0', path: '/chart/social' }
      ]
    },
    {
      title: 'CERTIFICATION',
      path: '/certification',
      dropdown: [
        { name: 'Certification', path: '/certification' },
        { name: 'Album', path: '/certification/album' },
        { name: 'Download', path: '/certification/download' },
        { name: 'Streaming', path: '/certification/streaming' },
        { name: "CIRCLE's Choice", path: '/certification/choice' }
      ]
    },
    {
      title: 'NEWS',
      path: '/news',
      dropdown: [
        { name: 'News Home', path: '/news' },
        { name: 'Opinion', path: '/news/opinion' },
        { name: 'Album', path: '/news/album' },
        { name: 'K-pop now', path: '/news/kpop-now' },
        { name: 'Perform', path: '/news/perform' },
        { name: 'Issue', path: '/news/issue' }
      ]
    },
    {
      title: 'ARCHIVE',
      path: '/archive',
      dropdown: [
        { name: 'Archive Home', path: '/archive' },
        { name: 'Circle Week', path: '/archive/circle-week' },
        { name: 'Circle Report', path: '/archive/report' },
        { name: 'Interview', path: '/archive/interview' },
        { name: 'K-pop Story', path: '/archive/kpop-story' }
      ]
    },
    {
      title: 'COMMUNITY',
      path: '/community',
      dropdown: [
        { name: 'Notice', path: '/community/notice' },
        { name: 'FAQ', path: '/community/faq' }
      ]
    }
  ];

  return (
    <NavContainer>
      <NavList>
        {navItems.map((item, index) => (
          <NavItem key={index}>
            <NavLink to={item.path}>{item.title}</NavLink>
            {item.dropdown && (
              <DropdownContainer>
                {item.dropdown.map((dropdownItem, dropdownIndex) => (
                  <DropdownItem key={dropdownIndex}>
                    <DropdownLink to={dropdownItem.path}>
                      {dropdownItem.name}
                    </DropdownLink>
                  </DropdownItem>
                ))}
              </DropdownContainer>
            )}
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default Navigation;