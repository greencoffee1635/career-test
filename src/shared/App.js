import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "../pages/Main";
import Start from "../pages/Start";
import Test from "../pages/Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route exact path="/start" component={Start} />
        <Route exact path="/test" component={Test} />
      </BrowserRouter>
    </div>
  );
}

export default App;
