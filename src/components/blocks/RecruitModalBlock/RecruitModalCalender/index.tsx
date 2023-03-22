import React, { useState } from 'react';
import { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import * as S from './index.styles';

registerLocale('ko', ko);

interface DatePickerProps {
  label: string;
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
}

export const RecruitModalCalender: React.FC<DatePickerProps> = ({
  label,
  selectedDate,
  onChange,
}) => {
  const [selectedDateState, setSelectedDateState] = useState<Date | null>(selectedDate);

  const handleDateChange = (date: Date | null) => {
    setSelectedDateState(date);
    onChange(date);
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.StyledDatePicker
        selected={selectedDateState}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        locale="ko"
        placeholderText="날짜를 선택해주세요 ⏳"
      />
    </S.Container>
  );
};
