import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const LoginTitle = styled("header")`
    width: 238px;
    margin: 100px auto;
    margin-bottom: 40px;
    p {
      text-align: center;
      font-weight: 500;
      font-size: 24px;
    }
  `;

  const LoginForm = styled("form")`
    width: 322px;
    text-align: center;
    margin: 100px auto;
    input {
      display: block;
      width: 100%;
      margin-bottom: 16px;
      padding: 20px 0;
      outline: none;
      border: none;
      border-bottom: 1px solid #c4c4c4;
      font-size: 16px;
      color: #767676;
    }
  `;

  const FormBtnContainer = styled("div")`
    display: flex;
  `;

  const LoginBtn = styled("button")`
    width: 50%;
    margin-top: 36px;
    padding: 13px 0;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    background-color: #ffc7a7;
  `;

  const JoinBtn = styled(Link)`
    width: 50%;
    margin: 36px 0 0 12px;
    padding: 13px 0;
    border-radius: 5px;
    line-height: normal;
    font-family: Arial;
    font-size: 18px;
    font-weight: 700;
    background-color: #f26e22;
    color: #fff;
  `;

  return (
    <>
      <LoginTitle>
        <p>로그인</p>
      </LoginTitle>
      <LoginForm>
        <input type="email" placeholder="이메일" required />
        <input type="password" placeholder="패스워드" required />
        <FormBtnContainer>
          <LoginBtn type="submit">로그인</LoginBtn>
          <JoinBtn to="/join">회원가입</JoinBtn>
        </FormBtnContainer>
      </LoginForm>
    </>
  );
};

export default Login;
