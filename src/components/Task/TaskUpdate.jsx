import styled from "styled-components";

const UpdateBtnContainer = styled("section")`
  display: flex;
`;
const UpdateBtn = styled("button")`
  display: block;
  padding: 10px;
  border-radius: 5px;
  background-color: #21bf48;
  color: #ffffff;
`;

const CancelBtn = styled("button")`
  display: block;
  margin-left: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #c4c4c4;
  color: #ffffff;
`;
const TaskUpdate = ({ setMode }) => {
  const clickUpdate = () => {};
  const clickCancel = () => {
    setMode("");
  };
  return (
    <UpdateBtnContainer>
      <UpdateBtn onClick={clickUpdate}>제출</UpdateBtn>
      <CancelBtn onClick={clickCancel}>취소</CancelBtn>
    </UpdateBtnContainer>
  );
};
export default TaskUpdate;
