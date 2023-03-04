import React from 'react';
import styled, { keyframes } from 'styled-components';

export function LoadingDots() {
  return (
    <LoadingDotsWrapper>
      <DotLeft />
      <DotMid />
      <DotRight />
    </LoadingDotsWrapper>
  );
}

const LoadingDotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  margin-top: 30px;
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

const DotLeft = styled(Dot)`
  background: #83b4f9;
  animation-delay: 0.1s;
`;

const DotMid = styled(Dot)`
  background: #4880ee;
  animation-delay: 0.2s;
`;

const DotRight = styled(Dot)`
  background: #1f4ef5;
  animation-delay: 0.3s;
`;
