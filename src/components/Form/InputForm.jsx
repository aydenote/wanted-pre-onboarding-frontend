import { useState } from "react";
import LoginBtn from "../Button/LoginBtn";
import JoinBtn from "../Button/JoinBtn";
import styled from "styled-components";

// 스타일 정의
const FormStyle = styled("form")`
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

const InputForm = () => {
  const [valid, setValid] = useState(false);

  // 이메일, 패스워드 유효성 검사
  const changeLoginInput = () => {
    const input = document.querySelectorAll("input");
    const email = input[0].value;
    const pw = input[1].value;

    if (email.includes("@") && pw.length >= 8) {
      setValid(true);
    } else setValid(false);
  };

  // 마크업
  return (
    <FormStyle>
      <input type="email" placeholder="이메일" required onChange={changeLoginInput} />
      <input type="password" placeholder="패스워드" required onChange={changeLoginInput} />
      <FormBtnContainer>
        <LoginBtn valid={valid} />
        <JoinBtn />
      </FormBtnContainer>
    </FormStyle>
  );
};
export default InputForm;
