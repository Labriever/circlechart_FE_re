import React, { useState, useEffect, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

// 스켈레톤 애니메이션 정의
const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// 스켈레톤 기본 컴포넌트
const SkeletonBase = styled.div`
  background: linear-gradient(90deg, 
    #f0f0f0 25%, 
    #e0e0e0 50%, 
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 8px;
`;

// 스켈레톤 컨테이너
const SkeletonChartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

// 스켈레톤 헤더
const SkeletonHeader = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const SkeletonChartTop = styled.div`
  height: 35px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const SkeletonChartTopText = styled(SkeletonBase)`
  width: 80px;
  height: 26px;
  border-radius: 20px;
`;

const SkeletonTitle = styled(SkeletonBase)`
  width: 300px;
  height: 40px;
  margin: 0 auto 10px;
`;

const SkeletonSubtitle = styled(SkeletonBase)`
  width: 200px;
  height: 20px;
  margin: 0 auto 20px;
`;

// 스켈레톤 버튼 영역
const SkeletonButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
  justify-content: flex-end;
`;

const SkeletonButton = styled(SkeletonBase)`
  width: 120px;
  height: 44px;
  border-radius: 8px;
`;

// 스켈레톤 정보 영역
const SkeletonInfoContainer = styled.div`
  margin-bottom: 30px;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
`;

const SkeletonInfoText = styled(SkeletonBase)`
  height: 16px;
  margin-bottom: 12px;
  width: ${props => props.width || '100%'};
`;

// 스켈레톤 탭
const SkeletonTabContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #f1f2f6;
  padding: 5px;
  height: 60px;
`;

// 스켈레톤 테이블
const SkeletonTable = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const SkeletonTableHeader = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 150px;
  background: ${props => props.theme.colors.chartGradient};
  padding: 16px 20px;
`;

const SkeletonTableHeaderItem = styled(SkeletonBase)`
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
`;

const SkeletonTableRow = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 150px;
  padding: 20px;
  border-bottom: 1px solid #f1f2f6;
  align-items: center;
`;

// 스켈레톤 랭크
const SkeletonRankContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SkeletonRankNumber = styled(SkeletonBase)`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;

const SkeletonRankChange = styled(SkeletonBase)`
  width: 40px;
  height: 16px;
`;

// 스켈레톤 곡 정보
const SkeletonSongContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SkeletonAlbumImage = styled(SkeletonBase)`
  width: 70px;
  height: 70px;
  border-radius: 12px;
  margin-right: 20px;
`;

const SkeletonSongDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkeletonSongTitle = styled(SkeletonBase)`
  width: 200px;
  height: 20px;
  margin-bottom: 8px;
`;

const SkeletonArtistName = styled(SkeletonBase)`
  width: 150px;
  height: 16px;
  margin-bottom: 6px;
`;

const SkeletonAlbumName = styled(SkeletonBase)`
  width: 100px;
  height: 14px;
`;

// 스켈레톤 차트 컴포넌트
const SkeletonChart = () => {
  return (
    <SkeletonChartContainer>
      <SkeletonHeader>
        <SkeletonChartTop>
          <SkeletonChartTopText />
        </SkeletonChartTop>
        <SkeletonTitle />
        <SkeletonSubtitle />
      </SkeletonHeader>

      <SkeletonButtonContainer>
        <SkeletonButton />
        <SkeletonButton />
      </SkeletonButtonContainer>

      <SkeletonInfoContainer>
        <SkeletonInfoText width="90%" />
        <SkeletonInfoText width="80%" />
        <SkeletonInfoText width="70%" />
        <SkeletonInfoText width="85%" />
        <SkeletonInfoText width="65%" />
        <SkeletonInfoText width="75%" />
      </SkeletonInfoContainer>

      <SkeletonTabContainer />

      <SkeletonTable>
        <SkeletonTableHeader>
          <SkeletonTableHeaderItem />
          <SkeletonTableHeaderItem />
          <SkeletonTableHeaderItem />
        </SkeletonTableHeader>

        {[...Array(6)].map((_, index) => (
          <SkeletonTableRow key={index}>
            <SkeletonRankContainer>
              <SkeletonRankNumber />
              <SkeletonRankChange />
            </SkeletonRankContainer>
            <SkeletonSongContainer>
              <SkeletonAlbumImage />
              <SkeletonSongDetails>
                <SkeletonSongTitle />
                <SkeletonArtistName />
                <SkeletonAlbumName />
              </SkeletonSongDetails>
            </SkeletonSongContainer>
            <div></div>
          </SkeletonTableRow>
        ))}
      </SkeletonTable>
    </SkeletonChartContainer>
  );
};

export default SkeletonChart