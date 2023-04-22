import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 200px;

  background-color: #ffffff;

  padding: 30px 40px;

  border-radius: 2rem;
`;

export const KaKaoButton = styled.button`
  padding: 10px 14px 10px 10px;
  border: 1px solid #fee500;
  color: #fee500;
  background-color: transparent;
  border-radius: 16px;
  font-size: 0.875rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  line-height: 1em;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0s;

  &:hover {
    background: #fee500;
    color: rgb(255, 255, 255);
  }
`;
