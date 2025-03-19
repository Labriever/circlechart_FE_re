import React from 'react';
import styled from 'styled-components';
import ChartItem from './ChartItem';

const SectionContainer = styled.section`
  padding: ${props => props.theme.spacing.large} 0;
  background: ${props => props.theme.colors.chartGradient};
  color: ${props => props.theme.colors.lightText};
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.large};
  font-size: ${props => props.theme.fontSizes.xxlarge};
  font-weight: 700;
`;

const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing.large};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.medium};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ChartRow = styled.div`
  margin-bottom: ${props => props.theme.spacing.xlarge};
`;

const ChartCategoryTitle = styled.h3`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.medium};
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 500;
`;

const ChartSection = () => {
  // 실제 구현에서는 API나 데이터 소스에서 가져온 데이터를 사용할 것입니다
  const chartCategories = [
    {
      id: 1,
      title: 'Global K-pop',
      items: [
        { id: 1, image: 'https://circlechart.kr/uploadDir/albumImg/original/20241021_8F94BFDC0D8A28875F90760B0781E9B2.jpg', alt: 'Global K-pop Chart 1' }
      ]
    },
    {
      id: 2,
      title: 'Retail Album',
      items: [
        { id: 2, image: 'https://circlechart.kr/uploadDir/aoaAlbumImg/original/20250312_73F6C1F3058C6D3B3CB19744BC76CA7E.jpg', alt: 'Retail Album Chart 1' }
      ]
    },
    {
      id: 3,
      title: 'Album',
      items: [
        { id: 3, image: 'https://circlechart.kr/uploadDir/aoaAlbumImg/original/20250312_73F6C1F3058C6D3B3CB19744BC76CA7E.jpg', alt: 'Album Chart 1' }
      ]
    },
    {
      id: 4,
      title: 'Digital',
      items: [
        { id: 4, image: 'https://circlechart.kr/uploadDir/albumImg/original/20241021_8F94BFDC0D8A28875F90760B0781E9B2.jpg', alt: 'Digital Chart 1' }
      ]
    },
    {
      id: 5,
      title: 'Streaming',
      items: [
        { id: 5, image: 'https://circlechart.kr/uploadDir/albumImg/original/20241021_8F94BFDC0D8A28875F90760B0781E9B2.jpg', alt: 'Streaming Chart 1' }
      ]
    },
    {
      id: 6,
      title: 'Social 2.0',
      items: [
        { id: 6, image: 'https://circlechart.kr/uploadDir/albumImg/original/20241021_8F94BFDC0D8A28875F90760B0781E9B2.jpg', alt: 'Social 2.0 Chart 1' }
      ]
    }
  ];

  return (
    <SectionContainer>
      <SectionTitle>CHART</SectionTitle>
      {chartCategories.map((category, index) => (
        index % 3 === 0 && (
          <ChartRow key={category.id}>
            <ChartGrid>
              {chartCategories.slice(index, index + 3).map(cat => (
                <div key={cat.id}>
                  <ChartCategoryTitle>{cat.title}</ChartCategoryTitle>
                  {cat.items.map(item => (
                    <ChartItem 
                    key={item.id} 
                    image={item.image} 
                    alt={item.alt} 
                    hoverBackgroundImage="/src/assets/img/pc_logo_white.png" 
                    />
                  ))}
                </div>
              ))}
            </ChartGrid>
          </ChartRow>
        )
      ))}
    </SectionContainer>
  );
};

export default ChartSection;
