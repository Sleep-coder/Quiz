// App.js
import React from "react";
// App.jsx
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import DisplayQuestion from "./components/DisplayQuestion";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/displayquestion" component={DisplayQuestion} />
      </Switch>
    </Router>
  );
}

export default App;
