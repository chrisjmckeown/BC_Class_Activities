import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavTabs />
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/discover' component={Discover} />
          <Route path='/search' component={Search} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
