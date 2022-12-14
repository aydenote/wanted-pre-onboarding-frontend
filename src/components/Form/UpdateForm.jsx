import { useState } from "react";
import { updateTodoAPI } from "../../apis/Todo/TodoAPI";
import CompleteBtn from "../Button/CompleteBtn";
import styled from "styled-components";

// 스타일 정의
const UpdateBtnContainer = styled("section")`
  display: flex;
`;

const UpdateBtn = styled("button")`
  display: block;
  margin-left: 10px;
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

const UpdateForm = ({ setMode, taskData }) => {
  const [complete, setComplete] = useState(false);
  // 내용 수정 요청
  const clickUpdate = async (event) => {
    const id = event.target.closest("li").dataset.id;
    const content = event.target.closest("li").childNodes[0].value;
    try {
      const res = await updateTodoAPI(id, content, complete);
      if (res.status === 200) {
        window.location.reload();
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

  // 마크업
  return (
    <UpdateBtnContainer>
      <CompleteBtn complete={complete} setComplete={setComplete} />
      <UpdateBtn onClick={clickUpdate}>제출</UpdateBtn>
      <CancelBtn onClick={clickCancel}>취소</CancelBtn>
    </UpdateBtnContainer>
  );
};
export default UpdateForm;
