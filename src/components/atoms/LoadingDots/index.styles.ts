import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  padding: 30px;
`;
const bounce = keyframes`
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-12px);
    }
    100% {
      transform: translateY(0);
    }
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation: ${bounce} 1s infinite;
`;

export const DotLeft = styled(Dot)`
  background: #ffe0bc;
  animation-delay: 0.1s;
`;

export const DotMid = styled(Dot)`
  background: #ffc47f;
  animation-delay: 0.2s;
`;

export const DotRight = styled(Dot)`
  background: #ff9b25;
  animation-delay: 0.3s;
`;
