import axios from "axios";

export const createTodoAPI = (content) => {
  return axios({
    url: "https://pre-onboarding-selection-task.shop/todos",
    method: "post",
    headers: {
      Authorization: window.localStorage.getItem("Token"),
      "Content-Type": "application/json",
    },
    data: {
      todo: content,
    },
  });
};

export const getTodoAPI = (content) => {
  return axios({
    url: "https://pre-onboarding-selection-task.shop/todos",
    method: "get",
    headers: {
      Authorization: window.localStorage.getItem("Token"),
    },
  });
};

export const updateTodoAPI = (content) => {
  return axios({
    url: `https://pre-onboarding-selection-task.shop/todos/:${id}`,
    method: "put",
    headers: {
      Authorization: window.localStorage.getItem("Token"),
      "Content-Type": "application/json",
    },
    data: {
      todo: content,
      isCompleted: true, // boolean
    },
  });
};

export const deleteTodoAPI = (content) => {
  return axios({
    url: `https://pre-onboarding-selection-task.shop/todos/:${id}`,
    method: "DELETE",
    headers: {
      Authorization: window.localStorage.getItem("Token"),
    },
  });
};
