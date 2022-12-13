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

const TodoPage = () => {
  return (
    <Title>
      <p>TODO LIST</p>
    </Title>
  );
};
export default TodoPage;
