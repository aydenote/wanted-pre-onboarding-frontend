import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
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
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          {/* <Route path="/join" element={<Join />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
