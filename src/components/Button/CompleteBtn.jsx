import styled from "styled-components";

const CompleteStyle = styled("button")`
  display: block;
  padding: 10px;
  border-radius: 5px;
  background-color: #70bbf7;
  color: #ffffff;
`;

const CompleteBtn = ({ setComplete }) => {
  // Task 완료 여부 변경
  const clickComplete = (event) => {
    event.target.parentNode.nextSibling.alt === "미완료" ? setComplete(true) : setComplete(false);
  };

  return <CompleteStyle onClick={clickComplete}>완료</CompleteStyle>;
};

export default CompleteBtn;
