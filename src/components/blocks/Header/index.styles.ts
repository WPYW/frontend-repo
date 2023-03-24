import styled from 'styled-components';
import { ReactComponent as LogoImage } from '@/assets/header-logo.svg';

export const Wrapper = styled.header`
  display: block;

  position: sticky;
  top: 0px;

  width: 100%;

  background-color: var(--header-background-color);

  box-shadow: 0px 1px 0px var(--header-shadow-color);

  z-index: 100;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    backdrop-filter: saturate(180%) blur(20px) brightness(1.1);
  }
`;

export const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: auto;
  padding: 0px 1rem;
  width: auto;
  max-width: 1280px;
  height: 52px;
  min-height: 3rem;

  position: relative;
`;

export const LogoWrapper = styled.a`
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
