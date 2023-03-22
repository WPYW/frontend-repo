import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 8px;
  color: black;

  &::before {
    content: '*';
    margin-right: 4px;
    color: red;
  }
`;

export const Input = styled(DatePicker)`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;

export const DatePickersContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DatePickerLabel = styled.label`
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
`;

export const StyledDatePicker = styled(DatePicker)`
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  width: 100%;
  font-family: 'Poppins', sans-serif;

  &:hover {
    border-color: #c6c6c6;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.3);
    border-color: #007bff;
  }
`;
export const IconWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const CalendarIcon = styled(FaCalendarAlt)`
  color: #999;
  font-size: 18px;
`;
