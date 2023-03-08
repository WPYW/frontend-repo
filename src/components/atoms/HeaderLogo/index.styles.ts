import styled from 'styled-components';

import { ReactComponent as LogoImage } from '@/assets/header-logo.svg';

export const Wrapper = styled.a`
  all: unset;

  cursor: pointer;
`;

export const Logo = styled(LogoImage)`
  width: 100%;
  height: 2rem;

  @media screen and (max-width: 420px) {
    height: 1.5rem;
  }
`;
