import React, { useState, useRef, useLayoutEffect, useCallback } from 'react';
import styled from 'styled-components';

// 탭 컨테이너 스타일
export const TabContainer = styled.div`
  display: flex;
  margin-bottom: ${props => props.marginBottom || '30px'};
  border-radius: ${props => props.borderRadius || '12px'};
  overflow: hidden;
  background-color: ${props => props.backgroundColor || '#f1f2f6'};
  padding: ${props => props.padding || '5px'};
  position: relative;
`;

// 슬라이딩 인디케이터 스타일
export const TabIndicator = styled.div`
  position: absolute;
  height: calc(100% - ${props => props.indicatorPadding || '10px'});
  background: ${props => props.indicatorColor || props.theme.colors?.chartGradient || 'linear-gradient(90deg, #4481eb 0%, #04befe 100%)'};
  border-radius: ${props => props.indicatorBorderRadius || '8px'};
  transition: all ${props => props.transitionDuration || '0.3s'} ease;
  top: ${props => props.indicatorTopOffset || '5px'};
  left: ${props => props.left || '5px'};
  width: ${props => props.width || '0px'};
  z-index: 0;
`;

// 탭 버튼 스타일
export const Tab = styled.div`
  flex: 1;
  padding: ${props => props.padding || '14px 20px'};
  font-size: ${props => props.fontSize || '15px'};
  font-weight: ${props => (props.active ? props.activeFontWeight || '700' : props.fontWeight || '500')};
  color: ${props => (props.active ? props.activeColor || 'white' : props.color || '#6c6c6c')};
  background-color: transparent;
  border-radius: ${props => props.borderRadius || '8px'};
  cursor: pointer;
  text-align: center;
  transition: all ${props => props.transitionDuration || '0.3s'} ease;
  position: relative;
  z-index: 1;

  &:hover {
    background-color: ${props => (props.active ? 'transparent' : props.hoverBackgroundColor || '#e6e7eb')};
  }
`;

// 재활용 가능한 탭 컴포넌트
const SlidingTabs = ({
  tabs = [
    { id: 'daily', label: 'Daily' },
    { id: 'weekly', label: 'Weekly' },
    { id: 'monthly', label: 'Monthly' },
    { id: 'firstHalf', label: 'First Half' },
    { id: 'yearly', label: 'Yearly' }
  ],
  defaultActiveTab = 'daily',
  onTabChange = () => {},
  containerStyles = {},
  indicatorStyles = {},
  tabStyles = {}
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: '5px', width: '0px' });
  const tabsRef = useRef([]);
  const tabContainerRef = useRef(null);
  const isInitialMount = useRef(true);
  
  // 인디케이터 위치 업데이트 함수
  const updateIndicatorPosition = useCallback(() => {
    if (!tabContainerRef.current) return;
    
    const tabIds = tabs.map(tab => tab.id);
    const activeIndex = tabIds.indexOf(activeTab);
    
    if (activeIndex !== -1 && tabsRef.current[activeIndex]) {
      const tabElement = tabsRef.current[activeIndex];
      const containerRect = tabContainerRef.current.getBoundingClientRect();
      const tabRect = tabElement.getBoundingClientRect();
      
      const newLeft = tabRect.left - containerRect.left;
      const newWidth = tabRect.width;
      
      // 현재 상태와 다를 때만 업데이트
      if (indicatorStyle.left !== `${newLeft}px` || indicatorStyle.width !== `${newWidth}px`) {
        setIndicatorStyle({
          left: `${newLeft}px`,
          width: `${newWidth}px`
        });
      }
    }
  }, [activeTab, tabs]);

  // 탭 클릭 핸들러
  const handleTabClick = useCallback((tabId) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  }, [onTabChange]);

  // 초기 마운트와 탭 변경 시 인디케이터 위치 업데이트
  useLayoutEffect(() => {
    if (isInitialMount.current) {
      // DOM이 모두 그려진 후 위치 계산을 위해 setTimeout 사용
      const timer = setTimeout(() => {
        updateIndicatorPosition();
        isInitialMount.current = false;
      }, 50);
      return () => clearTimeout(timer);
    } else {
      updateIndicatorPosition();
    }
  }, [activeTab, updateIndicatorPosition]);

  // 창 크기 변경 시 인디케이터 위치 재계산
  useLayoutEffect(() => {
    const handleResize = () => {
      updateIndicatorPosition();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateIndicatorPosition]);

  // DOM 변경 관찰 (추가적인 안정성 확보)
  useLayoutEffect(() => {
    if (!tabContainerRef.current) return;

    const observer = new MutationObserver(() => {
      updateIndicatorPosition();
    });

    observer.observe(tabContainerRef.current, {
      childList: true,
      subtree: true,
      attributes: true
    });

    return () => {
      observer.disconnect();
    };
  }, [updateIndicatorPosition]);

  return (
    <TabContainer ref={tabContainerRef} {...containerStyles}>
      <TabIndicator 
        left={indicatorStyle.left} 
        width={indicatorStyle.width} 
        {...indicatorStyles} 
      />
      
      {tabs.map((tab, index) => (
        <Tab 
          key={tab.id}
          active={activeTab === tab.id} 
          onClick={() => handleTabClick(tab.id)}
          ref={el => { tabsRef.current[index] = el; }}
          {...tabStyles}
        >
          {tab.label}
        </Tab>
      ))}
    </TabContainer>
  );
};

export default React.memo(SlidingTabs);