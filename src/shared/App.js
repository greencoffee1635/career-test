import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home";
import Test from "../pages/Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Test} />
      </BrowserRouter>
    </div>
  );
}

export default App;
