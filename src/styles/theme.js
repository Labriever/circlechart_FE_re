// Circle Chart 웹사이트의 테마 설정
const theme = {
  colors: {
    primary: '#ff9393', // 로고 및 주요 요소 색상
    primaryHover: "#2685ff",
    secondary: '#ff6b6b', // 보조 색상
    background: '#ffffff', // 배경색
    darkBackground: '#000000', // 어두운 배경색 (푸터 등)
    text: '#333333', // 기본 텍스트 색상
    lightText: '#ffffff', // 밝은 배경에서의 텍스트 색상
    gradient: 'linear-gradient(90deg, #4776e6 0%, #8e54e9 100%)', // 그라데이션 배경 (차트 섹션)
    chartGradient: 'linear-gradient(135deg, #4776e6 0%, #ff6b6b 50%, #8e54e9 100%)', // 차트 배경 그라데이션
    headerBackground: '#ffffff', // 헤더 배경색
    footerBackground: '#000000', // 푸터 배경색
    border: '#e0e0e0', // 테두리 색상
    hover: '#f0f0f0', // 호버 상태 배경색
  },
  fonts: {
    main: "'Noto Sans KR', sans-serif", // 기본 폰트
    heading: "'Montserrat', 'Noto Sans KR', sans-serif", // 제목용 폰트
  },
  fontSizes: {
    small: '0.875rem', // 작은 텍스트
    medium: '1rem', // 기본 텍스트
    large: '1.25rem', // 큰 텍스트
    xlarge: '1.5rem', // 매우 큰 텍스트
    xxlarge: '2rem', // 제목용 텍스트
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
    xlarge: '3rem',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '1024px',
    largeDesktop: '1200px',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    circle: '50%',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
  transitions: {
    fast: '0.2s ease',
    medium: '0.3s ease',
    slow: '0.5s ease',
  },
};

export default theme;
