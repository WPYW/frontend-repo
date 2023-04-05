import styled from 'styled-components';

export const Wrapper = styled.div``;

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 600px;

  border-radius: 24px;

  background-color: rgb(245, 245, 245);

  padding: 60px 64px;

  @media screen and (max-width: 420px) {
    width: 100%;
    border-radius: 0px;

    padding: 30px 32px;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 28px;
  color: var(--modal-text-color);

  width: 100%;

  word-break: keep-all;
`;

export const Description = styled.p`
  font-weight: var(--base-text-weight-normal);
  font-size: var(--base-text-size-medium);
  color: var(--modal-text-color);

  word-break: break-word;
  white-space: pre-line;
`;

export const RecruitInfoCard = styled.div`
  background-color: #ffffff;

  padding: 12px;

  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);

  border-radius: 12px;
`;

export const CardItem = styled.div``;

export const ItemLabel = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

export const ItemValue = styled.div``;

export const Member = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

export const Positions = styled.div`
  display: flex;

  font-weight: 500;
  font-size: 16px;
`;

export const Skills = styled.div`
  display: flex;

  font-weight: 500;
  font-size: 16px;
`;
