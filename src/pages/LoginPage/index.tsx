import React from 'react';
import { useLocation } from 'react-router-dom';

import { KAKAO_URL } from '@/common/url';

export default function LoginPage() {
  const authorizationCode = useLocation().search.replace('?code=', '');

  console.log(authorizationCode);

  return <button onClick={() => (window.location.href = KAKAO_URL)}>카카로 로그인</button>;
}
