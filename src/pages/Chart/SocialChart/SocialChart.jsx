import React, { useState, useEffect, useMemo } from 'react';
import ModernChart from '/src/components/chart/ChartMain';
import SkeletonChart from '/src/components/chart/SkeletonChart';
import ChartTableComponent from './component/SocialChartTableComponent';

/**
 * Social Chart 3.0 컴포넌트 - 샘플 데이터 적용
 */
const ModernSocialChart = () => {
  // 상태 관리
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('weekly');
  const [selectedDate, setSelectedDate] = useState('');
  
  // 기본 탭 설정
  const tabs = [
    { id: 'weekly', label: 'Weekly' },
    { id: 'monthly', label: 'Monthly' },
    { id: 'firstHalf', label: 'First Half' },
    { id: 'yearly', label: 'Yearly' }
  ];
  
  // 정보 텍스트 내용
  const infoTexts = [
    '순위집계 : 각 소셜미디어 인기도 종합 차트입니다.',
    '(YouTube, Mubeat, 마이셀럽스 스타, HIGHER 소셜지수)',
    'Ranking System: Popularity of each social media.',
    '(Social Index of YouTube, Mubeat, Mycelebs Star, HIGHER)'
  ];

  // 샘플 데이터
  const sampleData = {
    weekly: [
      {
        id: 1,
        rank: '1',
        change: '0',
        artist: 'BTS',
        albumImage: 'https://play-lh.googleusercontent.com/nUzK8WjxbT-X59mlDYyPej6HO_j45Ou7qOIIgnJbTO6IzNA6iAU_kMdA38hHGONBv9c',
        youtube: '9.8M',
        mubeat: '65K',
        mycelebs: '88K',
        higher: '93%',
        shareScore: '98.5'
      },
      {
        id: 2,
        rank: '2',
        change: '1',
        artist: 'BLACKPINK',
        albumImage: 'https://all.image.mycelebs.com/163152/163152_240@240.jpg',
        youtube: '8.7M',
        mubeat: '62K',
        mycelebs: '82K',
        higher: '91%',
        shareScore: '95.2'
      },
      {
        id: 3,
        rank: '3',
        change: '-1',
        artist: 'TWICE',
        albumImage: 'https://all.image.mycelebs.com/2318/2318_573@372.jpg',
        youtube: '6.5M',
        mubeat: '58K',
        mycelebs: '74K',
        higher: '87%',
        shareScore: '90.8'
      },
      {
        id: 4,
        rank: '4',
        change: '0',
        artist: 'IVE',
        albumImage: 'https://all.image.mycelebs.com/21085460/21085460_240@240.jpg',
        youtube: '5.8M',
        mubeat: '51K',
        mycelebs: '68K',
        higher: '85%',
        shareScore: '88.5'
      },
      {
        id: 5,
        rank: '5',
        change: '2',
        artist: 'NewJeans',
        albumImage: 'https://all.image.mycelebs.com/23226772/23226772_240@240.jpg',
        youtube: '5.2M',
        mubeat: '49K',
        mycelebs: '65K',
        higher: '84%',
        shareScore: '87.2'
      },
      {
        id: 6,
        rank: '6',
        change: '-1',
        artist: 'Stray Kids',
        albumImage: 'https://all.image.mycelebs.com/5213960/5213960_240@240.jpg',
        youtube: '4.9M',
        mubeat: '47K',
        mycelebs: '61K',
        higher: '82%',
        shareScore: '85.1'
      },
      {
        id: 7,
        rank: '7',
        change: '1',
        artist: 'aespa',
        albumImage: 'https://all.image.mycelebs.com/15808059/15808059_240@240.jpg',
        youtube: '4.5M',
        mubeat: '45K',
        mycelebs: '58K',
        higher: '80%',
        shareScore: '83.7'
      },
      {
        id: 8,
        rank: '8',
        change: '1',
        artist: 'SEVENTEEN',
        albumImage: 'https://all.image.mycelebs.com/2559/2559_240@240.jpg',
        youtube: '4.3M',
        mubeat: '43K',
        mycelebs: '55K',
        higher: '79%',
        shareScore: '82.5'
      },
      {
        id: 9,
        rank: '9',
        change: '3',
        artist: 'LE SSERAFIM',
        albumImage: 'https://all.image.mycelebs.com/21854021/21854021_240@240.jpg',
        youtube: '4.1M',
        mubeat: '41K',
        mycelebs: '53K',
        higher: '78%',
        shareScore: '81.2'
      },
      {
        id: 10,
        rank: '10',
        change: 'new',
        artist: 'ENHYPEN',
        albumImage: 'https://all.image.mycelebs.com/15000342/15000342_240@240.jpg',
        youtube: '3.8M',
        mubeat: '39K',
        mycelebs: '50K',
        higher: '76%',
        shareScore: '79.8'
      }
    ],
    monthly: [
      {
        id: 1,
        rank: '1',
        change: '0',
        artist: 'BTS',
        albumImage: 'https://via.placeholder.com/70?text=BTS',
        youtube: '38.5M',
        mubeat: '258K',
        mycelebs: '350K',
        higher: '96%',
        shareScore: '99.2'
      },
      {
        id: 2,
        rank: '2',
        change: '0',
        artist: 'BLACKPINK',
        albumImage: 'https://via.placeholder.com/70?text=BP',
        youtube: '35.2M',
        mubeat: '245K',
        mycelebs: '330K',
        higher: '94%',
        shareScore: '97.5'
      },
      {
        id: 3,
        rank: '3',
        change: '0',
        artist: 'TWICE',
        albumImage: 'https://via.placeholder.com/70?text=TWICE',
        youtube: '28.7M',
        mubeat: '230K',
        mycelebs: '305K',
        higher: '91%',
        shareScore: '93.8'
      },
      {
        id: 4,
        rank: '4',
        change: '1',
        artist: 'NewJeans',
        albumImage: 'https://via.placeholder.com/70?text=NJ',
        youtube: '25.6M',
        mubeat: '220K',
        mycelebs: '285K',
        higher: '90%',
        shareScore: '92.1'
      },
      {
        id: 5,
        rank: '5',
        change: '-1',
        artist: 'IVE',
        albumImage: 'https://via.placeholder.com/70?text=IVE',
        youtube: '23.1M',
        mubeat: '215K',
        mycelebs: '280K',
        higher: '89%',
        shareScore: '91.4'
      },
      {
        id: 6,
        rank: '6',
        change: '0',
        artist: 'Stray Kids',
        albumImage: 'https://via.placeholder.com/70?text=SKZ',
        youtube: '21.5M',
        mubeat: '205K',
        mycelebs: '270K',
        higher: '88%',
        shareScore: '90.2'
      },
      {
        id: 7,
        rank: '7',
        change: '0',
        artist: 'SEVENTEEN',
        albumImage: 'https://via.placeholder.com/70?text=SVT',
        youtube: '20.8M',
        mubeat: '200K',
        mycelebs: '265K',
        higher: '87%',
        shareScore: '89.5'
      },
      {
        id: 8,
        rank: '8',
        change: '1',
        artist: 'LE SSERAFIM',
        albumImage: 'https://via.placeholder.com/70?text=LSF',
        youtube: '19.2M',
        mubeat: '195K',
        mycelebs: '255K',
        higher: '86%',
        shareScore: '88.7'
      },
      {
        id: 9,
        rank: '9',
        change: '-1',
        artist: 'aespa',
        albumImage: 'https://via.placeholder.com/70?text=aespa',
        youtube: '18.5M',
        mubeat: '190K',
        mycelebs: '245K',
        higher: '85%',
        shareScore: '87.9'
      },
      {
        id: 10,
        rank: '10',
        change: '0',
        artist: 'NCT DREAM',
        albumImage: 'https://via.placeholder.com/70?text=NCT',
        youtube: '17.1M',
        mubeat: '185K',
        mycelebs: '235K',
        higher: '84%',
        shareScore: '86.3'
      }
    ],
    firstHalf: [
      {
        id: 1,
        rank: '1',
        change: '0',
        artist: 'BTS',
        albumImage: 'https://via.placeholder.com/70?text=BTS',
        youtube: '205M',
        mubeat: '1.5M',
        mycelebs: '2.1M',
        higher: '98%',
        shareScore: '99.8'
      },
      {
        id: 2,
        rank: '2',
        change: '0',
        artist: 'BLACKPINK',
        albumImage: 'https://via.placeholder.com/70?text=BP',
        youtube: '190M',
        mubeat: '1.4M',
        mycelebs: '1.9M',
        higher: '97%',
        shareScore: '98.9'
      },
      {
        id: 3,
        rank: '3',
        change: '1',
        artist: 'NewJeans',
        albumImage: 'https://via.placeholder.com/70?text=NJ',
        youtube: '165M',
        mubeat: '1.3M',
        mycelebs: '1.7M',
        higher: '95%',
        shareScore: '97.2'
      },
      {
        id: 4,
        rank: '4',
        change: '-1',
        artist: 'TWICE',
        albumImage: 'https://via.placeholder.com/70?text=TWICE',
        youtube: '160M',
        mubeat: '1.25M',
        mycelebs: '1.65M',
        higher: '94%',
        shareScore: '96.5'
      },
      {
        id: 5,
        rank: '5',
        change: '0',
        artist: 'IVE',
        albumImage: 'https://via.placeholder.com/70?text=IVE',
        youtube: '145M',
        mubeat: '1.2M',
        mycelebs: '1.5M',
        higher: '93%',
        shareScore: '95.1'
      },
      {
        id: 6,
        rank: '6',
        change: '2',
        artist: 'LE SSERAFIM',
        albumImage: 'https://via.placeholder.com/70?text=LSF',
        youtube: '135M',
        mubeat: '1.15M',
        mycelebs: '1.45M',
        higher: '92%',
        shareScore: '94.3'
      },
      {
        id: 7,
        rank: '7',
        change: '0',
        artist: 'Stray Kids',
        albumImage: 'https://via.placeholder.com/70?text=SKZ',
        youtube: '130M',
        mubeat: '1.1M',
        mycelebs: '1.4M',
        higher: '91%',
        shareScore: '93.7'
      },
      {
        id: 8,
        rank: '8',
        change: '-2',
        artist: 'SEVENTEEN',
        albumImage: 'https://via.placeholder.com/70?text=SVT',
        youtube: '125M',
        mubeat: '1.05M',
        mycelebs: '1.35M',
        higher: '90%',
        shareScore: '92.9'
      },
      {
        id: 9,
        rank: '9',
        change: '0',
        artist: 'aespa',
        albumImage: 'https://via.placeholder.com/70?text=aespa',
        youtube: '120M',
        mubeat: '1M',
        mycelebs: '1.3M',
        higher: '89%',
        shareScore: '92.1'
      },
      {
        id: 10,
        rank: '10',
        change: '2',
        artist: '(G)I-DLE',
        albumImage: 'https://via.placeholder.com/70?text=GIDLE',
        youtube: '115M',
        mubeat: '950K',
        mycelebs: '1.25M',
        higher: '88%',
        shareScore: '91.4'
      }
    ],
    yearly: [
      {
        id: 1,
        rank: '1',
        change: '0',
        artist: 'BTS',
        albumImage: 'https://via.placeholder.com/70?text=BTS',
        youtube: '480M',
        mubeat: '3.5M',
        mycelebs: '4.8M',
        higher: '99%',
        shareScore: '99.9'
      },
      {
        id: 2,
        rank: '2',
        change: '0',
        artist: 'BLACKPINK',
        albumImage: 'https://via.placeholder.com/70?text=BP',
        youtube: '450M',
        mubeat: '3.2M',
        mycelebs: '4.5M',
        higher: '98%',
        shareScore: '99.3'
      },
      {
        id: 3,
        rank: '3',
        change: '2',
        artist: 'NewJeans',
        albumImage: 'https://via.placeholder.com/70?text=NJ',
        youtube: '380M',
        mubeat: '2.9M',
        mycelebs: '3.8M',
        higher: '97%',
        shareScore: '98.1'
      },
      {
        id: 4,
        rank: '4',
        change: '0',
        artist: 'IVE',
        albumImage: 'https://via.placeholder.com/70?text=IVE',
        youtube: '350M',
        mubeat: '2.7M',
        mycelebs: '3.5M',
        higher: '96%',
        shareScore: '97.5'
      },
      {
        id: 5,
        rank: '5',
        change: '-2',
        artist: 'TWICE',
        albumImage: 'https://via.placeholder.com/70?text=TWICE',
        youtube: '330M',
        mubeat: '2.5M',
        mycelebs: '3.3M',
        higher: '95%',
        shareScore: '96.8'
      },
      {
        id: 6,
        rank: '6',
        change: '1',
        artist: 'LE SSERAFIM',
        albumImage: 'https://via.placeholder.com/70?text=LSF',
        youtube: '310M',
        mubeat: '2.3M',
        mycelebs: '3.1M',
        higher: '94%',
        shareScore: '95.6'
      },
      {
        id: 7,
        rank: '7',
        change: '1',
        artist: 'Stray Kids',
        albumImage: 'https://via.placeholder.com/70?text=SKZ',
        youtube: '290M',
        mubeat: '2.2M',
        mycelebs: '2.9M',
        higher: '93%',
        shareScore: '94.9'
      },
      {
        id: 8,
        rank: '8',
        change: '-2',
        artist: 'SEVENTEEN',
        albumImage: 'https://via.placeholder.com/70?text=SVT',
        youtube: '280M',
        mubeat: '2.1M',
        mycelebs: '2.8M',
        higher: '92%',
        shareScore: '94.2'
      },
      {
        id: 9,
        rank: '9',
        change: '0',
        artist: 'aespa',
        albumImage: 'https://via.placeholder.com/70?text=aespa',
        youtube: '260M',
        mubeat: '2M',
        mycelebs: '2.6M',
        higher: '91%',
        shareScore: '93.5'
      },
      {
        id: 10,
        rank: '10',
        change: '2',
        artist: 'ENHYPEN',
        albumImage: 'https://via.placeholder.com/70?text=ENHYPEN',
        youtube: '240M',
        mubeat: '1.9M',
        mycelebs: '2.4M',
        higher: '90%',
        shareScore: '92.7'
      }
    ]
  };

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

  // 현재 탭에 따라 샘플 데이터 로드
  useEffect(() => {
    setLoading(true);
    
    // 데이터 로딩 시뮬레이션 (500ms 지연)
    const timer = setTimeout(() => {
      setChartData(sampleData[activeTab] || []);
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [activeTab, selectedDate]);
  
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
    return tab === 'weekly' ? 'Weeks' : 
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
          chartTitle="Social Chart 3.0"
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
              tableHeaders={['Rank', 'Artist', 'Share']}
              columnTemplate="100px 1fr 200px"
            />
          }
        />
      )}
    </div>
  );
};

export default ModernSocialChart;