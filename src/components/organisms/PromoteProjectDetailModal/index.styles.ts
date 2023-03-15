import styled from 'styled-components';

export const Wrapper = styled.div``;

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 960px;

  border-radius: 24px;

  background-color: var(--modal-background-color);

  padding: 60px 64px;

  @media screen and (max-width: 420px) {
    width: 100%;
    border-radius: 0px;

    padding: 30px 32px;
  }
`;

export const Created = styled.div`
  font-size: 15px;
  color: rgb(112, 112, 112);

  width: 100%;

  white-space: nowrap;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 28px;
  color: var(--modal-text-color);

  width: 100%;

  word-break: keep-all;
`;

export const Description = styled.div`
  font-weight: var(--base-text-weight-normal);
  font-size: var(--base-text-size-medium);
  color: var(--modal-text-color);

  word-break: break-word;
  white-space: pre-line;
`;

export const ReadMe = styled.div`
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.25);

  padding: 30px 60px;

  @media screen and (max-width: 420px) {
    display: none;
  }
`;
