import ChangeBtnMode from "./ChangeBtnMode";
import styled from "styled-components";
import complete from "../../assets/icon-check-on.svg";
import incomplete from "../../assets/icon-check-off.svg";

// 스타일 정의
const TaskContainer = styled("section")`
  margin: auto;
  ul {
    max-width: 480px;
    margin: auto;
  }
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
  }

  div {
    display: flex;
  }

  img {
    margin-left: 5px;
  }

  input {
    border: none;
    border-bottom: 1px solid #c4c4c4;
  }
`;

const InputText = styled("p")`
  border: none;
  font-size: 18px;
  background-color: transparent;
`;

const TaskList = ({ taskData, setTaskData }) => {
  return (
    <>
      <TaskContainer>
        <ul>
          {taskData.map((item) => (
            <li key={item.id} data-id={item.id}>
              <InputText>{item.todo}</InputText>
              <div>
                {<ChangeBtnMode taskData={taskData} setTaskData={setTaskData} />}
                {item.isCompleted ? <img src={complete} alt="완료" /> : <img src={incomplete} alt="미완료" />}
              </div>
            </li>
          ))}
        </ul>
      </TaskContainer>
    </>
  );
};
export default TaskList;
