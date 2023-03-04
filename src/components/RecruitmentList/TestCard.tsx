import React, { useState } from 'react';
import { BACKEND_API_URL } from '@/common/url';
import styled from 'styled-components';

export function TestCard() {
  const [testData, setData] = useState([]);
  fetch(`${BACKEND_API_URL}/recruit`, { method: 'get' })
    .then((response) => response.json())
    .then((data) => setData(data.results));
  const arr = JSON.stringify(testData);
  return (
    <TestDiv>
      {testData.map((results, index) => (
        <div key={index}>{results}</div>
      ))}
    </TestDiv>
  );
}

export default TestCard;

const TestDiv = styled.div``;
