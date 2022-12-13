import { useState } from "react";
import TaskUpdateMode from "./TaskUpdateMode";
import TaskUpdate from "./TaskUpdate";
import styled from "styled-components";

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
`;

const TaskList = ({ taskData }) => {
  const [mode, setMode] = useState("");

  return (
    <>
      <TaskContainer>
        <ul>
          {taskData.map((item) => (
            <li key={item.id} data-id={item.id}>
              {item.todo}
              <div>{mode ? <TaskUpdate setMode={setMode} /> : <TaskUpdateMode setMode={setMode} />}</div>
            </li>
          ))}
        </ul>
      </TaskContainer>
    </>
  );
};
export default TaskList;
