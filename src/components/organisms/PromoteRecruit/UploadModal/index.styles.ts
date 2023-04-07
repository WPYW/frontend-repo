import styled from 'styled-components';

export const Wrapper = styled.div``;

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  max-width: 700px;
  padding: 30px 40px;
  border-radius: 2rem;
  background-color: var(--modal-background-color);
  gap: 20px;
  @media screen and (max-width: 420px) {
    border-radius: 0;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  gap: 20px;
`;

export const HeaderDropdownsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 25px;
`;

export const HeaderInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;

  gap: 20px;
  border-bottom: 1px solid #ff9b25;
  > *:not(:last-child) {
    border-bottom: 1px solid #ff9b25;
  }
  > * {
    border-bottom: none;
  }
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const BodyInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterInputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 30px;
  gap: 20px;
  height: fit-content;
  > input {
    margin-right: 10px;
    width: 80%;
  }
  > button {
    margin-top: 10px;
    color: white;
    width: 30%;
    height: fit-content;
  }
`;
