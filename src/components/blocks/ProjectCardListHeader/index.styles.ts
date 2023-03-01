import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  min-width: 428px;

  @media screen and (max-width: 420px) {
    min-width: 328px;
  }
`;

export const NavigationWrapper = styled.nav`
  display: flex;
  gap: 20px;
`;
