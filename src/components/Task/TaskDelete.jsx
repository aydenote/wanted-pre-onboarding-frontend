import { deleteTodoAPI } from "../../apis/Todo/TodoAPI";
import styled from "styled-components";

const DeleteBtn = styled("button")`
  margin-left: 10px;
  padding: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #ffffff;
`;

const TaskDelete = () => {
  // Todo 생성 API 요청
  const createTask = async (event) => {
    const id = document.querySelector("input").value;
    try {
      const res = await deleteTodoAPI(id);
    } catch (error) {
      console.error(error);
    }
  };
  return <DeleteBtn>삭제</DeleteBtn>;
};
export default TaskDelete;
