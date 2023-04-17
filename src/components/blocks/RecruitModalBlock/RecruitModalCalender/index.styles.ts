import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  padding: 5px;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  &::before {
    content: '*';
    margin-right: 4px;
    color: red;
  }
`;

export const Input = styled(DatePicker)`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;

export const StyledDatePicker = styled(DatePicker)`
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  width: 600px;
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
