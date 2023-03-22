import React, { useState, useRef } from 'react';
import * as S from './index.styles';
import { FontWeight, TextAlign } from './index.types';
import { FaAlignLeft, FaAlignCenter, FaAlignRight, FaBold } from 'react-icons/fa';

export const RecruitListSubmit = () => {
  const [subjectValue, setSubjectValue] = useState('');
  const [textAlign, setTextAlign] = useState('left');
  const [fontWeight, setFontWeight] = useState('normal');
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubjectValue(e.target.value);
  };

  const handleTextAlignClick = (align: TextAlign) => {
    setTextAlign(align);
  };

  const handleFontWeightClick = (fontWeight: FontWeight) => {
    setFontWeight((prevWeight) => (prevWeight === 'bold' ? 'normal' : 'bold'));
  };
  return (
    <S.Wrapper>
      <S.SubjectInput
        type="text"
        placeholder="글 제목을 입력해주세요!"
        value={subjectValue}
        onChange={handleSubjectChange}
      />
      <S.TextAlignButtonGroup>
        <S.TextAlignButton
          active={textAlign === 'left'}
          onClick={() => handleTextAlignClick('left')}
        >
          <FaAlignLeft />
        </S.TextAlignButton>
        <S.TextAlignButton
          active={textAlign === 'center'}
          onClick={() => handleTextAlignClick('center')}
        >
          <FaAlignCenter />
        </S.TextAlignButton>
        <S.TextAlignButton
          active={textAlign === 'right'}
          onClick={() => handleTextAlignClick('right')}
        >
          <FaAlignRight />
        </S.TextAlignButton>
        <S.FontWeightButton
          active={fontWeight === 'bold'}
          onClick={() => handleFontWeightClick('bold')}
        >
          <FaBold />
        </S.FontWeightButton>
      </S.TextAlignButtonGroup>
      <S.DescriptionInput
        placeholder="프로젝트에 대한 소개글을 작성해주세요."
        ref={descriptionRef}
        textAlign={textAlign as TextAlign}
        fontWeight={fontWeight as FontWeight}
      />
      <S.Button type="submit">Add</S.Button>
    </S.Wrapper>
  );
};

export default RecruitListSubmit;
