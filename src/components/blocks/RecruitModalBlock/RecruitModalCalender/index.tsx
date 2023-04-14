import React, { useState } from 'react';
import { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import * as S from './index.styles';
import { DatePickerProps } from './index.types';
registerLocale('ko', ko);

export const RecruitModalCalender: React.FC<DatePickerProps> = ({
  label,
  selectedDate,
  setDate,
}) => {
  const [selectedDateState, setSelectedDateState] = useState<Date | null>(selectedDate);
  const [presentDate, setPresentDate] = useState<Date>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDateState(date);
    setDate.setValue(date);
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.StyledDatePicker
        selected={selectedDateState}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        locale="ko"
        placeholderText="현재 날짜 이후를 선택해주세요 !"
        minDate={presentDate}
        shouldCloseOnSelect={true}
      />
    </S.Container>
  );
};
