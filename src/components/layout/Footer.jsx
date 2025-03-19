import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.darkBackground};
  color: ${props => props.theme.colors.lightText};
  padding: ${props => props.theme.spacing.large} 0;
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.medium};
`;

const PartnerLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: ${props => props.theme.spacing.medium};
  margin: 0 auto ${props => props.theme.spacing.large} auto;
  max-width: 1200px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }
`;

const PartnerLogo = styled.a`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: ${props => props.theme.spacing.small};
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.small};
  transition: ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  img {
    width: 100%;
    height: auto;
    filter: brightness(0) invert(1);
    opacity: 0.8;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${props => props.theme.spacing.large};
  padding-top: ${props => props.theme.spacing.medium};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing.medium};
    align-items: flex-start;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.small};
`;

const FooterLogo = styled.div`
  margin-bottom: ${props => props.theme.spacing.medium};
  display:flex;

  img {
    padding-right:50px;
    height: 50px;
    width: auto;
  }
`;

const InfoText = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.medium};
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const FooterLink = styled.a`
  font-size: ${props => props.theme.fontSizes.small};
  color: rgba(255, 255, 255, 0.9);
  
  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  color: rgba(255, 255, 255, 0.5);
`;

const FamilySite = styled.div`
  position: relative;
  width: 200px;
`;

const FamilySiteSelect = styled.select`
  width: 100%;
  padding: ${props => props.theme.spacing.small};
  background-color: rgba(255, 255, 255, 0.1);
  color: ${props => props.lightText ? props.theme.colors.lightText : props.theme.colors.text};
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${props => props.theme.borderRadius.small};
  font-size: ${props => props.theme.fontSizes.small};
  appearance: none;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.4);
  }
  
  option {
    background-color: ${props => props.theme.colors.background || '#ffffff'};
    color: ${props => props.theme.colors.text}; /* 드롭다운 메뉴가 펼쳐진 후의 색상 */
  }
`;

