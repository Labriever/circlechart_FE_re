import React from 'react';
import { 
  ChartTable, 
  ChartTableHeader, 
  ChartTableRow,
  RankContainer,
  RankNumber,
  RankChange,
  SongInfoContainer,
  AlbumImage,
  SongDetails,
  SongTitle,
  ArtistName,
  AlbumName
} from './styles/ChartMainStyles';

/**
 * 차트 테이블 컴포넌트
 * @param {Object[]} chartData - 차트 데이터 배열
 * @param {Function} onItemClick - 아이템 클릭 핸들러
 * @param {string[]} tableHeaders - 테이블 헤더 배열 (옵션)
 * @param {string} columnTemplate - 그리드 템플릿 열 설정 (옵션)
 */
const ChartTableComponent = ({
  chartData = [],
  onItemClick = () => {},
  tableHeaders = ['Rank', 'Title/Artist', 'Production/Distribution'],
  columnTemplate = '80px 1fr 200px',
}) => {
  // 순위 변화 렌더링 함수
  const renderRankChange = (change) => {
    if (change === 'new') {
      return <RankChange change="new">NEW</RankChange>;
    } else if (change > 0) {
      return <RankChange change={change}>↑ {change}</RankChange>;
    } else if (change < 0) {
      return <RankChange change={change}>↓ {Math.abs(change)}</RankChange>;
    } else {
      return <RankChange change={0}>-</RankChange>;
    }
  };

  // 생산/배급사 정보 렌더링
  const renderDistribution = (item) => {
    const production = item.production || item.company || '';
    const distribution = item.distribution || item.distributor || '';

    if (!production && !distribution) return null;

    return (
      <div>
        {production && <div>{production}</div>}
        {distribution && <div style={{ color: '#a4b0be', fontSize: '0.9em' }}>{distribution}</div>}
      </div>
    );
  };

  return (
    <ChartTable>
      <ChartTableHeader style={{ gridTemplateColumns: columnTemplate }}>
        {tableHeaders.map((header, index) => (
          <div key={index}>{header}</div>
        ))}
      </ChartTableHeader>

      {chartData.map((item) => (
        <ChartTableRow 
          key={item.id} 
          onClick={() => onItemClick(item)}
          style={{ gridTemplateColumns: columnTemplate }}
        >
          <RankContainer>
            <RankNumber rank={item.rank}>{item.rank}</RankNumber>
            {renderRankChange(item.change)}
          </RankContainer>
          <SongInfoContainer>
            <AlbumImage 
              src={item.albumImage} 
              alt={item.album || item.title} 
            />
            <SongDetails>
              <SongTitle>{item.title}</SongTitle>
              <ArtistName>{item.artist}</ArtistName>
              <AlbumName>{item.album}</AlbumName>
            </SongDetails>
          </SongInfoContainer>
          {renderDistribution(item)}
        </ChartTableRow>
      ))}
    </ChartTable>
  );
};

export default ChartTableComponent;