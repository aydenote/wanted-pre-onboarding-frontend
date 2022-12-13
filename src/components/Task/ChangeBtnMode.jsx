import { useState } from "react";
import DeleteForm from "../Form/DeleteForm";
import UpdateForm from "../Form/UpdateForm";
import styled from "styled-components";

const TaskUpdate = styled("button")`
  padding: 10px;
  border-radius: 5px;
  background-color: #ffefe8;
`;

const ChangeBtnMode = ({ taskData, setTaskData }) => {
  const [mode, setMode] = useState("");

  return mode ? <UpdateForm setMode={setMode} taskData={taskData} /> : <DeleteForm taskData={taskData} setTaskData={setTaskData} setMode={setMode} />;
};

export default ChangeBtnMode;
