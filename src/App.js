import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Main/Mainpage";
import TodoPage from "./pages/Todo/TodoPage";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  *{
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
  
  button{
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
  }
`;

const App = () => {
  const isToken = localStorage.getItem("Token");
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isToken ? <TodoPage /> : <Mainpage />}></Route>
          <Route path="/todo" element={<TodoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
