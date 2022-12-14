import TaskDelete from "../Task/TaskDelete";
import styled from "styled-components";

// 스타일 정의
const TaskUpdate = styled("button")`
  padding: 10px;
  border-radius: 5px;
  background-color: #ffefe8;
`;

const DeleteForm = ({ setMode, taskData, setTaskData }) => {
  // 수정 모드로 변경
  const clickUpdateMode = (event) => {
    const inputEl = document.createElement("input");
    const currentText = event.target.closest("li").childNodes[0];
    inputEl.value = currentText.innerText;
    currentText.replaceWith(inputEl);
    setMode("update");
  };

  // 마크업
  return (
    <>
      <TaskUpdate onClick={clickUpdateMode}>수정</TaskUpdate>
      <TaskDelete taskData={taskData} setTaskData={setTaskData} />
    </>
  );
};

export default DeleteForm;