const Footer = () => {
  const partnerLogos = [
    { id: 1, name: '2% ENTERTAINMENT', logo: '/src/assets/company_logos/2percent_ENTERTAINMNET_logo.png', url: '#' },
    { id: 2, name: 'Aladin', logo: '/src/assets/company_logos/Aladin_logo.png', url: '#' },
    { id: 3, name: 'ALL MD', logo: '/src/assets/company_logos/ALL_MD_logo.png', url: '#' },
    { id: 4, name: 'Apple Music', logo: '/src/assets/company_logos/Apple_Music_logo.png', url: '#' },
    { id: 5, name: 'Apple Music', logo: '/src/assets/company_logos/applemusic_logo.png', url: '#' },
    { id: 6, name: 'ARTIIROOM', logo: '/src/assets/company_logos/ARTIIROOM_logo.png', url: '#' },
    { id: 7, name: 'AWANG PORT', logo: '/src/assets/company_logos/AWANG_PORT_logo.png', url: '#' },
    { id: 8, name: 'BEATROAD', logo: '/src/assets/company_logos/BEATROAD_logo.png', url: '#' },
    { id: 9, name: 'Be My Friends', logo: '/src/assets/company_logos/bemyfriends_logo.png', url: '#' },
    { id: 10, name: 'BISCUIT SOUND', logo: '/src/assets/company_logos/BISCUIT_SOUND_logo.png', url: '#' },
    { id: 11, name: 'Bugs', logo: '/src/assets/company_logos/bugs_logo.png', url: '#' },
    { id: 12, name: 'CJ ENM', logo: '/src/assets/company_logos/CJ_ENM_logo.png', url: '#' },
    { id: 13, name: 'COLORING', logo: '/src/assets/company_logos/COLORING_logo.png', url: '#' },
    { id: 14, name: 'Coupang', logo: '/src/assets/company_logos/coupang_logo.png', url: '#' },
    { id: 15, name: 'Danal Entertainment', logo: '/src/assets/company_logos/Danal_Entertainment_logo.png', url: '#' },
    { id: 16, name: 'Dreamus', logo: '/src/assets/company_logos/Dreamus_logo.png', url: '#' },
    { id: 17, name: 'EMI', logo: '/src/assets/company_logos/EMI_logo.png', url: '#' },
    { id: 18, name: 'EVERLINE', logo: '/src/assets/company_logos/EVERLINE_logo.png', url: '#' },
    { id: 19, name: 'Fanplee', logo: '/src/assets/company_logos/fanplee_logo.png', url: '#' },
    { id: 20, name: 'FLO', logo: '/src/assets/company_logos/FLO_logo.png', url: '#' },
    { id: 21, name: 'FNC STORE', logo: '/src/assets/company_logos/FNC_STORE_logo.png', url: '#' },
    { id: 22, name: 'Genie', logo: '/src/assets/company_logos/genie_logo.png', url: '#' },
    { id: 23, name: 'GIGA ALBUM', logo: '/src/assets/company_logos/GIGA_ALBUM_logo.png', url: '#' },
    { id: 24, name: 'HAPPY ROBOT RECORDS', logo: '/src/assets/company_logos/HAPPY_ROBOT_RECORDS_logo.png', url: '#' },
    { id: 25, name: 'HIGHER', logo: '/src/assets/company_logos/HIGHER_logo.png', url: '#' },
    { id: 26, name: 'IDOL STORE', logo: '/src/assets/company_logos/IDOL_STORE_logo.png', url: '#' },
    { id: 27, name: 'interAsia', logo: '/src/assets/company_logos/interAsia_logo.png', url: '#' },
    { id: 28, name: 'INTERPARK', logo: '/src/assets/company_logos/INTERPARK_logo.png', url: '#' },
    { id: 29, name: 'JYP SHOP', logo: '/src/assets/company_logos/JYP_SHOP_logo.png', url: '#' },
    { id: 30, name: 'Kakao Entertainment', logo: '/src/assets/company_logos/kakao_ENTERTAINMENT_logo.png', url: '#' },
    { id: 31, name: 'Kakao Music', logo: '/src/assets/company_logos/KakaoMusic_logo.png', url: '#' },
    { id: 32, name: 'KANG&MUSIC', logo: '/src/assets/company_logos/KANG&MUSIC.png', url: '#' },
    { id: 33, name: 'Keytalk AI', logo: '/src/assets/company_logos/Keytalk_ai_logo.png', url: '#' },
    { id: 34, name: 'M2M', logo: '/src/assets/company_logos/M2M_logo.png', url: '#' },
    { id: 35, name: 'Melon', logo: '/src/assets/company_logos/Melon_logo.png', url: '#' },
    { id: 36, name: 'MIRRORBALL MUSIC', logo: '/src/assets/company_logos/MIRRORBALLMUSIC_logo.png', url: '#' },
    { id: 37, name: 'Mubeat', logo: '/src/assets/company_logos/mubeat_logo.png', url: '#' },
    { id: 38, name: 'Naturally Music', logo: '/src/assets/company_logos/Naturally_Music_logo.png', url: '#' },
    { id: 39, name: 'NEMOZ LAB', logo: '/src/assets/company_logos/NEMOZ_LAB_logo.png', url: '#' },
    { id: 40, name: 'New Music', logo: '/src/assets/company_logos/New_music_logo.png', url: '#' },
    { id: 41, name: 'OGAM Entertainment', logo: '/src/assets/company_logos/OGAM_Entertainment_logo.png', url: '#' },
    { id: 42, name: 'PONY CANYON', logo: '/src/assets/company_logos/PONY_CANYON_logo.png', url: '#' },
    { id: 43, name: 'SAIL MUSIC', logo: '/src/assets/company_logos/SAILMUSIC_logo.png', url: '#' },
    { id: 44, name: 'SAMSUNG Music', logo: '/src/assets/company_logos/SAMSUNG_Music_logo.png', url: '#' },
    { id: 45, name: 'SK Telecom', logo: '/src/assets/company_logos/SK_telecom_logo.png', url: '#' },
    { id: 46, name: 'SM ENTERTAINMENT', logo: '/src/assets/company_logos/SM_ENTERTAINMENT_logo.png', url: '#' },
    { id: 47, name: 'SONY MUSIC', logo: '/src/assets/company_logos/SONY_MUSIC_logo.png', url: '#' },
    { id: 48, name: 'Spotify', logo: '/src/assets/company_logos/Spotify_logo.png', url: '#' },
    { id: 49, name: 'TJ', logo: '/src/assets/company_logos/TJ_logo.png', url: '#' },
    { id: 50, name: 'UNIVERSAL', logo: '/src/assets/company_logos/UNIVERSAL_logo.png', url: '#' },
    { id: 51, name: 'VIBE', logo: '/src/assets/company_logos/VIBE_logo.png', url: '#' },
    { id: 52, name: 'WARNET MUSIC', logo: '/src/assets/company_logos/WARNET_MUSIC_logo.png', url: '#' },
    { id: 53, name: 'Yejeon Media', logo: '/src/assets/company_logos/yejeon_media_logo.png', url: '#' },
    { id: 54, name: 'YG PLUS', logo: '/src/assets/company_logos/YG_PLUS_logo.png', url: '#' },
    { id: 55, name: 'YouTube', logo: '/src/assets/company_logos/YouTube_logo.png', url: '#' }
  ];

  const familySites = [
    { id: 1, name: '한국콘텐츠진흥원', url: 'https://www.kocca.kr/kocca/main.do' },
    { id: 2, name: '한국저작권보호원', url: 'https://www.kcopa.or.kr/'},
    { id: 3, name: '문화체육관광부', url: 'https://www.mcst.go.kr/kor/main.jsp' },
    { id: 4, name: '한국저작권위원회', url: 'https://www.copyright.or.kr/main.do' },
    { id: 5, name: '한국음악콘텐츠협회', url: 'http://k-mca.or.kr/' },
    { id: 6, name: '써클차트뮤직어워즈', url: 'http://circlemusicawards.com/' }
  ];

  const handleFamilySiteChange = (e) => {
    const selectedUrl = e.target.value;
    if (selectedUrl) {
      window.open(selectedUrl, '_blank');
    }
  };

  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  

  return (
    <FooterContainer>
      <FooterInner>
      {isHomePage && (
        <PartnerLogos>
          {partnerLogos.map(partner => (
            <PartnerLogo key={partner.id} href={partner.url} target="_blank" rel="noopener noreferrer">
              <img src={partner.logo} alt={partner.name} />
            </PartnerLogo>
          ))}
        </PartnerLogos>
      )}
        
        <FooterLinks>
          <FooterLink href="https://biz.circlechart.kr/main/section/introduction/main.circle">써클차트소개</FooterLink>
          <FooterLink href="https://biz.circlechart.kr/main/section/infomation/cooperation/main.circle">차트제휴신청</FooterLink>
          <FooterLink href="#">이메일주소무단수집거부</FooterLink>
          <FooterLink href="#">개인정보취급방침</FooterLink>
        </FooterLinks>
        
        <FooterBottom>
          <CompanyInfo>
            <FooterLogo>
              <img src="/src/assets/img/pc_logo_text_white.png" alt="Circle Chart Logo" />
              <img src="/src/assets/img/pc_logo_kmca_white.png" alt="KMCA Logo" />
            </FooterLogo>
            <InfoText>
              서울특별시 강남구 강남대로 311 (역삼동) 드림플러스 강남 11층
            </InfoText>
            <Copyright>
              Copyright © 2010-2025 Korea Music Content Association. All rights reserved.
            </Copyright>
          </CompanyInfo>
          
          <FamilySite>
            <FamilySiteSelect 
              onChange={handleFamilySiteChange} 
              defaultValue="" 
              lightText={true}
            >
              <option value="" disabled>패밀리 사이트</option>
              {familySites.map(site => (
                <option key={site.id} value={site.url}>{site.name}</option>
              ))}
            </FamilySiteSelect>
          </FamilySite>
        </FooterBottom>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
