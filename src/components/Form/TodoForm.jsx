import { useLayoutEffect, useState, useEffect } from "react";
import { getTodoAPI } from "../../apis/Todo/TodoAPI";
import TaskList from "../Task/TaskList";
import TaskAdd from "../Task/TaskAdd";
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
  const [taskData, setTaskData] = useState(false);

  // Todo 작업 수신 API 요청
  const getTodoList = async () => {
    const res = await getTodoAPI();
    if (res.data.length >= 1) {
      setTaskData(res.data);
    }
  };

  useLayoutEffect(() => {
    getTodoList();
  }, []);
  return (
    <TodoContainer>
      <Title>To Do : </Title>
      {taskData ? <TaskList taskData={taskData} /> : null}
      <TaskAdd setTaskData={setTaskData} taskData={taskData} />
    </TodoContainer>
  );
};
export default TodoForm;
