import styled from "styled-components";
import "./App.css";
import { Paper } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router";

const AppContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
