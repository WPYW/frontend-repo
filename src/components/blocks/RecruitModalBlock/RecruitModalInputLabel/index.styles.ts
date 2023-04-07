import styled from 'styled-components';

export const Wrapper = styled.div``;

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelWrapper = styled.div`
  margin-bottom: 8px;
`;

export const Label = styled.label`
  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-medium);
  color: var(--modal-input-text-color);
`;

export const Optional = styled.span`
  font-size: var(--base-text-size-small);
  color: #888888;
`;

export const Caution = styled.div`
  font-size: var(--base-text-size-xsmall);
  color: #ff0000;

  margin-top: 6px;
`;
