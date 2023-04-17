import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  font-family: 'poppins', 'sans-serif';
  align-items: center;
  margin: 0px auto;
  gap: 10px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const HeaderDropdownsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
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
  margin: 20px;
  width: 50%;
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
  margin-top: 30px;
  gap: 20px;
  height: fit-content;
  justify-content: flex-end;

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
