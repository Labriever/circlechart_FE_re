import React from 'react';
import styled from 'styled-components';

const NewsSectionContainer = styled.section`
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

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing.medium};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const NewsItem = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.medium};
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const NewsImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NewsTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.medium};
  margin-bottom: ${props => props.theme.spacing.small};
  color: ${props => props.theme.colors.text};
`;

const NewsDate = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  color: #888;
`;

const NewsSection = () => {
  // 실제 구현에서는 API나 데이터 소스에서 가져온 데이터를 사용할 것입니다
  const newsItems = [
    {
      id: 1,
      title: '아티스트 오브 더 위크 선정 결과',
      image: 'https://via.placeholder.com/120',
      date: '2025-03-15'
    },
    {
      id: 2,
      title: '2025년 3월 2주차 차트 업데이트',
      image: 'https://via.placeholder.com/120',
      date: '2025-03-14'
    },
    {
      id: 3,
      title: '써클차트 신규 파트너사 발표',
      image: 'https://via.placeholder.com/120',
      date: '2025-03-12'
    },
    {
      id: 4,
      title: '2025년 2월 월간 차트 결과 발표',
      image: 'https://via.placeholder.com/120',
      date: '2025-03-05'
    }
  ];

  return (
    <NewsSectionContainer>
      <SectionInner>
        <SectionHeader>
          <SectionTitle>NEWS</SectionTitle>
          <ViewMoreLink href="#">
            더보기
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </ViewMoreLink>
        </SectionHeader>
        <NewsGrid>
          {newsItems.map(item => (
            <NewsItem key={item.id}>
              <NewsImage>
                <img src={item.image} alt={item.title} />
              </NewsImage>
              <NewsContent>
                <NewsTitle>{item.title}</NewsTitle>
                <NewsDate>{item.date}</NewsDate>
              </NewsContent>
            </NewsItem>
          ))}
        </NewsGrid>
      </SectionInner>
    </NewsSectionContainer>
  );
};

export default NewsSection;
