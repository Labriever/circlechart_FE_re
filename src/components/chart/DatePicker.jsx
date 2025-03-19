import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// 스타일 컴포넌트 정의
const DatePickerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 16px;
  position: relative;
`;

const DateInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 120px;
  text-align: right;
`;

const CalendarButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-left: 8px;
  padding: 4px;
  color: #555;
  
  &:hover {
    color: #000;
  }
`;

const CalendarPopup = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 12px;
  z-index: 100;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
`;

const DayHeader = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  padding: 4px 0;
  color: #666;
`;

const DayCell = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${props => props.isToday ? '#f0f0f0' : props.isSelected ? '#3498db' : 'transparent'};
  color: ${props => props.isSelected ? 'white' : props.isCurrentMonth ? 'black' : '#aaa'};
  border-radius: 50%;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.isSelected ? '#3498db' : '#f0f0f0'};
  }
`;

const MonthNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #555;
  
  &:hover {
    color: #000;
  }
`;

const MonthLabel = styled.div`
  font-weight: bold;
`;

/**
 * DatePicker 컴포넌트
 * @param {Object} props
 * @param {string} props.value - 선택된 날짜 값 (YYYYMMDD 형식)
 * @param {Function} props.onChange - 날짜 변경 시 호출되는 콜백 (YYYYMMDD 형식의 문자열 전달)
 * @param {string} props.placeholder - 입력 필드의 플레이스홀더
 * @param {string} props.className - 추가 CSS 클래스
 * @param {Object} props.style - 인라인 스타일
 */
const DatePicker = ({ 
  value = '', 
  onChange, 
  placeholder = 'YYYY.MM.DD',
  className = '',
  style = {}
}) => {
  // 상태 관리
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [inputValue, setInputValue] = useState('');
  const calendarRef = useRef(null);
  const inputRef = useRef(null);
  
  // value prop이 변경되면 input 값도 업데이트
  useEffect(() => {
    const formattedValue = value ? 
      `${value.substring(0, 4)}.${value.substring(4, 6)}.${value.substring(6, 8)}` : 
      '';
    setInputValue(formattedValue);
  }, [value]);
  
  // 캘린더 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // 입력 필드에서 날짜 변경 처리
  const handleInputChange = (e) => {
    // 숫자와 마침표만 허용
    const input = e.target.value.replace(/[^\d.]/g, '');
    
    // YYYY.MM.DD 형식으로 포맷팅
    let formatted = '';
    const digits = input.replace(/\./g, '');
    
    if (digits.length > 0) {
      formatted += digits.substring(0, 4);
      if (digits.length > 4) {
        formatted += '.' + digits.substring(4, 6);
      }
      if (digits.length > 6) {
        formatted += '.' + digits.substring(6, 8);
      }
    }
    
    setInputValue(formatted);
    
    // 전체 8자리 숫자가 입력되었을 때만 상태 업데이트
    if (digits.length === 8) {
      onChange && onChange(digits);
    }
  };
  
  // 캘린더에서 날짜 선택 처리
  const handleCalendarDateChange = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    const dateValue = `${year}${month}${day}`;
    const formattedDate = `${year}.${month}.${day}`;
    
    // 입력 필드 값 즉시 업데이트
    setInputValue(formattedDate);
    
    // 부모 컴포넌트에 변경 사항 알림
    onChange && onChange(dateValue);
    
    // 캘린더 닫기
    setShowCalendar(false);
  };
  
  // 이전달 이동
  const prevMonth = () => {
    setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1));
  };
  
  // 다음달 이동
  const nextMonth = () => {
    setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1));
  };
  
  // 캘린더 렌더링
  const renderCalendar = () => {
    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();
    
    // 해당 월의 첫째 날과 마지막 날
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // 첫째 날의 요일 (0: 일요일, 6: 토요일)
    const firstDayOfWeek = firstDay.getDay();
    
    // 이전 달의 마지막 날
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    
    // 달력에 표시할 날짜 배열 생성
    const daysArray = [];
    
    // 이전 달의 날짜 채우기
    for (let i = 0; i < firstDayOfWeek; i++) {
      const prevMonthDay = prevMonthLastDay - firstDayOfWeek + i + 1;
      daysArray.push({
        date: new Date(year, month - 1, prevMonthDay),
        day: prevMonthDay,
        isCurrentMonth: false
      });
    }
    
    // 현재 달의 날짜 채우기
    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysArray.push({
        date: new Date(year, month, i),
        day: i,
        isCurrentMonth: true
      });
    }
    
    // 다음 달의 날짜 채우기 (42개 셀에 맞추기)
    const remainingCells = 42 - daysArray.length;
    for (let i = 1; i <= remainingCells; i++) {
      daysArray.push({
        date: new Date(year, month + 1, i),
        day: i,
        isCurrentMonth: false
      });
    }
    
    // 오늘 날짜
    const todayDate = new Date();
    const today = {
      year: todayDate.getFullYear(),
      month: todayDate.getMonth(),
      day: todayDate.getDate()
    };
    
    // 선택된 날짜
    const selected = value ? {
      year: parseInt(value.substring(0, 4)),
      month: parseInt(value.substring(4, 6)) - 1,
      day: parseInt(value.substring(6, 8))
    } : null;
    
    return (
      <CalendarPopup ref={calendarRef}>
        <MonthNav>
          <NavButton onClick={prevMonth}>◀</NavButton>
          <MonthLabel>{year}년 {month + 1}월</MonthLabel>
          <NavButton onClick={nextMonth}>▶</NavButton>
        </MonthNav>
        
        <CalendarGrid>
          {['일', '월', '화', '수', '목', '금', '토'].map(day => (
            <DayHeader key={day}>{day}</DayHeader>
          ))}
          
          {daysArray.map((item, index) => {
            const dateObj = item.date;
            const isToday = 
              dateObj.getFullYear() === today.year && 
              dateObj.getMonth() === today.month && 
              dateObj.getDate() === today.day;
              
            const isSelected = selected && 
              dateObj.getFullYear() === selected.year && 
              dateObj.getMonth() === selected.month && 
              dateObj.getDate() === selected.day;
              
            return (
              <DayCell 
                key={index}
                isToday={isToday}
                isSelected={isSelected}
                isCurrentMonth={item.isCurrentMonth}
                onClick={() => handleCalendarDateChange(dateObj)}
              >
                {item.day}
              </DayCell>
            );
          })}
        </CalendarGrid>
      </CalendarPopup>
    );
  };

  return (
    <DatePickerContainer className={className} style={style}>
      <DateInput
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
      <CalendarButton onClick={() => setShowCalendar(!showCalendar)}>
        📅
      </CalendarButton>
      {showCalendar && renderCalendar()}
    </DatePickerContainer>
  );
};

export default DatePicker;