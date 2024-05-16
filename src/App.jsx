import React from "react";
import Header from "./components/header/Header";
import { useRoutes } from "react-router";
import routes from "./routes";


function App() {
  const router = useRoutes(routes)
  return (
    <div>
    <Header/>
    {router}
    </div>
  );
}

export default App;
