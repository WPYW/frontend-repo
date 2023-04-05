import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: flex-start;
  gap: 20px;

  @media screen and (max-width: 420px) {
    width: 100%;
    gap: 4px;
  }
`;
