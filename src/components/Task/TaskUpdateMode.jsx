import TaskDelete from "./TaskDelete";
import styled from "styled-components";

const TaskUpdateModeBtn = styled("button")`
  padding: 10px;
  border-radius: 5px;
  background-color: #ffefe8;
`;

const TaskUpdateMode = ({ setMode, taskData, setTaskData }) => {
  const clickUpdateMode = () => {
    setMode("update");
  };
  return (
    <>
      <TaskUpdateModeBtn onClick={clickUpdateMode}>수정</TaskUpdateModeBtn>
      <TaskDelete taskData={taskData} setTaskData={setTaskData} />
    </>
  );
};

export default TaskUpdateMode;
