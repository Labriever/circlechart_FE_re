import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: ${props => props.theme.borderRadius.circle};
  color: #fff;
  transition: ${props => props.theme.transitions.fast};
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &.facebook {
    background-color: #3b5998;
  }
  
  &.youtube {
    background-color: #ff0000;
  }
  
  &.instagram {
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  }
  
  &.tiktok {
    background-color: #000000;
  }
  
  &.twitter {
    background-color: #1da1f2;
  }
`;

const SocialLinks = () => {
  return (
    <SocialLinksContainer>
      <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
        <FaFacebookF />
      </SocialLink>
      <SocialLink href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="youtube">
        <FaYoutube />
      </SocialLink>
      <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
        <FaInstagram />
      </SocialLink>
      <SocialLink href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="tiktok">
        <FaTiktok />
      </SocialLink>
      <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
        <FaTwitter />
      </SocialLink>
    </SocialLinksContainer>
  );
};

export default SocialLinks;
