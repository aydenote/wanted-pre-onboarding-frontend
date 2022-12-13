import { deleteTodoAPI } from "../../apis/Todo/TodoAPI";
import styled from "styled-components";

const DeleteBtn = styled("button")`
  margin-left: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #4dabf5;
  color: #ffffff;
`;

const TaskDelete = ({ taskData, setTaskData }) => {
  // Todo 삭제 API 요청
  const deleteTask = async (event) => {
    const id = event.target.closest("li").dataset.id;
    try {
      const res = await deleteTodoAPI(id);
      if (res.status === 204) {
        const newTask = taskData.filter((item) => item.id != id);
        setTaskData(newTask);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return <DeleteBtn onClick={deleteTask}>삭제</DeleteBtn>;
};
export default TaskDelete;
