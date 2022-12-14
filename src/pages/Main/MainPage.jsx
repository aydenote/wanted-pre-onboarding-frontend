import InputForm from "../../components/Form/InputForm";
import styled from "styled-components";

// 스타일 정의
const Title = styled("header")`
  width: 238px;
  margin: 100px auto;
  margin-bottom: 40px;
  p {
    text-align: center;
    font-weight: 500;
    font-size: 24px;
  }
`;

// 마크업
const MainPage = () => {
  return (
    <>
      <Title>
        <p>로그인 및 회원가입</p>
      </Title>
      <InputForm />
    </>
  );
};

export default MainPage;
