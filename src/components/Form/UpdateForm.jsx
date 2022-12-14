import styled from "styled-components";
import { updateTodoAPI } from "../../apis/Todo/TodoAPI";

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

const UpdateForm = ({ setMode, taskData, setTaskData }) => {
  // 내용 수정 요청
  const clickUpdate = async (event) => {
    const id = event.target.closest("li").dataset.id;
    const content = event.target.closest("li").childNodes[0].value;
    try {
      const res = await updateTodoAPI(id, content);
      if (res.status === 200) {
        const pEl = document.createElement("p");
        const currentText = event.target.closest("li").childNodes[0];
        const targetId = event.target.closest("li").dataset.id;
        const taskIndex = taskData.findIndex((item) => item.id == targetId);
        taskData[taskIndex].todo = currentText.value;
        pEl.innerText = taskData[taskIndex].todo;
        currentText.replaceWith(pEl);
        setTaskData(taskData);
        setMode("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 내용 수정 취소
  const clickCancel = (event) => {
    const pEl = document.createElement("p");
    const currentText = event.target.closest("li").childNodes[0];
    const key = event.target.closest("li").dataset.id;
    const taskIndex = taskData.findIndex((item) => item.id == key);

    pEl.innerText = taskData[taskIndex].todo;
    currentText.replaceWith(pEl);
    setMode("");
  };
  return (
    <UpdateBtnContainer>
      <UpdateBtn onClick={clickUpdate}>제출</UpdateBtn>
      <CancelBtn onClick={clickCancel}>취소</CancelBtn>
    </UpdateBtnContainer>
  );
};
export default UpdateForm;
