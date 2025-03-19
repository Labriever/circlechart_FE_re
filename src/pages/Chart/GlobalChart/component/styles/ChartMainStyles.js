import styled from 'styled-components';

// 차트 레이아웃 컴포넌트
export const ChartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

// 헤더 영역
export const ChartHeader = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

export const ChartTop = styled.div`
  height: 35px;
`;

export const ChartTopText = styled.span`
  color: ${props => props.theme.colors.lightText};
  background-color: ${props => props.theme.colors.primary};
  padding: 4px 20px;
  font-size: 13px;
  border-radius: 20px;
`;

export const ChartTitle = styled.h1`
  font-size: 36px;
  font-weight: 800;
  color: ${props => props.theme.colors.text || '#1e1e1e'};
  margin-bottom: 10px;
  letter-spacing: -0.5px;
`;

export const ChartSubtitle = styled.div`
  font-size: 16px;
  color: #6c6c6c;
  margin-bottom: 20px;
  font-weight: 500;
`;

// 차트 정보 영역
export const ChartInfoContainer = styled.div`
  margin-bottom: 20px;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
`;

export const ChartInfoText = styled.div`
  font-size: 14px;
  color: #6c6c6c;
  margin-bottom: 10px;
  line-height: 1.6;
`;

export const ChartInfoHighlight = styled.span`
  color: ${props => props.color === 'hot' ? '#ff4757' : '#ffa502'};
  font-weight: 600;
  margin-right: 5px;
`;

// 버튼 영역
export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
  justify-content: flex-end;
`;

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const SearchButton = styled(BaseButton)`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  box-shadow: 0 4px 6px rgba(83, 82, 237, 0.2);

  &:hover {
    background-color: ${props => props.theme.colors.primaryHover};
    box-shadow: 0 6px 8px rgba(83, 82, 237, 0.3);
  }
`;

export const ShareButton = styled(BaseButton)`
  background-color: #ffffff;
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};

  &:hover {
    background-color: #f0f0ff;
  }
`;

// 탭 컨테이너 스타일
export const TabContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #f1f2f6;
  padding: 5px;
  position: relative;
`;

// 차트 테이블 영역
export const ChartTable = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const ChartTableHeader = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 200px;
  background: ${props => props.theme.colors.chartGradient};
  color: white;
  padding: 16px 20px;
  font-weight: 600;
  text-align: left;
  letter-spacing: 0.5px;
`;

export const ChartTableRow = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 200px;
  padding: 20px;
  border-bottom: 1px solid #f1f2f6;
  align-items: center;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #f8f9fa;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  }

  &:last-child {
    border-bottom: none;
  }
`;

// 차트 항목 컴포넌트
export const RankContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RankNumber = styled.span`
  font-size: 24px;
  font-weight: 800;
  width: 50px;
  color: ${props => props.theme.colors.text};
`;

export const RankChange = styled.span`
  font-size: 13px;
  font-weight: 600;
  margin-left: 10px;
  width: 50px;
  color: ${props => {
    if (props.change === 'new') return '#ffa502';
    if (props.change > 0) return '#ff4757';
    if (props.change < 0) return '#2ed573';
    return '#a4b0be';
  }};
`;

export const SongInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AlbumImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 12px;
  margin-right: 20px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const SongDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SongTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.text || '#1e1e1e'};
`;

export const ArtistName = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 6px;
  font-weight: 600;
`;

export const AlbumName = styled.div`
  font-size: 13px;
  color: #a4b0be;
  font-weight: 500;
`;

export const ScoreContainer = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-align: right;
  color: #1e1e1e;
`;

// 날짜 선택 드롭다운
export const DateSelector = styled.select`
  padding: 12px 16px;
  border-radius: 8px;
  border: 2px solid #f1f2f6;
  font-size: 14px;
  font-weight: 500;
  color: #1e1e1e;
  background-color: #ffffff;
  width: 300px;
  margin-bottom: 20px;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%235352ed' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(83, 82, 237, 0.2);
  }
`;

// 앱 레이아웃 컴포넌트
export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 40px 20px;
`;

export const AppHeader = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

export const AppLogo = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: 42px;
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 10px;
`;

export const AppDescription = styled.p`
  color: #6c6c6c;
  font-size: 16px;
  font-weight: 500;
`;

// 앱 탭 컴포넌트
export const AppTabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  gap: 16px;
`;

export const AppTab = styled.button`
  padding: 14px 24px;
  background-color: ${props => props.active ? '#5352ed' : '#ffffff'};
  color: ${props => props.active ? 'white' : '#6c6c6c'};
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: ${props => props.active ? '#4543e8' : '#f0f0ff'};
    color: ${props => props.active ? 'white' : '#5352ed'};
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  }
`;