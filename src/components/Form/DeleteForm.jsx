import TaskDelete from "../Task/TaskDelete";
import styled from "styled-components";

const TaskUpdate = styled("button")`
  padding: 10px;
  border-radius: 5px;
  background-color: #ffefe8;
`;

const DeleteForm = ({ setMode, taskData, setTaskData }) => {
  const clickUpdateMode = (event) => {
    const inputEl = document.createElement("input");
    const currentText = event.target.closest("li").childNodes[0];
    inputEl.value = currentText.innerText;
    currentText.replaceWith(inputEl);
    setMode("update");
  };
  return (
    <>
      <TaskUpdate onClick={clickUpdateMode}>수정</TaskUpdate>
      <TaskDelete taskData={taskData} setTaskData={setTaskData} />
    </>
  );
};

export default DeleteForm;
