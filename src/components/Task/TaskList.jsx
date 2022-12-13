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

const TaskList = () => {
  return (
    <TaskContainer>
      <ul>
        <li>운동</li>
        <li>공부</li>
        <li>요리</li>
      </ul>
    </TaskContainer>
  );
};
export default TaskList;
