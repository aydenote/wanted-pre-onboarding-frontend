import axios from "axios";

export const createTodoAPI = (content) => {
  const token = localStorage.getItem("Token");
  return axios({
    url: "https://pre-onboarding-selection-task.shop/todos",
    method: "post",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: {
      todo: content,
    },
  });
};

export const getTodoAPI = () => {
  const token = localStorage.getItem("Token");
  return axios({
    url: "https://pre-onboarding-selection-task.shop/todos",
    method: "get",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateTodoAPI = (id, content, isComplete) => {
  const token = localStorage.getItem("Token");
  return axios({
    url: `https://pre-onboarding-selection-task.shop/todos/${id}`,
    method: "put",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: {
      todo: content,
      isCompleted: isComplete,
    },
  });
};

export const deleteTodoAPI = (id) => {
  const token = localStorage.getItem("Token");
  return axios({
    url: `https://pre-onboarding-selection-task.shop/todos/${id}`,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
