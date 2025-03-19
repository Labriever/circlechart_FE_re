import React, { useState } from 'react';
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
  ArtistName
} from './styles/ChartMainStyles';
import styled from 'styled-components';

// 공유 점수 컨테이너
const ShareScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.primary || '#5352ed'};
`;

// 드롭다운 디테일 컨테이너
const DetailContainer = styled.div`
  grid-column: 1 / -1;
  background-color: #f8f9fa;
  padding: 20px;
  margin-top: -10px;
  border-bottom: 1px solid #f1f2f6;
  border-top: 1px solid #f1f2f6;
  animation: slideDown 0.3s ease-out;
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// 아티스트 상세 정보 영역
const ArtistInfoSection = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ArtistImageContainer = styled.div`
  margin-right: 25px;
  flex-shrink: 0;
`;

const ArtistDetailImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const ArtistInfoDetails = styled.div`
  flex-grow: 1;
`;

const ArtistTitle = styled.h2`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.text || '#1e1e1e'};
`;

const ArtistSubInfo = styled.div`
  font-size: 14px;
  color: #6c6c6c;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
`;

const InfoTag = styled.span`
  background-color: #f1f2f6;
  padding: 5px 12px;
  border-radius: 20px;
  margin-right: 8px;
  font-size: 13px;
  color: #5352ed;
`;

// 통계 카드 컨테이너
const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin: 20px 0;
`;

// 통계 카드
const StatCard = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const StatTitle = styled.div`
  font-size: 12px;
  color: #6c6c6c;
  margin-bottom: 8px;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.primary || '#5352ed'};
`;

const StatChart = styled.div`
  height: 40px;
  width: 100%;
  margin-top: 10px;
  background-color: #f8f9fa;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.percent || '50%'};
    background-color: ${props => props.color || '#5352ed'};
    opacity: 0.3;
  }
`;

// 앨범 섹션
const AlbumSection = styled.div`
  margin-top: 25px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.text || '#1e1e1e'};
`;

const AlbumsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

const AlbumCard = styled.div`
  text-align: center;
`;

const AlbumCover = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const AlbumTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-top: 10px;
  color: ${props => props.theme.colors.text || '#1e1e1e'};
`;

const AlbumYear = styled.div`
  font-size: 12px;
  color: #6c6c6c;
  margin-top: 4px;
`;

// 태그 컨테이너
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
`;

const Tag = styled.span`
  background-color: #f1f2f6;
  color: #5352ed;
  font-size: 12px;
  padding: 5px 12px;
  border-radius: 20px;
`;

// 탭 컨테이너
const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #f1f2f6;
`;

const Tab = styled.div`
  padding: 12px 20px;
  font-size: 14px;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? props.theme.colors.primary || '#5352ed' : '#6c6c6c'};
  cursor: pointer;
  border-bottom: 2px solid ${props => props.active ? props.theme.colors.primary || '#5352ed' : 'transparent'};
  transition: all 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary || '#5352ed'};
  }
`;

/**
 * 소셜 차트 테이블 컴포넌트
 * @param {Object[]} chartData - 차트 데이터 배열
 * @param {Function} onItemClick - 아이템 클릭 핸들러
 * @param {string[]} tableHeaders - 테이블 헤더 배열 (옵션)
 * @param {string} columnTemplate - 그리드 템플릿 열 설정 (옵션)
 */
