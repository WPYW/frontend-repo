import ReactQuill from 'react-quill';
import styled from 'styled-components';

export const StyledReactQuill = styled(ReactQuill)`
  .ql-toolbar {
    border: 1px solid #ff9b25;
    border-radius: 5px;
  }

  .ql-container {
    border: 1px solid #ff9b25;
    border-radius: 5px;
  }

  .ql-editor {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    min-height: 100px;
    padding: 10px;
    & strong {
      font-weight: bold;
    }

    & em {
      font-style: italic;
    }
  }
`;

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const SubjectInput = styled.input`
  padding: 10px;
  border: 1px solid #ff9b25;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: transparent;
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: var(--main-color-blue);
  color: white;
  cursor: pointer;
`;
