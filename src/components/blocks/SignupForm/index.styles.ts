import styled from 'styled-components';

export const SignupPageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const SignupFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 155, 37, 1);
`;

export const Title = styled.div`
    color: #000;
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: 600;
`;

export const TitleInfo = styled.div`
    color: #000;
    font-size: 12px;
    font-weight: 600;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    padding: 10px;
    border: 2px solid #ff9b25;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
`;

export const Button = styled.button`
    align-items: center;
    width: 50%;
    height: 40px;
    margin-top: 10px;
    background-color: #fff;
    color: #ff9b25;
    border: 2px solid #ff9b25;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`;
