import styled from 'styled-components';

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 2fr 3fr;
  column-gap: 64px;

  padding: 8px 16px;

  margin: 0 auto;

  max-width: 1120px;

  @media screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ColumnLeft = styled.aside`
  margin-top: 32px;
  min-width: 428px;
  min-height: 100vh;

  @media screen and (max-width: 420px) {
    min-width: 0px;
    min-height: 0px;
  }
`;

export const ColumnRight = styled.aside`
  margin-top: 30px;
  max-width: 692px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;
