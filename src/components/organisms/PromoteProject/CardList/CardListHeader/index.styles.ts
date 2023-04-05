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

export const Button = styled.button`
  background: none;

  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-xlarge);
  color: var(--main-color-orange);

  border: 4px solid;
  border-color: var(--main-color-orange);
  border-radius: 8px;

  padding: 8px 12px;

  cursor: pointer;

  &:hover {
    background-color: var(--main-color-orange);
    color: #ffffff;
  }

  @media screen and (max-width: 420px) {
    font-size: var(--base-text-size-normal);
  }
`;
