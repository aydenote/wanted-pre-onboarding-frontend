import { createTodoAPI } from "../../apis/Todo/TodoAPI";
import styled from "styled-components";

// 스타일 정의
const TaskAddContainer = styled("section")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  p {
    font-size: 28px;
    font-weight: bolder;
  }
`;

const InputTask = styled("input")`
  margin: 0px 12px;
  padding: 12px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  background-color: #f26e22;
  color: #ffffff;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #ffffff;
  }
`;

const TaskAddBtnStyle = styled("button")`
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  background-color: #21bf48;
  color: #ffffff;
`;

const TaskAdd = ({ setTaskData, taskData }) => {
  // Todo 생성 API 요청
  const createTask = async (event) => {
    const task = document.querySelector("input").value;
    try {
      const res = await createTodoAPI(task);
      if (res.status === 200 || res.status === 201) {
        console.log(res.data);
        setTaskData([...taskData, res.data]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <TaskAddContainer>
      <p>Task</p>
      <InputTask type="text" placeholder="What do you need to do ?" maxLength="16" />
      <TaskAddBtnStyle onClick={createTask}>Add Task</TaskAddBtnStyle>
    </TaskAddContainer>
  );
};
export default TaskAdd;
