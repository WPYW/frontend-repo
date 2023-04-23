import styled from 'styled-components';

export const LoginPageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const LoginFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 155, 37, 1);
`;

export const Title = styled.div`
    color: #000;
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 1000;
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

export const Container = styled.div`
    display: flex;
`;

export const Button = styled.button`
    width: 50%;
    height: 40px;
    margin-top: 10px;
    margin-right: 2px;
    margin-left: 2px;
    background-color: #fff;
    color: #ff9b25;
    border: 2px solid #ff9b25;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
`;

export const KakaoButton = styled.button`
    display: flex;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: #f9e000;
    font-size: 16px;
    font-weight: 600;

    img {
        margin-right: 20px;
        width: 30px;
        height: 30px;
    }
`;