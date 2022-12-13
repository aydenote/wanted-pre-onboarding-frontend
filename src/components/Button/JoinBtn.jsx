import styled from "styled-components";

// 스타일 정의
const JoinBtnStyle = styled("button")`
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

// 마크업
const JoinBtn = () => {
  return <JoinBtnStyle>회원가입</JoinBtnStyle>;
};
export default JoinBtn;
