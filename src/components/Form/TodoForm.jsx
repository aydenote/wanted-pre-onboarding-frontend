import { useLayoutEffect, useState } from "react";
import { getTodoAPI } from "../../apis/TodoAPI";
import TaskList from "../Task/TaskList";
import TaskAdd from "../Task/TaskAdd";
import styled from "styled-components";

// 스타일 정의
const TodoContainer = styled("section")`
  max-width: 768px;
  margin: 40px auto;
  padding: 30px;
  background-color: #f2f2f2;
`;

const Title = styled("h1")`
  margin: 16px 0;
  font-weight: 700;
  font-size: 28px;
`;

const TodoForm = () => {
  const [taskData, setTaskData] = useState([]);

  // 사용자 ToDoList API 요청
  const getTodoList = async () => {
    try {
      const res = await getTodoAPI();
      if (res.data.length >= 1) {
        setTaskData(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useLayoutEffect(() => {
    getTodoList();
  }, []);

  // 마크업
  return (
    <TodoContainer>
      <Title>To Do : </Title>
      {taskData ? <TaskList taskData={taskData} setTaskData={setTaskData} /> : null}
      <TaskAdd setTaskData={setTaskData} taskData={taskData} />
    </TodoContainer>
  );
};
export default TodoForm;
