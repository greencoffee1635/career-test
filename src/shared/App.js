import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "../pages/Main";
import Sample from "../pages/Sample";
import Test from "../pages/Test";
import Result from "../pages/Result";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route exact path="/sample" component={Sample} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/result" component={Result} />
      </BrowserRouter>
    </div>
  );
}

export default App;
