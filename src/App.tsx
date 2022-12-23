import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalRoutes } from "./Components/Routes";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalRoutes/>
      </div>
    </BrowserRouter>
  )
}

export default App;