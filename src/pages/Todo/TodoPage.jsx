import { Navigate } from "react-router-dom";
import ToDoForm from "../../components/Form/TodoForm";
import styled from "styled-components";

// 스타일 정의
const Title = styled("header")`
  width: 238px;
  margin: 100px auto;
  margin-bottom: 40px;
  p {
    text-align: center;
    font-weight: 900;
    font-size: 32px;
  }
`;

const TodoPage = () => {
  const token = localStorage.getItem("Token");
  return token ? (
    <>
      <Title>
        <p>TODO LIST</p>
      </Title>
      <ToDoForm />
    </>
  ) : (
    <Navigate to="/" replace />
  );
};
export default TodoPage;
