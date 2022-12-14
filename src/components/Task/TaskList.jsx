import ChangeBtnMode from "./ChangeBtnMode";
import styled from "styled-components";
import CompleteImg from "./CompleteImg";

// 스타일 정의
const TaskContainer = styled("ul")`
  margin: auto;
  max-width: 480px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    padding: 20px;
    border-radius: 5px;
    font-size: 18px;
    line-height: 22px;
    background-color: #ffffff;

    input {
      border: none;
      border-bottom: 1px solid #c4c4c4;
      outline: none;
      font-size: 18px;
    }
  }

  div {
    display: flex;
  }

  img {
    margin-left: 5px;
  }
`;

const InputText = styled("p")`
  border: none;
  font-size: 18px;
  background-color: transparent;
`;

const TaskList = ({ taskData, setTaskData }) => {
  // 마크업
  return (
    <TaskContainer>
      {taskData.map((item) => (
        <li key={item.id} data-id={item.id}>
          <InputText>{item.todo}</InputText>
          <div>
            <ChangeBtnMode taskData={taskData} setTaskData={setTaskData} />
            <CompleteImg itemCompleted={item.isCompleted} />
          </div>
        </li>
      ))}
    </TaskContainer>
  );
};
export default TaskList;
