import React, { useState } from 'react';
import * as S from './index.styles';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const RecruitInputTextForm = () => {
  const [subjectValue, setSubjectValue] = useState('');
  const [textAlign, setTextAlign] = useState('left');
  const [fontWeight, setFontWeight] = useState('normal');
  const [descriptionValue, setDescriptionValue] = useState('');

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    [{ direction: 'rtl' }], // text direction

    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ['clean'], // remove formatting button
  ];

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubjectValue(e.target.value);
  };

  const handleDescriptionChange = (value: string) => {
    setDescriptionValue(value);
  };

  return (
    <S.Wrapper>
      <S.SubjectInput
        type="text"
        placeholder="글 제목을 입력해주세요!"
        value={subjectValue}
        onChange={handleSubjectChange}
      />
      <S.StyledReactQuill
        placeholder="프로젝트에 대한 소개글을 작성해주세요."
        value={descriptionValue}
        onChange={handleDescriptionChange}
        modules={{ toolbar: toolbarOptions }}
        style={{ height: '300px' }}
      />
      <S.Button type="submit">Add</S.Button>
    </S.Wrapper>
  );
};

export default RecruitInputTextForm;
