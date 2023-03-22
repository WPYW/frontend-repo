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
      <label>{label}</label>
      <S.PasswordInput
        type="password"
        value={password}
        onChange={handlePasswordChange}
        autoComplete="off"
      />
    </div>
  );
};

export default RecruitPasswordInput;
