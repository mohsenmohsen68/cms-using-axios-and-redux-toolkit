import React, { useState } from "react";
import Header from "./components/header/Header";
import { useRoutes } from "react-router";
import './App.css' 
import routes from "./routes";
import { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme
} from "./styles/Styles";
import SideBar from "./components/sideBar/SideBar";

function App() {
  const [projectTheme, SetProjectTheme] = useState(lightTheme);
  const router = useRoutes(routes);

  const changeThemeHandler = () => {
    console.log(projectTheme);
    if (projectTheme === lightTheme) {
      SetProjectTheme(darkTheme);
    } else {
      SetProjectTheme(lightTheme);
    }
  };
  return (
    <ThemeProvider theme={projectTheme}>
      <Header changeTheme={changeThemeHandler} theme={projectTheme} />
      <div className="container-fluid row mx-auto mt-2 ">
        <div className="col-3 shadow-sm py-1 " > <SideBar/> </div>
        <div className="col-9 shadow-sm py-1 " >{router}</div>
      </div>
    </ThemeProvider>
  );
}

export default App;
