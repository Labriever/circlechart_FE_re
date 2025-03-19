import React from 'react';
import styled from 'styled-components';

const PlaylistSectionContainer = styled.section`
  padding: ${props => props.theme.spacing.large} 0;
  background-color: ${props => props.theme.colors.background};
`;

const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.medium};
`;

const PlaylistGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${props => props.theme.spacing.medium};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const PlaylistImage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PlaylistContent = styled.div`
  background-color: #f8a5a5;
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: ${props => props.theme.spacing.large};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PlaylistTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xlarge};
  margin-bottom: ${props => props.theme.spacing.medium};
  color: #fff;
`;

const PlaylistDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  margin-bottom: ${props => props.theme.spacing.large};
  color: #fff;
`;

const PlaylistDate = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  color: rgba(255, 255, 255, 0.8);
`;

const PlaylistSection = () => {
  return (
    <PlaylistSectionContainer>
      <SectionInner>
        <PlaylistGrid>
          <PlaylistImage>
            <img src="https://via.placeholder.com/500x500" alt="Playlist Cover" />
          </PlaylistImage>
          <PlaylistContent>
            <PlaylistTitle>Playlist🎧 ʚ난 네가 바람의 온도를 닮아서 좋아ɞ ..</PlaylistTitle>
            <PlaylistDescription>따듯한 햇살처럼 포근함을 담은 플레이리스트 센스! 서비트 봄을 기다리며✨</PlaylistDescription>
            <PlaylistDate>2025-03-14</PlaylistDate>
          </PlaylistContent>
        </PlaylistGrid>
      </SectionInner>
    </PlaylistSectionContainer>
  );
};

export default PlaylistSection;
