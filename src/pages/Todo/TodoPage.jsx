import styled from "styled-components";
import ToDoForm from "../../components/Form/TodoForm";

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
  return (
    <>
      <Title>
        <p>TODO LIST</p>
      </Title>
      <ToDoForm />
    </>
  );
};
export default TodoPage;
