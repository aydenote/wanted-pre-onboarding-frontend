import JoinAPI from "../../apis/JoinAPI";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 스타일 정의
const JoinBtnStyle = styled("button")`
  width: 50%;
  margin: 36px 0 0 12px;
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

const JoinBtn = ({ valid }) => {
  const navigate = new useNavigate();
  // 회원가입 API 요청
  const clickLogin = async (event) => {
    event.preventDefault();
    const input = document.querySelectorAll("input");
    const email = input[0].value;
    const pw = input[1].value;
    try {
      const res = await JoinAPI(email, pw);
      if (res.status === 200 || res.status === 201) {
        localStorage.setItem("Token", res.data.access_token);
        navigate("/todo");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 마크업
  return (
    <JoinBtnStyle disabled={valid ? false : true} onClick={clickLogin}>
      회원가입
    </JoinBtnStyle>
  );
};
export default JoinBtn;
