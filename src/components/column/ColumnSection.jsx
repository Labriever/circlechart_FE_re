import React from 'react';
import styled from 'styled-components';

const ColumnSectionContainer = styled.section`
  padding: ${props => props.theme.spacing.large} 0;
  background-color: ${props => props.theme.colors.background};
`;

const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.medium};
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.large};
`;

const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.xlarge};
  color: ${props => props.theme.colors.text};
`;

const ViewMoreLink = styled.a`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
  
  svg {
    margin-left: 5px;
  }
`;

const ColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${props => props.theme.spacing.medium};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ColumnImage = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  background-color: #e0e0e0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ColumnTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: ${props => props.theme.spacing.medium};
  color: ${props => props.theme.colors.text};
`;

const ColumnDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  margin-bottom: ${props => props.theme.spacing.medium};
  color: ${props => props.theme.colors.text};
`;

const ColumnDate = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  color: #888;
`;

const ColumnSection = () => {
  return (
    <ColumnSectionContainer>
      <SectionInner>
        <SectionHeader>
          <SectionTitle>COLUMN</SectionTitle>
          <ViewMoreLink href="#">
            더보기
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </ViewMoreLink>
        </SectionHeader>
        <ColumnGrid>
          <ColumnImage>
            <img src="https://via.placeholder.com/300" alt="Column" />
          </ColumnImage>
          <ColumnContent>
            <ColumnTitle>G-Dragon 써클지수 점유율 1위.. 2025년 2월 TOP400 기준</ColumnTitle>
            <ColumnDescription>디지털 점유율 소셜에서 3개월 이상 방송곡 인증곡 등 빅데이터 이용한 점유율...</ColumnDescription>
            <ColumnDate>2025-02</ColumnDate>
          </ColumnContent>
        </ColumnGrid>
      </SectionInner>
    </ColumnSectionContainer>
  );
};

export default ColumnSection;
