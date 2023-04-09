import React, { useState } from 'react';
import * as S from './index.styles';
import { PasswordProps } from './index.types';

const RecruitPasswordInput = ({ label, onChange }: PasswordProps) => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    onChange(passwordValue);
  };

  return (
    <div>
      <S.PasswordLabel>{label}</S.PasswordLabel>
      <S.PasswordInput
        type="password"
        value={password}
        onChange={handlePasswordChange}
        autoComplete="off"
        placeholder="비밀번호를 입력해주세요."
      />
    </div>
  );
};

export default RecruitPasswordInput;
