import { useLayoutEffect } from "react";
import { getTodoAPI } from "../../apis/Todo/TodoAPI";
import TaskList from "../Task/TaskList";
import TaskAddBtn from "../Task/TaskAddBtn";
import styled from "styled-components";

// 스타일 정의
const TodoContainer = styled("section")`
  max-width: 768px;
  margin: auto;
  padding: 30px;
  background-color: #f2f2f2;
`;

const Title = styled("h1")`
  margin: 16px 0;
  font-weight: 700;
  font-size: 28px;
`;

const TodoForm = () => {
  // const getTodoList = async () => {
  //   const res = await getTodoAPI();
  //   console.log(res);
  // };

  // useLayoutEffect(() => {
  //   getTodoList();
  // }, []);
  return (
    <TodoContainer>
      <Title>To Do : </Title>
      <TaskList />
      <TaskAddBtn />
    </TodoContainer>
  );
};
export default TodoForm;
