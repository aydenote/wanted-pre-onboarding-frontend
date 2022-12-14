import { useState } from "react";
import DeleteForm from "../Form/DeleteForm";
import UpdateForm from "../Form/UpdateForm";

const ChangeBtnMode = ({ taskData, setTaskData }) => {
  const [mode, setMode] = useState("");

  return mode ? <UpdateForm setMode={setMode} taskData={taskData} setTaskData={setTaskData} /> : <DeleteForm taskData={taskData} setTaskData={setTaskData} setMode={setMode} />;
};

export default ChangeBtnMode;
