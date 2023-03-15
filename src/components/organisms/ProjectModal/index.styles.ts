import styled from 'styled-components';

export const Wrapper = styled.div``;

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  overflow: scroll;

  padding: 30px 40px;

  border-radius: 2rem;

  background-color: var(--modal-background-color);

  @media screen and (max-width: 420px) {
    border-radius: 0;
  }
`;
