import { useNavigate } from "react-router-dom";
import LoginAPI from "../../apis/LoginAPI";
import styled from "styled-components";

// 스타일 정의
const LoginBtnStyle = styled.button`
  width: 50%;
  margin-top: 36px;
  padding: 13px 0;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  :disabled {
    background-color: #ffc7a7;
  }
  :enabled {
    background-color: #f26e22;
  }
`;

const LoginBtn = ({ valid }) => {
  const navigate = new useNavigate();
  // 로그인 API 요청
  const clickLogin = async (event) => {
    event.preventDefault();
    const input = document.querySelectorAll("input");
    const email = input[0].value;
    const pw = input[1].value;
    try {
      const res = await LoginAPI(email, pw);
      if (res.status === 200) {
        localStorage.setItem("Token", res.data.access_token);
        navigate("/todo");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 마크업
  return (
    <LoginBtnStyle disabled={valid ? false : true} onClick={clickLogin}>
      로그인
    </LoginBtnStyle>
  );
};

export default LoginBtn;
