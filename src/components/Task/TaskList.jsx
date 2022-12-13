import { useState } from "react";
import styled from "styled-components";

// 스타일 정의
const TaskContainer = styled("section")`
  margin: auto;
  ul {
    max-width: 480px;
    margin: auto;
  }
  li {
    margin-top: 16px;
    padding: 20px;
    border-radius: 5px;
    font-size: 18px;
    line-height: 22px;
    background-color: #ffffff;
  }
`;

const TaskList = ({ taskData }) => {
  return (
    <>
      <TaskContainer>
        <ul>
          {taskData.map((item) => (
            <li key={item.id} data-id={item.id}>
              {item.todo}
            </li>
          ))}
        </ul>
      </TaskContainer>
    </>
  );
};
export default TaskList;
