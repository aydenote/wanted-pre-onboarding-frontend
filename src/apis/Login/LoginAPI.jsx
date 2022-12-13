import axios from "axios";

const LoginAPI = (userEmail, userPw) => {
  return axios({
    url: "https://pre-onboarding-selection-task.shop/auth/signup",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email: userEmail,
      password: userPw,
    },
  });
};

export default LoginAPI;
