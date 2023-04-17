import React, { useState } from 'react';
import * as S from './index.styles';
import { RecruitModalDropDownProps } from './index.types';

export function RecruitModalDropDown({
  options,
  placeholder,
  description,
  setDropdownInput,
}: RecruitModalDropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    setDropdownInput.setValue(option);
  };

  return (
    <S.Wrapper>
      <S.DropdownContainer>
        <S.DropdownLabel>{description}</S.DropdownLabel>
        <S.DropdownButton type="button" isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {selectedOption || placeholder}
        </S.DropdownButton>
        {isOpen && (
          <S.DropdownMenu>
            {options.map((option) => (
              <S.DropdownMenuItem key={option} onClick={() => handleOptionSelect(option)}>
                {option}
              </S.DropdownMenuItem>
            ))}
          </S.DropdownMenu>
        )}
      </S.DropdownContainer>
    </S.Wrapper>
  );
}
