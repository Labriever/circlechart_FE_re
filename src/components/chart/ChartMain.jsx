import React, { useMemo } from 'react';
import {
  ChartContainer,
  ChartHeader,
  ChartTop,
  ChartTopText,
  ChartTitle,
  ChartSubtitle,
  ChartInfoContainer,
  ChartInfoText,
  ButtonContainer,
  SearchButton,
  ShareButton,
  RankChange
} from './styles/ChartMainStyles';

import SlidingTabs from '/src/components/chart/SlidingTabs';
import DatePicker from '/src/components/chart/DatePicker';

const ModernChart = ({
  // 차트 기본 정보
  chartTopText = 'CHART',
  chartTitle = 'Chart Title',
  chartSubtitle = 'Subtitle or Date',
  
  // 차트 탭 설정
  tabs = [
    { id: 'daily', label: 'Daily' },
    { id: 'weekly', label: 'Weekly' },
    { id: 'monthly', label: 'Monthly' },
    { id: 'firstHalf', label: 'First Half' },
    { id: 'yearly', label: 'Yearly' }
  ],
  defaultTab = 'daily',
  onTabChange = () => {},
  
  // 버튼 설정
  showButtons = true,
  searchButtonText = '🔍 Search',
  shareButtonText = '↗ Share',
  onSearchClick = () => {},
  onShareClick = () => {},
  
  // 정보 텍스트 설정
  infoTexts = [],
  showInfo = true,
  
  // 날짜 선택 관련 props
  showDatePicker = true,
  selectedDate = '',
  onDateChange = () => {},
  
  // 기타 설정
  className = '',
  style = {},

  // 차트 테이블 커스텀 컴포넌트
  customChartTable = null
}) => {
  // 탭 목록 메모이제이션
  const memoizedTabs = useMemo(() => tabs, [JSON.stringify(tabs)]);

  return (
    <ChartContainer className={className} style={style}>
      <ChartHeader>
        <ChartTop>
          <ChartTopText>{chartTopText}</ChartTopText>
        </ChartTop>
        <ChartTitle>{chartTitle}</ChartTitle>
        <ChartSubtitle>{chartSubtitle}</ChartSubtitle>
      </ChartHeader>

      {showButtons && (
        <ButtonContainer>
          <SearchButton onClick={onSearchClick}>{searchButtonText}</SearchButton>
          <ShareButton onClick={onShareClick}>{shareButtonText}</ShareButton>
        </ButtonContainer>
      )}

      {showInfo && infoTexts.length > 0 && (
        <ChartInfoContainer>
          {infoTexts.map((text, index) => (
            <ChartInfoText key={index} dangerouslySetInnerHTML={{ __html: text }} />
          ))}
        </ChartInfoContainer>
      )}
      
      {/* DatePicker 컴포넌트 */}
      {showDatePicker && (
        <DatePicker
          value={selectedDate}
          onChange={onDateChange}
          placeholder="YYYY.MM.DD"
        />
      )}
      
      <SlidingTabs 
        tabs={memoizedTabs}
        defaultActiveTab={defaultTab} 
        onTabChange={onTabChange} 
      />
      
      {/* 커스텀 차트 테이블 렌더링 */}
      {customChartTable}
    </ChartContainer>
  );
};

export default ModernChart;