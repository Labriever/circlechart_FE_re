import React from 'react';
import styled from 'styled-components';

const ChartItemContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: ${props => props.theme.borderRadius.large};
  overflow: hidden;
  transition: ${props => props.theme.transitions.medium};
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ChartCircle = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  
  /* 테두리 추가 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.7);
    box-sizing: border-box;
    z-index: 2;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border-radius: 50%;
  overflow: hidden;
`;

// hover 효과를 위한 배경 이미지 컨테이너
const HoverBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
`;

const ChartImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 2;
  transition: opacity 0.3s ease;
`;

// hover 효과를 추가한 컨테이너
const HoverContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  
  &:hover ${HoverBackground} {
    opacity: 0.5;
  }
  
  &:hover ${ChartImage} {
    opacity: 0.8; // 이미지도 약간 투명하게 만들어 배경이 더 잘 보이게 할 수 있습니다
  }
`;

const ChartItem = ({ image, alt, hoverBackgroundImage }) => {
  return (
    <ChartItemContainer>
      <ChartCircle>
        <ImageContainer>
          <HoverContainer>
            <HoverBackground backgroundImage={hoverBackgroundImage} />
            <ChartImage src={image} alt={alt} />
          </HoverContainer>
        </ImageContainer>
      </ChartCircle>
    </ChartItemContainer>
  );
};

export default ChartItem;