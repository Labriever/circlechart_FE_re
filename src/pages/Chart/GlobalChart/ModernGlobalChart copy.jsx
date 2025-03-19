import React, { useState, useEffect, useMemo } from 'react';
import ModernChart from '/src/components/chart/ChartMain';
import SkeletonChart from '/src/components/chart/SkeletonChart';
import ChartTableComponent from './component/GlobalChartTableComponent';

/**
 * 글로벌 K-pop 차트 컴포넌트
 */
const ModernGlobalChart = () => {
  // 상태 관리
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('daily');
  const [selectedDate, setSelectedDate] = useState('');
  
  // 기본 탭 설정
  const tabs = [
    { id: 'daily', label: 'Daily' },
    { id: 'weekly', label: 'Weekly' },
    { id: 'monthly', label: 'Monthly' },
    { id: 'firstHalf', label: 'First Half' },
    { id: 'yearly', label: 'Yearly' }
  ];
  
  // 정보 텍스트 내용
  const infoTexts = [
    '일간 차트 : 글로벌 음악서비스 플랫폼의 일간 사용량 업데이트 시간에 따라 변동 가능',
    'Daily Chart : Contents may change, depending on the time at which global music service platforms update their daily figures.',
    '순위집계 : 전세계 K-pop 스트리밍 사용량에 따라 집계',
    '<span style="color:#e74c3c">new</span> : 차트에 새롭게 진입한 곡(앨범) | <span style="color:#f39c12">HOT</span> : 100위 이상 순위 상승한 곡(앨범)',
    'Ranking System : Worldwide K-pop streaming usage',
    '<span style="color:#e74c3c">new</span> : Newly entered | <span style="color:#f39c12">HOT</span> : Jumped up over 100 ranks'
  ];

  // 오늘 날짜를 기본값으로 설정 (3일 전)
  const today = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() - 3);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return {
      formatted: `${year}.${month}.${day}`,
      value: `${year}${month}${day}`
    };
  }, []);
  
  // 컴포넌트 마운트 시 오늘 날짜로 초기화
  useEffect(() => {
    if (!selectedDate) {
      setSelectedDate(today.value);
    }
  }, [today]);

  // 현재 선택된 탭에 따른 기간 구분 반환
  const getTermGbn = (tab) => {
    return tab === 'daily' ? 'day' : 
           tab === 'weekly' ? 'week' : 
           tab === 'monthly' ? 'month' : 
           tab === 'firstHalf' ? 'half' : 'year';
  };
  
  // API에서 데이터 가져오기
  useEffect(() => {
    // 날짜가 선택되지 않았다면 API 호출하지 않음
    if (!selectedDate) return;
    
    setLoading(true);
    
    // API 호출 파라미터 설정
    const termGbn = getTermGbn(activeTab);
    
    // FormData 생성
    const formData = new FormData();
    formData.append('termGbn', termGbn);
    formData.append('yyyymmdd', selectedDate);
    
    console.log('API 호출 파라미터:', { termGbn, yyyymmdd: selectedDate });
    
    // API 호출 (프록시 경로 사용)
    fetch('/api/data/api/chart/global', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('API 호출에 실패했습니다');
        }
        return response.json();
      })
      .then(data => {
        console.log('API 응답:', data);
        // API 응답을 컴포넌트에서 사용하는 형태로 변환
        if (data && data.List) {
          const formattedData = formatChartData(data.List);
          setChartData(formattedData);
        } else {
          console.error('API 응답 구조가 예상과 다릅니다:', data);
          setChartData([]);
        }
      })
      .catch(error => {
        console.error('데이터 가져오기 실패:', error);
        setChartData([]);
      })
      .finally(() => {
        setLoading(false);
      });
    
  }, [activeTab, selectedDate]);

  // API 응답 데이터 포맷팅 함수
  const formatChartData = (listData) => {
    return Object.values(listData).map((item, index) => ({
      id: index + 1,
      rank: item.Rank || (index + 1).toString(),
      change: item.RankStatus || '-',
      title: item.Title || '',
      artist: item.Artist || '',
      album: item.Album || '',
      albumImage: item.ALBUMIMG ? `https://circlechart.kr/uploadDir/${item.ALBUMIMG}` : 'https://via.placeholder.com/70',
      production: item.CompanyMake || '',
      distribution: item.CompanyDist || ''
    }));
  };
  
  // 이벤트 핸들러
  const handleTabChange = (tab) => setActiveTab(tab);
  const handleDateChange = (dateValue) => setSelectedDate(dateValue);
  const handleSearch = () => alert('검색 기능 구현');
  const handleShare = () => alert('공유 기능 구현');
  const handleItemClick = (item) => console.log('차트 아이템 클릭:', item);
  
  // 선택된 날짜를 포맷팅 (YYYY.MM.DD)
  const selectedDateLabel = selectedDate ? 
    `${selectedDate.substring(0, 4)}.${selectedDate.substring(4, 6)}.${selectedDate.substring(6, 8)}` :
    today.formatted;

  // 현재 탭에 따른 서브타이틀 텍스트
  const getSubtitleByTab = (tab) => {
    return tab === 'daily' ? 'Days' : 
           tab === 'weekly' ? 'Weeks' : 
           tab === 'monthly' ? 'Months' : 
           tab === 'firstHalf' ? 'Half Year' : 'Year';
  };

  return (
    <div>
      {loading ? (
        <SkeletonChart/>
      ) : (
        <ModernChart
          chartTopText="CHART"
          chartTitle="Global K-pop Chart"
          chartSubtitle={`${selectedDateLabel} ${getSubtitleByTab(activeTab)}`}
          tabs={tabs}
          defaultTab={activeTab}
          onTabChange={handleTabChange}
          chartData={chartData}
          showButtons={true}
          searchButtonText="🔍 Search"
          shareButtonText="↗ Share"
          onSearchClick={handleSearch}
          onShareClick={handleShare}
          infoTexts={infoTexts}
          showInfo={true}
          tableHeaders={['Rank', 'Title/Artist', 'Production/Distribution']}
          onItemClick={handleItemClick}
          
          // DatePicker 관련 props 전달
          showDatePicker={true}
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
          
          // 커스텀 차트 테이블 전달
          customChartTable={
            <ChartTableComponent 
              chartData={chartData}
              onItemClick={handleItemClick}
              tableHeaders={['Rank', 'Title/Artist', 'Production/Distribution']}
              columnTemplate="100px 1fr 200px"
            />
          }
        />
      )}
    </div>
  );
};

export default ModernGlobalChart;