const SocialChartTableComponent = ({
  chartData = [],
  onItemClick = () => {},
  tableHeaders = ['Rank', 'Artist', 'Share'],
  columnTemplate = '80px 1fr 120px',
}) => {
  // 확장된 행의 ID 상태
  const [expandedId, setExpandedId] = useState(null);
  // 활성화된 탭
  const [activeTab, setActiveTab] = useState('overview');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

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

  // 아이템 클릭 핸들러
  const handleItemClick = (item) => {
    // 이미 확장된 행이면 접기, 아니면 확장하기
    setExpandedId(expandedId === item.id ? null : item.id);
    onItemClick(item);
  };

  // 아티스트별 샘플 앨범 데이터
  const getArtistAlbums = (artist) => {
    const albumsData = {
      'BTS': [
        { id: 1, 
          title: 'Map of the Soul: 7', 
          year: '2020', 
          cover: 'https://upload.wikimedia.org/wikipedia/ko/thumb/3/38/%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8_-_MAP_OF_THE_SOUL_-_7.jpg/220px-%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8_-_MAP_OF_THE_SOUL_-_7.jpg', 
          songs: [{
            id: 1,
            title: 'Intro : Persona',
            times: '2:51',
            apple_url: 'https://music.apple.com/kr/album/map-of-the-soul-7/1599362484?i=1599362485',
            spotify_url: 'https://open.spotify.com/track/3ZFTkvIE7kyPt6Nu3PEa7V',
            youtube_url: 'https://www.youtube.com/watch?v=M9Uy0opVF3s'
          },
          {
            id: 2,
            title: 'Boy With Luv (feat. Halsey)',
            times: '3:49',
            apple_url: 'https://music.apple.com/kr/album/map-of-the-soul-7/1599362484?i=1599362485',
            spotify_url: 'https://open.spotify.com/track/3ZFTkvIE7kyPt6Nu3PEa7V',
            youtube_url: 'https://www.youtube.com/watch?v=M9Uy0opVF3s'
          },
          {
            id: 3,
            title: 'Make It Right',
            times: '3:46',
            apple_url: 'https://music.apple.com/kr/album/map-of-the-soul-7/1599362484?i=1599362485',
            spotify_url: 'https://open.spotify.com/track/3ZFTkvIE7kyPt6Nu3PEa7V',
            youtube_url: 'https://www.youtube.com/watch?v=M9Uy0opVF3s'
          },
          {
            id: 4,
            title: 'Jamais Vu',
            times: '3:47',
            apple_url: 'https://music.apple.com/kr/album/map-of-the-soul-7/1599362484?i=1599362485',
            spotify_url: 'https://open.spotify.com/track/3ZFTkvIE7kyPt6Nu3PEa7V',
            youtube_url: 'https://www.youtube.com/watch?v=M9Uy0opVF3s'
          },
        ]
        },
        { id: 2, title: 'BE', year: '2020', cover: 'https://upload.wikimedia.org/wikipedia/en/a/a2/BTS_-_Be_Cover.png' },
        { id: 3, title: 'Butter', year: '2021', cover: 'https://upload.wikimedia.org/wikipedia/ko/d/db/BTS_-_Butter.png' },
        { id: 4, title: 'Proof', year: '2022', cover: 'https://images.squarespace-cdn.com/content/v1/5fdcd66b0383b32fb0f59e0e/f743d27f-7fdd-406e-bd43-dd81ddfb280d/00_proof_symbol.jpg' }
      ],
      'BLACKPINK': [
        { id: 1, title: 'THE ALBUM', year: '2020', cover: 'https://i.namu.wiki/i/-8qEv6vAmTXMcUNU9ODu8EGPndAwcYrq48-1_Wvm4uvVViioEI63YQ2Zv0lAqM2ED0DpidPz1xRz4O-maDN7goE-vB5PK6a24HapE5vnQbqgyeee-cmkSZpjzQPMVFbAoIDh8yBZ8rCJFsUwJhxKsg.webp' },
        { id: 2, title: 'BORN PINK', year: '2022', cover: 'https://i.namu.wiki/i/RU9UiW2tY62pe3LbErhJoSl7Lq40AW8kEmPyM2mKv0ntsDcFl9r_ZOyw-mWu7dVurSBdIl42Hw2MvMcNkxIfSxin1EpN28gWaRTDVSJG2fmjrGVBhWyRnnxxi_NxntQRWsJ4Ftv23wEDOIvBYQ9IXw.webp' }
      ],
      'TWICE': [
        { id: 1, title: 'Eyes wide open', year: '2020', cover: 'https://i.namu.wiki/i/zY0obKye58ffYwOiX-CTXEYNBn7p37YF35xWWTe0i0yXgAkHi7YtzaOH4fJy39l6r8njiAw9YsYUtY7Z8yU3gETfJdWqimTxRwsuBJWJ7cYvXAPPlueE1JQaS5H7FM9nEZ5ASkHV7oPmB7j6eyPVWw.webp' },
        { id: 2, title: 'Formula of Love', year: '2021', cover: 'https://i.namu.wiki/i/6W33uJIX4IeR22rNTof9dPWlHXlPC2FP5amvG8hZ0_zjbN-RVZm25-VPrW9YVArO9VHON7psfwyANxiogaiF9B2fOIfM4L8QaPOOOrmQgfVZbFkTfRTJdcMkUaryVe9RBCIBZPZcCDxm4kJPBVi31g.webp' },
        { id: 3, title: 'READY TO BE', year: '2023', cover: 'https://i.namu.wiki/i/REe9pD3KMGqYuy3UvVhCd46qjRR6wX5QZ5j03R5TQtCU2IIYxTx9z0fk28EcA_7it08yERdMDk_cYwXlwv4tYbmGDABmev1IbnoqndpniDLOvWvMnMNlS2K2rQqGxx0Vb3jTiYEKKgJINKwfv4QUBA.webp' }
      ],
      'NewJeans': [
        { id: 1, title: 'New Jeans', year: '2022', cover: 'https://via.placeholder.com/150?text=NewJeans' },
        { id: 2, title: 'Get Up', year: '2023', cover: 'https://via.placeholder.com/150?text=Get+Up' }
      ],
      'IVE': [
        { id: 1, title: 'ELEVEN', year: '2021', cover: 'https://via.placeholder.com/150?text=ELEVEN' },
        { id: 2, title: 'LOVE DIVE', year: '2022', cover: 'https://via.placeholder.com/150?text=LOVE+DIVE' },
        { id: 3, title: 'I AM', year: '2023', cover: 'https://via.placeholder.com/150?text=I+AM' }
      ],
      'LE SSERAFIM': [
        { id: 1, title: 'FEARLESS', year: '2022', cover: 'https://via.placeholder.com/150?text=FEARLESS' },
        { id: 2, title: 'ANTIFRAGILE', year: '2022', cover: 'https://via.placeholder.com/150?text=ANTIFRAGILE' },
        { id: 3, title: 'UNFORGIVEN', year: '2023', cover: 'https://via.placeholder.com/150?text=UNFORGIVEN' }
      ],
      'aespa': [
        { id: 1, title: 'Savage', year: '2021', cover: 'https://via.placeholder.com/150?text=Savage' },
        { id: 2, title: 'Girls', year: '2022', cover: 'https://via.placeholder.com/150?text=Girls' },
        { id: 3, title: 'MY WORLD', year: '2023', cover: 'https://via.placeholder.com/150?text=MY+WORLD' }
      ],
      'SEVENTEEN': [
        { id: 1, title: 'Face the Sun', year: '2022', cover: 'https://via.placeholder.com/150?text=Face+the+Sun' },
        { id: 2, title: 'FML', year: '2023', cover: 'https://via.placeholder.com/150?text=FML' },
        { id: 3, title: 'SEVENTEENTH HEAVEN', year: '2023', cover: 'https://via.placeholder.com/150?text=17TH+HEAVEN' }
      ],
      'Stray Kids': [
        { id: 1, title: 'NOEASY', year: '2021', cover: 'https://via.placeholder.com/150?text=NOEASY' },
        { id: 2, title: 'MAXIDENT', year: '2022', cover: 'https://via.placeholder.com/150?text=MAXIDENT' },
        { id: 3, title: '★★★★★ (5-STAR)', year: '2023', cover: 'https://via.placeholder.com/150?text=5-STAR' }
      ],
      'ENHYPEN': [
        { id: 1, title: 'DIMENSION: DILEMMA', year: '2021', cover: 'https://via.placeholder.com/150?text=DILEMMA' },
        { id: 2, title: 'MANIFESTO: DAY 1', year: '2022', cover: 'https://via.placeholder.com/150?text=MANIFESTO' },
        { id: 3, title: 'DARK BLOOD', year: '2023', cover: 'https://via.placeholder.com/150?text=DARK+BLOOD' }
      ]
    };
    
    return albumsData[artist] || [];
  };

  // 아티스트별 태그 데이터
  const getArtistTags = (artist) => {
    const tagsData = {
      'BTS': ['K-Pop', 'Hip-Hop', 'Boy Group', 'BigHit', 'HYBE'],
      'BLACKPINK': ['K-Pop', 'Girl Group', 'YG Entertainment', 'Hip-Hop'],
      'TWICE': ['K-Pop', 'Girl Group', 'JYP Entertainment', 'Pop'],
      'NewJeans': ['K-Pop', 'Girl Group', 'ADOR', 'HYBE', 'R&B'],
      'IVE': ['K-Pop', 'Girl Group', 'Starship', 'Pop'],
      'LE SSERAFIM': ['K-Pop', 'Girl Group', 'SOURCE MUSIC', 'HYBE'],
      'aespa': ['K-Pop', 'Girl Group', 'SM Entertainment', 'Metaverse'],
      'SEVENTEEN': ['K-Pop', 'Boy Group', 'PLEDIS', 'HYBE', 'Self-Producing'],
      'Stray Kids': ['K-Pop', 'Boy Group', 'JYP Entertainment', 'Self-Producing'],
      'ENHYPEN': ['K-Pop', 'Boy Group', 'BELIFT LAB', 'HYBE']
    };
    
    return tagsData[artist] || [];
  };

  // 아티스트 정보 렌더링
  const renderArtistInfo = (item) => {
    // 아티스트 국적 및 회사 정보 (임의로 설정)
    const artistInfo = {
      'BTS': { country: '대한민국', company: 'HYBE Labels', debut: '2013년 6월 13일' },
      'BLACKPINK': { country: '대한민국', company: 'YG Entertainment', debut: '2016년 8월 8일' },
      'TWICE': { country: '대한민국', company: 'JYP Entertainment', debut: '2015년 10월 20일' },
      'NewJeans': { country: '대한민국', company: 'ADOR', debut: '2022년 7월 22일' },
      'IVE': { country: '대한민국', company: 'Starship Entertainment', debut: '2021년 12월 1일' },
      'LE SSERAFIM': { country: '대한민국', company: 'SOURCE MUSIC', debut: '2022년 5월 2일' },
      'aespa': { country: '대한민국', company: 'SM Entertainment', debut: '2020년 11월 17일' },
      'SEVENTEEN': { country: '대한민국', company: 'PLEDIS Entertainment', debut: '2015년 5월 26일' },
      'Stray Kids': { country: '대한민국', company: 'JYP Entertainment', debut: '2018년 3월 25일' },
      'ENHYPEN': { country: '대한민국', company: 'BELIFT LAB', debut: '2020년 11월 30일' }
    };
    
    const info = artistInfo[item.artist] || { country: '정보 없음', company: '정보 없음', debut: '정보 없음' };
    
    return (
      <>
        <TabsContainer>
          <Tab active={activeTab === 'overview'} onClick={() => setActiveTab('overview')}>개요</Tab>
          <Tab active={activeTab === 'albums'} onClick={() => setActiveTab('albums')}>앨범</Tab>
          <Tab active={activeTab === 'stats'} onClick={() => setActiveTab('stats')}>통계</Tab>
        </TabsContainer>

        {activeTab === 'overview' && (
          <>
            <ArtistInfoSection>
              <ArtistImageContainer>
                <ArtistDetailImage src={item.albumImage} alt={item.artist} />
              </ArtistImageContainer>
              <ArtistInfoDetails>
                <ArtistTitle>{item.artist}</ArtistTitle>
                <ArtistSubInfo>
                  <InfoTag>{info.country}</InfoTag>
                  <InfoTag>{info.company}</InfoTag>
                </ArtistSubInfo>
                <ArtistSubInfo style={{ marginTop: '10px' }}>
                  데뷔일: {info.debut}
                </ArtistSubInfo>
                
                <TagsContainer>
                  {getArtistTags(item.artist).map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagsContainer>
              </ArtistInfoDetails>
            </ArtistInfoSection>

            <StatsContainer>
              <StatCard>
                <StatTitle>유튜브 Followers</StatTitle>
                <StatValue>{item.youtube || '0'}</StatValue>
                <StatChart percent="75%" color="#FF0000" />
              </StatCard>
              <StatCard>
                <StatTitle>Spotify Followers</StatTitle>
                <StatValue>{item.mubeat || '0'}</StatValue>
                <StatChart percent="65%" color="#5352ed" />
              </StatCard>
              <StatCard>
                <StatTitle>Apple Followers</StatTitle>
                <StatValue>{item.mycelebs || '0'}</StatValue>
                <StatChart percent="85%" color="#FF9500" />
              </StatCard>
              <StatCard>
                <StatTitle>종합 지수</StatTitle>
                <StatValue>{item.higher || '0%'}</StatValue>
                <StatChart percent="90%" color="#2ed573" />
              </StatCard>
            </StatsContainer>

            <AlbumSection>
              <SectionTitle>최근 앨범</SectionTitle>
              <AlbumsGrid>
                {getArtistAlbums(item.artist).slice(0, 3).map(album => (
                  <AlbumCard key={album.id}>
                    <AlbumCover src={album.cover} alt={album.title} />
                    <AlbumTitle>{album.title}</AlbumTitle>
                    <AlbumYear>{album.year}</AlbumYear>
                  </AlbumCard>
                ))}
              </AlbumsGrid>
            </AlbumSection>
          </>
        )}

        {activeTab === 'albums' && (
          <AlbumSection>
            <SectionTitle>전체 앨범</SectionTitle>
            <AlbumsGrid>
              {getArtistAlbums(item.artist).map(album => (
              <AlbumCard key={album.id} onClick={toggleDropdown}>
                <AlbumCover src={album.cover} alt={album.title} />
                <AlbumTitle>{album.title}</AlbumTitle>
                <AlbumYear>{album.year}</AlbumYear>
                
              </AlbumCard>
            ))}
            </AlbumsGrid>
            {/* 클릭 시 드롭다운을 토글 */}
            {isDropdownOpen && (
                  <div className="dropdown" style={{
                    width: '100%', 
                    padding: '10px', 
                    backgroundColor: '#f8f8f8', 
                    maxHeight: '300px', 
                    overflowY: 'auto'
                  }}>
                    
                      <div style={{
                        padding: '8px 0', 
                        fontSize: '14px', 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center'
                      }}>
                        <table style={{
                            width: '100%', 
                            borderCollapse: 'collapse',
                            tableLayout: 'fixed'
                          }}>
                            <tbody>
                              <tr  style={{
                                padding: '8px 0', 
                                fontSize: '14px', 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center',
                                borderBottom: 'none'
                              }}>
                                <td style={{ padding: '8px', width: '10%' }}>01</td>
                                <td style={{ padding: '8px', width: '50%' }}>Title</td>
                                <td style={{ padding: '8px', width: '10%' }}>00:00</td>
                                <td style={{ padding: '8px', textAlign: 'right', display: 'flex', justifyContent: 'flex-end' }}>
                                  <a  target="_blank" style={{ marginRight: '8px', color: '#1DB954' }}>
                                    <img
                                      style={{width: "20px"}}
                                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/1200px-Apple_Music_icon.svg.png"
                                    />
                                  </a>
                                  <a  target="_blank" style={{ marginRight: '8px', color: '#1DB954' }}>
                                    <img
                                      style={{width: "20px"}}
                                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1200px-Spotify_icon.svg.png"
                                    />
                                  </a>
                                  <a  target="_blank" style={{ marginRight: '8px', color: '#1DB954' }}>
                                    <img
                                      style={{width: "20px"}}
                                      src="https://cdn-icons-png.flaticon.com/512/174/174883.png"
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr  style={{
                                padding: '8px 0', 
                                fontSize: '14px', 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center',
                                borderBottom: 'none'
                              }}>
                                <td style={{ padding: '8px', width: '10%' }}>02</td>
                                <td style={{ padding: '8px', width: '50%' }}>Title</td>
                                <td style={{ padding: '8px', width: '10%' }}>00:00</td>
                                <td style={{ padding: '8px', textAlign: 'right', display: 'flex', justifyContent: 'flex-end' }}>
                                  <a  target="_blank" style={{ marginRight: '8px', color: '#1DB954' }}>
                                    <img
                                      style={{width: "20px"}}
                                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/1200px-Apple_Music_icon.svg.png"
                                    />
                                  </a>
                                  <a  target="_blank" style={{ marginRight: '8px', color: '#1DB954' }}>
                                    <img
                                      style={{width: "20px"}}
                                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1200px-Spotify_icon.svg.png"
                                    />
                                  </a>
                                  <a  target="_blank" style={{ marginRight: '8px', color: '#1DB954' }}>
                                    <img
                                      style={{width: "20px"}}
                                      src="https://cdn-icons-png.flaticon.com/512/174/174883.png"
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr  style={{
                                padding: '8px 0', 
                                fontSize: '14px', 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center',
                                borderBottom: 'none'
                              }}>
                                <td style={{ padding: '8px', width: '10%' }}>03</td>
                                <td style={{ padding: '8px', width: '50%' }}>Title</td>
                                <td style={{ padding: '8px', width: '10%' }}>00:00</td>
                                <td style={{ padding: '8px', textAlign: 'right', display: 'flex', justifyContent: 'flex-end' }}>
                                  <a  target="_blank" style={{ marginRight: '8px', color: '#1DB954' }}>
                                    <img
                                      style={{width: "20px"}}
                                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/1200px-Apple_Music_icon.svg.png"
                                    />
                                  </a>
                                  <a  target="_blank" style={{ marginRight: '8px', color: '#1DB954' }}>
                                    <img
                                      style={{width: "20px"}}
                                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1200px-Spotify_icon.svg.png"
                                    />
                                  </a>
                                  <a  target="_blank" style={{ marginRight: '8px', color: '#1DB954' }}>
                                    <img
                                      style={{width: "20px"}}
                                      src="https://cdn-icons-png.flaticon.com/512/174/174883.png"
                                    />
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        
                      </div>
                    
                  </div>
                  
                )}
          </AlbumSection>
        )}

        {activeTab === 'stats' && (
          <div>
            <h3 style={{ marginBottom: '20px' }}>소셜 미디어 통계</h3>
            <StatsContainer>
              <StatCard>
                <StatTitle>유튜브</StatTitle>
                <StatValue>{item.youtube || '0'}</StatValue>
                <StatChart percent="75%" color="#FF0000" />
                <div style={{ fontSize: '12px', color: '#6c6c6c', marginTop: '10px' }}>
                  구독자 및 조회수 기반
                </div>
              </StatCard>
              <StatCard>
                <StatTitle>Spotify</StatTitle>
                <StatValue>{item.mubeat || '0'}</StatValue>
                <StatChart percent="65%" color="#5352ed" />
                <div style={{ fontSize: '12px', color: '#6c6c6c', marginTop: '10px' }}>
                  앱 활동 및 팬 참여도
                </div>
              </StatCard>
              <StatCard>
                <StatTitle>Apple</StatTitle>
                <StatValue>{item.mycelebs || '0'}</StatValue>
                <StatChart percent="85%" color="#FF9500" />
                <div style={{ fontSize: '12px', color: '#6c6c6c', marginTop: '10px' }}>
                  팬 선호도 조사 기반
                </div>
              </StatCard>
              <StatCard>
                <StatTitle>종합 지수</StatTitle>
                <StatValue>{item.higher || '0%'}</StatValue>
                <StatChart percent="90%" color="#2ed573" />
                <div style={{ fontSize: '12px', color: '#6c6c6c', marginTop: '10px' }}>
                  종합 성장 지수
                </div>
              </StatCard>
            </StatsContainer>
            
            <div style={{ marginTop: '30px', backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
              <h4 style={{ marginBottom: '15px' }}>팬 분포</h4>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ width: '100px', fontSize: '14px', color: '#6c6c6c' }}>한국</div>
                <div style={{ flex: 1, height: '20px', backgroundColor: '#f1f2f6', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ width: '35%', height: '100%', backgroundColor: '#5352ed', borderRadius: '10px' }}></div>
                </div>
                <div style={{ width: '50px', textAlign: 'right', fontSize: '14px', fontWeight: '600' }}>35%</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ width: '100px', fontSize: '14px', color: '#6c6c6c' }}>일본</div>
                <div style={{ flex: 1, height: '20px', backgroundColor: '#f1f2f6', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ width: '20%', height: '100%', backgroundColor: '#5352ed', borderRadius: '10px' }}></div>
                </div>
                <div style={{ width: '50px', textAlign: 'right', fontSize: '14px', fontWeight: '600' }}>20%</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ width: '100px', fontSize: '14px', color: '#6c6c6c' }}>미국</div>
                <div style={{ flex: 1, height: '20px', backgroundColor: '#f1f2f6', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ width: '18%', height: '100%', backgroundColor: '#5352ed', borderRadius: '10px' }}></div>
                </div>
                <div style={{ width: '50px', textAlign: 'right', fontSize: '14px', fontWeight: '600' }}>18%</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '100px', fontSize: '14px', color: '#6c6c6c' }}>기타</div>
                <div style={{ flex: 1, height: '20px', backgroundColor: '#f1f2f6', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ width: '27%', height: '100%', backgroundColor: '#5352ed', borderRadius: '10px' }}></div>
                </div>
                <div style={{ width: '50px', textAlign: 'right', fontSize: '14px', fontWeight: '600' }}>27%</div>
              </div>
            </div>
          </div>
        )}
      </>
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
        <React.Fragment key={item.id}>
          <ChartTableRow 
            onClick={() => handleItemClick(item)}
            style={{ gridTemplateColumns: columnTemplate }}
          >
            <RankContainer>
              <RankNumber rank={item.rank}>{item.rank}</RankNumber>
              {renderRankChange(item.change)}
            </RankContainer>
            <SongInfoContainer>
              <AlbumImage 
                src={item.albumImage} 
                alt={item.artist} 
              />
              <SongDetails>
                <ArtistName>{item.artist}</ArtistName>
              </SongDetails>
            </SongInfoContainer>
            <ShareScoreContainer>
              {item.shareScore || '0.0'}
            </ShareScoreContainer>
          </ChartTableRow>

          {/* 확장된 상세 정보 영역 */}
          {expandedId === item.id && (
            <DetailContainer>
              {renderArtistInfo(item)}
            </DetailContainer>
          )}
        </React.Fragment>
      ))}
    </ChartTable>
  );
};

export default SocialChartTableComponent;